const url = require('url');
const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const path = require('path');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const db = require('./models');
const GameRunner = require('./gameRunner');

module.exports = ({
  secretKey, rabbitmqUrl, s3Provider,
}) => {
  function loginUser(user, res) {
    const token = jwt.sign({ id: user.id }, secretKey);
    res.cookie('jwt', token);
  }

  const app = express();

  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }

  const server = http.createServer(app);
  const devMode = process.env.NODE_ENV === 'development';

  const gameRunner = new GameRunner(rabbitmqUrl, s3Provider);

  app.enable('trust proxy');
  app.set('view engine', 'ejs');
  app.set('views', `${__dirname}/views`);

  // force https
  app.use((request, response, next) => {
    if (process.env.NODE_ENV === 'production' && !request.secure) {
      return response.redirect(`https://${request.headers.host}${request.url}`);
    }
    next();
  });
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.locals.info = req.cookies.info;
    res.locals.error = req.cookies.error;
    res.clearCookie('info');
    res.clearCookie('error');
    next();
  });

  function verifyToken(req, callback) {
    let token = null;
    if (req.headers.authorization) {
      token = req.headers.authorization.replace('JWT ', '');
    } else if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) {
      return callback();
    }
    jwt.verify(token, secretKey, { ignoreExpiration: true }, (err, user) => {
      if (err) return callback(err, null);
      db.User.findOne({ where: { id: user.id } }).then(u => callback(null, u)).catch(e => callback(e, null));
    });
  }

  app.use((req, res, next) => {
    res.locals.user = null;
    try {
      verifyToken(req, (error, user) => {
        if (error) {
          throw error;
        }
        if (user) {
          req.user = user;
          res.locals.user = user;
        }
        return next();
      });
    } catch (error) {
      console.error('verifyToken: ', error);
      return next();
    }
  });

  function unauthorized(req, res, message) {
    res.cookie('error', message);
    res.redirect('/login');
  }

  app.post('/users', async (req, res) => {
    const { name } = req.body;
    const rawPassword = req.body.password;
    const { email } = req.body;

    if (rawPassword === null || rawPassword === '') {
      return res.status(400).end('password required');
    }

    if (name === null || name === '') {
      return res.status(400).end('name required');
    }

    if (email === null || email === '') {
      return res.status(400).end('email required');
    }

    const password = await bcrypt.hash(rawPassword, 10);
    try {
      const user = await db.User.create({
        name, password, email,
      });

      loginUser(user, res);

      res.cookie('info', 'Registered successfully!');
      res.redirect('/');
    } catch (e) {
      if (e instanceof Sequelize.UniqueConstraintError) {
        switch (e.errors[0].path) {
          case 'name':
          case 'lower(name::text)':
            res.cookie('error', 'Username taken');
            break;
          case 'email':
            res.cookie('error', 'Email taken');
            break;
          default:
            console.error('error', e);
            res.cookie('error', 'Unknown error');
        }
        res.render('register');
      } else {
        throw e;
      }
    }
  });

  app.get('/login', async (req, res) => {
    res.render('login');
  });

  app.get('/register', async (req, res) => {
    res.render('register');
  });

  app.post('/login', async (req, res) => {
    const name = (req.body.name || '').trim();
    const password = (req.body.password || '').trim();
    const user = await db.User.findOne({
      where: Sequelize.where(
        Sequelize.fn('lower', Sequelize.col('name')),
        Sequelize.fn('lower', name),
      ),
    });

    if (!user) {
      return unauthorized(req, res, 'incorrect login');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return unauthorized(req, res, 'incorrect login');
    }
    loginUser(user, res);
    res.cookie('info', 'Logged in successfully!');
    res.redirect('/');
  });

  app.get('/logout', async (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
  });

  app.get('/', async (req, res) => {
    res.render('home');
  });

  app.get('/sessions', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    let where = {};
    if (req.query.show !== 'all') {
      const mySessions = await db.SessionUser.findAll({ where: { userId: req.user.id } });
      where = { id: mySessions.map((s) => s.sessionId) };
    }
    const sessions = await db.Session.findAll({
      where,
      order: [['createdAt', 'desc']],
      include: [
        {
          model: db.GameVersion,
          include: [{ model: db.Game }],
        },
        {
          model: db.SessionUser,
          as: 'SessionUsers',
          include: [{ model: db.User }],
        },
        {
          model: db.User,
          as: 'creator',
        },
      ],
    });
    res.render('index', { sessions });
  });

  app.get('/sessions/new', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    const games = await db.Game.findAll({ attributes: ['name', [Sequelize.fn('max', Sequelize.col('id')), 'maxId']], group: ['name'], raw: true });
    res.render('sessions-new', { games });
  });

  app.put('/publish', async (req, res) => {
    if (req.headers['x-publish-token'] !== process.env.PUBLISH_TOKEN) {
      return res.status(401).end('unauthorized');
    }

    const [game, _] = await db.Game.findOrCreate({
      where: {
        name: req.body.name,
      },
      defaults: {
        name: req.body.name,
      },
    });

    const gameVersion = await game.latestVersion();
    const versionNumber = gameVersion ? gameVersion.version + 1 : 1;

    if (gameVersion && gameVersion.serverDigest === req.body.serverDigest && gameVersion.clientDigest === req.body.clientDigest) {
      return res.json({ version: gameVersion.version, msg: 'no version created, already exists' });
    }

    const version = await db.GameVersion.create({
      gameId: game.id,
      version: versionNumber,
      serverDigest: req.body.serverDigest,
      clientDigest: req.body.clientDigest,
      beta: req.body.beta,
    });
    res.json({ version: version.version });
  });

  app.get('/play/:id/*', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    const session = await db.Session.findByPk(req.params.id, {
      include: [{
        model: db.SessionUser,
        include: db.User,
      }, {
        model: db.GameVersion,
        include: [db.Game],
      }],
    });
    if (!session) {
      return res.status(404).end('No such game');
    }
    if (session.state === 'error') {
      return res.render('play-error');
    }
    if (!req.params[0]) {
      const sessionUser = await db.SessionUser.findOne({ where: { userId: req.user.id, sessionId: session.id } });
      if (!sessionUser) {
        return res.redirect(`/sessions/${session.id}`);
      }
      return res.render('client', { userId: req.user.id, entry: 'index.js' });
    }
    const gameVersion = session.GameVersion;
    const game = gameVersion.Game;
    const s3Path = path.join(game.name, 'client', gameVersion.clientDigest, req.params[0]);
    const s3Params = { Key: s3Path };
    try {
      const info = await s3Provider.headObject(s3Params).promise();
      res.set('Content-Type', info.ContentType);
      res.set('Content-Length', info.ContentLength);
      if (process.env.NODE_ENV === 'production') res.set('Cache-Control', 'public, max-age=604800, immutable');
      const stream = s3Provider.getObject(s3Params).createReadStream();
      stream.on('error', (e) => {
        console.log('error while streaming', e);
      });
      stream.pipe(res);
    } catch (e) {
      console.log('error getting', s3Path, e);
      res.status(404).end('not found');
    }
  });

  app.post('/sessions', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    if (!req.body.gameId) return res.status(400).end('no game specified');
    const game = await db.Game.findByPk(req.body.gameId);
    const gameVersion = req.body.beta ? await game.latestVersion() : await game.latestStableVersion();
    const session = await db.Session.create({ gameVersionId: gameVersion.id, creatorId: req.user.id, seed: String(Math.random()) });
    await db.SessionUser.create({ userId: req.user.id, sessionId: session.id });
    if (req.is('json')) {
      res.json({ id: session.id });
    } else {
      res.redirect(`/sessions/${session.id}`);
    }
  });

  app.get('/sessions/:id', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    const session = await db.Session.findByPk(req.params.id, {
      include: [{
        model: db.SessionUser,
        include: db.User,
      }, {
        model: db.GameVersion,
        include: [db.Game],
      }],
    });
    const sessionUser = await db.SessionUser.findOne({ where: { userId: req.user.id, sessionId: session.id } });
    if (sessionUser) {
      return res.redirect(`/play/${session.id}/`);
    }
    const started = await db.SessionAction.findOne({ where: { sessionId: session.id } });
    res.render('session', {
      session,
      me: req.user.id,
      started,
      game: session.GameVersion.Game.name,
    });
  });

  app.post('/user-sessions/:id', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    const userSession = await db.SessionUser.create({ userId: req.user.id, sessionId: req.params.id });
    if (req.is('json')) {
      res.json({ id: userSession.id });
    } else {
      res.redirect(`/sessions/${req.params.id}`);
    }
  });

  if (devMode) {
    server.reload = async () => {
      await gameRunner.refreshAll();
    };
  }

  app.get('/play', async (req, res) => {
    const sessions = await db.Session.findAll({ include: [db.Game, { model: db.User, as: 'creator' }] });
    res.render('index', { sessions });
  });

  const verifyClient = async (info, verified) => {
    cookieParser()(info.req, null, () => {});
    try {
      verifyToken(info.req, (error, user) => {
        if (error || !user) {
          console.error('verifyClient fail: ', error, user);
          return verified(false, 401, 'Unauthorized');
        }
        info.req.user = user;
        return verified(true);
      });
    } catch (error) {
      console.error('verifyClient: ', error);
      throw error;
    }
  };

  const wss = new WebSocket.Server({ verifyClient, server });

  wss.shouldHandle = (req) => {
    const { pathname } = url.parse(req.url);
    const match = pathname.match(/\/sessions\/([^/]+)/);
    if (match) {
      req.sessionId = match[1];
      return true;
    }
    return false;
  };

  const onWssConnection = async (ws, req) => {
    const sessionUser = await db.SessionUser.findOne({ where: { userId: req.user.id, sessionId: req.sessionId } });
    if (!sessionUser) {
      return ws.close(4001);
    }

    const session = await sessionUser.getSession();
    const sessionRunner = await gameRunner.createSessionRunner(session.id);
    ws.addEventListener('close', async () => {
      console.log('WS closing...');
      await sessionRunner.stop();
    }, { once: true });

    ws.addEventListener('error', async (error) => {
      console.log('WS error...');
      await sessionRunner.stop();
      console.error('error in ws', error);
    }, { once: true });

    const sendWS = (type, payload) => ws.send(JSON.stringify({ type, payload }));
    const publish = async (type, payload) => sessionRunner.publishEvent({ type, payload });
    const queue = async (type, payload) => {
      const response = await sessionRunner.publishAction({ type, payload });
      sendWS('response', { id: payload.id, response });
    };
    const publishChat = async (chat) => {
      await publish({ type: 'chat',
        payload: {
          id: chat.id,
          userId: chat.userId,
          createdAt: chat.createdAt.getTime(),
          message: chat.message,
        } });
    };
    const chat = async (message) => {
      const chatMessage = await db.SessionChat.create({
        sessionId: session.id,
        userId: req.user.id,
        createdAt: new Date(),
        message,
      });

      await publishChat(chatMessage);
    };

    let locks = [];

    const sendPlayerLocks = async () => {
      const payload = (await session.getElementLocks()).reduce((l, lock) => { l[lock.element] = lock.userId; return l; }, {});
      sendWS('updateLocks', payload);
    };

    const requestLock = async (key) => {
      try {
        await db.ElementLock.destroy({
          where: {
            sessionId: session.id,
            updatedAt: { [Sequelize.Op.lt]: new Date() - 60000 },
          },
        });
        locks.push(await db.ElementLock.create({ sessionId: session.id, userId: sessionUser.userId, element: key }));
      } catch (e) {
        if (!(e instanceof db.Sequelize.UniqueConstraintError)) {
          throw e;
        }
      }
      await publish('locks');
    };

    const releaseLock = async (key) => {
      await db.ElementLock.destroy({ where: { sessionId: session.id, userId: sessionUser.userId, element: key } });
      locks = locks.filter((lock) => lock.key !== key);
      await publish('locks');
    };

    const drag = async ({
      key, x, y, start, end, endFlip,
    }) => {
      const lock = locks.find(l => l.element === key);
      if (!lock || lock.userId !== sessionUser.userId) return;
      await publish('drag', {
        userId: lock.userId, key, x, y, start, end, endFlip,
      });
    };

    const updateElement = ({
      userId, key, x, y, start, end, endFlip,
    }) => {
      if (userId === sessionUser.userId) return;
      sendWS('updateElement', {
        key, x, y, start, end, endFlip,
      });
    };

    const sendLog = ({ timestamp, sequence, message }) => (
      sendWS('log', { timestamp, sequence, message: typeof message === 'object' ? message[String(sessionUser.userId)] : message })
    );

    const sendError = () => {
      sendWS('error', {});
    };

    sessionRunner.once('error', (error) => {
      console.error('error starting session!', error);
      return ws.close(1011); // internal error
    });

    sessionRunner.once('finished', () => {
      console.error('closing session!');
      return ws.close(1011); // internal error
    });

    ws.on('message', async (data) => {
      try {
        const message = JSON.parse(data);
        switch (message.type) {
          case 'requestLock': return await requestLock(message.payload.key);
          case 'releaseLock': return await releaseLock(message.payload.key);
          case 'drag': return await drag(message.payload);
          case 'ping': return publish('active', sessionUser.userId);
          case 'chat': return chat(message.payload.message);
          default: {
            console.debug(`S ${req.user.id}: ws message`, message.type, message.payload);
            message.payload.userId = req.user.id;
            await queue(message.type, message.payload);
          }
        }
      } catch (e) {
        console.error('error', data, e);
      }
    });

    sessionRunner.listen(message => {
      // TODO better as seperate channels for each user and all users?
      if (message.userId && message.userId !== req.user.id) return null;
      console.debug(`S ${req.user.id}: event`, message.type, message.userId);
      switch (message.type) {
        case 'locks': return sendPlayerLocks();
        case 'drag': return updateElement(message.payload);
        case 'log': return sendLog(message.payload);
        case 'error': return sendError();
        default: return sendWS(message.type, message.payload);
      }
    });

    const chats = await session.getChats();
    for (const c of chats) {
      await publishChat(c);
    }

    return null;
  };
  wss.on('connection', onWssConnection);

  app.use(Sentry.Handlers.errorHandler());
  // Optional fallthrough error handler
  app.use((err, req, res, next) => {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(`${res.sentry}\n`);
  });

  return server;
};
