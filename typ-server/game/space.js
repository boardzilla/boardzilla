const GameElement = require('./element');
const Piece = require('./piece');
const { times } = require("./utils");

class Space extends GameElement {

  findNode(q = '*') {
    if (q === null) return null;
    return this.node.querySelector(this._enhanceQuery(q));
  }

  findNodes(q = '*') {
    if (q === null) return [];
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
    if (q instanceof Space) return q;
    return this.spaces(q)[0];
  }

  spaces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Space);
  }

  piece(q) {
    if (q instanceof Piece) return q;
    return this.pieces(q)[0];
  }

  pieces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Piece);
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved
  move(pieces, to, num) {
    const space = this.root().space(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num !== undefined) movables = movables.slice(-num);
    movables.forEach(piece => {
      piece.set('x');
      piece.set('y');
      if ((space.get('spreadX') || space.get('spreadY')) && !piece.hasParent(space)) {
        let x = 0, y = 0;
        piece.set('x', x);
        piece.set('y', y);
        while (space.contains(`[x="${x}"][y="${y}"]`)) {
          x += space.get('spreadX') || 0;
          y += space.get('spreadY') || 0;
          piece.set('x', x);
          piece.set('y', y);
        }
      }
      space.node.appendChild(piece.node)
    });
    return movables;
  }

  // move pieces to a space, at start of list (on bottom). use num to limit the number moved
  moveToBottom(pieces, to, num) {
    const space = this.root().space(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num !== undefined) movables = movables.slice(-num);
    movables.forEach(piece => space.node.insertBefore(piece.node, space.node.children[0]));
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
