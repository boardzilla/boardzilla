import type {ActionReturn, QueueItem, QueueAction} from './types.d';

export default class ActionQueue {
  private queue: QueueItem[] = [];

  private queueResolution?: { resolve: (q: QueueItem) => void };

  async waitForMatchingAction(
    matchFn: (a: QueueAction) => boolean | string,
    processFn?: ({player, action, args}: QueueAction) => void | ActionReturn
  ): Promise<QueueAction> {
    let item;
    let succeeded = false;
    do {
      item = await this.waitForNext();
      try {
        const error = matchFn(item.action);
        if (error !== true) {
          console.log('Q rejecting matchFn', error);
          item.reject(Error(error || 'Reject match function'));
        } else {
          const result = processFn && processFn(item.action);
          item.resolve(result);
          succeeded = true;
        }
      } catch (e) {
        console.log('Q error from waitForMatchingAction', e, item);
        item.reject(e);
      }
    } while (!succeeded);

    return item.action;
  }

  async waitForNext() {
    if (this.queueResolution) throw Error('Error during play queue with simulataneous players taking turns. Please ensure that you have \'await\' in your game loop around player actions');
    const promise: Promise<QueueItem> = new Promise(resolve => {
      this.queueResolution = { resolve };
      this.pump();
    });
    return promise;
  }

  private pump() {
    if (this.queueResolution) {
      const queueItem = this.queue.shift();
      if (queueItem) {
        this.queueResolution.resolve(queueItem);
        delete this.queueResolution;
      }
    }
  }

  // runner calls await processAction(playerAction...)
  async processAction(action: QueueAction): Promise<void | ActionReturn> {
    return new Promise((resolve, reject) => {
      this.queue.push({ action, resolve, reject });
      this.pump();
    });
  }
}
