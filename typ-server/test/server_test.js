/* global context, describe, it, beforeEach, afterEach */

const fs = require('fs')
const WebSocket = require('ws')
const jwt = require("jsonwebtoken");
const assert = require('assert')
const request = require('request')
const rp = require('request-promise');
const AdmZip = require('adm-zip')
const bcrypt = require('bcrypt')

const createServer = require('../server')
const db = require('../models')


const SECRET_KEY = "asdasdasd"
const REDIS_URL = "redis://localhost:6379"

async function responseMatching(ws, matcher, p) {
  return new Promise(resolve => {
    ws.addEventListener('message', message => {
      message = JSON.parse(message.data)
      if (matcher(message)) {
        resolve(message)
        ws.removeEventListener('message', ws.listeners('message')[0])
      }
    })
  })
}

describe("Server", () => {
  beforeEach(async () => {
    for (let k in db.sequelize.models) {
      await db.sequelize.query(`TRUNCATE TABLE "${db.sequelize.models[k].tableName}" CASCADE`)
    }
  })

  beforeEach(done => {
    const app = createServer({secretKey: SECRET_KEY, redisUrl: REDIS_URL})
    this.server = app.listen(3000, done)
  })

  beforeEach(async () => {
    this.user = await db.User.create({email: "hello@asdf.com", password: "some-pass", name: "asd"})
    this.headers = {authorization: `JWT ${jwt.sign({id: this.user.id}, SECRET_KEY)}`}
    this.secretKey = "some great secret"
  })

  afterEach(() => {
    this.server.close()
  })

  it("should reject an unauthorized connection", done => {
    const ws = new WebSocket("ws://localhost:3000/sessions/123")

    ws.on('error', (err) => {
      assert(String(err).includes('Unexpected server response: 401'))
      done()
    })
  })

  it("should allow login", async () => {
    await db.User.create({name: 'joshbuddy', password: await bcrypt.hash('hello', 10)})
    const body = await rp.post("http://localhost:3000/login", {json: {name: 'joshbuddy', password: 'hello'}})
    assert(body.token, "has no token")
  })

  it("should create a user", async () => {
    const body = await rp.post("http://localhost:3000/users", {json: {name: 'joshbuddy', password: 'hello', email: 'joshbuddy@gmail.com'}})
    assert(body.id, "has no id")
  })

  context("authorized", () => {
    it("should accept an authorized connection", done => {
      const ws = new WebSocket("ws://localhost:3000/sessions/123", {headers: this.headers})

      ws.on('open', () => {
        ws.close()
      })

      ws.on('close', () => {
        done()
      })
    })

    it("should allow creating a new game", (done) => {
      const gameZip = new AdmZip()
      gameZip.addFile("server.js", fs.readFileSync(__dirname + "/fixtures/numberGuesser/server.js"))
      gameZip.addFile("index.js", fs.readFileSync(__dirname + "/fixtures/numberGuesser/client/index.js"))

      request.post("http://localhost:3000/games", {json: {name: 'hey', content: gameZip.toBuffer().toString('base64')}, headers: this.headers}, (error, response, body) => {
        assert(!error, "no error")
        assert(body.id, "has no id")
        done()
      })
    })

    context("with a game", () => {
      beforeEach(async () => {
        this.game = await db.Game.create({name: "hey", localDir: __dirname + '/fixtures/numberGuesser'})
      })

      it("should allow creating a session", (done) => {
        request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
          assert(!error, "no error")
          assert(body.id, "has no id")
          done()
        })
      })

      it("should allow getting a specific asset", (done) => {
        request.get(`http://localhost:3000/games/${this.game.id}/index.js`,{headers: this.headers}, (error, response, body) => {
          assert.equal(body, fs.readFileSync(__dirname + "/fixtures/numberGuesser/client/index.js"))
          done()
        })
      })

      it("should allow joining a game", (done) => {
        request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
          assert(!error, "no error")
          assert(body.id, "has no id")
          const ws = new WebSocket(`ws://localhost:3000/sessions/${body.id}`, {headers: this.headers})
          ws.on('message', message => {
            message = JSON.parse(message)
            if (message.type == 'update') {
              done()
            }
          })
        })
      })
    })

    context("with a session", () => {
      beforeEach(done => {
        db.Game.create({name: "hey", localDir: __dirname + '/fixtures/numberGuesser'}).then(game => {
          this.game = game
          request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
            this.sessionId = body.id
            this.ws = new WebSocket(`ws://localhost:3000/sessions/${body.id}`, {headers: this.headers})
            this.ws.on('open', done)
          })
        })
      })

      it("should allow locking a game piece", async () => {
        const key = "1-1"
        await responseMatching(this.ws, res => res.type == 'update')
        this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
        const message = await responseMatching(this.ws, res => res.type == 'updateLocks')
        assert.equal(message.data.find(lock => lock.key == key).user, this.user.id, 'lock not created')
      })

      context("with 2 players", () => {
        beforeEach(() => {
          db.User.create({email: "hello2@asdf.com", password: "some-pass", name: "asd2"}).then(user => {
            this.user2 = user
            const headers = {authorization: `JWT ${jwt.sign({id: user.id}, SECRET_KEY)}`}
            request.post(`http://localhost:3000/user-sessions/${this.sessionId}`, {json: {gameId: this.game.id}, headers: headers}, () => {
              this.ws2 = new WebSocket(`ws://localhost:3000/sessions/${this.sessionId}`, {headers})
            })
          })
        })

        it("should disallow breaking locks on a game piece", async () => {
          const key = "1-1"

          await responseMatching(this.ws, res => res.type == 'update', 1)
          this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks', 1)

          await new Promise(r => setTimeout(r, 250))

          this.ws2.send(JSON.stringify({type: "requestLock", payload: {key}}))
          const message = await responseMatching(this.ws2, res => res.type == 'updateLocks', 2)

          assert.equal(message.data.find(lock => lock.key == key).user, this.user.id, 'lock not created')
        })

        it("should release locks on a game piece", async () => {
          const key = "1-1"

          await responseMatching(this.ws, res => res.type == 'update')
          this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks')
          this.ws.send(JSON.stringify({type: "releaseLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks')

          await new Promise(r => setTimeout(r, 250))

          this.ws2.send(JSON.stringify({type: "requestLock", payload: {key}}))
          const message = await responseMatching(this.ws, res => res.type == 'updateLocks')

          assert.equal(message.data.find(lock => lock.key == key).user, this.user2.id, 'lock not available')
        })
      })
    })
  })
})
