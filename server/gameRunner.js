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
      if (e.message === 'No listener') {
        console.log('no listener, aborting');
        handle.emit('error', e);
      } else {
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
      if (gameInstance) {
        gameInstance.stopListening();
      }
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
      await actionsChannel.consume(actionQueueName, async (message) => {
        try {
          // const messages = [];
          const publishPlayerViews = () => {
            console.log('publishPlayerViews');
            Object.entries(gameInstance.getPlayerViews()).forEach(([userId, view]) => {
              console.log(userId, view.phase);
              handle.publishEvent({ type: 'state', userId: parseInt(userId, 10), payload: view });
            });
          };
          if (!gameInstance) {
            console.log(process.pid, 'IS LOADING GAME', session.state);
            gameInstance = vm.run(serverBuffer.Body.toString());
          // gameInstance.onUpdate(async ({ type, userId, payload }) => {
          //   console.log(`R ${process.pid} ${userId}: update ${type}`);
            //   if (type === 'state') {
            //     playerViews[userId] = payload;
            //   }
            //   await handle.publishEvent({ type, userId, payload });
            // });

            // this isn't needed anymore
            // gameInstance.onceReady(() => {
            //   console.log('R ready and running');
            //   session.update({ state: 'running' });

            //   gameInstance.onLogMessage(async (timestamp, sequence, message) => await handle.publishEvent({ type: 'log', payload: { timestamp, sequence, message } }));

            //   gameInstance.onCompleteAction((player, sequence, action) => {
            //     console.log('R completed-action', player, sequence, action);
            //     try {
            //       session.createAction({ player, sequence, action });
            //       console.log('R session update');
            //     } catch (e) {
            //       console.error(sequence, e);
            //     }
            //   });
            // });

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

            try {
              gameInstance.seed(session.seed);
              gameInstance.start(history).then(() => {
                // end Game
              });
            } catch (e) {
              console.error('R error in game play', e);
            }
            // gameInstance.getPlayerViews().forEach(playerView => { playerViews[view.userId] = playerView });
            publishPlayerViews();
          }
          let out = null;
          let updateNeeded = false;
          let action;
          const parsedMessage = JSON.parse(message.content.toString());
          console.log(`R ${process.pid} processGameEvent`, parsedMessage.type, parsedMessage.payload && parsedMessage.payload.userId);
          switch (parsedMessage.type) {
            case 'noop':
              break;
            case 'start':
              await gameInstance.playerStart();
              session.update({ state: 'running' });
              updateNeeded = true;
              break;
            case 'action':
              {
                const response = await gameInstance.processAction(
                  gameInstance.playerByUserId(parsedMessage.payload.userId),
                  parsedMessage.payload.sequence,
                  ...parsedMessage.payload.action,
                );
                console.log(`R action succeeded u${parsedMessage.payload.userId} #${parsedMessage.payload.sequence} ${parsedMessage.payload.action}`);
                switch (response.type) {
                  case 'ok':
                    action = await session.createAction({
                      player: response.player,
                      sequence: response.sequence,
                      action: response.action,
                      messages: response.messages,
                    });
                    updateNeeded = true;
                    break;
                  case 'incomplete':
                  case 'error':
                    out = response;
                    break;
                  default:
                    throw new Error(`unrecognized response ${JSON.stringify(response)}`);
                }
              }
              break;
            case 'refresh':
              /* await handle.publishEvent({
               *   type: 'state',
               *   userId: parsedMessage.payload.userId,
               *   payload: playerViews[parsedMessage.payload.userId],
               * }); */
              updateNeeded = true;
              break;
            case 'addPlayer':
              gameInstance.addPlayer(parsedMessage.payload.userId, parsedMessage.payload.username);
              updateNeeded = true;
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
          console.log('R publish action?', message.properties.correlationId);
          if (message.properties.correlationId) {
            await actionsChannel.publish('', message.properties.replyTo, Buffer.from(JSON.stringify(out)), {
              correlationId: message.properties.correlationId,
            });
          }
          console.log('R publish ack');
          await actionsChannel.ack(message);

          if (updateNeeded) publishPlayerViews();
          if (action && action.message) {
            Object.keys(action.messages).forEach(userId => {
              console.log('R publish log', userId);
              const logMessage = action.messages[userId];
              handle.publishEvent({
                type: 'log',
                payload: {
                  userId: parseInt(userId, 10),
                  timestamp: action.createdAt.getTime(),
                  sequence: action.sequence,
                  message: logMessage,
                },
              });
            });
          }

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
    handle.publishAction({ type: 'refresh' });
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
