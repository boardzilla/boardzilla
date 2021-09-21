const GameElement = require('./element');

class Piece extends GameElement {

  move(to) {
    return this.board().move([this], to);
  }

  remove() {
    return this.move(this.pileNode());
  }
}

GameElement.wrapNodeAs(2, Piece, GameElement.isPieceNode);

module.exports = Piece
