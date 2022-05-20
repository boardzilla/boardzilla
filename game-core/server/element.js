const { times, nodeClass, isPieceNode, nanoid } = require('./utils');

class GameElement {
  constructor({ node, game, document }) {
    this.node = node;
    this.document = document;
    this.game = game;
    this.id = node.id; // TODO reserved id's? game, board...
    this.type = node.nodeName.toLowerCase();
  }

  assignUUID() {
    this.set({ uuid: nanoid() });
  }

  enhanceQuery(q) {
    return q.replace(/\.mine/g, `[player="${this.game.currentPlayerPosition}"]`)
      .replace(/\$me/g, this.game.currentPlayerPosition)
      .replace(/#(\d)/g, '#\\3$1 ')
      .replace(/([#=])(\d)/g, '$1\\3$2 ')
      .replace(/="([^"]+)/g, (_, p1) => `="${escape(p1)}`);
  }

  /**
   * get attribute on this element
   */
  get(name) {
    const attr = this.node.attributes[name];
    if (!attr || !attr.value) return undefined;
    const value = unescape(!attr.value || Number.isNaN(Number(attr.value)) ? attr.value : Number(attr.value));
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
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
      this.node.setAttribute(name, escape(value)); // TODO reserved attributes? class, className, id, style & special attributes: player, layout, x,y,top,left,right,bottom...?
    }
  }

  unset(...names) {
    names.forEach(name => this.node.removeAttribute(name));
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

  destroy() {
    this.node.parentNode.removeChild(this.node);
  }

  addPiece(name, type, attrs) {
    return this.addGameElement(name, type, attrs);
  }

  addPieces(num, name, type, attrs) {
    return times(num, () => this.addPiece(name, type, attrs));
  }

  addComponent(name, attrs = {}) {
    if (name === 'counter') {
      const id = this.game.registerId('counter');
      this.addPiece(`#${id}`, 'counter', {
        value: attrs.initialValue || 0,
        min: attrs.min || 0,
        max: attrs.max,
        moves: 0,
        ...attrs,
      });
    }
    if (name === 'die') {
      const id = this.game.registerId('die');
      this.addPiece(`#${id}`, 'die', { number: 1, rolls: 0, ...attrs });
    }
  }

  addGameElement(id, type, attrs = {}) {
    const el = this.document.xmlDoc.createElement(type);
    if (id[0] !== '#') throw Error(`id ${id} must start with #`);
    el.id = id.slice(1);
    Object.keys(attrs).forEach(attr => el.setAttribute(attr, escape(attrs[attr])));
    this.node.appendChild(el);
    const ElementClass = nodeClass(el);
    const gameElement = new ElementClass({ node: el, game: this.game, document: this.document });
    el.gameElement = gameElement;
    if (isPieceNode(el) && this.get('layout') !== 'stack') gameElement.assignUUID();
    return gameElement;
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces, to, num, position = 0) {
    const space = this.document.find(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
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
