const GameElement = require('./element');

class Piece extends GameElement {
  move(to, position = 0) {
    return this.root().move([this], to || this.parent(), 1, position);
  }

  moveToBottom(to) {
    return this.root().moveToBottom([this], to || this.parent());
  }

  remove() {
    return this.move(this.pile());
  }
}

GameElement.wrapNodeAs(2, Piece, GameElement.isPieceNode);

module.exports = Piece;
