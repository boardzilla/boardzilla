const { NodeVM } = require('vm2');
const EventEmitter = require('events');
const path = require('path');
const Sentry = require('@sentry/node');
const amqp = require('amqplib');
const crypto = require('crypto');
const db = require('./models');

class GameRunner {
  constructor(rabbitmqUrl, s3Provider) {
    this.rabbitmqUrl = rabbitmqUrl;
    this.s3Provider = s3Provider;
    this.conn = null;
    this.handles = new Set();
  }

  async createSessionRunner(sessionId) {
    await this.setupConnection();

    let gameInstance;
    const handle = new EventEmitter();
    const responsePromises = {};

    const handleError = async e => {
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
    console.log(`CREATING RUNNER FOR SESSION ID ${sessionId}`);
    const actionExchangeName = 'session-actions';
    const eventExchangeName = 'session-events';
    const eventFanoutExchangeName = `${eventExchangeName}-${sessionId}`;
    const actionQueueName = `${actionExchangeName}-${sessionId}-queue`;
    const eventChannel = await this.conn.createChannel();
    const actionsChannel = await this.conn.createChannel();
    actionsChannel.prefetch(1);
    const responseChannel = await this.conn.createChannel();
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

    // response stuff
    const responseQueue = await responseChannel.assertQueue('', { exclusive: true });

    handle.stop = async () => {
      await actionsChannel.cancel(actionConsumerTag);
      await eventChannel.cancel(eventConsumerTag);
      // ensure there will be a message for the next game runner to pick up
      handle.publishAction({ type: 'noop' });
      await eventChannel.close();
      await actionsChannel.close();
      await responseChannel.close();
      await actionPublishChannel.close();
      await eventPublishChannel.close();
      this.handles.delete(handle);
    };
    handle.listen = async (cb) => {
      await eventChannel.consume(playerEventQueue.queue, async (message) => {
        await cb(JSON.parse(message.content.toString()));
        await eventChannel.ack(message);
      }, { noAck: false, consumerTag: eventConsumerTag });
    };
    handle.publishAction = async (payload) => {
      const correlationId = crypto.randomBytes(16).toString('hex');
      const p = new Promise((resolve, reject) => {
        responsePromises[correlationId] = { resolve, reject };
      });
      await actionPublishChannel.publish(actionExchangeName, sessionIdKey, Buffer.from(JSON.stringify(payload)), {
        publishMode: 2,
        correlationId,
        replyTo: responseQueue.queue,
      });
      return p;
    };
    handle.publishEvent = async (payload) => {
      await eventPublishChannel.publish(eventExchangeName, sessionIdKey, Buffer.from(JSON.stringify(payload)), {
        publishMode: 2,
      });
    };

    responseChannel.consume(responseQueue.queue, async (message) => {
      try {
        const parsed = JSON.parse(message.content.toString());
        responsePromises[message.properties.correlationId].resolve(parsed);
        delete responsePromises[message.properties.correlationId];
      } catch (e) {
        handle.emit('error', e);
      }
    }, { noAck: true });

    const session = await db.Session.findByPk(sessionId);
    if (session.state === 'error') {
      console.log('attempted to run session in error state');
      await handle.publishEvent({ type: 'error' });
      return null;
    }

    const vm = new NodeVM({
      console: 'inherit',
    });
    const gameVersion = await session.getGameVersion();
    const game = await gameVersion.getGame();
    const serverBuffer = await this.s3Provider.getObject({ Key: path.join(game.name, 'server', gameVersion.serverDigest, 'index.js') }).promise();
    const runner = async () => {
      let stopConsuming = false;
      await actionsChannel.consume(actionQueueName, async message => {
        try {
          const publishPlayerViews = async () => {
            await Promise.all(Object.entries(gameInstance.getPlayerViews()).map(([userId, view]) => (
              handle.publishEvent({ type: 'state', userId: parseInt(userId, 10), payload: view })
            )));
          };

          const publishLogs = (actions, userIds) => {
            if (!userIds) userIds = gameInstance.players.map(p => p[0]);
            actions.filter(m => m.messages).forEach(({ messages, sequence }) => {
              userIds.forEach(userId => {
                handle.publishEvent({
                  type: 'log',
                  userId,
                  payload: { sequence, message: typeof messages === 'string' ? messages : messages[userId] },
                });
              });
            });
          };

          if (!gameInstance) {
            console.log(process.pid, 'IS LOADING GAME', session.state);
            gameInstance = vm.run(serverBuffer.Body.toString());
            gameInstance.initialize(session.seed);
            await session.reload();
            const sessionUsers = await session.getSessionUsers({ include: 'User' });
            const users = sessionUsers.map(su => su.User);
            users.forEach(user => gameInstance.addPlayer(user.id, user.name));
            gameInstance.startProcessing().then(() => console.log('game is finished!'));

            if (session.state === 'running') {
              const actions = await session.getActions({ order: ['sequence'] });
              console.log('R restarting runner and replaying history items', actions.length);
              await gameInstance.processHistory(actions.map(a => [a.player, a.sequence, ...a.action]));
            }
          }
          let out = null;
          const parsedMessage = JSON.parse(message.content.toString());
          console.log(`R ${process.pid} processGameEvent`, parsedMessage.type, parsedMessage.payload && parsedMessage.payload.userId);
          switch (parsedMessage.type) {
            case 'noop':
              break;
            case 'start':
              await gameInstance.processPlayerStart();
              await session.update({ state: 'running' });
              await publishPlayerViews();
              break;
            case 'action':
              {
                const response = await gameInstance.processAction(
                  gameInstance.playerByUserId(parsedMessage.payload.userId),
                  parsedMessage.payload.sequence,
                  ...parsedMessage.payload.action,
                );
                console.log(`R action succeeded u${parsedMessage.payload.userId} #${parsedMessage.payload.sequence} ${parsedMessage.payload.action} ${response.type}`);
                switch (response.type) {
                  case 'ok':
                    await session.createAction({
                      player: response.player,
                      sequence: response.sequence,
                      action: response.action,
                      messages: response.messages,
                    });
                    await publishPlayerViews();
                    publishLogs([response]);
                    out = { type: 'ok' };
                    break;
                  case 'incomplete':
                  case 'error':
                    out = response.message;
                    break;
                  default:
                    throw new Error(`unrecognized response ${JSON.stringify(response)}`);
                }
              }
              break;
            case 'refresh':
              publishLogs(await session.getActions(), [parsedMessage.payload.userId]);
              await publishPlayerViews();
              break;
            case 'refreshAll':
              publishLogs(await session.getActions());
              await publishPlayerViews();
              break;
            case 'addPlayer':
              gameInstance.addPlayer(parsedMessage.payload.userId, parsedMessage.payload.username);
              await publishPlayerViews();
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
                if (lastAction[0]) {
                  await db.SessionAction.destroy({ where: { id: lastAction[0].id } });
                }
              }
              stopConsuming = true;
              break;
            default:
              throw Error('unknown command', parsedMessage);
          }
          if (message.properties.correlationId) {
            await actionsChannel.publish('', message.properties.replyTo, Buffer.from(JSON.stringify(out || null)), {
              correlationId: message.properties.correlationId,
            });
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

    runner().catch(handleError);
    this.handles.add(handle);
    handle.publishAction({ type: 'refreshAll' });
    return handle;
  }

  async setupConnection() {
    if (this.conn !== null) return;
    this.conn = await amqp.connect(this.rabbitmqUrl);
    this.conn.on('error', (e) => {
      for (const h of this.handles) {
        h.emit('error', e);
      }
    });
    this.conn.on('close', (e) => {
      for (const h of this.handles) {
        h.emit('finished');
      }
    });
  }
}

module.exports = GameRunner;
