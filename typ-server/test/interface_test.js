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
    this.spendSpy = chai.spy(console.log)
    const game = this.interface = new Interface(101)
    game.on('update', this.updateSpy)
    game.minPlayers = 4;
    [101,102,103,104].forEach(p => game.addPlayer(p))
    game.play = async () => {
      game.set('tokens', 4)
      do {
        await game.anyPlayerPlay('addSome')
        console.log('in turn', game.get('tokens'), game.sequence)
      } while (game.get('tokens') < 8)
      game.setCurrentPlayer(1)
      do {
        await game.playersInTurn(async turn => {
          console.log('playersInTurn', turn, game.currentPlayer)
          await game.currentPlayerPlay('takeOne')
        })
      } while (game.get('tokens') > 0)
    }
    game.actions = {
      addSome: {
        min: 1,
        max: 3,
        action: n => game.set('tokens', game.get('tokens') + n)
      },
      takeOne: {
        action: () => game.set('tokens', game.get('tokens') - 1)
      },
      hi: {},
      spend: {
        options: ['gold', 'silver'],
        prompt: 'Spend resource',
        next: {
          options: [1, 2, 3],
          prompt: 'How much?',
          action: this.spendSpy
        }
      }
    }
  })

  describe("replay", () => {
    it("plays", async () => {
      await this.interface.start([
        [2, 0, 'addSome', 2],
        [3, 1, 'addSome', 2],
        [3, 2, 'addSome', 200], // will be ignored
        [1, 2, 'takeOne'],
        [2, 3, 'takeOne'],
        [3, 4, 'takeOne'],
        [4, 5, 'takeOne'],
        [4, 6, 'takeOne'], // will be ignored
        [1, 6, 'takeOne'],
        [2, 7, 'takeOne'],
        [3, 8, 'takeOne'],
        [4, 9, 'takeOne'],
      ])
      expect(this.updateSpy).to.have.been.called.exactly(4)
    })
  })

  describe("waitForAction", () => {
    beforeEach(() => {
      this.interface.sequence = 0
      this.interface.registerAction = chai.spy()
      this.interface.currentActions = ['hi']
      this.interface.currentPlayer = 1
    })

    it('resolves on action', async () => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'hi', '"there"', '"gamer"'), 100)
      const [action, ...args] = await this.interface.waitForAction()
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
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('waits with wrong action', done => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'wrong action'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('waits with wrong player', done => {
      setTimeout(() => this.interface.emit('action', true, 2, 0, 'hi'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('ignores out of sequence', done => {
      setTimeout(() => this.interface.emit('action', true, 1, 1, 'hi'), 100)
      setTimeout(done, 200)
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early')
        expect(this.interface.registerAction).not.to.have.been.called
        done()
      })
    })

    it('resolves on action eventually', async () => {
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'wrong action'), 100)
      setTimeout(() => this.interface.emit('action', true, 1, 0, 'hi'), 150)
      await this.interface.waitForAction(['hi'], 1)
      expect(this.interface.registerAction).to.have.been.called.once
    })
  })

  describe("chooseAction", () => {
    it("can run composite actions", () => {
      this.interface.runAction('spend', ['gold', 2])
      expect(this.spendSpy).to.have.been.called.with('gold', 2)
    })
  })
})
