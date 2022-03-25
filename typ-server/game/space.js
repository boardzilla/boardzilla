const GameElement = require('./element');
const Piece = require('./piece');
const { times } = require("./utils");

class Space extends GameElement {

  findNode(q = '*') {
    if (q === null) return null;
    //if (q instanceof Node) return q;
    return this.node.querySelector(this._enhanceQuery(q));
  }

  findNodes(q = '*') {
    if (q === null) return [];
    //if (q instanceof NodeList) return q;
    return this.node.querySelectorAll(this._enhanceQuery(q));
  }

  empty(q) {
    return !this.find(q) || this.find(q).node.children.length === 0;
  }

  count(q) {
    return this.findNodes(q).length;
  }

  contains(q) {
    return !!this.findNode(q);
  }

  find(q) {
    if (q instanceof GameElement) return q;
    return this.wrap(this.findNode(q));
  }

  findAll(q) {
    if (q instanceof GameElement) return [q];
    if (q instanceof Array) return q;
    return Array.from(this.findNodes(q)).map(node => this.wrap(node));
  }

  space(q) {
    //if (q instanceof Node) return this.wrap(q);
    if (q instanceof Space) return q;
    return this.spaces(q)[0];
  }

  spaces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Space);
  }

  piece(q) {
    //if (q instanceof Node) return this.wrap(q);
    if (q instanceof Piece) return q;
    return this.pieces(q)[0];
  }

  pieces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Piece);
  }

  move(pieces, to, num) {
    const space = this.root().space(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num !== undefined) movables = movables.slice(0, num);
    movables.forEach(piece => space.node.appendChild(piece.node));
    return movables;
  }

  add(pieces, num) {
    return this.move(this.pile().pieces(pieces), this, num);
  }

  clear(pieces, num) {
    return this.move(pieces, this.pile(), num);
  }

  shuffle() {
    times(this.node.childElementCount - 1, i => {
      const r = this.game.random(this.node.childElementCount + 1 - i);
      this.node.insertBefore(this.node.children[r], null)
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
    Space.sort(Array.from(this.node.children).map(node => this.wrap(node)), fn).
         map(pair => pair.node).
         forEach(i => this.node.insertBefore(i, null));
  }

  static sort(set, fn = n => n.id) {
    const comp = typeof fn === 'function' ? fn : el => el.get(fn);
    return set.sort((a, b) => comp(a) > comp(b) && 1 || (comp(a) < comp(b) && -1 || 0));
  }

  addSpace(name, type, attrs) {
    return this.addGameElement(name, type, 'space', attrs);
  }

  addSpaces(num, name, type, attrs) {
    return times(num, () => this.addSpace(name, type, attrs));
  }
}

GameElement.wrapNodeAs(1, Space, GameElement.isSpaceNode);

module.exports = Space;
