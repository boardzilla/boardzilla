/* global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

const assert = require('assert');
const chai = require('chai');
const spies = require('chai-spies');
const { DOMParser } = require('linkedom/cached');
const Interface = require('../interface');

chai.use(spies);
const { expect } = chai;

describe('GameInterface', () => {
  beforeEach(() => {
    this.spendSpy = chai.spy();
    this.interface = new Interface(1);
    const game = this.interface;
    game.setPlayers({ min: 4 });
    game.initialize();
    game.addPlayers([
      { id: 101, name: 'Joe' },
      { id: 102, name: 'Jane' },
      { id: 103, name: 'Jack' },
      { id: 104, name: 'Jen' },
    ]);

    game.play(async () => {
      game.set('tokens', 4);
      do {
        await game.anyPlayerPlay(['addSome', 'spend']);
        console.log('in turn', game.get('tokens'), game.sequence);
      } while (game.get('tokens') < 8);
      game.currentPlayerPosition = 1;
      do {
        await game.playersInTurn(async (turn) => {
          console.log('playersInTurn', turn, game.currentPlayer);
          await game.currentPlayerPlay(['takeOne']);
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
  });

  describe('start', () => {
    it('waits for playerStart', done => {
      this.interface.startProcessing().then(() => assert(false, 'start completed without player start'));
      setTimeout(done, 100);
    });

    it('proceeds with playerStart', async () => {
      this.interface.startProcessing();
      const result = await this.interface.processPlayerStart();
      console.log(result);
    });
  });

  describe('replay', () => {
    it('plays', async () => {
      this.interface.startProcessing();
      await this.interface.processHistory([
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
      expect(this.interface.sequence).equals(10);
    });
  });

  describe('processAction', () => {
    it('can run composite actions', async () => {
      this.interface.startProcessing();
      await this.interface.processPlayerStart();
      console.log('current', this.interface.currentPlayerPosition);
      await this.interface.processAction(1, 0, 'spend', '"gold"', 2);
      expect(this.spendSpy).to.have.been.called.with('gold', 2);
    });
  });
});
