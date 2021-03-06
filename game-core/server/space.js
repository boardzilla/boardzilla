const GameElement = require('./element');
const { times, elementClasses } = require('./utils');

class Space extends GameElement {
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
    Space.sort(Array.from(this.node.children).map(node => node.gameElement), fn)
      .map(pair => pair.node)
      .forEach(i => this.node.insertBefore(i, null));
  }

  static sort(set, fn = n => n.id) {
    const comp = typeof fn === 'function' ? fn : el => el.get(fn);
    return set.sort((a, b) => (comp(a) > comp(b) && 1) || (comp(a) < comp(b) && -1) || 0);
  }

  addSpace(name, attrs) {
    return this.addGameElement(elementClasses.Space, name, 'space', 'space', attrs);
  }

  addSpaces(num, name, attrs) {
    return times(num, () => this.addSpace(name, attrs));
  }
}

elementClasses.Space = Space;

module.exports = Space;
