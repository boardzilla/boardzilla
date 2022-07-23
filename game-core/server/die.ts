import InteractivePiece from './interactive-piece';

export default class Die extends InteractivePiece {
  faces?: number = 6;
  rolls?: number = 0;
  number?: number = 1;

  static serializable = ['faces', 'rolls', 'number'];

  static component = 'Die';

  actions = {
    roll: {
      action: () => {
        this.number = this.ctx.game.random(this.faces!) + 1;
        this.rolls! += 1;
      },
      log: () => `$0 rolled a ${this.number}`,
    },
  };
}
