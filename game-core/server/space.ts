import GameElement from './element';
import { times, elementClasses } from './utils';
import type {ElementLookup} from './types.d';

export default class Space extends GameElement {
  space(q: string | Space) {
    if (q instanceof Space) return q;
    return this.spaces(q)[0];
  }

  spaces(q: string | Space | Space[]) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Space);
  }

  shuffle() {
    times(this.node.childElementCount - 1, i => {
      const r = this.game.random(this.node.childElementCount + 1 - i);
      this.node.insertBefore(this.node.children[r], null);
    });
  }

  lowest(q: string, fn: ((e: GameElement) => number) | string) {
    return Space.sort(this.findAll(q), fn)[0];
  }

  highest(q: string, fn: ((e: GameElement) => number) | string) {
    const sorted = Space.sort(this.findAll(q), fn);
    return sorted[sorted.length - 1];
  }

  sort(fn: ((e: GameElement) => number) | string) {
    Space.sort(Array.from(this.node.children).map(node => (node as ElementLookup).gameElement), fn)
      .map(pair => pair.node)
      .forEach(i => this.node.insertBefore(i, null));
  }

  static sort(set: GameElement[], fn: ((e: GameElement) => number) | string) {
    const val = typeof fn === 'function' ? fn : (el: GameElement) => el.get(fn);
    const comp = (a: GameElement, b: GameElement) => {
      const aVal = val(a);
      const bVal = val(b);
      return (aVal > bVal ? 1 : (aVal < bVal ? -1 : 0));
    };
    return set.sort(comp);
  }

  addSpace(name: string, attrs?: Record<string, any>) {
    return this.addGameElement(elementClasses.get('Space'), name, 'space', 'space', attrs);
  }

  addSpaces(num: number, name: string, attrs?: Record<string, any>) {
    return times(num, () => this.addSpace(name, attrs));
  }
}

elementClasses.set('Space', Space);
