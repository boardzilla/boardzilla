const zkLock = require('zk-lock')
const simple = require('locators').simple
const { NodeVM } = require('vm2')
const GameInterface = require('./game/interface')
const db = require('./models')
const EventEmitter = require('events')
const GAME_SESSION_NS = 4901
const Redis = require("ioredis")
const { Sequelize } = require('sequelize')

class GameRunner {
  constructor(postgresUrl, redisUrl, localDevGame) {
    this.postgresUrl = postgresUrl
    this.redisUrl = redisUrl
    this.localDevGame = localDevGame
    this.redisClient = new Redis(redisUrl)
  }

  sessionEventKey(sessionId) {
    return `session-events-${sessionId}`
  }

  createSessionRunner(sessionId) {
    const serverLocator = simple()(process.env.ZK_CONNECTION_STRING)
    const lock = new zkLock.ZookeeperLock({
      serverLocator,
      pathPrefix: 'game-runner-',
      sessionTimeout: 10000
    })

    let queueClient
    let running = true
    let locked = false

    const cleanup = async () => {
      try {
        console.log("ending pg lock conn")
        await lock.unlock()
        console.log("done ending pg lock conn")
      } catch (e) {
        console.error("error ending lock client", e)
      }
      if (queueClient) {
        try {
          console.log("disconnecting queue client")
          queueClient.disconnect()
          console.log("done disconnecting queue client")
        } catch (e) {
          console.error("error ending queue client", e)
        }
      }
    }

    lock.on('lost', cleanup)

    const handle = new EventEmitter()
    handle.stop = async() => {
      console.log("stopping session runner")
      running = false
      await cleanup()
    }
    (async () => {
      try {
        await lock.lock(`${sessionId}`)

        locked = true

        queueClient = this.redisClient.duplicate()

        while(running) {
          try {
            console.log(process.pid, "HAS LOCK")
            const session = await db.Session.findByPk(sessionId)
            const game = session.gameId === -1 ? this.localDevGame : await session.getGame()
            const gameInstance = new GameInterface(session.seed)
            const playerViews = {}
            const vm = new NodeVM({
              console: 'inherit',
              sandbox: {game: gameInstance},
              require: {
                external: true,
              },
            })

            gameInstance.on('update', async ({type, userId, payload}) => {
              console.log(`R ${process.pid} ${userId}: update ${type}`)
              if (type == 'state') {
                playerViews[userId] = payload
              }
              await publish({type, userId, payload})
            })

            gameInstance.registerAction = async (player, sequence, action) => {
              try {
                await session.createAction({player, sequence, action})
              } catch(e) {
                console.error(e)
              }
            }

            const publish = async message => {
              await this.redisClient.publish(
                this.sessionEventKey(sessionId),
                JSON.stringify(message)
              )
            }

            const serverBuffer = game.file("/server.js")
            vm.run(serverBuffer.toString())

            const users = await session.getSessionUsers().map(su => su.getUser())
            users.forEach(user => gameInstance.addPlayer(user.id, user.name))

            const history = (await session.getActions({order: ['sequence']})).map(action => (
              [action.player, action.sequence, ...action.action]
            ))
            console.log(`R restarting runner loop`)

            gameInstance.start(history).then(() => {
              // TODO handle this promise resolution (end of game)
            }).catch(e => {
              console.error('ERROR DURING PLAY', e)
              // TODO not enough players but this should be an explicit start command
            })

            const gameAction = (userId, sequence, action, ...args) => {
              gameInstance.receiveAction(userId, sequence, action, ...args)
            }

            const processGameEvent = async (message) => {
              console.log(`R ${process.pid} processGameEvent`, message.type, message.payload.userId)
              switch(message.type) {
                case 'action': 
                  gameAction(message.payload.userId, message.payload.sequence, ...message.payload.action)
                  return false
                case 'refresh':
                  await publish({
                    type: 'state',
                    userId: message.payload.userId,
                    payload: playerViews[message.payload.userId]
                  })
                  return false
                case 'update':
                  gameInstance.updateUser(message.payload.userId)
                  return false
                case 'addPlayer':
                  gameInstance.addPlayer(message.payload.userId, message.payload.username)
                  gameInstance.updatePlayers()
                  return false
                case 'reset':
                  await queueClient.del(this.sessionEventKey(sessionId))
                  await db.SessionAction.destroy({
                    where: {
                      sessionId,
                      sequence: {[Sequelize.Op.ne]: 0},
                    }
                  })
                  await session.update({seed: String(Math.random())})
                  return true
                case 'undo':
                  await queueClient.del(this.sessionEventKey(sessionId))
                  const lastAction = await session.getActions({order: [['sequence', 'DESC']], limit: 1})
                  await db.SessionAction.destroy({
                    where: {
                      id: lastAction[0].id
                    }
                  })
                  return true
                default:
                  throw Error(`unknown command ${message}`)
              }
            }

            let restarting = false
            while (running && !restarting) {
              const data = await queueClient.blpop(this.sessionEventKey(sessionId), 0)
              if (data[1]) {
                restarting = await processGameEvent(JSON.parse(data[1]))
              } else {
                console.log("no game data to process")
              }
            }
          } catch (e) {
            console.error(`${process.pid} ERROR IN GAME RUNNER LOOP`, e)
          }
          console.log("R ending game loop")
        }
        await queueClient.quit()
      } catch(e) {
        console.log("error in game runner loop", e)
      } finally {
        await cleanup()
      }
    })().catch(e => handle.emit('error', e))
    return handle
  }
}

module.exports = GameRunner
