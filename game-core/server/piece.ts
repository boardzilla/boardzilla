import GameElement from './element';
import type {ElementLookup} from './types.d';
import type GameDocument from './document';
import type GameInterface from './interface';

export default class Piece extends GameElement {
  cell?: number;
  unclickable?: boolean;

  static serializable: string[] = ['cell', 'unclickable'];

  constructor(
    ctx: {
      node: ElementLookup;
      document: GameDocument;
      game: GameInterface;
    },
    attrs: Record<string, any> = {}
  ) {
    super(ctx, attrs);
    this.elementType = 'piece-type';
  }

  putInto(to?: string | GameElement, position = 0) {
    return this.ctx.document.move([this], to || this.parent()!, 1, position);
  }

  putIntoBottomOf(to: string | GameElement) {
    return this.ctx.document.moveToBottom([this], to || this.parent()!, 1);
  }

  putInPosition(position: number) {
    const parentNode = this.ctx.node.parentNode!;
    position = parentNode.childElementCount - position;
    parentNode!.insertBefore(this.ctx.node, parentNode.children[position]);
  }

  putInTopPosition() {
    this.ctx.node.parentNode!.appendChild(this.ctx.node);
  }

  putInBottomPosition() {
    const parentNode = this.ctx.node.parentNode!;
    parentNode!.insertBefore(this.ctx.node, parentNode.children[0]);
  }

  remove() {
    return this.putInto(this.pile());
  }
}
