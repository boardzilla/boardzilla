const gameElements = [];
const { times } = require("./utils");

class GameElement {
  constructor(node, caller = {}) {
    this.node = node;
    this.document = caller.document;
    this.game = caller.game;
    this.id = node.id; // TODO reserved id's? game, board...
    this.type = node.nodeName.toLowerCase();
  }

  _enhanceQuery(q) {
    return q.replace(/\.mine/g, `[player="${this.game.currentPlayer}"]`)
            .replace(/#(\d)/g, '#\\3$1 ')
            .replace(/([#=])(\d)/g, '$1\\3$2 ');
  }

  wrap(node) {
    //if (!(node instanceof Node)) return null; // ???
    if (!node) return null;
    const element = gameElements.find(el => el && el.test(node));
    if (!element) throw Error(`No wrapper for node ${node.nodeName}`);
    return new element.className(node, {game: this.game, document: this.document});
  }

  static wrapNodeAs(index, className, test) {
    gameElements[index] = { className, test };
  }

  attributes() {
    return Array.from(this.node.attributes).
                 filter(attr => attr.name !== 'class' && attr.name !== 'id').
                 reduce((attrs, attr) => Object.assign(attrs, { [attr.name]: isNaN(attr.value) ? attr.value : +attr.value }), {});
  }

  get(name) {
    try {
      return JSON.parse(this.attributes()[name]);
    } catch(e) {
      return this.attributes()[name];
    }
  }

  set(name, value) {
    if (value === false || value === "" || value === undefined) {
      this.node.removeAttribute(name);
    } else {
      this.node.setAttribute(name, value);
    }
  }

  player() {
    return this.get('player');
  }

  parent() {
    return this.node.parentNode && this.wrap(this.node.parentNode);
  }

  matches(q) {
    return this.node.matches(this._enhanceQuery(q));
  }

  // return full path to element, e.g. "2-1-3"
  branch() {
    const branch = [];
    let node = this.node;
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
    return this.wrap(this.node.parentNode.appendChild(this.node.cloneNode(true)))
  }

  destroy() {
    this.node.parentNode.removeChild(this.node)
  }

  addPiece(name, type, attrs) {
    return this.addGameElement(name, type, 'piece', attrs);
  }

  addPieces(num, name, type, attrs) {
    return times(num, () => this.addPiece(name, type, attrs));
  }

  addComponent(name, attrs) {
    if (name == 'counter') { // TODO minimal impl for now
      const id = this.game.registerId('counter')
      this.addPiece('#' + id, 'counter', attrs)
      this.game.set(id, parseInt(attrs.initialValue) || 0); // TODO this is not namespaced
    }
    if (name == 'die') { // TODO minimal impl for now
      const id = this.game.registerId('die')
      this.addPiece('#' + id, 'die', attrs)
      this.game.set(`${id}-faces`, attrs.faces);
      this.game.set(id, attrs.faces);
    }
  }

  addGameElement(name, type, className, attrs = {}) {
    const el = this.document.createElement(type);
    if (name[0] !== '#') throw Error(`id ${name} must start with #`);
    el.id = name.slice(1);
    el.className = className;
    Object.keys(attrs).forEach(attr => el.setAttribute(attr, attrs[attr]));
    this.node.appendChild(el);
    return this.wrap(this.node.lastChild);
  }

  static isSpaceNode(node) {
    return node && node.className === 'space';
  }

  static isPieceNode(node) {
    return node && node.className === 'piece';
  }

  // return string representation, e.g. "$el(2-1-3)"
  serialize() {
    return `$el(${this.branch().join('-')})`;
  }

  // return element from branch
  pieceAt(key) {
    return this.root().find(
      'game > ' + key.split('-').map(index => `*:nth-child(${index})`).join(' > ')
    );
  }

  toString() {
    return `${this.type}#${this.id}`;
  }
}

module.exports = GameElement;
