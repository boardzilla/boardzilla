const { game, $, $$, Counter, InvalidChoiceError, IncompleteActionError } = require('game-core-server');
const { times, range, sumBy } = require('game-core-server/utils.js');
const cards = require('./cards');

game.setPlayers({
  min: 1,
  max: 6,
});

const highScore = () => {
  const highest = game.doc.highest('#score token', 'score');
  return (highest && highest.get('score')) || 0;
};

const applyMinimumRule = () => $$('#powerplants card').forEach(card => {
  if (card.get('cost') <= highScore()) {
    card.remove();
    $('#deck').move('card', '#powerplants', 1);
  }
});

const sortPowerplants = () => {
  $('#powerplants').sort(card => card.get('cost'));
  applyMinimumRule();
};

const costOf = (resource, amount) => sumBy($$(`#resources #${resource}`).slice(-amount), r => r.parent().get('cost'));

// order players by some function and set the turn tracker
const orderPlayers = fn => {
  game.reorderPlayersBy(fn);
  $$('#turns token').forEach(token => token.set({ turn: game.turnOrderOf(token.player()) }));
};

const resourceTypes = ['coal', 'oil', 'garbage', 'uranium'];

const refill = {
  coal: {
    1: [3, 4, 3],
    2: [3, 4, 3],
    3: [4, 5, 3],
    4: [5, 6, 4],
    5: [5, 7, 5],
    6: [7, 9, 6],
  },
  oil: {
    1: [2, 2, 4],
    2: [2, 2, 4],
    3: [2, 3, 4],
    4: [3, 4, 5],
    5: [4, 5, 6],
    6: [5, 6, 7],
  },
  garbage: {
    1: [1, 2, 3],
    2: [1, 2, 3],
    3: [1, 2, 3],
    4: [2, 3, 4],
    5: [3, 3, 5],
    6: [3, 5, 6],
  },
  uranium: {
    1: [1, 1, 1],
    2: [1, 1, 1],
    3: [1, 1, 1],
    4: [1, 2, 2],
    5: [2, 3, 2],
    6: [2, 3, 3],
  },
};

const income = [10, 22, 33, 44, 54, 64, 73, 82, 90, 98, 105, 112, 118, 124, 129, 134, 138, 142, 145, 148, 150];

game.afterMove('#powerplants card', sortPowerplants);
game.afterMove('card', card => card.unset('auction'));

game.setupPlayerMat((mat, player, color) => {
  mat.addPieces(22, '#building', 'token', { player, color, zoom: 2, left: 15, bottom: 15 });
  mat.addInteractivePiece(Counter, { name: 'Elektro', steps: [-50, -10, -5, -1, 1, 5, 10, 50], left: 62, bottom: 10, initialValue: 50 });
});

game.setupBoard(board => {
  board.addSpace('#map');
  const resources = board.addSpace('#resources');
  resources.addSpace('#uranium-16', { cost: 16, resource: 'uranium', top: 14, left: 42 });
  resources.addSpace('#uranium-14', { cost: 14, resource: 'uranium', top: 40, left: 42 });
  resources.addSpace('#uranium-12', { cost: 12, resource: 'uranium', top: 14, left: 15 });
  resources.addSpace('#uranium-10', { cost: 10, resource: 'uranium', top: 40, left: 15 });
  range(8, 1, -1).forEach(cost => {
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 562 - cost * 62.1, left: 10 });
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 580.5 - cost * 62.1, left: 10 });
    resources.addSpace(`#coal-${cost}`, { cost, resource: 'coal', top: 599 - cost * 62.1, left: 10 });
    resources.addSpace(`#uranium-${cost}`, { cost, resource: 'uranium', top: 562 - cost * 62.1, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 572 - cost * 62.1, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 585.5 - cost * 62.1, left: 26 });
    resources.addSpace(`#oil-${cost}`, { cost, resource: 'oil', top: 600 - cost * 62.1, left: 26 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 562 - cost * 62.1, left: 42 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 580.5 - cost * 62.1, left: 42 });
    resources.addSpace(`#garbage-${cost}`, { cost, resource: 'garbage', top: 599 - cost * 62.1, left: 42 });
  });

  board.addSpace('#score');
  board.addSpace('#turns');
  const powerplants = board.addSpace('#powerplants', { layout: 'splay', columns: 4, rows: 2 });
  const deck = board.addSpace('#deck', { layout: 'stack' });
  board.addSpace('#discard', { layout: 'stack' });
  cards.forEach(({ id, ...attrs }) => (attrs.cost <= 10 ? powerplants : deck).addPiece(id, 'card', { layout: 'splay', rows: 2, columns: 3, ...attrs }));

  game.pile.addPieces(24, '#coal', 'resource', { type: 'coal', zoom: 1 });
  game.pile.addPieces(24, '#oil', 'resource', { type: 'oil', zoom: 1 });
  game.pile.addPieces(24, '#garbage', 'resource', { type: 'garbage', zoom: 1 });
  game.pile.addPieces(12, '#uranium', 'resource', { type: 'uranium', zoom: 1 });
});

