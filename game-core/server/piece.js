const GameElement = require('./element');
const { registerElement } = require('./utils');

class Piece extends GameElement {
  move(to, position = 0) {
    return this.document.move([this], to || this.parent(), 1, position);
  }

  moveToBottom(to) {
    return this.document.moveToBottom([this], to || this.parent());
  }

  remove() {
    return this.move(this.pile());
  }
}

registerElement('piece', Piece);

module.exports = Piece;
