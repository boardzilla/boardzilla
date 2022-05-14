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
    return this.findAll(q).filter(el => el instanceof Space);
  }

  piece(q) {
    if (q instanceof Piece) return q;
    return this.pieces(q)[0];
  }

  pieces(q) {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => el instanceof Piece);
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces, to, num, position = 0) {
    const space = this.root().space(to);
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
      if (GameElement.isPieceNode(piece.node) && !piece.hasParent(space) && space.get('layout') !== 'stack') piece.assignUUID();
      space.node.insertBefore(piece.node, space.node.children[position]);
      if (space.get('layout') === 'grid' && piece.get('cell') === undefined) {
        piece.set({ cell: space.findOpenCell() });
      }
      this.game.changeset.push([previousId, piece.serialize()]);
    });
    this.game.processAfterMoves(movables);
    if (space.get('layout') === 'splay') {
      Array.from(space.node.children).forEach(c => {
        const nextId = this.wrap(c).serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      });
    }
    if (outOfSplay && outOfSplay.node !== space.node) {
      Array.from(outOfSplay.node.children).forEach(c => {
        const nextId = this.wrap(c).serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      });
    }
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

  destroy(pieces) {
    this.pieces(pieces).forEach(p => p.destroy());
  }

  shuffle() {
    times(this.node.childElementCount - 1, i => {
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
    Space.sort(Array.from(this.node.children).map(node => this.wrap(node)), fn)
      .map(pair => pair.node)
      .forEach(i => this.node.insertBefore(i, null));
  }

  static sort(set, fn = n => n.id) {
    const comp = typeof fn === 'function' ? fn : el => el.get(fn);
    return set.sort((a, b) => (comp(a) > comp(b) && 1) || (comp(a) < comp(b) && -1) || 0);
  }

  findOpenCell() {
    const cells = (this.get('columns') || 1) * (this.get('rows') || 1);
    let cell = 0;
    while (this.contains(`[cell="${cell}"]`)) cell += 1;
    return cell >= cells ? 0 : cell;
  }

  addSpace(name, attrs) {
    return this.addGameElement(name, 'space', attrs);
  }

  addSpaces(num, name, attrs) {
    return times(num, () => this.addSpace(name, attrs));
  }
}

GameElement.wrapNodeAs(1, Space, GameElement.isSpaceNode);

module.exports = Space;
