class ActionQueue {
  #queue = [];

  #queueResolution;

  // interface calls await waitForQualifyingAction(fromPlayer, allowedActions) (or higher-level wrapping functions)
  async waitForQualifyingAction(actions, player, fn) {
    let action;
    let actionSucceeded = false;
    do {
      action = await this.waitForNextAction();
      if (!actions.includes(action.action)) {
        this.rejectAction(action, `'${action.action}' not allowed right now. Only '${actions.join('\', \'')}'`);
      } else if (action && player && player !== action.player) {
        this.rejectAction(action, `Waiting for player ${player} and rejected action from player ${action.player}.`);
      } else {
        try {
          console.log('running action', action.action, ...action.args);
          const result = fn(action.player, action.action, ...action.args);
          this.#queueResolution = null;
          action.resolve(result);
          actionSucceeded = true;
        } catch (e) {
          console.log('error from fn', e, action);
          this.rejectAction(action, e);
        }
      }
    } while (!actionSucceeded);

    return [action.player, action.action, ...action.args];
  }

  rejectAction(action, reason) {
    this.#queueResolution = null;
    console.log('rejecting action', reason, action.reject);
    action.reject(reason instanceof Error ? reason : new Error(reason));
  }

  async waitForNextAction() {
    if (this.#queueResolution) throw Error('single consumer at a time');
    const promise = new Promise((resolve, reject) => {
      this.#queueResolution = { resolve, reject };
      this.#pump();
    });
    return promise;
  }

  #pump() {
    if (this.#queueResolution) {
      const action = this.#queue.shift();
      if (action) this.#queueResolution.resolve(action);
    }
  }

  // runner calls await processAction(playerAction...)
  async processAction(player, action, ...args) {
    return new Promise((resolve, reject) => {
      this.#queue.push({ player, action, args, resolve, reject });
      this.#pump();
    });
  }
}

module.exports = ActionQueue;
