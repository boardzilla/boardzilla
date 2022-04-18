/* global context, describe, it, beforeEach, afterEach */

const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const needle = require('needle');
const bcrypt = require('bcrypt');
const AWSMock = require('mock-aws-s3');
const { assert } = require('chai');
const createServer = require('../server');
const db = require('../models');

const SECRET_KEY = 'asdasdasd';
const REDIS_URL = 'redis://localhost:6379';

process.env.PUBLISH_TOKEN = 'token';

AWSMock.config.basePath = path.resolve(path.join(__dirname));

async function responseMatching(ws, matcher, _) {
  return new Promise((resolve) => {
    ws.addEventListener('message', (message) => {
      message = JSON.parse(message.data);
      if (matcher(message)) {
        resolve(message);
        ws.removeEventListener('message', ws.listeners('message')[0]);
      }
    });
  });
}

describe('Server', () => {
  beforeEach(async () => {
    await db.sequelize.truncate({ cascade: true });
  });

  beforeEach((done) => {
    const s3Provider = AWSMock.S3({
      params: { Bucket: 'fixtures' },
    });
    const app = createServer({
      secretKey: SECRET_KEY, redisUrl: REDIS_URL, s3Provider, zkConnectionString: 'localhost:2181',
    });
    this.server = app.listen(3000, done);
  });

  beforeEach(async () => {
    this.user = await db.User.create({ email: 'hello@asdf.com', password: 'some-pass', name: 'asd' });
    this.headers = { authorization: `JWT ${jwt.sign({ id: this.user.id }, SECRET_KEY)}` };
    this.secretKey = 'some great secret';
  });

  afterEach(() => {
    this.server.close();
  });

  it('should reject an unauthorized connection', (done) => {
    const ws = new WebSocket('ws://localhost:3000/sessions/123');

    ws.on('error', (err) => {
      assert(String(err).includes('Unexpected server response: 401'));
      done();
    });
  });

  describe('with a valid user', () => {
    beforeEach(async () => {
      await db.User.create({ name: 'joshbuddy', password: await bcrypt.hash('hello', 10) });
    });

    it('should allow login', async () => {
      const response = await needle('post', 'http://localhost:3000/login', { name: 'joshbuddy', password: 'hello' });
      assert.equal(response.statusCode, 302);
    });

    it('should not allow login with the wrong password', async () => {
      const response = await needle('post', 'http://localhost:3000/login', { name: 'joshbuddy', password: 'not-hello' });
      assert.equal(response.statusCode, 302);
      assert.equal(response.cookies.error, 'incorrect login');
    });
  });

  it('should create a user', async () => {
    const response = await needle('post', 'http://localhost:3000/users', { name: 'joshbuddy', password: 'hello', email: 'someone@gmail.com' });
    assert.equal(response.statusCode, 302);
    assert.equal(response.headers.location, '/');
    assert.isUndefined(response.cookies.error);
  });

  it('should ignore creating a game version without a publish token', async () => {
    const response = await needle(
      'put',
      'http://localhost:3000/publish',
      { name: 'hey', serverDigest: 'server-digest', clientDigest: 'client-digest' },
      { json: true, headers: { 'x-publish-token': 'some-other-token' } },
    );
    assert.equal(response.statusCode, 401);
  });

  context('authorized', () => {
    it('should accept an authorized connection', (done) => {
      const ws = new WebSocket('ws://localhost:3000/sessions/123', { headers: this.headers });

      ws.on('open', () => {
        ws.close();
      });

      ws.on('close', () => {
        done();
      });
    });

    it('should allow creating a new game version', async () => {
      const response = await needle(
        'put',
        'http://localhost:3000/publish',
        { name: 'hey', serverDigest: 'server-digest', clientDigest: 'client-digest' },
        { json: true, headers: { 'x-publish-token': 'token' } },
      );
      assert.equal(response.statusCode, 200);
      assert.equal(response.body.version, 1);
    });

    it('should allow creating a subsequent game version', async () => {
      const response1 = await needle(
        'put',
        'http://localhost:3000/publish',
        { name: 'hey', serverDigest: 'server-digest', clientDigest: 'client-digest' },
        { json: true, headers: { 'x-publish-token': 'token' } },
      );
      assert.equal(response1.statusCode, 200);
      assert.equal(response1.body.version, 1);

      const response2 = await needle(
        'put',
        'http://localhost:3000/publish',
        { name: 'hey', serverDigest: 'server-digest2', clientDigest: 'client-digest2' },
        { json: true, headers: { 'x-publish-token': 'token' } },
      );
      assert.equal(response2.statusCode, 200);
      assert.equal(response2.body.version, 2);
    });

    it('should skip creating an identical version', async () => {
      const response1 = await needle(
        'put',
        'http://localhost:3000/publish',
        { name: 'hey', serverDigest: 'server-digest', clientDigest: 'client-digest' },
        { json: true, headers: { 'x-publish-token': 'token' } },
      );
      assert.equal(response1.statusCode, 200);
      assert.equal(response1.body.version, 1);

      const response2 = await needle(
        'put',
        'http://localhost:3000/publish',
        { name: 'hey', serverDigest: 'server-digest', clientDigest: 'client-digest' },
        { json: true, headers: { 'x-publish-token': 'token' } },
      );
      assert.equal(response2.statusCode, 200);
      assert.equal(response2.body.version, 1);
    });

    context('with a game', () => {
      beforeEach(async () => {
        this.game = await db.Game.create({ name: 'numberGuesser' });
        this.gameVersion = await db.GameVersion.create({
          gameId: this.game.id, serverDigest: '0', clientDigest: '0', version: 0,
        });
      });

      it('should allow creating a session', async () => {
        const response = await needle(
          'post',
          'http://localhost:3000/sessions',
          { gameId: this.game.id },
          { json: true, headers: this.headers },
        );
        assert.equal(response.statusCode, 200);
        assert.isNumber(response.body.id);
      });

      it('should allow joining a game', async () => {
        const response = await needle(
          'post',
          'http://localhost:3000/sessions',
          { gameId: this.game.id },
          { json: true, headers: this.headers },
        );
        assert.equal(response.statusCode, 200);
        assert.isNumber(response.body.id);
        await new Promise((resolve) => {
          const ws = new WebSocket(`ws://localhost:3000/sessions/${response.body.id}`, { headers: this.headers });
          ws.on('message', (data) => {
            const message = JSON.parse(data);
            // if (message.type === 'state' && message.payload.allowedActions.guess) {
            ws.close();
            resolve();
            // }
          });
        });
      });
    });

    context('with a session', () => {
      beforeEach(async () => {
        this.game = await db.Game.create({ name: 'numberGuesser' });
        this.gameVersion = await db.GameVersion.create({
          gameId: this.game.id, serverDigest: '0', clientDigest: '0', version: 0,
        });
        this.session = await db.Session.create({ gameVersionId: this.gameVersion.id, creatorId: this.user.id });
      });

      beforeEach(async () => {
        const response = await needle(
          'post',
          'http://localhost:3000/sessions',
          { gameId: this.game.id },
          { json: true, headers: this.headers },
        );
        assert.equal(response.statusCode, 200);
        this.sessionId = response.body.id;
        this.ws = new WebSocket(`ws://localhost:3000/sessions/${this.sessionId}`, { headers: this.headers });
        await new Promise(resolve => {
          this.ws.on('open', resolve);
        });
      });

      afterEach(async () => {
        this.ws.close();
      });

      it('should allow getting a specific asset', async () => {
        const response = await needle(
          'get',
          `http://localhost:3000/play/${this.session.id}/index.js`,
          { json: true, headers: this.headers },
        );
        assert.equal(response.body.toString(), fs.readFileSync(`${__dirname}/fixtures/numberGuesser/client/0/index.js`).toString());
      });

      it('should allow locking a game piece', async () => {
        const key = '1-1';
        await responseMatching(this.ws, (res) => res.type === 'state');
        this.ws.send(JSON.stringify({ type: 'requestLock', payload: { key } }));
        const message = await responseMatching(this.ws, (res) => res.type === 'updateLocks');
        assert.equal(message.payload[key], this.user.id, 'lock not created');
      });

      context('with 2 players', () => {
        beforeEach(async () => {
          this.user2 = await db.User.create({ email: 'hello2@asdf.com', password: 'some-pass', name: 'asd2' });
          const headers = { authorization: `JWT ${jwt.sign({ id: this.user2.id }, SECRET_KEY)}` };
          const response = await needle(
            'post',
            `http://localhost:3000/user-sessions/${this.sessionId}`,
            { gameId: this.game.id },
            { json: true, headers },
          );
          assert.equal(response.statusCode, 200);
          this.ws2 = new WebSocket(`ws://localhost:3000/sessions/${this.sessionId}`, { headers });
          await new Promise(resolve => {
            this.ws2.on('open', resolve);
          });
        });

        afterEach(async () => {
          this.ws2.close();
        });

        it('should disallow breaking locks on a game piece', async () => {
          const key = '1-1';

          await responseMatching(this.ws, (res) => res.type === 'state', 1);
          this.ws.send(JSON.stringify({ type: 'requestLock', payload: { key } }));
          await responseMatching(this.ws, (res) => res.type === 'updateLocks', 1);

          await new Promise((r) => setTimeout(r, 250));

          this.ws2.send(JSON.stringify({ type: 'requestLock', payload: { key } }));
          const message = await responseMatching(this.ws2, (res) => res.type === 'updateLocks', 2);

          assert.equal(message.payload[key], this.user.id, 'lock not created');
        });

        it('should release locks on a game piece', async () => {
          const key = '1-1';

          await responseMatching(this.ws, (res) => res.type === 'state');
          this.ws.send(JSON.stringify({ type: 'requestLock', payload: { key } }));
          await responseMatching(this.ws, (res) => res.type === 'updateLocks');
          this.ws.send(JSON.stringify({ type: 'releaseLock', payload: { key } }));
          await responseMatching(this.ws, (res) => res.type === 'updateLocks');

          await new Promise((r) => setTimeout(r, 250));

          this.ws2.send(JSON.stringify({ type: 'requestLock', payload: { key } }));
          const message = await responseMatching(this.ws, (res) => res.type === 'updateLocks');

          assert.equal(message.payload[key], this.user2.id, 'lock not available');
        });
      });
    });
  });
});
