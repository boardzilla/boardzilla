import GameElement from './element';
import { elementClasses } from './utils';
import type Space from './space';

export default class Piece extends GameElement {
  moveTo(to?: GameElement, position = 0) {
    return this.document.move([this], to || this.parent(), 1, position);
  }

  moveToBottomOf(to: GameElement) {
    return this.document.moveToBottom([this], to || this.parent());
  }

  remove() {
    return this.moveTo(this.pile());
  }
}

elementClasses.set('Piece', Piece);
