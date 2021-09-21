/* global context, describe, it, beforeEach, afterEach, __dirname */

const Interface = require('../game/interface')
const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

describe("GameInterface", () => {
  beforeEach(() => {
    this.updateSpy = chai.spy(console.log)
    const game = this.interface = new Interface(101)
    game.on('update', this.updateSpy)
    game.minPlayers = 4;
    [101,102,103,104].forEach(p => game.addPlayer(p))
    game.play = async () => {
      game.set('tokens', 4)
      do {
        await game.anyPlayerPlay(game.moves.addSome)
      } while (game.get('tokens') < 8)
        
      game.setCurrentPlayer(0)
      do {
        await game.playersInTurn(async turn => {
          await game.currentPlayerPlay(game.moves.takeOne)
        })
      } while (game.get('tokens') > 0)
    }
    game.moves = {
      addSome: n => {game.set('tokens', game.get('tokens') + n); return true},
      takeOne: () => {game.set('tokens', game.get('tokens') - 1); return true}
    }
  })

  describe("replay", () => {
    it("plays", async () => {
      await this.interface.start([
        [1, 0, 'addSome', 2],
        [2, 1, 'addSome', 2],
        [3, 2, 'addSome', 200], // will be ignored
        [0, 2, 'takeOne'],
        [1, 3, 'takeOne'],
        [2, 4, 'takeOne'],
        [3, 5, 'takeOne'],
        [3, 6, 'takeOne'], // will be ignored
        [0, 6, 'takeOne'],
        [1, 7, 'takeOne'],
        [2, 8, 'takeOne'],
        [3, 9, 'takeOne'],
      ])
      expect(this.updateSpy).to.have.been.called.exactly(4)
    })
  })

  describe("waitForAction", () => {
    beforeEach(() => {
      this.moves = {
        hi: () => true,
      }
      this.interface.sequence = 0
      this.interface.registerAction = chai.spy()
    })

    it('resolves on action', async () => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'hi', 'there', 'gamer'), 100)
      const [action, ...args] = await this.interface.waitForAction([this.moves.hi], 1)
      assert.equal(action, 'hi')
      assert.deepEqual(args, ['there', 'gamer'])
      assert.equal(this.interface.listenerCount('action'), 0)
      expect(this.interface.registerAction).to.have.been.called.once
    })

    it('waits without action', done => {
      setTimeout(() => {
        assert.equal(this.interface.listenerCount('action'), 1)
        done()
      }, 200)
      this.interface.waitForAction([this.moves.hi], 1).then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('waits with wrong action', done => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'wrong action'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction([this.moves.hi], 1).then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('waits with wrong player', done => {
      setTimeout(() => this.interface.emit('action', true, 2, 0, 'hi'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction([this.moves.hi], 1).then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('ignores out of sequence', done => {
      setTimeout(() => this.interface.emit('action', true, 1, 1, 'hi'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction([this.moves.hi], 1).then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('resolves on action eventually', async () => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'wrong action'), 100)
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'hi'), 150)
      await this.interface.waitForAction([this.moves.hi], 1)
      expect(this.interface.registerAction).to.have.been.called.once
    })
  })
})
