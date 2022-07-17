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

  putInto(to?: string | GameElement, position = 0) {
    return this.ctx.document.move([this], to || this.parent()!, 1, position);
  }

  putIntoBottomOf(to: string | GameElement) {
    return this.ctx.document.moveToBottom([this], to || this.parent()!, 1);
  }

  putInPosition(position: number) {
    return this.ctx.document.move([this], this.parent()!, 1, position);
  }

  putInTopPosition() {
    return this.ctx.document.move([this], this.parent()!, 1);
  }

  putInBottomPosition() {
    return this.ctx.document.moveToBottom([this], this.parent()!, 1);
  }

  remove() {
    return this.putInto(this.pile());
  }
}
