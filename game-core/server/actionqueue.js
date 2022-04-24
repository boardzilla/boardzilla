class ActionQueue {
  #queue = [];

  #queueResolution;

  async waitForMatchingAction(matchFn, processFn) {
    let item;
    let succeeded = false;
    while (!succeeded) {
      item = await this.waitForNext();
      console.log('waitForNext', item);
      const error = matchFn(item.action);
      if (error !== true) {
        this.rejectQueueItem(item, error);
      } else {
        try {
          console.log('running action', item.action);
          const result = processFn && processFn(item.action);
          this.#queueResolution = null;
          item.resolve(result);
          succeeded = true;
        } catch (e) {
          console.log('error from processFn', e, item);
          this.rejectQueueItem(item, e);
        }
      }
    }

    return item.action;
  }

  rejectQueueItem(item, reason) {
    this.#queueResolution = null;
    console.log('rejecting action', reason);
    item.reject(reason instanceof Error ? reason : Error(reason));
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
      if (queueItem) this.#queueResolution.resolve(queueItem);
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
