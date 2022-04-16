const gameElements = [];
const { times } = require('./utils');

class GameElement {
  constructor(node, caller = {}) {
    this.node = node;
    this.document = caller.document;
    this.game = caller.game;
    this.id = node.id; // TODO reserved id's? game, board...
    this.type = node.nodeName.toLowerCase();
  }

  enhanceQuery(q) {
    return q.replace(/\.mine/g, `[player="${this.game.currentPlayer}"]`)
      .replace(/#(\d)/g, '#\\3$1 ')
      .replace(/([#=])(\d)/g, '$1\\3$2 ')
      .replace(/="([^"]+)/g, (_, p1) => `="${escape(p1)}`);
  }

  wrap(node) {
    if (!node) return null;
    const element = gameElements.find(el => el && el.test(node));
    if (!element) throw Error(`No wrapper for node ${node.nodeName}`);
    return new element.className(node, { game: this.game, document: this.document });
  }

  static wrapNodeAs(index, className, test) {
    gameElements[index] = { className, test };
  }

  attributes() {
    return Array.from(this.node.attributes)
      .filter(attr => attr.name !== 'class' && attr.name !== 'id')
      .reduce((attrs, attr) => Object.assign(attrs, { [attr.name]: unescape(!attr.value || Number.isNaN(Number(attr.value)) ? attr.value : Number(attr.value)) }), {});
  }

  get(name) {
    try {
      return JSON.parse(this.attributes()[name]);
    } catch (e) {
      return this.attributes()[name];
    }
  }

  set(name, value) {
    if (value === false || value === '' || value === undefined) {
      this.node.removeAttribute(name);
    } else {
      this.node.setAttribute(name, escape(value));
    }
  }

  // human readable name of this element from the perspective of player
  name(player, hidden) {
    const noun = this.id && !hidden ? this.get('name') || this.id : this.type;
    let pronoun = '';
    if (!this.id || hidden) {
      if (this.matches('.mine *')) {
        pronoun = this.game.currentPlayer === player ? 'my' : 'their';
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
    return this.wrap(this.findNode(q));
  }

  findAll(q) {
    if (q instanceof GameElement) return [q];
    if (q instanceof Array) return q;
    return Array.from(this.findNodes(q)).map(node => this.wrap(node));
  }

  player() {
    return this.get('player');
  }

  parent() {
    return this.node.parentNode && this.wrap(this.node.parentNode);
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
    const branch = [];
    let { node } = this;
    while (node.parentNode && node.parentNode.parentNode) {
      branch.unshift(Array.from(node.parentNode.childNodes).indexOf(node) + 1);
      node = node.parentNode;
    }
    return branch;
  }

  root() {
    return this.wrap(this.document);
  }

  boardNode() {
    return this.document.getRootNode().children[0];
  }

  board() {
    return this.wrap(this.boardNode());
  }

  pileNode() {
    return this.document.getRootNode().children[1];
  }

  pile() {
    return this.wrap(this.pileNode());
  }

  place(pieces, to) {
    return this.pile().move(pieces, to);
  }

  duplicate() {
    return this.wrap(this.node.parentNode.appendChild(this.node.cloneNode(true)));
  }

  destroy() {
    this.node.parentNode.removeChild(this.node);
  }

  addPiece(name, type, attrs) {
    return this.addGameElement(name, type, 'piece', attrs);
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

  addGameElement(name, type, className, attrs = {}) {
    const el = this.document.createElement(type);
    if (name[0] !== '#') throw Error(`id ${name} must start with #`);
    el.id = name.slice(1);
    el.className = `${className} ${attrs.class}`;
    delete attrs.class;
    Object.keys(attrs).forEach(attr => el.setAttribute(attr, escape(attrs[attr])));
    if (attrs.left === undefined && attrs.top === undefined && attrs.right === undefined && attrs.bottom === undefined) {
      const pos = this.findOpenPosition();
      if (pos) {
        el.setAttribute('x', pos.x);
        el.setAttribute('y', pos.y);
      }
    }
    this.node.appendChild(el);
    return this.wrap(this.node.lastChild);
  }

  findOpenPosition() {
    if (this.get('spreadX') || this.get('spreadY')) {
      let x = 0; let
        y = 0;
      while (this.contains(`[x="${x}"][y="${y}"]`)) {
        x += this.get('spreadX') || 0;
        y += this.get('spreadY') || 0;
      }
      return { x, y };
    }
    return null;
  }

  moveToTop() {
    this.node.parentNode.appendChild(this.node);
  }

  static isSpaceNode(node) {
    return node && node.classList.contains('space');
  }

  static isPieceNode(node) {
    return node && node.classList.contains('piece');
  }

  // return string representation, e.g. "$el(2-1-3)"
  serialize() {
    return `$el(${this.branch().join('-')})`;
  }

  // return element from branch
  pieceAt(key) {
    return this.root().find(
      `game > ${key.split('-').map(index => `*:nth-child(${index})`).join(' > ')}`,
    );
  }

  toString() {
    return `${this.type}#${this.id}`;
  }
}

module.exports = GameElement;
