const { GameInterface, InvalidChoiceError, IncompleteActionError, InvalidActionError } = require('./interface');
const Space = require('./space');
const Piece = require('./piece');
const InteractivePiece = require('./interactive-piece');
const Counter = require('./counter');
const Die = require('./die');

const game = new GameInterface();

module.exports = {
  game,
  $: q => game.doc.find(q),
  $$: q => game.doc.findAll(q),
  InvalidChoiceError,
  IncompleteActionError,
  InvalidActionError,
  Piece,
  Space,
  InteractivePiece,
  Counter,
  Die,
};