game.hideBoard('#deck card');

game.defineActions({
  play: {
    prompt: 'Play',
    key: 'p',
    log: false,
    drag: '#deck card',
    onto: '#powerplants',
  },
  /* buy: {
   *   prompt: 'Buy',
   *   key: 'b',
   *   log: '$0 bought $1',
   *   drag: '#powerplants card',
   *   toPlayer: 'all',
   *   next: {
   *     prompt: card => `Buy ${card} for ${priceOf(card)}?`,
   *     confirm: ['Buy', 'Cancel'],
   *     action: card => {
   *       $('.mine [name=Elektro]').increment('value', -priceOf(card));
   *       game.unset('lastBid');
   *     },
   *   },
   * }, */
  build: {
    prompt: 'Build',
    key: 'b',
    log: '$0 built a house',
    drag: '.mine token',
    onto: '#map',
    action: () => {
      $('#score token.mine').set({ score: game.board.count('#map #building.mine') });
      applyMinimumRule();
    },
  },
  bid: {
    prompt: 'Bid',
    key: 'c',
    if: 'card[auction]',
    log: '$0 bid $1',
    min: () => (game.get('lastBid') ? game.get('lastBid') + 1 : $('card[auction]').get('cost')),
    max: 999,
    action: bid => game.set({ lastBid: bid }),
  },
  pass: {
    prompt: 'Pass',
    log: '$0 passed',
    key: 'p',
  },
  power: {
    prompt: 'Power this plant',
    select: '.mine card:not([powered])',
    log: '$0 powered $1',
    key: 'p',
    action: (card, oilChoice) => {
      const resources = card.get('resources');
      const resourceType = card.get('resourceType');
      if (resourceType === 'hybrid') {
        let oil = Math.min(resources, card.count('#oil'));
        let coal = Math.min(resources, card.count('#coal'));
        const overage = oil + coal - resources;
        if (overage < 0) throw new InvalidChoiceError('Not enough oil/coal to power this plant');
        if (overage > 0 && oilChoice === undefined) {
          const choices = {};
          for (let o = oil; o + overage >= oil; o--) choices[o] = `${o} oil + ${resources - o} coal`;
          throw new IncompleteActionError({ prompt: 'Power with?', choices });
        }
        if (oilChoice !== undefined) {
          oil = oilChoice;
          coal = resources - oilChoice;
        }
        if (oil) card.clear('#oil', oil);
        if (coal) card.clear('#coal', coal);
      } else {
        if (card.count(`#${resourceType}`) < resources) throw new InvalidChoiceError(`Not enough ${resourceType} to power this plant`);
        if (resourceType) card.clear(`#${resourceType}`, resources);
      }
      times(card.get('power'), () => $('#map #building.mine:not([powered])').set({ powered: true }));
      card.set({ powered: true });
    },
  },
  income: {
    prompt: 'Collect income',
    if: '#building.mine[powered]',
    key: 'i',
    log: () => `$0 collected ${$('.mine [name=Elektro]').get('income')} income`,
    action: () => {
      const rev = income[Math.min(income.length - 1, game.board.count('#building.mine[powered]'))];
      $('.mine [name=Elektro]').increment('value', rev);
      $('.mine [name=Elektro]').set({ income: rev });
      $$('#building.mine[powered]').forEach(b => b.unset('powered'));
      $$('.mine card[powered]').forEach(b => b.unset('powered'));
    },
  },
  remove: {
    prompt: 'Remove',
    key: 'r',
    log: '$0 removed $1',
    select: '#powerplants card',
    action: card => card.remove(),
  },
  bottom: {
    prompt: 'Bottom of deck',
    key: 'd',
    log: '$0 bottomed $1',
    drag: '#powerplants card',
    onto: '#deck',
    action: (card, deck) => card.moveToBottomOf(deck),
  },
  buyResource: {
    prompt: 'Buy resources',
    select: resourceTypes,
    log: '$0 bought $2 $1',
    key: 'r',
    next: {
      prompt: 'Amount',
      min: 1,
      max: 30,
      next: {
        prompt: (resource, amount) => `Buy ${amount} ${resource} for ${costOf(resource, amount)} Elektro?`,
        confirm: ['Buy', 'Cancel'],
        action: (resource, amount) => {
          const cost = costOf(resource, amount);
          const elektro = $('.mine [name=Elektro]');
          if (elektro.get('value') < cost) throw new InvalidChoiceError('Not enough Elektro');
          let freeSpaces = 0;
          $$('.mine card[resources]').forEach(card => {
            if (card.get('resourceType') === resource || (card.get('resourceType') === 'hybrid' && ['oil', 'coal'].includes(resource))) {
              freeSpaces += card.get('resources') * 2 - card.count('resource');
            }
          });
          if (freeSpaces < amount) throw new InvalidChoiceError(`Not enough storage space for ${amount} ${resource}`);
          times(amount, () => {
            const freeSpace = $$('.mine card').find(card => (
              card.get('resources') && card.get('resources') * 2 > card.count('resource')
              && (card.get('resourceType') === resource || (card.get('resourceType') === 'hybrid' && ['oil', 'coal'].includes(resource)))
            ));
            game.board.move(`#resources #${resource}`, freeSpace, 1);
          });
          elektro.increment('value', -cost);
        },
      },
    },
  },
  moveResource: {
    prompt: 'Move',
    drag: '.mine resource',
    log: false,
    onto: '.mine card',
  },
  refill: {
    select: { 1: 'Step 1', 2: 'Step 2', 3: 'Step 3' },
    prompt: 'Refill resources',
    log: '$0 refilled resources',
    action: step => {
      console.log('step', step);
      resourceTypes.forEach(resource => $('#resources')
        .findAll(`[resource=${resource}]:empty`)
        .slice(0, refill[resource][game.numberOfPlayers][step - 1])
        .forEach(r => r.add(`#${resource}`, 1)));
    },
  },
  adjustElektro: {
    prompt: 'Elektro +/-',
    key: 'e',
    select: '.mine [name=Elektro]',
    log: (elektro, amount) => `$0 ${amount >= 0 ? 'gained' : 'spent'} ${Math.abs(amount)} Elektro`,
    next: {
      prompt: 'Add or subtract how much Elektro?',
      min: -150,
      max: 150,
      action: (elektro, amount) => elektro.increment('value', amount),
    },
  },
  auction: {
    select: '#powerplants card',
    prompt: 'Put up for auction',
    unless: 'card[auction]',
    log: '$0 puts $1 up for auction',
    key: 'a',
    action: card => card.set('auction'),
  },
});

