/* global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

import assert from 'assert';
import chai from 'chai';
import spies from 'chai-spies';
import { game } from '../';

chai.use(spies);
const { expect } = chai;
let spendSpy: ReturnType<typeof chai.spy>;

describe('GameInterface', () => {
  beforeEach(() => {
    spendSpy = chai.spy();
    game.reset('test');
    game.setPlayers({ min: 4, max: 4 });

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
        action: (n: number) => game.set('tokens', game.get('tokens') as number + n),
      },
      takeOne: {
        prompt: 'take one counter',
        action: () => game.set('tokens', game.get('tokens') as number - 1),
      },
      hi: { prompt: 'hi' },
      spend: {
        select: ['gold', 'silver'],
        prompt: 'Spend resource',
        next: {
          select: [1, 2, 3],
          prompt: 'How much?',
          action: spendSpy,
        },
      },
    });

    game.initialize('rseed');
    game.addPlayers([
      { id: 101, name: 'Joe', color: 'red' },
      { id: 102, name: 'Jane', color: 'green' },
      { id: 103, name: 'Jack', color: 'yellow' },
      { id: 104, name: 'Jen', color: 'purple' },
    ]);
  });

  describe('start', () => {
    it('waits for playerStart', done => {
      game.startProcessing().then(() => assert(false, 'start completed without player start'));
      setTimeout(done, 100);
    });

    it('proceeds with playerStart', async () => {
      game.startProcessing();
      const result = await game.processPlayerStart();
      console.log(result);
    });
  });

  describe('replay', () => {
    it('plays', async () => {
      game.startProcessing();
      await game.processHistory([
        [2, 0, 'addSome', '2'],
        [3, 1, 'addSome', '2'],
        [3, 2, 'addSome', '200'], // will be ignored
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
      expect(game.sequence).equals(10);
    });
  });

  describe('processAction', () => {
    it('can run composite actions', async () => {
      game.startProcessing();
      await game.processPlayerStart();
      console.log('current', game.currentPlayerPosition);
      await game.processAction(1, 0, 'spend', '"gold"', '2');
      expect(spendSpy).to.have.been.called.with('gold', 2);
    });
  });
});
