import InteractivePiece from './interactive-piece';

export default class Die extends InteractivePiece {
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
        const number = this.game.random(this.getNumber('faces')) + 1;
        this.set({ number, rolls: this.getNumber('rolls') + 1 });
      },
      log: () => `$0 rolled a ${this.getNumber('number')}`,
    },
  };
}
