/* global context, describe, it, beforeEach, afterEach */

const fs = require('fs')
const path = require('path')
const WebSocket = require('ws')
const jwt = require("jsonwebtoken");
const assert = require('assert')
const request = require('request')
const rp = require('request-promise');
const bcrypt = require('bcrypt')
const createServer = require('../server')
const db = require('../models')
const AWSMock = require('mock-aws-s3')

const SECRET_KEY = "asdasdasd"
const REDIS_URL = "redis://localhost:6379"

AWSMock.config.basePath = path.resolve(path.join(__dirname))

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
    console.log("s3 bucket base path is ", AWSMock.config.basePath)
    // const bucketName = path.basename(path.resolve(__dirname, '..'))
    console.log("s3 bucket name is ", AWSMock.config.basePath, "fixtures")
    const s3Provider = AWSMock.S3({
      params: { Bucket: "fixtures" }
    });
    const app = createServer({secretKey: SECRET_KEY, redisUrl: REDIS_URL, s3Provider, zkConnectionString: "localhost:2181"})
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
    console.log("body", body)
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

    // it("should allow creating a new game", (done) => {
    //   const gameZip = new AdmZip()
    //   gameZip.addFile("server.js", fs.readFileSync(__dirname + "/fixtures/numberGuesser/server.js"))
    //   gameZip.addFile("index.js", fs.readFileSync(__dirname + "/fixtures/numberGuesser/client/index.js"))

    //   request.post("http://localhost:3000/publish", {json: {name: 'hey', serverDigest: "server-digest", clientDigest: "client-digest"}, headers: this.headers}, (error, response, body) => {
    //     assert(!error, "no error")
    //     assert(body.id, "has no id")
    //     done()
    //   })
    // })

    context("with a game", () => {
      beforeEach(async () => {
        this.game = await db.Game.create({name: "numberGuesser"})
        this.gameVersion = await db.GameVersion.create({gameId: this.game.id, serverDigest: "0", clientDigest: "0", version: 0})
      })

      it("should allow creating a session", (done) => {
        request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
          assert(!error, "no error")
          assert(body.id, "has no id")
          done()
        })
      })

      it("should allow joining a game", (done) => {
        request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
          assert(!error, "no error")
          assert(body.id, "has no id")
          const ws = new WebSocket(`ws://localhost:3000/sessions/${body.id}`, {headers: this.headers})
          ws.on('message', data => {
            const message = JSON.parse(data)
            console.log(message)
            if (message.type == 'state' && message.payload.allowedActions.guess) {
              done()
            }
          })
        })
      })
    })

    context("with a session", () => {
      beforeEach(async () => {
        this.game = await db.Game.create({name: "numberGuesser"})
        this.gameVersion = await db.GameVersion.create({gameId: this.game.id, serverDigest: "0", clientDigest: "0", version: 0})
        this.session = await db.Session.create({gameVersionId: this.gameVersion.id, creatorId: this.user.id})
      })

      beforeEach(done => {
        request.post("http://localhost:3000/sessions", {json: {gameId: this.game.id}, headers: this.headers}, (error, response, body) => {
          this.sessionId = body.id
          this.ws = new WebSocket(`ws://localhost:3000/sessions/${body.id}`, {headers: this.headers})
          this.ws.on('open', done)
        })
      })

      it("should allow getting a specific asset", (done) => {
        request.get(`http://localhost:3000/play/${this.session.id}/index.js`,{headers: this.headers}, (error, response, body) => {
          assert.equal(body, fs.readFileSync(__dirname + "/fixtures/numberGuesser/client/0/index.js"))
          done()
        })
      })

      it("should allow locking a game piece", async () => {
        const key = "1-1"
        await responseMatching(this.ws, res => res.type == 'state')
        this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
        const message = await responseMatching(this.ws, res => res.type == 'updateLocks')
        console.log("message.payload", message.payload)
        assert.equal(message.payload[key], this.user.id, 'lock not created')
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

          await responseMatching(this.ws, res => res.type == 'state', 1)
          this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks', 1)

          await new Promise(r => setTimeout(r, 250))

          this.ws2.send(JSON.stringify({type: "requestLock", payload: {key}}))
          const message = await responseMatching(this.ws2, res => res.type == 'updateLocks', 2)

          assert.equal(message.payload[key], this.user.id, 'lock not created')
        })

        it("should release locks on a game piece", async () => {
          const key = "1-1"

          await responseMatching(this.ws, res => res.type == 'state')
          this.ws.send(JSON.stringify({type: "requestLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks')
          this.ws.send(JSON.stringify({type: "releaseLock", payload: {key}}))
          await responseMatching(this.ws, res => res.type == 'updateLocks')

          await new Promise(r => setTimeout(r, 250))

          this.ws2.send(JSON.stringify({type: "requestLock", payload: {key}}))
          const message = await responseMatching(this.ws, res => res.type == 'updateLocks')

          assert.equal(message.payload[key], this.user2.id, 'lock not available')
        })
      })
    })
  })
})
