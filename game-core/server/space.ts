import GameElement from './element';
import { times } from './utils';
import type {ElementLookup} from './types.d';
import type GameDocument from './document';
import type GameInterface from './interface';

export default class Space extends GameElement {
  constructor(
    ctx: {
      node: ElementLookup;
      document: GameDocument;
      game: GameInterface;
    },
    attrs: Record<string, any> = {}
  ) {
    super(ctx, attrs);
    this.elementType = 'space';
  }

  shuffle() {
    times(this.ctx.node.childElementCount - 1, i => {
      const r = this.ctx.game.random(this.ctx.node.childElementCount + 1 - i);
      this.ctx.node.insertBefore(this.ctx.node.children[r], null);
    });
  }

  lowest(q: string, fn: ((e: GameElement) => number) | string) {
    return Space.sort(this.findAll(GameElement, q), fn)[0];
  }

  highest(q: string, fn: ((e: GameElement) => number) | string) {
    const sorted = Space.sort(this.findAll(GameElement, q), fn);
    return sorted[sorted.length - 1];
  }

  sort(fn: ((e: GameElement) => number | string) | string) {
    GameElement.sort(Array.from(this.ctx.node.children).map(node => (node as ElementLookup).gameElement), fn)
      .map(pair => pair.ctx.node)
      .forEach(i => this.ctx.node.insertBefore(i, null));
  }
}
