const GameElement = require('./element');
const { elementClasses } = require('./utils');

class Piece extends GameElement {
  moveTo(to, position = 0) {
    return this.document.move([this], to || this.parent(), 1, position);
  }

  moveToBottomOf(to) {
    return this.document.moveToBottom([this], to || this.parent());
  }

  remove() {
    return this.moveTo(this.pile());
  }
}

elementClasses.Piece = Piece;

module.exports = Piece;
