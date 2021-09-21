const GameElement = require('./element');
const Piece = require('./piece');
const { times } = require("./utils");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class Space extends GameElement {

  _enhanceQuery(q) {
    return q.replace('.mine', `[player="${this.game.player}"]`)
            .replace(/#(\d)/, '#\\3$1 ')
            .replace(/([#=])(\d)/, '$1\\3$2 ');
  }

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
    const space = this.board().space(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = space ? this.pieces(pieces) : [];
    if (num !== undefined) movables = movables.slice(0, num);
    movables.forEach(piece => space.node.insertBefore(piece.node, null));
    return movables;
  }

  add(pieces, num = 1) {
    return this.move(this.pile().pieces(pieces), this, num);
  }

  clear(pieces, num) {
    return this.move(pieces, this.pileNode(), num);
  }

  shuffle() {
    times(this.node.childElementCount - 1).forEach(i =>
      this.node.insertBefore(this.node.children[Math.floor(Math.random() * (this.node.childElementCount - i))], null)
    );
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
    this.addGameElement(name, type, 'space', attrs);
  }

  addSpaces(num, name, type, attrs) {
    times(num).forEach(() => this.addSpace(name, type, attrs));
  }

  addPiece(name, type, attrs) {
    if (this.node === this.boardNode()) {
      return this.pile().addPiece(name, type, attrs); // is this really better???
    }
    this.addGameElement(name, type, 'piece', attrs);
  }

  addPieces(num, name, type, attrs) {
    times(num).forEach(() => this.addPiece(name, type, attrs));
  }

  addGameElement(name, type, className, attrs = {}) {
    const dom = new JSDOM();
    const el = dom.window.document.createElement(type);
    if (name[0] !== '#') throw Error(`id ${name} must start with #`);
    el.id = name.slice(1);
    el.className = className;
    Object.keys(attrs).forEach(attr => el.setAttribute(attr, attrs[attr]));
    this.node.appendChild(el);
  }
}

GameElement.wrapNodeAs(1, Space, GameElement.isSpaceNode);

module.exports = Space;
