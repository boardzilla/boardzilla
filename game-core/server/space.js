const GameElement = require('./element');
const Piece = require('./piece');
const { times } = require('./utils');

class Space extends GameElement {
  space(q) {
    if (q instanceof Space) return q;
    return this.spaces(q)[0];
  }

  spaces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter((el) => el instanceof Space);
  }

  piece(q) {
    if (q instanceof Piece) return q;
    return this.pieces(q)[0];
  }

  pieces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter((el) => el instanceof Piece);
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces, to, num, position = 0) {
    const space = this.root().space(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num !== undefined) movables = movables.slice(-num);
    movables.forEach((piece) => {
      piece.set('x');
      piece.set('y');
      piece.set('left');
      piece.set('top');
      piece.set('right');
      piece.set('bottom');
      if (!piece.hasParent(space)) {
        const pos = space.findOpenPosition();
        if (pos) {
          piece.set('x', pos.x);
          piece.set('y', pos.y);
        }
      }
      if (position < 0) {
        position = -1 - position;
      } else {
        position = space.node.childElementCount - position;
      }
      space.node.insertBefore(piece.node, space.node.children[position]);
    });
    this.game.afterMoves.forEach(([pieceSelector, fn]) => {
      movables.forEach((piece) => {
        if (piece.matches(pieceSelector)) fn(piece);
      });
    });
    return movables;
  }

  // move pieces to a space, at start of list (on bottom). use num to limit the number moved
  moveToBottom(pieces, to, num) {
    this.move(pieces, to, num, -1);
  }

  add(pieces, num) {
    return this.move(this.pile().pieces(pieces), this, num);
  }

  clear(pieces, num) {
    return this.move(pieces, this.pile(), num);
  }

  shuffle() {
    times(this.node.childElementCount - 1, (i) => {
      const r = this.game.random(this.node.childElementCount + 1 - i);
      this.node.insertBefore(this.node.children[r], null);
    });
  }

  lowest(q, fn) {
    return Space.sort(this.findAll(q), fn)[0];
  }

  highest(q, fn) {
    const sorted = Space.sort(this.findAll(q), fn);
    return sorted[sorted.length - 1];
  }

  sort(fn) {
    Space.sort(Array.from(this.node.children).map((node) => this.wrap(node)), fn)
      .map((pair) => pair.node)
      .forEach((i) => this.node.insertBefore(i, null));
  }

  static sort(set, fn = (n) => n.id) {
    const comp = typeof fn === 'function' ? fn : (el) => el.get(fn);
    return set.sort((a, b) => comp(a) > comp(b) && 1 || (comp(a) < comp(b) && -1 || 0));
  }

  addSpace(name, type, attrs) {
    return this.addGameElement(name, type, 'space', attrs);
  }

  addSpaces(num, name, type, attrs) {
    return times(num, () => this.addSpace(name, type, attrs));
  }
}

GameElement.wrapNodeAs(1, Space, GameElement.isSpaceNode);

module.exports = Space;
