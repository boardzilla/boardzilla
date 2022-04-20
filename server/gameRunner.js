const { NodeVM } = require('vm2');
const EventEmitter = require('events');
const path = require('path');
const Sentry = require('@sentry/node');
const amqp = require('amqplib');
const db = require('./models');
const crypto = require('crypto')

class GameRunner {
  constructor(rabbitmqUrl, s3Provider) {
    this.rabbitmqUrl = rabbitmqUrl;
    this.s3Provider = s3Provider;
    this.conn = null;
    this.handles = new Set()
  }

  async createSessionRunner(userId, sessionId) {
    await this.setupConnection()

    let gameInstance;
    const handle = new EventEmitter();

    const handleError = async (e) => {
      if (e.message === 'No listener') {
        console.log('no listener, aborting');
        return handle.emit('error', e);
      }
      console.log('error in game runner loop', e);
      Sentry.withScope(scope => {
        scope.setTag('source', 'game-runner');
        scope.setExtra('session_id', sessionId);
        Sentry.captureException(e);
      });
      if (process.env.NODE_ENV !== 'development') {
        const session = await db.Session.findByPk(sessionId);
        session.update({ state: 'error' }).then(() => {
          handle.emit('error', e);
        });
      }
    };

    const actionConsumerTag = crypto.randomBytes(32).toString('hex');
    const eventConsumerTag = crypto.randomBytes(32).toString('hex');
    const sessionIdKey = String(sessionId);
    console.log(`CREATING RUNNER FOR SESSION ID ${sessionId} USER ID ${userId}`);
    const actionExchangeName = 'session-actions';
    const eventExchangeName = 'session-events';
    const eventFanoutExchangeName = `${eventExchangeName}-${sessionId}`;
    const actionQueueName = `${actionExchangeName}-${sessionId}-queue`;
    const eventChannel = await this.conn.createChannel();
    const actionsChannel = await this.conn.createChannel();
    const actionPublishChannel = await this.conn.createConfirmChannel();
    const eventPublishChannel = await this.conn.createConfirmChannel();

    // action stuff
    await actionsChannel.assertExchange(actionExchangeName, 'direct');
    await actionsChannel.assertQueue(actionQueueName, { arguments: { 'x-single-active-consumer': true } });
    await actionsChannel.bindQueue(actionQueueName, actionExchangeName, sessionIdKey);

    // event stuff
    await eventChannel.assertExchange(eventExchangeName, 'direct');
    await eventChannel.assertExchange(eventFanoutExchangeName, 'fanout');
    await eventChannel.bindExchange(eventFanoutExchangeName, eventExchangeName, sessionIdKey);
    const playerEventQueue = await eventChannel.assertQueue('', { exclusive: true });
    await eventChannel.bindQueue(playerEventQueue.queue, eventFanoutExchangeName, '');

    handle.stop = async () => {
      await actionsChannel.cancel(actionConsumerTag);
      await eventChannel.cancel(eventConsumerTag);
      if (gameInstance) {
        gameInstance.stopListening();
      }
      // ensure there will be a message for the next game runner to pick up
      await handle.publishAction({ type: 'noop' });
      await eventChannel.close();
      await actionsChannel.close();
      await actionPublishChannel.close();
      await eventPublishChannel.close();
      this.handles.delete(handle)
    };
    handle.listen = async (cb) => {
      await eventChannel.consume(playerEventQueue.queue, async (message) => {
        await cb(JSON.parse(message.content.toString()));
        await eventChannel.ack(message);
      }, { noAck: false, consumerTag: eventConsumerTag });
    };
    handle.publishAction = async (payload) => {
      await actionPublishChannel.publish(actionExchangeName, sessionIdKey, Buffer.from(JSON.stringify(payload)), { publishMode: 2 });
    };
    handle.publishEvent = async (payload) => {
      await eventPublishChannel.publish(eventExchangeName, sessionIdKey, Buffer.from(JSON.stringify(payload)), { publishMode: 2 });
    };

    const session = await db.Session.findByPk(sessionId);
    if (session.state === 'error') {
      console.log('attempted to run session in error state');
      await handle.publishEvent({ type: 'error' });
      return;
    }

    const vm = new NodeVM({
      console: 'inherit',
    });
    const gameVersion = await session.getGameVersion();
    const game = await gameVersion.getGame();
    const serverBuffer = await this.s3Provider.getObject({ Key: path.join(game.name, 'server', gameVersion.serverDigest, 'index.js') }).promise();
    const playerViews = {};
    const runner = async () => {
      let stopConsuming = false;
      const actionConsumer = await actionsChannel.consume(actionQueueName, async (message) => {
        try {
          if (!gameInstance) {
            console.log(process.pid, 'IS LOADING GAME', session.state);
            gameInstance = vm.run(serverBuffer.Body.toString());
            gameInstance.onUpdate(async ({ type, userId, payload }) => {
              console.log(`R ${process.pid} ${userId}: update ${type}`);
              if (type === 'state') {
                playerViews[userId] = payload;
              }
              await handle.publishEvent({ type, userId, payload });
            });

            gameInstance.onceReady(() => {
              console.log('R ready and running');
              session.update({ state: 'running' });

              gameInstance.onLogMessage(async (timestamp, sequence, message) => await handle.publishEvent({ type: 'log', payload: { timestamp, sequence, message } }));

              gameInstance.onCompleteAction((player, sequence, action) => {
                console.log('R completed-action', player, sequence, action);
                try {
                  session.createAction({ player, sequence, action });
                  console.log('R session update');
                } catch (e) {
                  console.error(sequence, e);
                }
              });
            });

            const sessionUsers = await session.getSessionUsers({ include: 'User' });
            const users = sessionUsers.map((su) => su.User);
            users.forEach((user) => gameInstance.addPlayer(user.id, user.name));

            let history;
            if (session.state === 'running') {
              history = (await session.getActions({ order: ['sequence'] })).map((action) => (
                [action.player, action.sequence, ...action.action]
              ));
              console.log('R restarting runner loop', history.length);
            }

            gameInstance.seed(session.seed);
            await gameInstance.start(history);
          }
          const parsedMessage = JSON.parse(message.content.toString());
          console.log(`R ${process.pid} processGameEvent`, parsedMessage.type, parsedMessage.payload && parsedMessage.payload.userId);
          switch (parsedMessage.type) {
            case 'noop':
              break;
            case 'start':
              gameInstance.playerStart();
              break;
            case 'action':
              gameInstance.receiveAction(parsedMessage.payload.userId, parsedMessage.payload.sequence, ...parsedMessage.payload.action);
              break;
            case 'refresh':
              await handle.publishEvent({
                type: 'state',
                userId: parsedMessage.payload.userId,
                payload: playerViews[parsedMessage.payload.userId],
              });
              break;
            case 'update':
              gameInstance.updateUser(parsedMessage.payload.userId);
              break;
            case 'addPlayer':
              gameInstance.addPlayer(parsedMessage.payload.userId, parsedMessage.payload.username);
              gameInstance.updatePlayers();
              break;
            case 'reset':
              await actionsChannel.purgeQueue(actionQueueName);
              await db.SessionAction.destroy({ where: { sessionId } });
              await session.update({ seed: String(Math.random()) });
              stopConsuming = true;
              break;
            case 'undo':
              await actionsChannel.purgeQueue(actionQueueName);
              {
                const lastAction = await session.getActions({ order: [['sequence', 'DESC']], limit: 1 });
                console.log('lastAction', lastAction[0] && lastAction[0].id);
                if (lastAction[0]) {
                  await db.SessionAction.destroy({ where: { id: lastAction[0].id } });
                }
              }
              stopConsuming = true;
              break;
            default:
              throw Error('unknown command', parsedMessage);
          }
          await actionsChannel.ack(message);
          if (stopConsuming) {
            await actionsChannel.cancel(actionConsumerTag);
            handle.emit('finished');
          }
        } catch (e) {
          await handleError(e);
        }
      }, { noAck: false, consumerTag: actionConsumerTag });
    };

    runner().catch(e => {
      handleError(e);
    });
    await handle.publishAction({ type: 'refresh', payload: { userId } });
    this.handles.add(handle);
    return handle;
  }

  async setupConnection() {
    if (this.conn !== null) return
    this.conn = await amqp.connect(this.rabbitmqUrl);
    this.conn.on('error', (e) => {
      for (const h of this.handles) {
        h.emit('error', e)
      }
    });
    this.conn.on('close', (e) => {
      for (const h of this.handles) {
        h.emit('finished')
      }
    });
  }
}

module.exports = GameRunner;
