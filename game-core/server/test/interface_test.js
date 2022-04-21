/* global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

const assert = require('assert');
const chai = require('chai');
const spies = require('chai-spies');
const { DOMParser } = require('linkedom');
const Interface = require('../interface');

chai.use(spies);
const { expect } = chai;
const { times } = require('../utils');

describe('GameInterface', () => {
  beforeEach(() => {
    this.updateSpy = chai.spy();
    this.spendSpy = chai.spy();
    this.interface = new Interface(1);
    const game = this.interface;
    game.onUpdate(this.updateSpy);
    game.setPlayers({ min: 4 });
    [101, 102, 103, 104].forEach(p => game.addPlayer(p, `p${p}`));

    game.play(async () => {
      game.set('tokens', 4);
      do {
        await game.anyPlayerPlay('addSome');
        console.log('in turn', game.get('tokens'), game.sequence);
      } while (game.get('tokens') < 8);
      game.currentPlayer = 1;
      do {
        await game.playersInTurn(async (turn) => {
          console.log('playersInTurn', turn, game.currentPlayer);
          await game.currentPlayerPlay('takeOne');
        });
      } while (game.get('tokens') > 0);
    });

    game.defineActions({
      addSome: {
        prompt: 'add some counters',
        min: 1,
        max: 3,
        action: (n) => game.set('tokens', game.get('tokens') + n),
      },
      takeOne: {
        prompt: 'take one counter',
        action: () => game.set('tokens', game.get('tokens') - 1),
      },
      hi: { prompt: 'hi' },
      spend: {
        select: ['gold', 'silver'],
        prompt: 'Spend resource',
        next: {
          select: [1, 2, 3],
          prompt: 'How much?',
          action: this.spendSpy,
        },
      },
    });

    game.initialize();
    game.overridePhase('ready');
  });

  describe('replay', () => {
    it('plays', async () => {
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
      ]);
      expect(this.updateSpy).to.have.been.called.exactly(4);
    });
  });

  describe('waitForAction', () => {
    beforeEach(() => {
      this.interface.sequence = 0;
      this.interface.completeAction = chai.spy();
      this.interface.currentActions = ['hi'];
      this.interface.currentPlayer = 1;
    });

    it('resolves on action', async () => {
      setTimeout(() => this.interface.receiveAction(101, 0, 'hi', '"there"', '"gamer"'), 100);
      const [action, ...args] = await this.interface.waitForAction();
      assert.equal(action, 'hi');
      assert.deepEqual(args, ['there', 'gamer']);
      assert.equal(this.interface.listenerCount('action'), 0);
      expect(this.interface.completeAction).to.have.been.called.once;
    });

    it('waits without action', (done) => {
      setTimeout(() => {
        assert.equal(this.interface.listenerCount('action'), 1);
        done();
      }, 200);
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early');
        expect(this.interface.completeAction).not.to.have.been.called;
        done();
      });
    });

    it('waits with wrong action', (done) => {
      setTimeout(() => this.interface.receiveAction(101, 0, 'wrong action'), 100);
      setTimeout(done, 200);
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early');
        expect(this.interface.completeAction).not.to.have.been.called;
        done();
      });
    });

    it('waits with wrong player', (done) => {
      setTimeout(() => this.interface.receiveAction(102, 0, 'hi', '"there"', '"gamer"'), 100);
      setTimeout(done, 200);
      this.interface.waitForAction().then(() => {
        assert(false, 'waitForAction completed early');
        expect(this.interface.completeAction).not.to.have.been.called;
        done();
      });
    });

    it('processes out of sequence', async () => {
      setTimeout(() => this.interface.receiveAction(101, 1, 'hi', '"there"', '"gamer"'), 100);
      await this.interface.waitForAction(['hi'], 1);
    });

    it('resolves on action eventually', async () => {
      setTimeout(() => this.interface.receiveAction(101, 0, 'wrong action'), 100);
      setTimeout(() => this.interface.receiveAction(101, 0, 'hi', '"there"', '"gamer"'), 100);
      await this.interface.waitForAction(['hi'], 1);
      expect(this.interface.completeAction).to.have.been.called.once;
    });
  });

  describe('chooseAction', () => {
    it('can run composite actions', () => {
      this.interface.runAction('spend', ['gold', 2]);
      expect(this.spendSpy).to.have.been.called.with('gold', 2);
    });
  });
});
