const { game, Counter } = require('game-core-server');
const { range } = require('game-core-server/utils.js');
const cards = require('./cards');

game.setPlayers({
  min: 1,
  max: 4,
});

const sortPowerplants = () => game.board.find('#powerplants').sort(card => card.get('cost'));

game.afterMove('#powerplants card', sortPowerplants);

game.setupPlayerMat((mat, player, color) => {
  mat.addPieces(22, '#building', 'token', { player, color, zoom: 2, left: 10, top: 5 });
  mat.addInteractivePiece(Counter, { name: 'Elektro', steps: [-50, -10, -5, -1, 1, 5, 10, 50], right: 10, bottom: 10 });
});

game.setupBoard(board => {
  const resources = board.addSpace('#resources');
  range(1, 8).forEach(cost => {
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 549 - cost * 60.6, left: 10 });
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 567.5 - cost * 60.6, left: 10 });
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 586 - cost * 60.6, left: 10 });
    resources.addSpace(`#uranium-${cost}`, { cost, resource: 'uranium', top: 547 - cost * 60.6, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 560 - cost * 60.6, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 573.5 - cost * 60.6, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 586 - cost * 60.6, left: 26 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 549 - cost * 60.6, left: 42 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 567.5 - cost * 60.6, left: 42 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 586 - cost * 60.6, left: 42 });
  });
  resources.addSpace('#uranium-10', { cost: 10, resource: 'uranium', top: 40, left: 15 });
  resources.addSpace('#uranium-12', { cost: 12, resource: 'uranium', top: 14, left: 15 });
  resources.addSpace('#uranium-14', { cost: 14, resource: 'uranium', top: 40, left: 42 });
  resources.addSpace('#uranium-16', { cost: 16, resource: 'uranium', top: 14, left: 42 });

  board.addSpace('#map');
  const powerplants = board.addSpace('#powerplants', { layout: 'splay', columns: 4, rows: 2 });
  const deck = board.addSpace('#deck', { layout: 'stack' });
  board.addSpace('#discard', { layout: 'stack' });
  cards.forEach(({ id, image, cost }) => (cost <= 10 ? powerplants : deck).addPiece(id, 'card', { image, cost }));
  sortPowerplants();
  deck.shuffle();
  deck.move('[cost=13], #step-3', '#discard');
  let removals = 0;
  if (game.numberOfPlayers === 4) removals = 4;
  if (game.numberOfPlayers < 4) removals = 8;
  if (removals) deck.clear('card', removals);
  board.find('[cost=13]').move(deck);
  board.find('#step-3').moveToBottom(deck);

  board.addPiece('#hammer', 'hammer', { top: 50, right: 20 });

  game.pile.addPieces(24, '#coal', 'resource', { type: 'coal', zoom: 1 });
  game.pile.addPieces(24, '#oil', 'resource', { type: 'oil', zoom: 1 });
  game.pile.addPieces(24, '#garbage', 'resource', { type: 'garbage', zoom: 1 });
  game.pile.addPieces(12, '#uranium', 'resource', { type: 'uranium', zoom: 1 });

  resources.findAll('[resource=coal]').forEach(r => r.add('#coal', 1));
  resources.findAll('[resource=oil]').filter(r => r.get('cost') > 2).forEach(r => r.add('#oil', 1));
  resources.findAll('[resource=garbage]').filter(r => r.get('cost') > 6).forEach(r => r.add('#garbage', 1));
  resources.findAll('[resource=uranium][cost=14], [resource=uranium][cost=16]').forEach(r => r.add('#uranium', 1));
});

game.hideBoard(
  '#deck card',
  ['cost', 'image', 'resource'],
);

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
  bid: {
    prompt: 'Bid',
    min: 1,
    max: 999,
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
