import GameElement from './element';
import { times, elementClasses } from './utils';
import type {ElementLookup} from './types.d';

export default class Space extends GameElement {
  space(q) {
    if (q instanceof Space) return q;
    return this.spaces(q)[0];
  }

  spaces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Space);
  }

  shuffle() {
    times(this.node.childElementCount - 1, i => {
      const r = this.game.random(this.node.childElementCount + 1 - i);
      this.node.insertBefore(this.node.children[r], null);
    });
  }

  lowest(q, fn) {
    return Space.sort(this.findAll(q), fn)[0];
  }

  highest(q, fn) {
    const sorted = Space.sort(this.findAll(q), fn);
    return sorted[sorted.length - 1];
  }

  sort(fn) {
    Space.sort(Array.from(this.node.children).map(node => (node as ElementLookup).gameElement), fn)
      .map(pair => pair.node)
      .forEach(i => this.node.insertBefore(i, null));
  }

  static sort(set, fn: ((GameElement) => (string | number) | string) = n => n.id) {
    const val = typeof fn === 'function' ? fn : el => el.get(fn);
    const comp = (a, b) => {
      a = val(a);
      b = val(b);
      const bv = typeof a === typeof b ? b : typeof b;
      const av = typeof a === typeof b ? a : typeof a;
      return (av > bv ? 1 : (av < bv ? -1 : 0));
    };
    return set.sort(comp);
  }

  addSpace(name, attrs=null) {
    return this.addGameElement(elementClasses.get('Space'), name, 'space', 'space', attrs);
  }

  addSpaces(num, name, attrs=null) {
    return times(num, () => this.addSpace(name, attrs));
  }
}

elementClasses.set('Space', Space);
