import GameInterface from './interface';
export { InvalidChoiceError, IncompleteActionError, InvalidActionError } from './interface';
export * from './utils';
export {default as Space} from './space';
export {default as Piece} from './piece';
export {default as InteractivePiece} from './interactive-piece';
export {default as Counter} from './counter';
export {default as Die} from './die';
import {default as GameElement} from './element';
export {default as Player} from './player';

export const game = new GameInterface();
GameElement.ctx = game.doc.ctx;
