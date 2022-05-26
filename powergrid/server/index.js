const { game, Counter } = require('game-core-server');
const { range, sumBy } = require('game-core-server/utils.js');
const cards = require('./cards');

game.setPlayers({
  min: 1,
  max: 4,
});

const sortPowerplants = () => game.board.find('#powerplants').sort(card => card.get('cost'));

const costOf = (resource, amount) => sumBy(game.board.findAll(`#resources #${resource}`).slice(-amount), r => r.parent().get('cost'));

const resourceTypes = ['coal', 'oil', 'garbage', 'uranium'];

const refill = {
  coal: {
    2: [3, 4, 3],
    3: [4, 5, 3],
    4: [5, 6, 4],
    5: [5, 7, 5],
    6: [7, 9, 6],
  },
  oil: {
    2: [2, 2, 4],
    3: [2, 3, 4],
    4: [3, 4, 5],
    5: [4, 5, 6],
    6: [5, 6, 7],
  },
  garbage: {
    2: [1, 2, 3],
    3: [1, 2, 3],
    4: [2, 3, 4],
    5: [3, 3, 5],
    6: [3, 5, 6],
  },
  uranium: {
    2: [1, 1, 1],
    3: [1, 1, 1],
    4: [1, 2, 2],
    5: [2, 3, 2],
    6: [2, 3, 3],
  },
};

game.afterMove('#powerplants card', sortPowerplants);

game.setupPlayerMat((mat, player, color, position) => {
  mat.addPieces(22, '#building', 'token', { player, color, zoom: 2, left: 15, bottom: 15 });
  mat.addInteractivePiece(Counter, { name: 'Elektro', steps: [-50, -10, -5, -1, 1, 5, 10, 50], right: 10, bottom: 10, initialValue: 50 });
  const [scoreToken, turnToken] = mat.move('token', '#map', 2);
  scoreToken.set({ left: 10, top: 220 + player * 10 });
  turnToken.set({ left: 10, top: 475 + position * 25 });
});

game.setupBoard(board => {
  const resources = board.addSpace('#resources');
  resources.addSpace('#uranium-16', { cost: 16, resource: 'uranium', top: 14, left: 42 });
  resources.addSpace('#uranium-14', { cost: 14, resource: 'uranium', top: 40, left: 42 });
  resources.addSpace('#uranium-12', { cost: 12, resource: 'uranium', top: 14, left: 15 });
  resources.addSpace('#uranium-10', { cost: 10, resource: 'uranium', top: 40, left: 15 });
  range(8, 1, -1).forEach(cost => {
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

  board.addSpace('#map');
  const powerplants = board.addSpace('#powerplants', { layout: 'splay', columns: 4, rows: 2 });
  const deck = board.addSpace('#deck', { layout: 'stack' });
  board.addSpace('#discard', { layout: 'stack' });
  cards.forEach(({ id, image, cost }) => (cost <= 10 ? powerplants : deck).addPiece(id, 'card', { image, cost }));

  board.addPiece('#hammer', 'hammer', { top: 50, right: 20 });

  game.pile.addPieces(24, '#coal', 'resource', { type: 'coal', zoom: 1 });
  game.pile.addPieces(24, '#oil', 'resource', { type: 'oil', zoom: 1 });
  game.pile.addPieces(24, '#garbage', 'resource', { type: 'garbage', zoom: 1 });
  game.pile.addPieces(12, '#uranium', 'resource', { type: 'uranium', zoom: 1 });
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
  store: {
    prompt: 'Store',
    drag: '.mine > resource',
    onto: '.mine card',
  },
  power: {
    prompt: 'Spend',
    select: '.mine card > resource',
    action: resource => resource.remove(),
  },
  discard: {
    prompt: 'Discard',
    key: 'd',
    drag: '#powerplants card',
    onto: '#discard',
  },
  buyResource: {
    prompt: 'Buy resources...',
    select: resourceTypes,
    log: '$0 bought $2 $1',
    next: {
      min: 1,
      max: 30,
      next: {
        prompt: (resource, amount) => `Buy ${amount} ${resource} for ${costOf(resource, amount)} Elektro?`,
        select: (resource, amount) => [`Buy ${amount} ${resource}`, 'Cancel'],
        action: (resource, amount) => {
          const cost = costOf(resource, amount);
          const elektro = game.doc.find('.mine [name=Elektro]');
          if (elektro.get('value') < cost) throw Error('Not enough Elektro');
          game.board.move(`#resources #${resource}`, '.player-mat.mine', amount);
          elektro.increment('value', -cost);
        },
      },
    },
  },
  refill: {
    select: ['Step 1', 'Step 2', 'Step 3'],
    prompt: 'Refill resources',
    action: step => {
      resourceTypes.forEach(resource => {
        game.board.find('#resources')
          .findAll(`[resource=${resource}]:empty`)
          .slice(0, refill[resource][game.numberOfPlayers][step.slice(-1) - 1])
          .forEach(r => r.add(`#${resource}`, 1))
      });
    },
  },
  adjustElektro: {
    prompt: 'Elektro +/-',
    select: '.mine [name=Elektro]',
    next: {
      select: [-50, -10, -5, -1, 1, 5, 10, 50],
      action: (elektro, amount) => elektro.increment('value', amount),
    },
  },
});

game.playersMayAlwaysMove('token.mine, .mine *, #board *');
game.playersMayAlwaysPlay(['interactWithPiece']);

game.play(async () => {
  const deck = game.board.find('#deck');
  const resources = game.board.find('#resources');

  sortPowerplants();
  deck.shuffle();
  deck.move('[cost=13], #step-3', '#discard');
  let removals = 0;
  if (game.numberOfPlayers === 4) removals = 4;
  if (game.numberOfPlayers < 4) removals = 8;
  if (removals) deck.clear('card', removals);
  game.board.find('[cost=13]').move(deck);
  game.board.find('#step-3').moveToBottom(deck);

  resources.findAll('[resource=coal]').forEach(r => r.add('#coal', 1));
  resources.findAll('[resource=oil]').filter(r => r.get('cost') > 2).forEach(r => r.add('#oil', 1));
  resources.findAll('[resource=garbage]').filter(r => r.get('cost') > 6).forEach(r => r.add('#garbage', 1));
  resources.findAll('[resource=uranium][cost=14], [resource=uranium][cost=16]').forEach(r => r.add('#uranium', 1));

  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions());
  }
});

module.exports = game;
