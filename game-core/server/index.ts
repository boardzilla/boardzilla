import GameInterface from './interface';
export { InvalidChoiceError, IncompleteActionError, InvalidActionError } from './interface';
export {default as Space} from './space';
export {default as Piece} from './piece';
export {default as InteractivePiece} from './interactive-piece';
export {default as Counter} from './counter';
export {default as Die} from './die';

const game = new GameInterface();
export default game;
export const $ = q => game.doc.find(q);
export const $$ = q => game.doc.findAll(q);
