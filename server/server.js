const url = require('url');
const needle = require('needle');
const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { Sequelize, Op } = require('sequelize');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const path = require('path');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const log = require('./log');

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
  const production = process.env.NODE_ENV === 'production';

  if (production) {
    log.setLevel('info');
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
  } else {
    log.setLevel('debug');
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
      log.warn('verifyToken: ', error);
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
            log.error('error', e);
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
    const versions = await db.GameVersion.findAll({ include: db.Game, limit: 5, order: [['createdAt', 'desc']], where: { notes: { [Op.not]: null } } });
    res.render('home', { versions });
  });

  app.get('/sessions', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    let where = {state: {[Op.ne]: "expired"}};
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

  app.get('/admin/games', async (req, res) => {
    if (!req.user && req.user.role !== 'admin') return unauthorized(req, res, 'permission denied');
    const games = await db.Game.findAll();
    res.render('admin/games', { games });
  });

  app.get('/admin/games/:id', async (req, res) => {
    if (!req.user && req.user.role !== 'admin') return unauthorized(req, res, 'permission denied');
    const game = await db.Game.findByPk(req.params.id);
    const versions = await game.getGameVersions({ limit: 20, order: [['id', 'desc']] });
    res.render('admin/game', { game, versions });
  });

  app.get('/admin/games/:id/versions/:version_id/edit', async (req, res) => {
    if (!req.user && req.user.role !== 'admin') return unauthorized(req, res, 'permission denied');
    const game = await db.Game.findByPk(req.params.id);
    const gameVersion = await db.GameVersion.findOne({ where: { gameId: req.params.id, id: req.params.version_id } });
    res.render('admin/note-edit', { game, gameVersion });
  });

  app.post('/admin/games/:id/versions/:version_id', async (req, res) => {
    if (!req.user && req.user.role !== 'admin') return unauthorized(req, res, 'permission denied');
    const gameVersion = await db.GameVersion.findOne({ where: { gameId: req.params.id, id: req.params.version_id } });
    gameVersion.notes = req.body.notes;
    await gameVersion.save();
    res.redirect(`/admin/games/${req.params.id}`);
  });

  app.post('/admin/games/:id/versions/:version_id/announce', async (req, res) => {
    if (!req.user && req.user.role !== 'admin') return unauthorized(req, res, 'permission denied');
    const game = await db.Game.findByPk(req.params.id);

    const gameVersion = await db.GameVersion.findOne({ where: { gameId: req.params.id, id: req.params.version_id } });
    const content = `**${game.name}** has a new version available in _${gameVersion.beta ? 'beta' : 'release'}_ channel!\n\n${gameVersion.notes}`;
    await needle('post', process.env.DISCORD_RELEASE_WEBHOOK, { content });
    res.redirect(`/admin/games/${req.params.id}`);
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
        log.error('error while streaming', e);
      });
      stream.pipe(res);
    } catch (e) {
      log.error('error getting', s3Path, e);
      res.status(404).end('not found');
    }
  });

  app.post('/sessions', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    if (!req.body.gameId) return res.status(400).end('no game specified');
    const game = await db.Game.findByPk(req.body.gameId);
    const gameVersion = req.body.beta ? await game.latestVersion() : await game.latestStableVersion();
    const session = await db.Session.create({ gameVersionId: gameVersion.id, creatorId: req.user.id, seed: String(Math.random()) });
    await db.SessionUser.create({ userId: req.user.id, sessionId: session.id, color: 'red', position: 0 });
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
    res.render('session', {
      session,
      me: req.user.id,
      started: session.state !== 'initial',
      game: session.GameVersion.Game.name,
    });
  });

  app.post('/user-sessions/:id', async (req, res) => {
    if (!req.user) return unauthorized(req, res, 'permission denied');
    const existingColors = (await db.SessionUser.findAll({ where: { sessionId: req.params.id } })).map(u => u.color);
    if (existingColors.length == 4) return unauthorized(req, res, 'permission denied');

    const newColor = ['red', 'green', 'blue', 'purple', 'yellow', 'cyan'].find(c => !existingColors.includes(c));
    await db.sequelize.query(`INSERT into "SessionUsers" ("sessionId", "userId", "color", "position", "createdAt", "updatedAt")
    SELECT "sessionId", "userId", "color", "position", "createdAt", "updatedAt"
    FROM (
      SELECT :sessionId, :userId, :color, max(su.position) + 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
      FROM "SessionUsers" su
      WHERE "sessionId" = :sessionId
      GROUP BY "sessionId"
      LIMIT 1
    ) s ("sessionId", "userId", "color", "position", "createdAt", "updatedAt") `, { replacements: {
      sessionId: parseInt(req.params.id),
      userId: req.user.id,
      color: newColor,
    } });
    res.redirect(`/sessions/${req.params.id}`);
  });

  if (devMode) {
    server.reload = async () => {
      await gameRunner.refreshAll();
    };
  }

  app.get('/play', async (req, res) => {
    const sessions = await db.Session.findAll({ include: [{ model: db.GameVersion, include: [db.Game] }, { model: db.User, as: 'creator' }] });
    res.render('index', { sessions });
  });

  const verifyClient = (info, verified) => {
    cookieParser()(info.req, null, () => {});
    try {
      verifyToken(info.req, (error, user) => {
        if (error || !user) {
          log.error('verifyClient fail: ', error, user);
          return verified(false, 401, 'Unauthorized');
        }
        info.req.user = user;
        return verified(true);
      });
    } catch (error) {
      log.error('verifyClient: ', error);
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
      log.debug('WS closing...');
      await sessionRunner.stop();
    }, { once: true });

    ws.addEventListener('error', async (error) => {
      log.warn('WS error...', error);
      await sessionRunner.stop();
    }, { once: true });

    const sendWS = (type, payload) => ws.send(JSON.stringify({ type, payload }));
    const publish = async (type, payload) => {
      try {
        await sessionRunner.publishEvent({ type, payload });
      } catch (e) {
        console.log('error while publishing', e);
        ws.close(4001);
      }
    };
    const queue = async (type, payload) => {
      try {
        const response = await sessionRunner.publishAction({ type, payload });
        sendWS('response', { id: payload.id, response });
      } catch (e) {
        console.log('error while queuing', e);
        ws.close(4001);
      }
    };
    const publishChat = async chat => {
      await publish('chat', {
        id: chat.id,
        userId: chat.userId,
        createdAt: chat.createdAt.getTime(),
        message: chat.message,
      });
    };
    const chat = async message => {
      const user = await db.User.findByPk(req.user.id);
      const chatMessage = await db.SessionChat.create({
        sessionId: session.id,
        userId: req.user.id,
        createdAt: new Date(),
        message: `<span color="${sessionUser.color}">${user.name}: ${message}</span>`,
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

    const releaseLock = async key => {
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

    sessionRunner.once('error', async (error) => {
      log.warn('WS error...', error);
      if (!production) {
        sendWS('showError', { message: error.message, stack: error.stack });
        return;
      }

      await sessionRunner.stop();
      log.error('error starting session!', error);

      Sentry.withScope(scope => {
        scope.setTag('source', 'ws');
        scope.setExtra('session_id', req.sessionId);
        Sentry.captureException(error);
      });
      return ws.close(1011); // internal error
    });

    sessionRunner.once('finished', async () => {
      await sessionRunner.stop();
      sendWS('reload', {});
      return ws.close();
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
            log.debug(`S ${req.user.id}: ws message`, message.type, message.payload);
            message.payload.userId = req.user.id;
            await queue(message.type, message.payload);
          }
        }
      } catch (e) {
        log.error('error', data, e);
      }
    });

    sessionRunner.listen(message => {
      // TODO better as seperate channels for each user and all users?
      if (message.userId && message.userId !== req.user.id) return null;
      log.debug(`S ${req.user.id}: event`, message.type, message.userId);
      switch (message.type) {
        case 'locks': return sendPlayerLocks();
        case 'drag': return updateElement(message.payload);
        case 'log': return sendLog(message.payload);
        case 'error': return sendError();
        default: return sendWS(message.type, message.payload);
      }
    });

    (await session.getChats()).forEach(publishChat);

    console.log("publish the initial refresh...");
    sessionRunner.publishAction({ type: session.state === 'initial' ? 'updatePlayers' : 'refreshAll' }).catch(e => {
      console.error("error", e);
      ws.close(1011);
    });

    return null;
  };
  wss.on('connection', onWssConnection);

  if (production) {
    app.use(Sentry.Handlers.errorHandler());
  } else {
    const errorhandler = require('errorhandler');
    app.use(errorhandler());
  }
  // Optional fallthrough error handler
  app.use((err, req, res, next) => {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(`${res.sentry}\n`);
  });

  return server;
};

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
