class ActionQueue {
  #queue = [];

  #queueResolution;

  async waitForMatchingAction(matchFn, processFn) {
    let item;
    let succeeded = false;
    while (!succeeded) {
      item = await this.waitForNext();
      try {
        const error = matchFn(item.action);
        if (error !== true) {
          console.log('Q rejecting matchFn', error);
          item.reject(Error(error));
        } else {
          const result = processFn && processFn(item.action);
          item.resolve(result);
          succeeded = true;
        }
      } catch (e) {
        console.log('Q error from waitForMatchingAction', e, item);
        item.reject(e);
      }
    }

    return item.action;
  }

  async waitForNext() {
    if (this.#queueResolution) throw Error('single consumer at a time');
    const promise = new Promise((resolve, reject) => {
      this.#queueResolution = { resolve, reject };
      this.#pump();
    });
    return promise;
  }

  #pump() {
    if (this.#queueResolution) {
      const queueItem = this.#queue.shift();
      if (queueItem) {
        this.#queueResolution.resolve(queueItem);
        this.#queueResolution = null;
      }
    }
  }

  // runner calls await processAction(playerAction...)
  async processAction(action) {
    return new Promise((resolve, reject) => {
      this.#queue.push({ action, resolve, reject });
      this.#pump();
    });
  }
}

module.exports = ActionQueue;
