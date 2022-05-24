const GameInterface = require('./interface');
const Space = require('./space');
const Piece = require('./piece');
const InteractivePiece = require('./interactive-piece');
const Counter = require('./counter');
const Die = require('./die');

module.exports = { game: new GameInterface(), Piece, Space, InteractivePiece, Counter, Die };
