import GameInterface from './interface';
export { InvalidChoiceError, IncompleteActionError, InvalidActionError } from './interface';
export {default as Space} from './space';
export {default as Piece} from './piece';
export {default as InteractivePiece} from './interactive-piece';
export {default as Counter} from './counter';
export {default as Die} from './die';

export const game = new GameInterface();
export const $ = (q: string) => game.doc.find(q);
export const $$ = (q: string) => game.doc.findAll(q);
