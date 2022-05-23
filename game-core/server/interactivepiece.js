const Piece = require('./piece');

class InteractivePiece extends Piece {
  static defaults = {};

  static component = 'unspecified';

  constructor(context, args) {
    super(context);
    this.set({ component: this.constructor.component, ...this.constructor.defaults, ...args });
    if (this.initialize) this.initialize(); // TODO traverse the prototype chain?
  }
}

module.exports = InteractivePiece;
