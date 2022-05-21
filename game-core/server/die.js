const InteractivePiece = require('./interactivepiece');

class Die extends InteractivePiece {
  static component = 'Die';

  initialize() {
    this.set({
      number: 1,
      rolls: 0,
    });
  }

  actions = {
    roll: {
      action: () => {
        const number = this.game.random(this.get('faces')) + 1;
        this.set({ number, rolls: this.get('rolls') + 1 });
      },
      log: () => `$0 rolled a ${this.get('number')}`,
    },
  };
}

module.exports = Die;
