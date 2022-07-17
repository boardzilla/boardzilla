import { game, Piece, Space, Counter, Player, InvalidChoiceError, IncompleteActionError } from 'game-core-server';
import { times, range, sumBy } from 'game-core-server/utils.js';
import { ResourceType, cards } from './cards.js';

const resourceTypes = ['coal', 'oil', 'garbage', 'uranium'];

class Card extends Piece {
  id: string;
  image: string;
  cost?: number;
  resourceType?: ResourceType | 'hybrid';
  resources?: number;
  power?: number;
  auction?: boolean;
  powered?: boolean;
  static serializable = ['id', 'image', 'cost', 'resourceType', 'resources', 'power', 'auction', 'powered'];
}

class Resource extends Piece {
  type: ResourceType;
  static serializable = ['type'];
}

class ResourceSpace extends Space {
  resource: ResourceType;
  cost: number;
  static serializable = ['type', 'cost'];
}

class Building extends Piece {
  color: string;
  player: number;
  score?: number;
  turn?: number;
  powered?: boolean;
  static serializable = ['color', 'player', 'score', 'turn', 'powered'];
}

game.setPlayers({
  min: 1,
  max: 6,
});

let lastBid = 0;

const applyMinimumRule = () => Card.forEach('#powerplants card', card => {
  if (card.cost! <= Building.max('#score token', 'score')) {
    card.remove();
    Card.find('#deck card:top').putInto('#powerplants');
  }
});

const sortPowerplants = () => {
  Space.find('#powerplants').sort((card: Card) => card.cost!);
  applyMinimumRule();
};

const costOf = (resource: ResourceType, amount: number) => (
  sumBy(Resource.findAll(`#resources #${resource}`).slice(-amount), r => (r.parent() as ResourceSpace).cost)
);

// order players by some function and set the turn tracker
const orderPlayers = (fn: (p: Player) => number) => {
  game.reorderPlayersBy(fn);
  Building.forEach('#turns token', token => token.turn = game.turnOrderOf(token.player));
};


const refill: Record<string, number[][]> = {
  coal: [
    [3, 4, 3],
    [3, 4, 3],
    [4, 5, 3],
    [5, 6, 4],
    [5, 7, 5],
    [7, 9, 6],
  ],
  oil: [
    [2, 2, 4],
    [2, 2, 4],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [5, 6, 7],
  ],
  garbage: [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [2, 3, 4],
    [3, 3, 5],
    [3, 5, 6],
  ],
  uranium: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 2, 2],
    [2, 3, 2],
    [2, 3, 3],
  ],
};

const income = [10, 22, 33, 44, 54, 64, 73, 82, 90, 98, 105, 112, 118, 124, 129, 134, 138, 142, 145, 148, 150];

game.afterMove('#powerplants card', sortPowerplants);
game.afterMove('card', (card: Card) => card.auction = false);

game.setupPlayerMat((mat, player, color) => {
  mat.createMany(Building, 22, '#building', { player, color, zoom: 2, left: 15, bottom: 15 });
  mat.create(Counter, '#elektro', { name: 'Elektro', value: 50, steps: [-50, -10, -5, -1, 1, 5, 10, 50], left: 62, bottom: 10 });
});

