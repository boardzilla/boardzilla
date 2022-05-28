const { times, isPieceNode, nanoid, elementClasses } = require('./utils');

class GameElement {
  constructor({ node, game, document }, attrs) {
    this.node = node;
    this.document = document;
    this.game = game;
    this.id = node.id; // TODO reserved id's? game, board...
    this.type = node.nodeName.toLowerCase();
    this.set(attrs);
  }

  assignUUID() {
    this.set({ uuid: nanoid() });
  }

  enhanceQuery(q) {
    return q.replace(/\.mine/g, `[player="${this.game.currentPlayerPosition}"]`)
      .replace(/=([^\]'"]+)/g, '="$1"')
      .replace(/([#=])(\d)/g, '$1\\3$2 ');
  }

  /**
   * get attribute on this element
   */
  get(name) {
    const attr = this.node.attributes[name];
    if (!attr || !attr.value) return undefined;
    const value = !attr.value || Number.isNaN(Number(attr.value)) ? unescape(attr.value) : Number(attr.value);
    return ['[', '{'].includes(value[0]) ? JSON.parse(value) : value;
  }

  /**
   * set attributes on this element
   * set({ attr1: newValue, attr2: newValue,... })
   * set(attr1, newValue)
   */
  set(name, value) {
    if (value === false || value === '' || value === undefined) {
      if (typeof name === 'object') {
        Object.entries(name).forEach(([n, v]) => this.set(n, v));
      } else {
        this.unset(name);
      }
    } else {
      value = typeof value === 'object' ? JSON.stringify(value) : value;
      this.node.setAttribute(name, escape(value)); // TODO reserved attributes? class, className, id, style  & special attributes: player, layout, component, x,y,top,left,right,bottom...?
    }
  }

  unset(...names) {
    names.forEach(name => this.node.removeAttribute(name));
  }

  increment(name, value) {
    this.set(name, this.get(name) + value);
  }

  // human readable name of this element from the perspective of player
  name(player, hidden) {
    const noun = this.id && !hidden ? this.get('name') || this.id : this.type;
    let pronoun = '';
    if (!this.id || hidden) {
      if (this.matches('.mine *')) {
        pronoun = this.game.currentPlayerPosition === player ? 'my' : 'their';
      } else {
        pronoun = 'a';
      }
    }
    return `${pronoun} ${noun}`.trim();
  }

  findNode(q = '*') {
    if (q === null) return null;
    return this.node.querySelector(this.enhanceQuery(q));
  }

  findNodes(q = '*') {
    if (q === null) return [];
    return this.node.querySelectorAll(this.enhanceQuery(q));
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
    return this.findNode(q)?.gameElement;
  }

  findAll(q) {
    if (q instanceof GameElement) return [q];
    if (q instanceof Array) return q;
    return Array.from(this.findNodes(q)).map(node => node?.gameElement);
  }

  piece(q) {
    if (q instanceof GameElement) return q;
    return this.pieces(q)[0];
  }

  pieces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => isPieceNode(el.node));
  }

  player() {
    return this.get('player') || (this.node.parentNode && this.parent().player());
  }

  parent() {
    return this.node?.parentNode?.gameElement;
  }

  matches(q) {
    return this.node.matches(this.enhanceQuery(q));
  }

  hasParent(el) {
    let { node } = this;
    while (node.parentNode) {
      node = node.parentNode;
      if (node === el.node) return true;
    }
    return false;
  }

  // return full path to element, e.g. "2-1-3"
  branch() {
    const branches = [];
    let { node } = this;
    while (node.parentNode && node.parentNode.parentNode) {
      branches.unshift(Array.prototype.indexOf.call(node.parentNode.childNodes, node) + 1);
      node = node.parentNode;
    }
    return `$el(${branches.join('-')})`;
  }

  boardNode() {
    return this.document.node.children[0];
  }

  board() {
    return this.boardNode()?.gameElement;
  }

  pileNode() {
    return this.document.node.children[1];
  }

  pile() {
    return this.pileNode()?.gameElement;
  }

  place(pieces, to) {
    return this.pile().move(pieces, to);
  }

  add(pieces, num) {
    return this.move(this.pile().pieces(pieces), this, num);
  }

  clear(pieces, num) {
    return this.move(pieces, this.pile(), num);
  }

  destroy() {
    this.node.parentNode.removeChild(this.node);
  }

  destroyContents(pieces) {
    this.findAll(pieces).forEach(p => p.destroy());
  }

  addPiece(name, type, attrs) {
    return this.addGameElement(elementClasses.Piece, name, type, 'piece', attrs);
  }

  addPieces(num, name, type, attrs) {
    return times(num, () => this.addPiece(name, type, attrs));
  }

  addInteractivePiece(pieceClass, attrs = {}) {
    if (!pieceClass || !pieceClass.name) throw Error(`No interactive piece class found: ${pieceClass}`);
    const name = pieceClass.name.toLowerCase();
    return this.addGameElement(pieceClass, `#${this.game.registerId(name)}`, name, 'interactive-piece', attrs);
  }

  addGameElement(elementClass, id, type, className, attrs = {}) {
    const el = this.document.xmlDoc.createElement(type);
    if (id[0] !== '#') throw Error(`id ${id} must start with #`);
    el.id = id.slice(1);
    el.setAttribute('class', `${attrs.class || ''} ${className}`.trim());
    delete attrs.class;
    this.node.appendChild(el);
    const gameElement = new elementClass({ node: el, game: this.game, document: this.document }, attrs);
    el.gameElement = gameElement;
    if (isPieceNode(el) && this.get('layout') !== 'stack') gameElement.assignUUID();
    return gameElement;
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces, to, num, position = 0) {
    const space = this.document.find(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num === 0) return [];
    if (num !== undefined) movables = movables.slice(-num);
    if (!movables.length) return [];
    if (position < 0) {
      position = -1 - position;
    } else {
      position = space.node.childElementCount - position;
    }
    position = Math.min(Math.max(position, 0), space.node.childElementCount);
    let outOfSplay = false;
    movables.forEach(piece => {
      piece.unset('x', 'y', 'left', 'top', 'right', 'bottom');
      outOfSplay = outOfSplay || (piece.parent().get('layout') === 'splay' && piece.parent());
      const previousId = piece.serialize();
      if (isPieceNode(piece.node) && !piece.hasParent(space) && space.get('layout') !== 'stack') piece.assignUUID();
      space.node.insertBefore(piece.node, space.node.children[position]);
      if (space.get('layout') === 'grid' && piece.get('cell') === undefined) {
        piece.set({ cell: space.findOpenCell() });
      }
      this.game.changeset.push([previousId, piece.serialize()]);
    });
    this.game.processAfterMoves(movables);
    if (space.get('layout') === 'splay') {
      Array.from(space.node.children).forEach(c => {
        const nextId = c.gameElement.serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      });
    }
    if (outOfSplay && outOfSplay.node !== space.node) {
      Array.from(outOfSplay.node.children).forEach(c => {
        const nextId = c.gameElement.serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      });
    }
    return movables;
  }

  // move pieces to a space, at start of list (on bottom). use num to limit the number moved
  moveToBottom(pieces, to, num) {
    this.move(pieces, to, num, -1);
  }

  moveToTop() {
    this.node.parentNode.appendChild(this.node);
  }

  findOpenCell() {
    const cells = (this.get('columns') || 1) * (this.get('rows') || 1);
    let cell = 0;
    while (this.contains(`[cell="${cell}"]`)) cell += 1;
    return cell >= cells ? 0 : cell;
  }

  // return string representation, e.g. "$el(2-1-3)"
  serialize() {
    if (this.get('uuid')) return `$uuid(${this.get('uuid')})`;
    return this.branch();
  }

  toString() {
    return `${this.type}#${this.id}`;
  }
}

module.exports = GameElement;
