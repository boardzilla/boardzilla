const gameElements = [];

class GameElement {
  constructor(node, caller = {}) {
    this.node = node;
    this.doc = caller.doc;
    this.game = caller.game;
    this.id = node.id;
    this.type = node.nodeName.toLowerCase();
  }

  wrap(node) {
    //if (!(node instanceof Node)) return null; // ???
    if (!node) return null;
    const element = gameElements.find(el => el && el.test(node));
    if (!element) throw Error(`No wrapper for node ${node.nodeName}`);
    return new element.className(node, this);
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
    return this.node.matches(q);
  }

  // return full path to element, e.g. "2-1-3"
  branch() {
    const branch = [];
    let node = this.node;
    while (node.parentNode && node.parentNode.nodeName.toLowerCase() != 'game') {
      branch.unshift(Array.from(node.parentNode.childNodes).indexOf(node) + 1);
      node = node.parentNode;
    }
    return branch;
  }

  doc() {
    return this.wrap(this.doc);
  }

  boardNode() {
    return this.doc.children[0];
  }

  board() {
    return this.wrap(this.boardNode());
  }

  pileNode() {
    return this.doc.children[1];
  }

  pile() {
    return this.wrap(this.pileNode());
  }

  place(pieces, to, opts = {}) {
    return this.doc.find('#PILE').move(pieces, to, Object.assign({ limit: 1, within: this.node }, opts));
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
    return this.board().find(
      key.split('-').reduce((path, index) => `${path} > *:nth-child(${index})`, 'board')
    );
  }

  toString() {
    return `${this.type}#${this.id}`;
  }
}

module.exports = GameElement;
