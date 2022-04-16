const zkLock = require('zk-lock');
const { simple } = require('locators');
const { NodeVM } = require('vm2');
const EventEmitter = require('events');
const Redis = require('ioredis');
const path = require('path');
const { Sequelize } = require('sequelize');
const db = require('./models');

class GameRunner {
  constructor(redisUrl, s3Provider, zkConnectionString) {
    this.redisUrl = redisUrl;
    this.s3Provider = s3Provider;
    this.zkConnectionString = zkConnectionString;
    this.redisClient = new Redis(redisUrl);
  }

  createSessionRunner(sessionId) {
    const serverLocator = simple()(this.zkConnectionString);
    const sessionEventKey = `session-events-${sessionId}`;

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

    lock.on('lost', cleanup);

    const handle = new EventEmitter();
    handle.stop = async () => {
      console.log('stopping session runner');
      running = false;
      await cleanup();
    };
    (async () => {
      try {
        await lock.lock(`${sessionId}`);

        queueClient = this.redisClient.duplicate();
        console.log(process.pid, 'HAS LOCK');
        const vm = new NodeVM({
          console: 'inherit',
        });
        const session = await db.Session.findByPk(sessionId);
        const gameVersion = await session.getGameVersion();
        const game = await gameVersion.getGame();
        const serverBuffer = await this.s3Provider.getObject({ Key: path.join(game.name, 'server', gameVersion.serverDigest, 'index.js') }).promise();
        const gameClass = vm.run(serverBuffer.Body.toString());
        const gameInstance = new gameClass(session.seed);

        while (running) {
          try {
            const playerViews = {};
            gameInstance.on('update', async ({ type, userId, payload }) => {
              console.log(`R ${process.pid} ${userId}: update ${type}`);
              if (type == 'state') {
                playerViews[userId] = payload;
              }
              await publish({ type, userId, payload });
            });

            gameInstance.on('log', message => publish({ type: 'log', payload: message }));

            gameInstance.registerAction = async (player, action) => {
              try {
                await session.createAction({ player, sequence: gameInstance.sequence, action });
              } catch (e) {
                console.error(gameInstance.sequence, e);
              }
            };

            const publish = async (message) => {
              await this.redisClient.publish(
                sessionEventKey,
                JSON.stringify(message),
              );
            };

            const sessionUsers = await session.getSessionUsers({ include: 'User' });
            const users = sessionUsers.map((su) => su.User);
            users.forEach((user) => gameInstance.addPlayer(user.id, user.name));

            const history = (await session.getActions({ order: ['sequence'] })).map((action) => (
              [action.player, action.sequence, ...action.action]
            ));
            console.log('R restarting runner loop');

            gameInstance.start(history).then(() => {
              // TODO handle this promise resolution (end of game)
            }).catch((e) => {
              console.error('ERROR DURING PLAY', e);
              // TODO not enough players but this should be an explicit start command
            });

            const gameAction = (userId, sequence, action, ...args) => {
              gameInstance.receiveAction(userId, sequence, action, ...args);
            };

            const processGameEvent = async (message) => {
              console.log(`R ${process.pid} processGameEvent`, message.type, message.payload.userId);
              let lastAction;
              switch (message.type) {
                case 'action':
                  gameAction(message.payload.userId, message.payload.sequence, ...message.payload.action);
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
                  await db.SessionAction.destroy({
                    where: {
                      sessionId,
                      sequence: { [Sequelize.Op.ne]: 0 },
                    },
                  });
                  await session.update({ seed: String(Math.random()) });
                  return true;
                case 'undo':
                  await queueClient.del(sessionEventKey);
                  lastAction = await session.getActions({ order: [['sequence', 'DESC']], limit: 1 });
                  await db.SessionAction.destroy({
                    where: {
                      id: lastAction[0].id,
                    },
                  });
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
            console.error(`${process.pid} ERROR IN GAME RUNNER LOOP`, e);
          }
          console.log('R ending game loop');
        }
        await queueClient.quit();
      } catch (e) {
        console.log('error in game runner loop', e);
      } finally {
        await cleanup();
      }
    })().catch((e) => handle.emit('error', e));
    return handle;
  }
}

module.exports = GameRunner;
