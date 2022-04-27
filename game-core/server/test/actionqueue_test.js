/* global context, describe, it, beforeEach, afterEach, __dirname */

const assert = require('assert');
const chai = require('chai');
const spies = require('chai-spies');
const ActionQueue = require('../actionqueue');

chai.use(spies);
const matcher = ({ player, action }) => {
  if (action !== 'hi') return 'can only say hi';
  if (player !== 1) return 'must be player 1';
  return true;
};

describe('ActionQueue', () => {
  beforeEach(() => {
    this.actionQueue = new ActionQueue();
  });

  describe('waitForMatchingAction', () => {
    it('resolves on action', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          const result = await this.actionQueue.processAction({ player: 1, action: 'hi', args: ['"there"', '"gamer"'] });
          assert.equal(result, true);
          console.log('result', result);
          resolve();
        }, 100);
      });
      const { player, action, args } = await this.actionQueue.waitForMatchingAction(matcher, () => true);
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      assert.deepEqual(args, ['"there"', '"gamer"']);
      console.log(player, action);
      return promise;
    });

    it('resolves on action in any order', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          const { player, action, args } = await this.actionQueue.waitForMatchingAction(matcher, () => true);
          assert.equal(player, 1);
          assert.equal(action, 'hi');
          assert.deepEqual(args, ['"there"', '"gamer"']);
          console.log(player, action);
          resolve();
        }, 100);
      });
      const result = await this.actionQueue.processAction({ player: 1, action: 'hi', args: ['"there"', '"gamer"'] });
      assert.equal(result, true);
      console.log('result', result);
      return promise;
    });

    it('waits without action', done => {
      setTimeout(() => {
        done();
      }, 200);
      this.actionQueue.waitForMatchingAction(matcher, () => true).then(() => {
        assert(false, 'waitForMatchingAction completed early');
        done();
      });
    });

    it('waits with wrong action', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction({ player: 1, action: 'wrong action' });
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      this.actionQueue.waitForMatchingAction(matcher, () => true).then(() => {
        assert(false, 'waitForMatchingAction completed early');
      });
      return promise;
    });

    it('waits with wrong player', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction({ player: 2, action: 'hi' });
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      this.actionQueue.waitForMatchingAction(matcher, () => true).then(() => {
        assert(false, 'waitForMatchingAction completed early');
      });
      return promise;
    });

    it('resolves an action eventually', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction({ player: 1, action: 'wrong action' });
            console.log('result', result);
          }, Error);
        }, 100);
        setTimeout(async () => {
          const result = await this.actionQueue.processAction({ player: 1, action: 'hi' });
          console.log('result', result);
          resolve();
        }, 150);
      });
      const { player, action } = await this.actionQueue.waitForMatchingAction(matcher, () => true);
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      console.log(player, action);
      return promise;
    });
  });
});
