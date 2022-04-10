const url = require('url')
const WebSocket = require("ws")
const express = require("express")
const http = require("http")
const Redis = require("ioredis");
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken")
const { Sequelize } = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('./models')
const GameRunner = require('./gameRunner')
const cookieParser = require('cookie-parser')
const path = require('path')

module.exports = ({secretKey, redisUrl, s3Provider, zkConnectionString }) => {
  function loginUser(user, res) {
    const token = jwt.sign({id: user.id}, secretKey)
    res.cookie('jwt',token)
  }

  const app = express()
  const server = http.createServer(app)
  const redisClient = new Redis(redisUrl)
  const devMode = process.env.NODE_ENV === 'development'

  const gameRunner = new GameRunner(redisUrl, s3Provider, zkConnectionString)

  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use((req, res, next) => {
    res.locals.info = req.cookies.info
    res.locals.error = req.cookies.error
    res.clearCookie('info')
    res.clearCookie('error')
    next()
  })

  app.use((req, res, next) => {
    res.locals.user = null
    try {
      verifyToken(req, (error, user) => {
        if (error) {
          throw error
        }
        if (user) {
          req.user = user
          res.locals.user = user
        }
        return next()
      })
    } catch (error) {
      console.error("verifyToken: ", error)
      return next()
    }
  })

  function verifyToken(req, callback) {
    let token = null
    if (req.headers["authorization"]) {
      token = req.headers.authorization.replace("JWT ", "")
    } else if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt
    }
    if (!token) {
      return callback()
    }
    jwt.verify(token, secretKey, { ignoreExpiration: true }, (err, user) => {
      if (err) return callback(err, null)
      db.User.findOne({ where: {id: user.id} }).then(user => callback(null, user)).catch(e => callback(e, null))
    })
  }

  function unauthorized(req, res, message) {
    res.cookie('error', message)
    res.redirect('/login')
  }

  app.post('/users', async (req, res) => {
    const name = req.body.name
    const rawPassword = req.body.password
    const email = req.body.email

    if (rawPassword === null || rawPassword === '') {
      return res.status(400).end("password required")
    }

    if (name === null || name === '') {
      return res.status(400).end("name required")
    }

    if (email === null || email === '') {
      return res.status(400).end("email required")
    }

    const password = await bcrypt.hash(rawPassword, 10)
    try {
      const user = await db.User.create({name, password, email})

      loginUser(user, res)    

      res.cookie('info', "Registered successfully!")
      res.redirect('/')
    } catch (e) {
      if (e instanceof Sequelize.UniqueConstraintError) {
        switch(e.errors[0].path) {
          case 'name':
            res.cookie('error', "Username taken")
            break
          case 'email':
            res.cookie('error', "Email taken")
            break
          default:
            console.error("error", e)
            res.cookie('error', "Unknown error")
        }
        res.render('register')
      } else {
        throw e
      }
    }
  })

  app.get('/login', async (req, res) => {
    res.render('login')
  })

  app.get('/register', async (req, res) => {
    res.render('register')
  })

  app.post('/login', async (req, res) => {
    const name = req.body.name || ''
    const password = req.body.password || ''
    const user = await db.User.findOne({ where: {name} })
    if (!user) return unauthorized(req, res, 'incorrect login')
    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) return unauthorized(req, res, 'incorrect login')
    loginUser(user, res)    
    res.cookie('info', "Logged in successfully!")
    res.redirect("/")
  })

  app.get('/logout', async (req, res) => {
    res.clearCookie('jwt')
    res.redirect("/")
  })

  app.get('/', async (req, res) => {
    const sessions = await db.Session.findAll({ include: [{model:db.GameVersion, include: db.Game}, {model: db.User, as: 'creator'}] })
    res.render('index', {sessions: sessions})
  })

  app.get('/sessions/new', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied')
    const games = await db.Game.findAll({attributes: ['name', [Sequelize.fn('max', Sequelize.col('id')), 'maxId']], group: ['name'], raw: true})
    res.render('sessions-new', {games: games})
  })

  app.put('/publish', async (req, res) => {
    if (req.headers['authorization'] !== process.env.PUBLISH_TOKEN) {
      return res.status(401).end('unauthorized')
    }

    const [game, _] = await db.Game.findOrCreate({
      where: {
        name: req.body.name,
      },
      defaults: {
        name: req.body.name,
      },
    });

    const gameVersion = await db.GameVersion.find({
      gameId: game.id,
    })
    const versionNumber = gameVersion === null ? 1 : gameVersion.version + 1
    const version = await db.GameVersion.create({
      gameId: game.id,
      version: versionNumber,
      serverDigest: req.post.serverDigest,
      clientDigest: req.post.clientDigest,
    })
    res.json({version: version.version})
  })

  app.get('/play/:id/*', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied')
    const session = await db.Session.findByPk(req.params.id, {
      include: [{
        model: db.SessionUser,
        include: db.User,
      },{
        model: db.GameVersion,
        include: [db.Game]
      }]
    })
    if (!session) {
      res.status(404).end('No such game')
    }
    if (!req.params[0]) {
      return res.render('client', {userId: req.user.id, entry: 'index.js'})
    }
    const gameVersion = session.GameVersion
    const game = gameVersion.Game
    const s3Path = path.join(game.name, "client", gameVersion.clientDigest, req.params[0])
    const s3Params = {Key: s3Path}
    try {
      const info = await s3Provider.headObject(s3Params).promise()
      res.set('Content-Type', info.ContentType)
      res.set('Content-Length', info.ContentLength)
      const stream = s3Provider.getObject(s3Params).createReadStream()
      stream.pipe(res);
    } catch(e) {
      console.log("error getting", s3Path, e)
      res.status(404).end('not found')        
    }
  })

  app.post('/sessions', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied')
    if (!req.body.gameId) return res.status(400).end('no game specified')
    const session = await db.Session.create({creatorId: req.user.id, gameId: req.body.gameId, seed: String(Math.random())})
    await db.SessionUser.create({userId: req.user.id, sessionId: session.id})
    if (req.is('json')) {
      res.json({id: session.id})
    } else {
      res.redirect('/sessions/' + session.id)
    }
  })

  app.get('/sessions/:id', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied')
    const session = await db.Session.findByPk(req.params.id, {
      include: [{
        model: db.SessionUser,
        include: db.User,
      },{
        model: db.GameVersion,
        include: [db.Game]
      }]
    })
    if (req.is('json')) {
      res.json(session)
    } else {
      res.render('session', {session, me: req.user.id})
    }
  })

  app.post('/user-sessions/:id', async (req, res) => {
    if (!req.user.id) return unauthorized(req, res, 'permission denied')
    const userSession = await db.SessionUser.create({userId: req.user.id, sessionId: req.params.id})
    if (req.is('json')) {
      res.json({id: userSession.id})
    } else {
      res.redirect('/sessions/' + req.params.id)
    }
  })

  if (devMode) {
    server.reload = async () => {
      const sessions = await db.Session.findAll()
      for (const session of sessions) {
        await redisClient.publish(gameRunner.sessionEventKey(session.id), JSON.stringify({type: 'reload'}))
      }
    }
  }

  app.get('/play', async (req, res) => {
    const sessions = await db.Session.findAll({ include: [db.Game, {model: db.User, as: 'creator'}] })
    res.render('index', {sessions: sessions})
  })

  const verifyClient = async (info, verified) => {
    cookieParser()(info.req, null, () => {})
    try {
      verifyToken(info.req, (error, user) => {
        if (error || !user) {
          console.error("verifyClient fail: ", error, user)
          return verified(false, 401, "Unauthorized")
        }
        info.req.user = user
        verified(true)
      })
    } catch (error) {
      console.error("verifyClient: ", error)
      throw error
    }
  }

  const wss = new WebSocket.Server({verifyClient, server})

  wss.shouldHandle = (req) => {
    const path = url.parse(req.url).pathname
    const match = path.match(/\/sessions\/([^/]+)/)
    if (match) {
      req.sessionId = match[1]
      return true
    } else {
      return false
    }
  }

  const onWssConnection = async (ws, req) => {
    const sessionUser = await db.SessionUser.findOne({where: {userId: req.user.id, sessionId: req.sessionId}})
    if (!sessionUser) {
      return ws.close(4001)
    }

    const session = await sessionUser.getSession()
    let locks = []

    const sendPlayerView = async jsonData => {
      ws.send(jsonData)
    }

    const sendPlayerLocks = async () => {
      const payload = await session.getElementLocks().reduce((locks, lock) => {locks[lock.element] = lock.userId; return locks;}, {})
      ws.send(JSON.stringify({type: 'updateLocks', payload}))
    }

    const publish = async message => await redisClient.publish(gameRunner.sessionEventKey(session.id), JSON.stringify(message))
    
    const requestLock = async (key) => {
      try {
        await db.ElementLock.destroy({where: {
          sessionId: session.id,
          updatedAt: {[Sequelize.Op.lt]: new Date() - 60000}
        }})
        locks.push(await db.ElementLock.create({ sessionId: session.id, userId: sessionUser.userId, element: key }))
      } catch (e) {
        if (!(e instanceof db.Sequelize.UniqueConstraintError)) {
          throw e
        }
      }
      await publish({type: 'locks'})
    }

    const releaseLock = async (key) => {
      await db.ElementLock.destroy({where: { sessionId: session.id, userId: sessionUser.userId, element: key }})
      locks = locks.filter(lock => lock.key != key)
      await publish({type: 'locks'})
    }

    const drag = async ({key, x, y, start, end, endFlip}) => {
      const lock = locks.find(lock => lock.element == key)
      if (!lock || lock.userId != sessionUser.userId) return
      await publish({type: 'drag', payload: {userId: lock.userId, key, x, y, start, end, endFlip}})
    }

    const updateElement = ({userId, key, x, y, start, end, endFlip}) => {
      if (userId == sessionUser.userId) return
      ws.send(JSON.stringify({type: 'updateElement', payload: {key, x, y, start, end, endFlip}}))
    }

    const sessionRunner = gameRunner.createSessionRunner(session.id)
    sessionRunner.once('error', error => {
      console.error("error starting session!", error)
      return ws.close(1011) // internal error
    })

    const sessionEventKey = gameRunner.sessionEventKey(req.sessionId)
    ws.on('message', async (data) => {
      try {
        const message = JSON.parse(data)
        console.debug(`S ${req.user.id}: ws message`, message.type)
        switch(message.type) {
          case 'requestLock': return await requestLock(message.payload.key)
          case 'releaseLock': return await releaseLock(message.payload.key)
          case 'drag': return await drag(message.payload)
          default: {
            message.payload.userId = req.user.id
            const out = await redisClient.rpush(sessionEventKey, JSON.stringify(message))
            return out
          }
        }
      } catch(e) {
        console.error("error", data, e)
      }
    })

    const subscriber = new Redis(redisUrl)
    subscriber.on("message", async (channel, data) => {
      const message = JSON.parse(data)
      console.debug(`S ${req.user.id}: redis message`, message.type, message.userId)
      // TODO better as seperate channels for each user and all users?
      if (message.userId && message.userId != req.user.id) {
        return
      }
      switch (message.type) {
        case 'state': return await sendPlayerView(data)
        case 'locks': return await sendPlayerLocks()
        case 'drag': return await updateElement(message.payload)
        case 'ping': return ws.send(JSON.stringify({type: "pong"}))
        default: return ws.send(data)
      }
    })

    ws.on("close", async () => {
      await sessionRunner.stop()
      await subscriber.quit()
    })

    ws.on("error", async error => {
      await sessionRunner.stop()
      await subscriber.quit()
      console.error("error in ws", error)
    })

    subscriber.subscribe(gameRunner.sessionEventKey(session.id), async err => {
      if (err) {
        await sessionRunner.stop()
        return ws.close(1011) // internal error
      }

      redisClient.rpush(sessionEventKey, JSON.stringify({type: 'refresh', payload: {userId: req.user.id}}))
    })
  }
  wss.on("connection", onWssConnection)

  return server
}
