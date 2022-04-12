const EventEmitter = require('events').EventEmitter
const db = require('./models')
const createServer = require('./server')
const AWSMock = require('mock-aws-s3')
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const bcrypt = require('bcrypt')

const allPlayerInfo = [
    {name: "alpha", password: bcrypt.hashSync("alpha", 10), email: "alpha@alpha.com"},
    {name: "beta", password: bcrypt.hashSync("beta", 10), email: "beta@alpha.com"},
    {name: "gamma", password: bcrypt.hashSync("gamma", 10), email: "gamma@alpha.com"},
    {name: "delta", password: bcrypt.hashSync("delta", 10), email: "delta@alpha.com"},
]

if (!process.env.GAME) {
    console.error("expected GAME to be defined in the environment")
    process.exit(1)
}

const gameName = process.env.GAME
const gamePath = path.resolve(__dirname, path.join('..', gameName))

if (!fs.existsSync(gamePath)) {
    console.error(`expected game ${gameName} to exist at ${gamePath}`)
    process.exit(1)
}

function modifyBuild(config) {
    config.watch = true
    config.watchOptions = {
        followSymlinks: true,
    }
}

async function build(sessionId) {
    const serverConfig = require(path.join(gamePath, 'server', 'webpack.config.js'))
    const clientConfig = require(path.join(gamePath, 'client', 'webpack.config.cjs'))

    modifyBuild(serverConfig)
    modifyBuild(clientConfig)

    const emitter = new EventEmitter()

    await new Promise((resolve) => {
        let resolved = false
        webpack(serverConfig, async () => {
            if (resolved) {
          await db.SessionAction.destroy({
            where: {
              sessionId
            }
          })
                return emitter.emit('update')
            }
            resolved = true
            resolve()
        })
    })

    await new Promise((resolve) => {
        let resolved = false
        webpack(clientConfig, () => {
            if (resolved) {
                return emitter.emit('update')
            }
            resolved = true
            resolve()
        })
    })

    return emitter
}

async function run() {
    const numberOfPlayers = parseInt(process.env.PLAYERS_NUM || 2)
    const playerInfo = allPlayerInfo.slice(0, numberOfPlayers)
    const players = await Promise.all(playerInfo.map(info => db.User.create(info)))
    const game = await db.Game.create({
        name: gameName,
    })
    const gameVersion = await db.GameVersion.create({
        gameId: game.id,
        version: 0,
        clientDigest: "build",
        serverDigest: "build"
    })
    const session = await db.Session.create({creatorId: players[0].id, gameVersionId: gameVersion.id, seed: 0})
    const sessionUsers = await Promise.all(players.map(player => db.SessionUser.create({sessionId: session.id, userId: player.id})))
    const buildHandle = await build(session.id)
    const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"
    const secretKey = process.env.SECRET_KEY || "some secret"
    const port = parseInt(process.env.PORT || 3000)
    AWSMock.config.basePath = path.resolve(__dirname, '..', '..')
    const bucketName = path.basename(path.resolve(__dirname, '..'))
    const s3Provider = AWSMock.S3({
        params: { Bucket: bucketName }
    });
    const zkConnectionString = process.env.ZK_CONNECTION_STRING || 'localhost:2181'

    const server = createServer({redisUrl, secretKey, zkConnectionString, s3Provider})
    console.log(`🎲🎲🎲 Ready on port ${port} 🎲🎲🎲`)
    const serverHandle = server.listen(port)
    buildHandle.on('update', async () => {
        await serverHandle.reload()
    })
}

if (process.env.NODE_ENV !== 'development') {
    console.error("this can only be run when NODE_ENV is set to development")
    process.exit(1)
}

run()
