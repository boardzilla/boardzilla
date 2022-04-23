/* global context, describe, it, beforeEach, afterEach, __dirname */

const assert = require('assert');
const chai = require('chai');
const spies = require('chai-spies');
const ActionQueue = require('../actionqueue');

chai.use(spies);

describe('ActionQueue', () => {
  beforeEach(() => {
    this.actionQueue = new ActionQueue();
  });

  describe('waitForQualifyingAction', () => {
    it('resolves on action', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          const result = await this.actionQueue.processAction(1, 'hi', '"there"', '"gamer"');
          assert.equal(result, true);
          console.log('result', result);
          resolve();
        }, 100);
      });
      const [player, action, ...args] = await this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true);
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      assert.deepEqual(args, ['"there"', '"gamer"']);
      console.log(player, action);
      return promise;
    });

    it('resolves on action in any order', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          const [player, action, ...args] = await this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true);
          assert.equal(player, 1);
          assert.equal(action, 'hi');
          assert.deepEqual(args, ['"there"', '"gamer"']);
          console.log(player, action);
          resolve();
        }, 100);
      });
      const result = await this.actionQueue.processAction(1, 'hi', '"there"', '"gamer"');
      assert.equal(result, true);
      console.log('result', result);
      return promise;
    });

    it('waits without action', done => {
      setTimeout(() => {
        done();
      }, 200);
      this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true).then(() => {
        assert(false, 'waitForQualifyingAction completed early');
        done();
      });
    });

    it('waits with wrong action', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction(1, 'wrong action');
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true).then(() => {
        assert(false, 'waitForQualifyingAction completed early');
      });
      return promise;
    });

    it('waits with wrong player', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction(2, 'hi');
            console.log('result', result);
          }, Error);
          resolve();
        }, 100);
      });
      this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true).then(() => {
        assert(false, 'waitForQualifyingAction completed early');
      });
      return promise;
    });

    it('resolves an action eventually', async () => {
      const promise = new Promise(resolve => {
        setTimeout(async () => {
          assert.rejects(async () => {
            const result = await this.actionQueue.processAction(1, 'wrong action');
            console.log('result', result);
          }, Error);
        }, 100);
        setTimeout(async () => {
          const result = await this.actionQueue.processAction(1, 'hi');
          console.log('result', result);
          resolve();
        }, 150);
      });
      const [player, action] = await this.actionQueue.waitForQualifyingAction(['hi'], 1, () => true);
      assert.equal(player, 1);
      assert.equal(action, 'hi');
      console.log(player, action);
      return promise;
    });
  });
});
