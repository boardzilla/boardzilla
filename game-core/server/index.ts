import GameInterface from './interface';
export { InvalidChoiceError, IncompleteActionError, InvalidActionError } from './interface';
export {default as Space} from './space';
export {default as Piece} from './piece';
export {default as InteractivePiece} from './interactive-piece';
export {default as Counter} from './counter';
export {default as Die} from './die';
import {default as GameElement} from './element';

export const game = new GameInterface();
export function $<T extends GameElement>(className: { new (...a: any[]): T }, q: string) {
  return game.doc.find(className, q);
}
export function $$<T extends GameElement>(className: { new (...a: any[]): T }, q: string) {
  return game.doc.findAll(className, q);
}

GameElement.ctx = game.doc.ctx;
