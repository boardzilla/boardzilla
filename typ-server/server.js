const url = require('url')
const WebSocket = require("ws")
const express = require("express")
const http = require("http")
const Redis = require("ioredis");
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken")
const { Sequelize } = require('sequelize')
const mime = require('mime')
const bcrypt = require('bcrypt')
const db = require('./models')
const GameRunner = require('./gameRunner')
const cookieParser = require('cookie-parser')
const path = require('path')

module.exports = ({secretKey, redisUrl, ...devGame }) => {
  function loginUser(user, res) {
    const token = jwt.sign({id: user.id}, secretKey)
    res.cookie('jwt',token)
  }

  const app = express()
  const server = http.createServer(app)
  const redisClient = new Redis(redisUrl)

  let localDevGame, webpackCompiler

  if (devGame.name) {
    localDevGame = new db.Game({ name: devGame.name, localDir: devGame.path })
    const webpack = require('./webpack')
    webpackCompiler = webpack(path.join(devGame.path, 'client/index.js'))
  }

  const postgresUrl = process.env['DATABASE_URL']
  const gameRunner = new GameRunner(postgresUrl, redisUrl, localDevGame)

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
          req.userId = user.id
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
    res.render('home')
  })

  app.get('/sessions', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    let where = {}
    if (req.query.show != 'all') {
      const mySessions = await db.SessionUser.findAll({where: {userId: req.userId}})
      where = {id: mySessions.map(s => s.sessionId)}
    }
    const sessions = await db.Session.findAll({
      where,
      include: [
        db.Game,
        {
          model: db.SessionUser,
          as: 'SessionUsers',
          include: [{model: db.User}]
        },
        {
          model: db.User,
          as: 'creator'
        }
      ]
    })
    res.render('index', {sessions: sessions, localGame: localDevGame.get('name')})
  })

  app.get('/sessions/new', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    const games = await db.Game.findAll({attributes: ['name', [Sequelize.fn('max', Sequelize.col('id')), 'maxId']], group: ['name'], raw: true})
    if (localDevGame) {
      games.unshift({maxId: -1, name: localDevGame.get('name')})
    }
    res.render('sessions-new', {games: games})
  })

  app.post('/games', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')

    const game = await db.Game.create({name: req.body.name, content: Buffer.from(req.body.content, 'base64')})
    res.json({id: game.id})
  })

  app.get('/games/:id/*', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    if (req.query.session && !req.params[0]) {
      const sessionUser = await db.SessionUser.findOne({where: {userId: req.userId, sessionId: req.query.session}})
      if (!sessionUser) {
        return res.redirect('/sessions/' + req.query.session)
      }
    }
    let game
    if (req.params.id === "local") {
      game = localDevGame
    } else {
      game = await db.Game.findByPk(req.params.id)
    }
    if (!game) {
      res.status(404).end('No such game')
    }
    if (!req.params[0]) {
      res.render('client', {userId: req.userId, entry: req.params.id === "local" ? '/local-game/index.js' : 'index.js'})
    } else {
      const buf = game.file(`/client/${req.params[0]}`)
      res.type(mime.getType(req.params[0]))
      res.end(buf)
    }
  })

  app.post('/sessions', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    if (!req.body.gameId) return res.status(400).end('no game specified')
    const session = await db.Session.create({creatorId: req.userId, gameId: req.body.gameId, seed: String(Math.random())})
    await db.SessionUser.create({userId: req.userId, sessionId: session.id})
    if (req.is('json')) {
      res.json({id: session.id})
    } else {
      res.redirect('/sessions/' + session.id)
    }
  })

  app.get('/sessions/:id', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    const session = await db.Session.findByPk(req.params.id, {
      include: [{
        model: db.SessionUser,
        include: db.User,
      },{
        model: db.Game,
      }]
    })
    if (req.is('json')) {
      res.json(session)
    } else {
      const sessionUser = await db.SessionUser.findOne({where: {userId: req.userId, sessionId: session.id}})
      if (sessionUser) {
        return res.redirect(`/games/${session.gameId == -1 ? 'local' : session.gameId}/?session=${session.id}`)
      } else {
        const started = await db.SessionAction.findOne({where: {sessionId: session.id}})
        res.render('session', {
          session,
          me: req.userId,
          started,
          game: session.gameId == -1 ? localDevGame.get('name') : session.getGame().name
        })
      }
    }
  })

  app.post('/user-sessions/:id', async (req, res) => {
    if (!req.userId) return unauthorized(req, res, 'permission denied')
    const userSession = await db.SessionUser.create({userId: req.userId, sessionId: req.params.id})
    if (req.is('json')) {
      res.json({id: userSession.id})
    } else {
      res.redirect('/sessions/' + req.params.id)
    }
  })

  if (webpackCompiler) {
    app.use(
      require('webpack-dev-middleware')(webpackCompiler, {
        publicPath: '/local-game/',
      }),
    )
  }

  app.get('/play', async (req, res) => {
    const sessions = await db.Session.findAll({ include: [db.Game, {model: db.User, as: 'creator'}] })
    res.render('index', {sessions: sessions})
  })

  app.use('/local-game', express.static(path.join(__dirname, '/dist')))
  
  const verifyClient = async (info, verified) => {
    cookieParser()(info.req, null, () => {})
    try {
      verifyToken(info.req, (error, user) => {
        if (error || !user) {
          console.error("verifyClient fail: ", error, user)
          return verified(false, 401, "Unauthorized")
        }
        info.req.userId = user.id
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
    const sessionUser = await db.SessionUser.findOne({where: {userId: req.userId, sessionId: req.sessionId}})
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
    const queue = async message => await redisClient.rpush(gameRunner.sessionEventKey(session.id), JSON.stringify(message))

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
        console.log(`S ${req.userId}: ws message`, message.type)
        switch(message.type) {
          case 'requestLock': return await requestLock(message.payload.key)
          case 'releaseLock': return await releaseLock(message.payload.key)
          case 'drag': return await drag(message.payload)
          default: {
            message.payload.userId = req.userId
            const out = await queue(message)
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
      // TODO better as seperate channels for each user and all users?
      if (message.userId && message.userId != req.userId) {
        return
      }
      console.log(`S u=${req.userId} s=${req.sessionId}: redis message`, message.type, message.userId)
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

    console.log(`S ${req.userId} subscribe`)
    subscriber.subscribe(gameRunner.sessionEventKey(session.id), async err => {
      if (err) {
        await sessionRunner.stop()
        return ws.close(1011) // internal error
      }

      console.log(`S ${req.userId} addPlayer`)
      const user = await db.User.findByPk(req.userId)
      queue({type: 'addPlayer', payload: {userId: user.id, username: user.name}})
    })
  }
  wss.on("connection", onWssConnection)

  return server
}
