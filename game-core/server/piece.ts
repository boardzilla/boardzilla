import GameElement from './element';
import type {ElementLookup} from './types.d';
import type GameDocument from './document';
import type GameInterface from './interface';

export default class Piece extends GameElement {
  cell?: number;

  static serializable: string[] = ['cell'];

  constructor(
    ctx: {
      node: ElementLookup;
      document: GameDocument;
      game: GameInterface;
    },
    attrs: Record<string, any> = {}
  ) {
    super(ctx, attrs);
    this.elementType = 'piece';
  }

  moveTo(to?: string | GameElement, position = 0) {
    return this.ctx.document.move([this], to || this.parent()!, 1, position);
  }

  moveToBottomOf(to: string | GameElement) {
    return this.ctx.document.moveToBottom([this], to || this.parent()!);
  }

  remove() {
    return this.moveTo(this.pile());
  }
}
