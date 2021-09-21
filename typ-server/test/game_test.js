/* global describe, it, beforeEach, afterEach, __dirname */

const WebSocket = require('ws')
const jwt = require("jsonwebtoken");
const createServer = require('../server')
const db = require('../models')
const path = require('path')

const SECRET_KEY = "asdasdasd"

const doneOnClosed = (done, sockets) => {
  const socket = sockets.shift()
  const onClosed = () => sockets.length ? doneOnClosed(done, sockets) : done()

  if (socket.readyState === 3) {
    return onClosed()
  }

  socket.on('close', onClosed)
}

describe("Playing a game", () => {
  beforeEach(async () => {
    for (let k in db.sequelize.models) {
      await db.sequelize.query(`TRUNCATE TABLE "${db.sequelize.models[k].tableName}" CASCADE`)
    }
  })

  beforeEach((done) => {
    const app = createServer({secretKey: SECRET_KEY, redisUrl: "redis://localhost:6379"})
    this.server = app.listen(3000, done)
  })

  beforeEach(async () => {
    const user1 = await db.User.create({email: "hello@asdf.com", password: "some-pass", name: "asd"})
    const user2 = await db.User.create({email: "hello2@asdf.com", password: "some-pass2", name: "asd2"})
    this.h1 = {authorization: `JWT ${jwt.sign({id: user1.id}, SECRET_KEY)}`}
    this.h2 = {authorization: `JWT ${jwt.sign({id: user2.id}, SECRET_KEY)}`}
    this.game = await db.Game.create({name: "hey", localDir: path.join(__dirname, 'fixtures/numberGuesser')})
    this.session = await db.Session.create({gameId: this.game.id, creatorId: user1.id})

    await db.SessionUser.create({sessionId: this.session.id, userId: user1.id})
    await db.SessionUser.create({sessionId: this.session.id, userId: user2.id})
  })

  afterEach((done) => {
    this.server.close(done)
  })

  it("should play a game", (done) => {
    const p1 = new WebSocket(`ws://localhost:3000/sessions/${this.session.id}`, {headers: this.h1})
    const p2 = new WebSocket(`ws://localhost:3000/sessions/${this.session.id}`, {headers: this.h2})

    doneOnClosed(done, [p1, p2])

    const guesser = socket => {
      return (data) => {
        const message = JSON.parse(data)
        if (message.type === 'state' && message.payload.phase === 'finished') return socket.close()
        if (message.type === 'state' && message.payload.allowedActions && message.payload.allowedActions.guess) {
          setImmediate(() => {
            const guess = Math.floor(Math.random() * 10) + 1
            socket.send(JSON.stringify({type: "action", "payload": {sequence: message.payload.sequence, action: ["guess", guess]}}))
          })
        }
      }
    }

    p1.on("message", guesser(p1, 0))
    p2.on("message", guesser(p2, 1))
  })
})
