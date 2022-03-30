const { NodeVM } = require('vm2')
const GameInterface = require('./game/interface')
const db = require('./models')
const { Client } = require('pg')
const EventEmitter = require('events')
const GAME_SESSION_NS = 4901
const Redis = require("ioredis")

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
    let queueClient
    let running = true
    const handle = new EventEmitter()
    handle.stop = async() => {
      console.log("stopping session runner")
      running = false
      try {
        if (!queueClient) return
        await queueClient.disconnect()
      } catch (e) {
        console.error("error stopping queue client")
      }
    }
    (async () => {
      const lockClient = process.env.NODE_ENV === 'production' ? new Client({connectionString: this.postgresUrl, connectionTimeoutMillis: 3000, ssl: {require: true, rejectUnauthorized: false}}) : new Client(this.postgresUrl)
      try {
        console.log("R waiting for lock")
        await lockClient.connect()
        await lockClient.query("select pg_advisory_lock($1, $2)", [GAME_SESSION_NS, sessionId])

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

            const userIds = await session.getSessionUsers().map(u => u.userId)
            userIds.forEach(userId => gameInstance.addPlayer(userId))

            const history = (await session.getActions({order: ['sequence']})).map(action => (
              [action.player, action.sequence, ...action.action]
            ))
            console.log(`R restarting runner loop ${userIds}`)

            gameInstance.start(history).then(() => {
              // TODO handle this promise resolution (end of game)
            }).catch(e => {
              console.error('ERROR DURING PLAY', e)
              // TODO not enough players but this should be an explicit start command
            })

            await new Promise((resolve, reject) => {
              if (gameInstance.phase === 'ready') return resolve()
              gameInstance.once('ready', resolve)
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
                case 'reset':
                  await queueClient.del(this.sessionEventKey(sessionId))
                  await db.SessionAction.destroy({
                    where: {
                      sessionId
                    }
                  })
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
      } finally {
        try {
          console.log("unlocking")
          await lockClient.query("select pg_advisory_unlock($1, $2)", [GAME_SESSION_NS, sessionId])
          console.log("done unlocking")
        } catch (e) {
          console.error("error unlocking", e)
        }
        try {
          console.log("ending pg lock conn")
          await lockClient.end()
          console.log("done ending pg lock conn")
        } catch (e) {
          console.error("error ending lock client", e)
        }
        try {
          console.log("disconnecting queue client")
          queueClient.disconnect()
          console.log("done disconnecting queue client")
        } catch (e) {
          console.error("error ending queue client", e)
        }
      }
    })().catch(e => handle.emit('error', e))
    return handle
  }
}

module.exports = GameRunner
