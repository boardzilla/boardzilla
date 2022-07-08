import Piece from './piece';

export default abstract class InteractivePiece extends Piece {
  static defaults = {};

  static component: string;

  abstract initialize(): void;

  constructor(context, args) {
    super(context);
    const subclass = this.constructor as typeof InteractivePiece;
    this.set({ component: subclass.component, ...subclass.defaults, ...args });
    if (this.initialize) this.initialize(); // TODO traverse the prototype chain?
  }
}
