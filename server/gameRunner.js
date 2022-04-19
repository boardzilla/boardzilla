const zkLock = require('zk-lock');
const { simple } = require('locators');
const { NodeVM } = require('vm2');
const EventEmitter = require('events');
const Redis = require('ioredis');
const path = require('path');
const Sentry = require('@sentry/node');
const db = require('./models');

class GameRunner {
  constructor(redisUrl, s3Provider, zkConnectionString) {
    this.redisUrl = redisUrl;
    this.s3Provider = s3Provider;
    this.redisClient = new Redis(redisUrl);
    this.zkConnectionString = zkConnectionString;
  }

  createSessionRunner(sessionId) {
    console.log('CREATING RUNNER FOR SESSION ID', sessionId);
    const sessionEventKey = `session-events-${sessionId}`;
    const serverLocator = simple()(this.zkConnectionString);
    const lock = new zkLock.ZookeeperLock({
      serverLocator,
      pathPrefix: 'game-runner-',
      sessionTimeout: 10000,
    });

    let queueClient;
    let running = true;

    const cleanup = async () => {
      try {
        console.log('ending zk lock conn');
        await lock.unlock();
        console.log('done ending zk lock conn');
      } catch (e) {
        console.error('error ending lock client', e);
      }
      if (queueClient) {
        try {
          console.log('disconnecting queue client');
          queueClient.disconnect();
          console.log('done disconnecting queue client');
        } catch (e) {
          console.error('error ending queue client', e);
        }
      }
    };

    const publish = async (message) => {
      await this.redisClient.publish(
        sessionEventKey,
        JSON.stringify(message),
      );
    };

    const handle = new EventEmitter();
    handle.stop = async () => {
      console.log('stopping session runner');
      running = false;
      await cleanup();
    };
    console.log('R waiting for lock...');
    (async () => {
      const session = await db.Session.findByPk(sessionId);
      try {
        await lock.lock(`${sessionId}`);
        if (session.state === 'error') {
          console.log('attempted to run session in error state');
          await publish({ type: 'error' });
          return;
        }
        queueClient = this.redisClient.duplicate();
        console.log(process.pid, 'HAS LOCK', session.state);
        const vm = new NodeVM({
          console: 'inherit',
        });
        const gameVersion = await session.getGameVersion();
        const game = await gameVersion.getGame();
        const serverBuffer = await this.s3Provider.getObject({ Key: path.join(game.name, 'server', gameVersion.serverDigest, 'index.js') }).promise();
        const gameInstance = vm.run(serverBuffer.Body.toString());
        while (running) {
          try {
            const playerViews = {};
            gameInstance.onUpdate(({ type, userId, payload }) => {
              console.log(`R ${process.pid} ${userId}: update ${type}`);
              if (type === 'state') {
                playerViews[userId] = payload;
              }
              publish({ type, userId, payload });
            });

            gameInstance.onceReady(() => {
              console.log('R ready and running');
              session.update({ state: 'running' });

              gameInstance.onLogMessage((timestamp, sequence, message) => publish({ type: 'log', payload: { timestamp, sequence, message } }));

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
            gameInstance.start(history).then(() => {
              // TODO handle this promise resolution (end of game)
            }).catch((e) => {
              console.error('ERROR DURING PLAY', e);
              // TODO not enough players but this should be an explicit start command
            });

            const processGameEvent = async (message) => {
              console.log(`R ${process.pid} processGameEvent`, message.type, message.payload.userId);
              switch (message.type) {
                case 'start':
                  gameInstance.playerStart();
                  return false;
                case 'action':
                  gameInstance.receiveAction(message.payload.userId, message.payload.sequence, ...message.payload.action);
                  return false;
                case 'refresh':
                  await publish({
                    type: 'state',
                    userId: message.payload.userId,
                    payload: playerViews[message.payload.userId],
                  });
                  return false;
                case 'update':
                  gameInstance.updateUser(message.payload.userId);
                  return false;
                case 'addPlayer':
                  gameInstance.addPlayer(message.payload.userId, message.payload.username);
                  gameInstance.updatePlayers();
                  return false;
                case 'reset':
                  await queueClient.del(sessionEventKey);
                  await db.SessionAction.destroy({ where: { sessionId } });
                  await session.update({ seed: String(Math.random()) });
                  return true;
                case 'undo':
                  await queueClient.del(sessionEventKey);
                  {
                    const lastAction = await session.getActions({ order: [['sequence', 'DESC']], limit: 1 });
                    console.log('lastAction', lastAction[0] && lastAction[0].id);
                    if (lastAction[0]) {
                      await db.SessionAction.destroy({ where: { id: lastAction[0].id } });
                    }
                  }
                  return true;
                default:
                  throw Error(`unknown command ${message}`);
              }
            };

            let restarting = false;
            while (running && !restarting) {
              const data = await queueClient.blpop(sessionEventKey, 0);
              if (data[1]) {
                restarting = await processGameEvent(JSON.parse(data[1]));
              } else {
                console.log('no game data to process');
              }
            }
          } catch (e) {
            if (e.message !== 'Connection is closed.') {
              console.error(`${process.pid} ERROR IN GAME RUNNER LOOP`, e);
              throw e;
            }
          } finally {
            gameInstance.stopListening();
          }
        }
        console.log('R ending game loop');
      } catch (e) {
        console.log('error in game runner loop', e);
        Sentry.withScope(scope => {
          scope.setTag('source', 'game-runner');
          scope.setExtra('session_id', sessionId);
          Sentry.captureException(e);
        });
        if (process.env.NODE_ENV !== 'development') {
          await session.update({ state: 'error' });
        }
        throw e;
      } finally {
        await cleanup();
        console.log('exiting...');
      }
    })().catch((e) => handle.emit('error', e));
    return handle;
  }
}

module.exports = GameRunner;
