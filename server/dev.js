const { EventEmitter } = require('events');
const AWSMock = require('mock-aws-s3');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const bcrypt = require('bcrypt');
const createServer = require('./server');
const db = require('./models');

const allPlayerInfo = [
  {
    name: 'alpha', password: bcrypt.hashSync('alpha', 10), email: 'alpha@alpha.com', role: 'admin',
  },
  {
    name: 'beta', password: bcrypt.hashSync('beta', 10), email: 'beta@alpha.com', role: 'admin',
  },
  {
    name: 'gamma', password: bcrypt.hashSync('gamma', 10), email: 'gamma@alpha.com', role: 'admin',
  },
  {
    name: 'delta', password: bcrypt.hashSync('delta', 10), email: 'delta@alpha.com', role: 'admin',
  },
];

const colors = [null, 'red', 'green', 'blue', 'purple'];

if (!process.env.GAME) {
  console.error('expected GAME to be defined in the environment');
  process.exit(1);
}

const gameName = process.env.GAME;
const gamePath = path.resolve(__dirname, path.join('..', gameName));

if (!fs.existsSync(gamePath)) {
  console.error(`expected game ${gameName} to exist at ${gamePath}`);
  process.exit(1);
}

function modifyBuild(config) {
  config.watch = true;
  config.watchOptions = {
    followSymlinks: true,
  };
}

async function build() {
  const serverConfig = require(path.join(gamePath, 'server', 'webpack.config.js'));
  const clientConfig = require(path.join(gamePath, 'client', 'webpack.config.cjs'));

  modifyBuild(serverConfig);
  modifyBuild(clientConfig);

  const emitter = new EventEmitter();

  await new Promise((resolve) => {
    let resolved = false;
    webpack(serverConfig, async () => {
      if (resolved) {
        await db.SessionAction.destroy({ truncate: true });
        return emitter.emit('update');
      }
      resolved = true;
      resolve();
    });
  });

  await new Promise((resolve) => {
    let resolved = false;
    webpack(clientConfig, () => {
      if (resolved) {
        return emitter.emit('update');
      }
      resolved = true;
      resolve();
    });
  });

  return emitter;
}

async function run() {
  const numberOfPlayers = parseInt(process.env.PLAYERS_NUM || 2, 10);
  const playerInfo = allPlayerInfo.slice(0, numberOfPlayers);
  const players = await Promise.all(playerInfo.map(info => db.User.create(info)));
  const game = await db.Game.create({
    name: gameName,
  });
  const gameVersion = await db.GameVersion.create({
    gameId: game.id,
    version: 0,
    clientDigest: 'build',
    serverDigest: 'build',
  });
  const session = await db.Session.create({ creatorId: players[0].id, gameVersionId: gameVersion.id, seed: 0 });
  await Promise.all(players.map((player, i) => db.SessionUser.create({ sessionId: session.id, userId: player.id, color: colors[player.id], position: i })));
  const buildHandle = await build();
  const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
  const secretKey = process.env.SECRET_KEY || 'some secret';
  const port = parseInt(process.env.PORT || 3000);
  AWSMock.config.basePath = path.resolve(__dirname, '..', '..');
  const bucketName = path.basename(path.resolve(__dirname, '..'));
  const s3Provider = AWSMock.S3({
    params: { Bucket: bucketName },
  });
  const rabbitmqUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672';

  const server = createServer({
    secretKey, rabbitmqUrl, s3Provider,
  });
  console.log(`🎲🎲🎲 Ready on port ${port} 🎲🎲🎲`);
  const serverHandle = server.listen(port);
  buildHandle.on('update', async () => {
    await serverHandle.reload();
  });
}

if (process.env.NODE_ENV !== 'development') {
  console.error('this can only be run when NODE_ENV is set to development');
  process.exit(1);
}

run();
