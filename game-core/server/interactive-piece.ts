import Piece from './piece';
import type GameDocument from './document';
import type GameInterface from './interface';
import type {ElementLookup} from './types.d';

export default abstract class InteractivePiece extends Piece {
  static component: string;

  component?: string;

  static serializable = ['component'];

  abstract actions: Record<string, {action: (a: any) => any, log: () => string}>;

  constructor(ctx: { node: ElementLookup, game: GameInterface, document: GameDocument }, attrs: Record<string, any>) {
    super(ctx, attrs);
    this.component = (this.constructor as typeof InteractivePiece).component;
  }
}
