/* global describe, it, beforeEach */

import assert from 'assert';
import chai from 'chai';
import spies from 'chai-spies';
import ActionQueue from '../actionqueue';

chai.use(spies);
const matcher = ({ player, action }) => {
  if (action !== 'hi') return 'can only say hi';
  if (player !== 1) return 'must be player 1';
  return true;
};

let actionQueue: ActionQueue;

describe('ActionQueue', () => {
  beforeEach(() => {
    actionQueue = new ActionQueue();
  });

  describe('waitForMatchingAction', () => {
    it('resolves on action', async () => {
      const promise: Promise<void> = new Promise(resolve => {
        setTimeout(async () => {
          const result = await actionQueue.processAction({ player: 1, action: 'hi', args: ['"there"', '"gamer"'] });
          assert.equal(result, true);
          console.log('result', result);
          resolve();
        }, 100);
      });
      const { player, action, args } = await actionQueue.waitForMatchingAction(matcher, () => ({log: null, prompt: null}));
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      assert.deepEqual(args, ['"there"', '"gamer"']);
      console.log(player, action);
      return promise;
    });

    it('resolves on action in any order', async () => {
      const promise: Promise<void> = new Promise(resolve => {
        setTimeout(async () => {
          const { player, action, args } = await actionQueue.waitForMatchingAction(matcher, () => ({log: 'hi', prompt: 'there'}));
          assert.equal(player, 1);
          assert.equal(action, 'hi');
          assert.deepEqual(args, ['"there"', '"gamer"']);
          console.log(player, action);
          resolve();
        }, 100);
      });
      const result = await actionQueue.processAction({ player: 1, action: 'hi', args: ['"there"', '"gamer"'] });
      assert.deepEqual(result, {log: 'hi', prompt: 'there'});
      return promise;
    });

    it('waits without action', done => {
      setTimeout(() => {
        done();
      }, 200);
      actionQueue.waitForMatchingAction(matcher, () => ({log: null, prompt: null})).then(() => {
        assert(false, 'waitForMatchingAction completed early');
        done();
      });
    });

    it('waits with wrong action', async () => {
      const promise: Promise<void> = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await actionQueue.processAction({ player: 1, action: 'wrong action' });
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      actionQueue.waitForMatchingAction(matcher, () => ({log: null, prompt: null})).then(() => {
        assert(false, 'waitForMatchingAction completed early');
      });
      return promise;
    });

    it('waits with wrong player', async () => {
      const promise: Promise<void> = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await actionQueue.processAction({ player: 2, action: 'hi' });
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      actionQueue.waitForMatchingAction(matcher, () => ({log: null, prompt: null})).then(() => {
        assert(false, 'waitForMatchingAction completed early');
      });
      return promise;
    });

    it('resolves an action eventually', async () => {
      const promise: Promise<void> = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await actionQueue.processAction({ player: 1, action: 'wrong action' });
            console.log('result', result);
          }, Error);
        }, 100);
        setTimeout(async () => {
          const result = await actionQueue.processAction({ player: 1, action: 'hi' });
          console.log('result', result);
          resolve();
        }, 150);
      });
      const { player, action } = await actionQueue.waitForMatchingAction(matcher, () => ({log: null, prompt: null}));
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      console.log(player, action);
      return promise;
    });
  });
});