game.setupBoard(board => {
  board.create(Space, '#map', {});
  const resources = board.create(Space, '#resources', {});
  resources.create(ResourceSpace, '#uranium-16', { cost: 16, resource: 'uranium', top: 14, left: 42 });
  resources.create(ResourceSpace, '#uranium-14', { cost: 14, resource: 'uranium', top: 40, left: 42 });
  resources.create(ResourceSpace, '#uranium-12', { cost: 12, resource: 'uranium', top: 14, left: 15 });
  resources.create(ResourceSpace, '#uranium-10', { cost: 10, resource: 'uranium', top: 40, left: 15 });
  range(8, 1, -1).forEach(cost => {
    resources.create(ResourceSpace, `#coal-${cost}`, { cost, resource: 'coal', top: 562 - cost * 62.1, left: 10 });
    resources.create(ResourceSpace, `#coal-${cost}`, { cost, resource: 'coal', top: 580.5 - cost * 62.1, left: 10 });
    resources.create(ResourceSpace, `#coal-${cost}`, { cost, resource: 'coal', top: 599 - cost * 62.1, left: 10 });
    resources.create(ResourceSpace, `#uranium-${cost}`, { cost, resource: 'uranium', top: 562 - cost * 62.1, left: 26 });
    resources.create(ResourceSpace, `#oil-${cost}`, { cost, resource: 'oil', top: 572 - cost * 62.1, left: 26 });
    resources.create(ResourceSpace, `#oil-${cost}`, { cost, resource: 'oil', top: 585.5 - cost * 62.1, left: 26 });
    resources.create(ResourceSpace, `#oil-${cost}`, { cost, resource: 'oil', top: 600 - cost * 62.1, left: 26 });
    resources.create(ResourceSpace, `#garbage-${cost}`, { cost, resource: 'garbage', top: 562 - cost * 62.1, left: 42 });
    resources.create(ResourceSpace, `#garbage-${cost}`, { cost, resource: 'garbage', top: 580.5 - cost * 62.1, left: 42 });
    resources.create(ResourceSpace, `#garbage-${cost}`, { cost, resource: 'garbage', top: 599 - cost * 62.1, left: 42 });
  });

  board.create(Space, '#score', {});
  board.create(Space, '#turns', {});
  const powerplants = board.create(Space, '#powerplants', { layout: 'splay', columns: 4, rows: 2 });
  const deck = board.create(Space, '#deck', { layout: 'stack' });
  board.create(Space, '#discard', { layout: 'stack' });
  cards.forEach(({ id, ...attrs }) => (attrs.cost && attrs.cost <= 10 ? powerplants : deck).create(Card, id, { layout: 'splay', rows: 2, columns: 3, ...attrs }));

  game.pile.createMany(Resource, 24, '#coal', { type: 'coal', zoom: 1 });
  game.pile.createMany(Resource, 24, '#oil', { type: 'oil', zoom: 1 });
  game.pile.createMany(Resource, 24, '#garbage', { type: 'garbage', zoom: 1 });
  game.pile.createMany(Resource, 12, '#uranium', { type: 'uranium', zoom: 1 });
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
      Building.find('#score .mine').score = game.board.count('#map #building.mine');
      applyMinimumRule();
    },
  },
  bid: {
    prompt: 'Bid',
    key: 'c',
    if: 'card[auction]',
    log: '$0 bid $1',
    min: () => (lastBid ? lastBid + 1 : Card.find('[auction]').cost!),
    max: 999,
    action: (bid: number) => lastBid = bid,
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
    action: (card: Card, oilChoice: number) => {
      const resources = card.resources!;
      const resourceType = card.resourceType;
      if (resourceType === 'hybrid') {
        let oil = Math.min(resources, card.count('#oil'));
        let coal = Math.min(resources, card.count('#coal'));
        const overage = oil + coal - resources;
        if (overage < 0) throw new InvalidChoiceError('Not enough oil/coal to power this plant');
        if (overage > 0 && oilChoice === undefined) {
          const choices: Record<string, string> = {};
          for (let o = oil; o + overage >= oil; o--) choices[o] = `${o} oil + ${resources - o} coal`;
          throw new IncompleteActionError({ prompt: 'Power with?', choices });
        }
        if (oilChoice !== undefined) {
          oil = oilChoice;
          coal = resources - oilChoice;
        }
        if (oil) card.clearIntoPile('#oil', oil);
        if (coal) card.clearIntoPile('#coal', coal);
      } else {
        if (card.count(`#${resourceType}`) < resources) throw new InvalidChoiceError(`Not enough ${resourceType} to power this plant`);
        if (resourceType) card.clearIntoPile(`#${resourceType}`, resources);
      }
      times(card.power!, () => Building.find('#map #building.mine:not([powered])').powered = true);
      card.powered = true;
    },
  },
  income: {
    prompt: 'Collect income',
    if: '#building.mine[powered]',
    key: 'i',
    log: '$0 collected income',
    action: () => {
      const rev = income[Math.min(income.length - 1, game.board.count('#building.mine[powered]'))];
      Counter.find('.mine counter').value += rev;
      Building.findAll('#building.mine[powered]').forEach(b => b.powered = false);
      Card.findAll('.mine card[powered]').forEach(b => b.powered = false);
    },
  },
  remove: {
    prompt: 'Remove',
    key: 'r',
    log: '$0 removed $1',
    select: '#powerplants card',
    action: (card: Card) => card.remove(),
  },
  bottom: {
    prompt: 'Bottom of deck',
    key: 'd',
    log: '$0 bottomed $1',
    drag: '#powerplants card',
    onto: '#deck',
    action: (card: Card, deck: Space) => card.putIntoBottomOf(deck),
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
        prompt: (resource: ResourceType, amount: number) => `Buy ${amount} ${resource} for ${costOf(resource, amount)} Elektro?`,
        confirm: ['Buy', 'Cancel'],
        action: (resource: ResourceType, amount: number) => {
          const cost = costOf(resource, amount);
          const elektro = Counter.find('.mine counter');
          if (elektro.value < cost) throw new InvalidChoiceError('Not enough Elektro');
          let freeSpaces = 0;
          Card.findAll('.mine card[resources]').forEach(card => {
            if (card.resourceType === resource || (card.resourceType === 'hybrid' && ['oil', 'coal'].includes(resource))) {
              freeSpaces += card.resources! * 2 - card.count('resource');
            }
          });
          if (freeSpaces < amount) throw new InvalidChoiceError(`Not enough storage space for ${amount} ${resource}`);
          times(amount, () => {
            const cardWithSpace = Card.findAll('.mine card').find((card: Card) => (
              card.resources && card.resources * 2 > card.count('resource')
                && (card.resourceType === resource || (card.resourceType === 'hybrid' && ['oil', 'coal'].includes(resource)))
            ))!;
            game.board.move(`#resources #${resource}`, cardWithSpace, 1);
          });
          elektro.value -= cost;
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
    select: { '1': 'Step 1', '2': 'Step 2', '3': 'Step 3' },
    prompt: 'Refill resources',
    log: '$0 refilled resources',
    action: (step: number) => {
      console.log('step', step);
      resourceTypes.forEach(resource => Resource
        .findAll(`#resources [resource=${resource}]:empty`)
        .slice(0, refill[resource][game.numberOfPlayers - 1][step - 1])
        .forEach(r => r.addFromPile(`#${resource}`, 1)));
    },
  },
  adjustElektro: {
    prompt: 'Elektro +/-',
    key: 'e',
    select: '.mine counter',
    log: (_elektro, amount: number) => `$0 ${amount >= 0 ? 'gained' : 'spent'} ${Math.abs(amount)} Elektro`,
    next: {
      prompt: 'Add or subtract how much Elektro?',
      min: -150,
      max: 150,
      action: (elektro: Counter, amount: number) => elektro.value += amount,
    },
  },
  auction: {
    select: '#powerplants card',
    prompt: 'Put up for auction',
    unless: 'card[auction]',
    log: '$0 puts $1 up for auction',
    key: 'a',
    action: (card: Card) => card.auction = true,
  },
});

