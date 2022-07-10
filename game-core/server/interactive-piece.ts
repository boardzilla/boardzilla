import Piece from './piece';
import type GameDocument from './document';
import type GameInterface from './interface';

export default abstract class InteractivePiece extends Piece {
  static defaults = {};

  static component: string;

  abstract initialize(): void;
  abstract actions: Record<string, {action: (a: any) => any, log: () => string}>;

  constructor(context: { node: Element, game: GameInterface, document?: GameDocument }, args: Record<string, any>) {
    super(context);
    const subclass = this.constructor as typeof InteractivePiece;
    this.set({ component: subclass.component, ...subclass.defaults, ...args });
    if (this.initialize) this.initialize(); // TODO traverse the prototype chain?
  }
}
