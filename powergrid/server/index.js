const { game, Counter } = require('game-core-server');
const cards = require('./cards');

game.setPlayers({
  min: 1,
  max: 4,
});

game.setupPlayerMat((mat, player, color) => {
  mat.addPieces(22, '#building', 'token', { player, color, zoom: 2 });
  mat.addInteractivePiece(Counter, { name: 'Elektro', steps: [-50, -10, -5, -1, 1, 5, 10, 50], right: 10, bottom: 10 });
});

game.setupBoard(board => {
  const resources = board.addSpace('#resources');
  board.addSpace('#map');
  board.addSpace('#powerplants', { layout: 'splay', columns: 4, rows: 2 });
  const deck = board.addSpace('#deck', { layout: 'stack' });
  board.addSpace('#discard', { layout: 'stack' });
  cards.forEach(({ id, image }) => deck.addPiece(id, 'card', { image }));
  deck.shuffle();

  board.addPiece('#hammer', 'hammer', { top: 50, left: 10 });

  resources.addPiece('#coal', 'resource', { type: 'coal', bottom: 5, zoom: 1 });
  resources.addPiece('#oil', 'resource', { type: 'oil', bottom: 10, zoom: 1 });
  resources.addPiece('#garbage', 'resource', { type: 'garbage', bottom: 15, zoom: 1 });
  resources.addPiece('#uranium', 'resource', { type: 'uranium', bottom: 20, zoom: 1 });
});

game.defineActions({
  play: {
    prompt: 'Play',
    key: 'p',
    drag: '#deck card',
    onto: '#powerplants',
  },
  buy: {
    prompt: 'Buy',
    key: 'b',
    drag: '#powerplants card',
    toPlayer: 'me',
  },
  build: {
    prompt: 'Build',
    key: 'b',
    drag: '.mine token',
    onto: '#map',
  },
  buyResource: {
    prompt: 'Buy',
    drag: '#resources resource',
    onto: '.mine card',
  },
  discard: {
    prompt: 'Discard',
    key: 'd',
    drag: 'card',
    onto: '#discard',
  },
});

game.playersMayAlwaysMove('token.mine, .mine *, #board *');
game.playersMayAlwaysPlay(['interactWithPiece']);

game.play(async () => {
  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions());
  }
});

module.exports = game;