game.playersMayAlwaysMove('.mine *, #powerplants card, #map token.mine');
game.playersMayAlwaysPlay(['interactWithPiece']);

game.play(async () => {
  const deck = Space.find('#deck');

  // setup board
  sortPowerplants();
  deck.shuffle();
  deck.move('[cost=13], #step-3', '#discard');
  let removals = 0;
  if (game.numberOfPlayers === 4) removals = 4;
  if (game.numberOfPlayers < 4) removals = 8;
  deck.clearIntoPile('card', removals);
  Card.find('[cost=13]').putInto(deck);
  Card.find('#step-3').putIntoBottomOf(deck);

  // initial resources
  ResourceSpace.findAll('#resources [resource=coal]').forEach(r => r.addFromPile('#coal', 1));
  ResourceSpace.findAll('#resources [resource=oil]').filter(r => r.cost > 2).forEach(r => r.addFromPile('#oil', 1));
  ResourceSpace.findAll('#resources [resource=garbage]').filter(r => r.cost > 6).forEach(r => r.addFromPile('#garbage', 1));
  ResourceSpace.findAll('#resources [resource=uranium][cost=14], [resource=uranium][cost=16]').forEach(r => r.addFromPile('#uranium', 1));

  game.players.forEach(player => {
    game.playerMat(player.position).move('token', '#score', 1);
    game.playerMat(player.position).move('token', '#turns', 1);
  });

  // randomly order player start
  orderPlayers(_p => game.random.random());

  /* await game.playersInTurn(async player => {
   *   console.log('wait for player', player, game.currentPlayer(), game.currentPlayerPosition);
   *   const auctionOrPass = await game.currentPlayerPlay(['auction', 'pass']); // TODO only first 4 unless step 3, no pass in first turn
   *   console.log('auctionOrPass', auctionOrPass);
   * });
   */
  game.setAllPlayers({ havePassedAuctionPhase: false });
  await game.playersInTurn(async player => {
    if (player.get('havePassedAuctionPhase')) return;
    const auctionOrPass = await game.currentPlayerPlay(['auction', 'pass']); // TODO only first 4 unless step 3, no pass in first turn
    if (auctionOrPass.action === 'pass') {
      player.set({ havePassedAuctionPhase: true });
      return;
    }

    // start bidding
    game.setAllPlayers({ passedThisAuction: false });

    let playerWithHighestBid = game.currentPlayerPosition;
    while (game.countPlayersBy(p => !p.get('passedThisAuction') && !p.get('havePassedAuctionPhase')) > 1) {
      if (!player.get('havePassedAuctionPhase') && !player.get('passedThisAuction')) {
        const bidOrPass = await game.currentPlayerPlay(['bid', 'pass']); // TODO opener may not pass own auction
        if (bidOrPass.action === 'pass') {
          player.set({ passedThisAuction: true });
        } else {
          playerWithHighestBid = game.currentPlayerPosition;
        }
      }
      game.endTurn();
    }
    Counter.find('.mine counter').value -= (lastBid || Card.find('[auction]').cost!);
    lastBid = 0;
    Card.find('[auction]').putInto(game.playerMat(playerWithHighestBid));
  });

  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions());
  }
});

export default game;