game.playersMayAlwaysMove('.mine *, #powerplants card, #map token.mine');
game.playersMayAlwaysPlay(['interactWithPiece']);

game.play(async () => {
  const deck = $('#deck');
  const resources = $('#resources');

  // setup board
  sortPowerplants();
  deck.shuffle();
  deck.move('[cost=13], #step-3', '#discard');
  let removals = 0;
  if (game.numberOfPlayers === 4) removals = 4;
  if (game.numberOfPlayers < 4) removals = 8;
  if (removals) deck.clear('card', removals);
  $('[cost=13]').moveTo(deck);
  $('#step-3').moveToBottomOf(deck);

  // initial resources
  resources.findAll('[resource=coal]').forEach(r => r.add('#coal', 1));
  resources.findAll('[resource=oil]').filter(r => r.get('cost') > 2).forEach(r => r.add('#oil', 1));
  resources.findAll('[resource=garbage]').filter(r => r.get('cost') > 6).forEach(r => r.add('#garbage', 1));
  resources.findAll('[resource=uranium][cost=14], [resource=uranium][cost=16]').forEach(r => r.add('#uranium', 1));

  game.players.forEach(player => {
    game.playerMat(player.position).move('token', '#score', 1);
    game.playerMat(player.position).move('token', '#turns', 1);
  });

  // randomly order player start
  orderPlayers(game.random);

  /* await game.playersInTurn(async player => {
   *   console.log('wait for player', player, game.currentPlayer(), game.currentPlayerPosition);
   *   const auctionOrPass = await game.currentPlayerPlay(['auction', 'pass']); // TODO only first 4 unless step 3, no pass in first turn
   *   console.log('auctionOrPass', auctionOrPass);
   * });
   */
  const havePassedAuctionPhase = Array(game.players.length);
  await game.playersInTurn(async player => {
    if (havePassedAuctionPhase[player]) return;
    const auctionOrPass = await game.currentPlayerPlay(['auction', 'pass']); // TODO only first 4 unless step 3, no pass in first turn
    if (auctionOrPass === 'pass') {
      havePassedAuctionPhase[player] = true;
      return;
    }

    // start bidding
    const passedThisAuction = [...havePassedAuctionPhase];
    let playerWithHighestBid = game.currentPlayerPosition;
    while (passedThisAuction.filter(p => !p).length > 1) {
      console.log('passedThisAuction', passedThisAuction.filter(p => !p).length, passedThisAuction.filter(p => !p));
      if (!passedThisAuction[player]) {
        const bidOrPass = await game.currentPlayerPlay(['bid', 'pass']); // TODO opener may not pass own auction
        if (bidOrPass.action === 'pass') {
          passedThisAuction[player] = true;
        } else {
          playerWithHighestBid = game.currentPlayerPosition;
        }
      }
      game.endTurn();
    }
    $('.mine [name=Elektro]').increment('value', -(game.get('lastBid') || $('card[auction]').get('cost')));
    game.unset('lastBid');
    $('card[auction]').moveTo(game.playerMat(playerWithHighestBid));
  });

  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions());
  }
});

module.exports = game;
