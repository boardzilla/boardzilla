const GameElement = require('./element');

class Piece extends GameElement {

  move(to) {
    return this.root().move([this], to || this.parent());
  }

  moveToBottom(to) {
    return this.root().moveToBottom([this], to || this.parent());
  }

  remove() {
    return this.move(this.pileNode());
  }
}

GameElement.wrapNodeAs(2, Piece, GameElement.isPieceNode);

module.exports = Piece
