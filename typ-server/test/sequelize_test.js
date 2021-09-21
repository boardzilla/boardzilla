/* global context, describe, it, beforeEach, afterEach, __dirname */

const assert = require('assert')
const db = require('../models')

describe("sequelize", () => {
  beforeEach(async () => {
    for (let k in db.sequelize.models) {
      await db.sequelize.query(`TRUNCATE TABLE "${db.sequelize.models[k].tableName}" CASCADE`)
    }
  })

  it("stores and updates json", async () => {
    await db.Session.create({id: 1, gameId: 1, creatorId: 1, locks: {}})
    let session = await db.Session.findOne()
    await session.update({locks: {a:2}})
    session = await db.Session.findOne()
    console.log(session.locks)
    assert(session.locks.a === 2)
    await session.update({"locks.b": 3})
    session = await db.Session.findOne()
    console.log(session.locks)
    assert(session.locks.a === 2)
    assert(session.locks.b === 3)
    await session.update({locks: {d:4}})
    session = await db.Session.findOne()
    console.log(session.locks)
    assert(session.locks.a === 2)
    assert(session.locks.b === 3)
    assert(session.locks.d === 4)
  })
})
