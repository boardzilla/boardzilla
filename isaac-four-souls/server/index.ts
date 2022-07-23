import { game, Space, Piece, Counter, Die, Player } from 'game-core-server';
import { editions, cards, CardData } from './data.js';

class Card extends Piece {
  name: string;
  type: 'character' | 'eternal' | 'loot' | 'treasure' | 'monster' | 'bonus' | 'room';
  edition: string;
  front: string;
  back: string;
  eternal?: string;
  p3?: boolean;
  active?: boolean;
  flipped?: boolean;

  static serializable = ['name', 'type', 'edition', 'front', 'back', 'eternal', 'p3', 'active', 'flipped'];
}

class Deck extends Space {
  bonus?: boolean;
  layout = 'stack';
}

class Hand extends Space {
  showTo?: string;

  static serializable = ['showTo'];
}

game.setPlayers({
  min: 1,
  max: 4,
});

const findCards = (type: string) => Object.entries(cards).filter(c => c[1].type === type);

const addCards = (pieces: [string, CardData][], deck: Space) => {
  pieces.forEach(([id, card]) => {
    Object.entries(card.edition).forEach(([edition, count]) => {
      deck.createMany(Card, count, `#${id}`, { ...card, edition });
    });
  });
};

const addAllCards = (type: string, deck: Space) => addCards(findCards(type), deck);

game.setupPlayerMat(mat => {
  mat.create(Space, '#tableau', { layout: 'splay', columns: game.players.length > 2 ? 9 : 12, rows: 2 });
  mat.create(Hand, '#hand', { layout: 'splay', columns: 16, minWidth: 73 });
  mat.create(Space, '#souls', { layout: 'splay', columns: 2, rows: 2, minWidth: 73, minHeight: 100 });
  mat.create(Counter, '#hp', { name: 'health', component: 'HealthCounter', value: 2, max: 5, left: 20, bottom: 140 });
  mat.create(Counter, '#attack', { name: 'attack', component: 'AttackCounter', value: 1, max: 8, left: 140, bottom: 140 });
  mat.create(Counter, '#coins', { name: 'coins', component: 'CoinCounter', value: 3, max: 50, right: 170, bottom: 140 });
  mat.create(Die, '#d6', { faces: 6, right: 200, top: 20 });
});

game.setupBoard(board => {
  const charactersDeck = board.create(Deck, '#characters');
  addAllCards('character', charactersDeck);
  charactersDeck.shuffle();
  const eternalsDeck = board.create(Deck, '#eternals');
  addAllCards('eternal', eternalsDeck);
  eternalsDeck.shuffle();

  const lootDeck = board.create(Deck, '#loot', { bonus: true });
  board.create(Deck, '#loot-discard');
  addAllCards('loot', game.pile);

  board.create(Deck, '#treasure');
  board.create(Deck, '#treasure-discard');
  board.create(Space, '#shop', { layout: 'splay', columns: 3, rows: 2, minWidth: 73 });
  addAllCards('treasure', game.pile);

  board.create(Deck, '#monsters');
  board.create(Deck, '#monsters-discard');
  board.create(Space, '#dungeon', { layout: 'grid', columns: 3, rows: 2, minWidth: 73 });
  addAllCards('monster', game.pile);

  const bonusSouls = board.create(Space, '#bonus-souls', { layout: 'splay', columns: 3, minWidth: 73 });
  addAllCards('bonus', lootDeck);
  lootDeck.shuffle();
  lootDeck.move('Card', bonusSouls, 3);

  board.create(Deck, '#rooms');
  board.create(Deck, '#room');
  board.create(Deck, '#room-discard');
  addAllCards('room', game.pile);
});

game.afterMove(
  'Hand Card, Deck Card',
  card => {
    card.destroyContents('*');
    card.set({ active: false, flipped: false });
  },
);

game.hideBoard(
  'Card[flipped], PlayerMat:not(.mine) Hand:not([showTo=$me]):not([showTo="Everyone"]) Card, #loot Card, #treasure Card, #monsters Card, #characters Card, #eternals Card, #rooms Card',
  ['front', 'name', 'edition', 'p3', 'eternal'],
);

game.defineActions({
  start: {
    prompt: 'Begin game',
    log: false,
  },
  activate: {
    select: '.mine #tableau Card:not([active])',
    prompt: 'Tap',
    log: '$0 tapped $1',
    key: 'x',
    action: (card: Card) => card.active = true,
  },
  deactivate: {
    prompt: 'Untap',
    log: '$0 untapped $1',
    select: '.mine #tableau Card[active]',
    key: 'x',
    action: (card: Card) => card.active = false,
  },
  deactivateAll: {
    prompt: 'Untap all',
    log: '$0 untapped all cards',
    select: '.mine #tableau Card[active]',
    key: 'l',
    action: (card: Card) => card.parent()!.findAll(Card, '[active]').forEach(c => c.active = false),
  },
  play: {
    prompt: 'Play onto board',
    log: '$0 played $1 onto the board',
    key: 'd',
    drag: '.mine Hand Card',
    onto: '.mine #tableau',
    action: (card: Card) => { if (card.eternal) Card.find(`.mine Hand #${card.eternal}`).putInto('.mine #tableau'); },
  },
  draw: {
    prompt: 'Draw',
    log: '$0 drew $1',
    drag: 'Deck:not([bonus]):not(#characters) Card:last-child, #loot-discard Card:last-child',
    key: 'd',
    onto: '.mine Hand',
  },
  drawCharacter: {
    prompt: 'Draw',
    log: '$0 drew $1',
    drag: '#characters Card:last-child',
    key: 'd',
    onto: '.mine #tableau',
    action: (card: Card) => { if (card.eternal) Card.find(`#board #${card.eternal}`).putInto('.mine #tableau'); },
  },
  drawMultiple: {
    prompt: 'Draw multiple',
    select: 'Deck:not([bonus])',
    key: 'm',
    log: '$0 drew $2 $1',
    next: {
      prompt: 'How many?',
      min: 2,
      max: 6,
      action: (deck: Deck, n: number) => deck.move('Card', '.mine Hand', n),
    },
  },
  purchase: {
    prompt: 'Purchase',
    log: '$0 purchased $1',
    drag: '#shop Card, #treasure Card:last-child',
    key: 'p',
    onto: '.mine #tableau',
  },
  drawOne: {
    prompt: 'Draw specific card',
    log: '$0 drew $2 out of the deck',
    select: 'Deck:not([bonus])',
    key: 'i',
    next: {
      prompt: 'Select card',
      select: (deck: Deck) => deck.findAll(Card, '*').map(c => c.name).sort(),
      action: (deck: Deck, name: string) => {
        const card = deck.find(Card, `Card[name="${name}"]`);
        card.putInto('.mine Hand');
        if (card.eternal) Card.find(`#board #${card.eternal}`).putInto('.mine Hand');
      },
    },
  },
  discardLoot: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#loot Card:last-child, .mine Card[type="loot"], #dungeon Card[type="loot"]',
    onto: '#loot-discard',
  },
  playLoot: {
    prompt: 'Play',
    log: '$0 played $1',
    key: 'p',
    drag: '.mine Card[type="loot"]',
    onto: '#loot-discard',
  },
  intoLootDeckTop: {
    prompt: 'Put on top of deck',
    log: '$0 put $1 on top of the deck',
    key: 't',
    drag: '.mine Card[type="loot"], #loot-discard Card:last-child',
    onto: '#loot',
  },
  intoLootDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 on the bottom of the deck',
    key: 'b',
    select: '.mine Card[type="loot"]',
    action: (card: Card) => card.putIntoBottomOf('#loot'),
  },
  intoShop: {
    prompt: 'Put into shop',
    log: false,
    key: 's',
    drag: '#treasure Card:last-child, #treasure-discard Card:last-child, .mine Card[type="treasure"]',
    onto: '#shop',
  },
  discardTreasure: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#treasure Card:last-child, #shop Card, .mine Card[type="treasure"]',
    onto: '#treasure-discard',
  },
  intoTreasureDeck: {
    prompt: 'Put top of deck',
    log: '$0 put $1 on top of the deck',
    key: 't',
    drag: '#treasure-discard Card:last-child, #shop Card, .mine Card[type="treasure"]',
    onto: '#treasure',
  },
  intoTreasureDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 on the bottom of the deck',
    key: 'b',
    select: '#treasure-discard Card:last-child, #shop Card, .mine Card[type="treasure"]',
    action: (card: Card) => card.putIntoBottomOf('#treasure'),
  },
  intoDungeon: {
    prompt: 'Put into dungeon',
    log: false,
    key: 's',
    drag: '#monsters Card:last-child, #monsters-discard Card:last-child, .mine Card[type="monster"], .mine Card[type="loot"], #loot-discard Card:last-child',
    onto: '#dungeon',
  },
  takeMonster: {
    prompt: 'Play onto board',
    log: '$0 played $1 onto the board',
    key: 'p',
    drag: '#dungeon Card, #monsters Card:last-child, #monsters-discard Card:last-child',
    onto: '.mine #tableau',
  },
  discardMonster: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#dungeon Card[type="monster"], #monsters Card:last-child, .mine Card[type="monster"]',
    onto: '#monsters-discard',
  },
  intoMonsterDeck: {
    prompt: 'Put top of deck',
    log: '$0 put $1 in the top of the deck',
    key: 't',
    drag: '#dungeon Card[type="monster"], #monsters-discard Card:last-child, .mine Card[type="monster"]',
    onto: '#monsters',
  },
  intoMonsterDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 in the bottom of the deck',
    key: 'b',
    select: '#dungeon Card[type="monster"], #monsters-discard Card:last-child, .mine Card[type="monster"]',
    action: (card: Card) => card.putIntoBottomOf('#monsters'),
  },
  intoMonsterDeckAt: {
    prompt: 'Put nth card down in deck',
    log: '$0 put $1 in the deck at position $2',
    key: 'n',
    select: '#dungeon Card[type="monster"], #monsters-discard Card:last-child, .mine Card[type="monster"]',
    next: {
      prompt: 'How far down into deck?',
      min: 2,
      max: 6,
      action: (card: Card, position: number) => card.putInto('#monsters', position - 1),
    },
  },
  replaceBonus: {
    prompt: 'Replace with random',
    log: false,
    drag: '#bonus-souls Card',
    onto: '#loot',
    action: (card: Card) => { card.putIntoBottomOf('#loot'); Card.find('#loot Card:last-child').putInto('#bonus-souls'); },
  },
  discardBonus: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '.mine Card[type=bonus]',
    onto: '#bonus-souls',
  },
  takeSoul: {
    prompt: 'Take soul',
    log: '$0 won soul of $1',
    key: 'w',
    drag: '#bonus-souls Card, #dungeon Card, #monsters-discard Card, .mine Card',
    onto: '.mine #souls',
  },
  playRoom: {
    prompt: 'Play',
    log: '$0 played $1',
    key: 'p',
    drag: '#rooms Card:last-child, .mine Card[type=room]',
    onto: '#room',
  },
  discardRoom: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#rooms Card:last-child, #room Card:last-child, .mine Card[type=room]',
    onto: '#room-discard',
  },
  inRoomDeck: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 't',
    drag: '#room-discard Card:last-child, #room Card:last-child, .mine Card[type=room]',
    onto: '#rooms',
  },
  giveCard: {
    prompt: 'Give to player',
    promptOnto: 'Which player',
    log: '$0 gave $1 to $2',
    key: 'g',
    drag: '.mine #tableau Card, .mine Card[type=monster]',
    toPlayer: 'other',
    onto: '#tableau',
  },
  giveSoul: {
    prompt: 'Give to player',
    promptOnto: 'Which player',
    log: '$0 gave $1 to $2',
    key: 'g',
    drag: '.mine #souls Card',
    toPlayer: 'other',
    onto: '#souls',
  },
  giveLoot: {
    prompt: 'Give to player',
    promptOnto: 'Which player',
    log: '$0 gave $1',
    key: 'g',
    drag: '.mine Hand Card[type=\'loot\']',
    toPlayer: 'all',
    onto: 'Hand',
  },
  giveAllLoot: {
    prompt: 'Give all cards to player',
    select: '.mine Hand Card',
    log: '$0 gave all',
    next: {
      prompt: 'Which player?',
      select: 'PlayerMat:not(.mine) Hand',
      action: (_, hand: Space) => game.board.move('.mine Hand Card', hand),
    },
  },
  addCounter: {
    prompt: 'Add counter',
    log: '$0 added counter to $1',
    key: 'c',
    select: '.mine Card, #board Card',
    action: (card: Card) => card.create(Counter, '#counter', { value: 0, max: 99 }),
  },
  removeCounter: {
    prompt: 'Remove counter',
    log: '$0 removed counter from $1',
    key: 'c',
    select: '.mine Card:not(:empty), #board Card:not(:empty)',
    action: (card: Card) => card.destroyContents('Counter'),
  },
  intoCharDeckTop: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 'f',
    drag: '.mine Card[type=character]',
    onto: '#characters',
    action: (card: Card) => { if (card.eternal) Card.find(`.mine #${card.eternal}`).putInto('#eternals'); },
  },
  intoEternalDeckTop: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 'f',
    drag: '.mine Card[type=eternal]',
    onto: '#eternals',
  },
  removeP3: {
    prompt: 'Remove 3+ player cards',
    if: () => game.doc.contains('Card[p3]'),
    action: () => game.doc.destroyContents('Card[p3]'),
  },
  remove: {
    prompt: 'Put back in your hand',
    log: '$0 took $1 back into hand',
    drag: '.mine #tableau Card',
    onto: '.mine Hand',
    action: (card: Card) => { if (card.eternal) Card.find(`.mine #${card.eternal}`).putInto('.mine Hand'); },
  },
  shuffle: {
    select: 'Deck',
    prompt: 'Shuffle',
    action: (deck: Deck) => deck.shuffle(),
  },
  flip: {
    select: '.mine Card, #dungeon Card',
    prompt: 'Flip',
    action: (card: Card) => card.flipped = !card.flipped,
  },
  showHand: {
    prompt: 'Show hand',
    log: '$0 showed hand to $1',
    if: '.mine Hand:not([showTo])',
    select: () => {
      const players: (Player | string)[] = game.otherPlayers();
      if (players.length > 1) players.push('Everyone');
      return players;
    },
    action: (player: Player | string) => {
      const hand = Hand.find('.mine Hand');
      hand.showTo = player instanceof Player ? String(player.position) : player
      hand.label = `Showing to ${player instanceof Player ? player.name : player}`;
    },
  },
  hideHand: {
    prompt: 'Stop showing hand',
    if: '.mine Hand[showTo]',
    log: '$0 stopped showing hand',
    action: () => {
      const hand = Hand.find('.mine Hand');
      hand.showTo = undefined;
      hand.label = undefined;
    }
  },
});

const startingActions = [
  'start',
  'removeP3',
  'replaceBonus',
];

Object.entries(editions).forEach(([i, edition]) => {
  startingActions.push(`excludeEdition-${i}`);

  game.defineAction(`excludeEdition-${i}`, {
    prompt: `Remove ${edition}`,
    if: () => game.doc.contains(`#board Card[edition="${edition}"], PlayerMat Card[edition="${edition}"]`),
    action: () => game.doc.clearIntoPile(`#board Card[edition="${edition}"], PlayerMat Card[edition="${edition}"]`),
  });
});

game.play(async () => {
  game.playersMayAlwaysMove('.mine *, #board *');
  game.playersMayAlwaysPlay(['interactWithPiece']);

  let action;
  game.prompt('Select starting characters and eternals, then hit Begin game');
  do {
    ({ action } = await game.anyPlayerPlay([
      ...startingActions,
      'intoCharDeckTop',
      'intoEternalDeckTop',
      'drawCharacter',
      'drawOne',
      'drawMultiple',
      'shuffle',
      'play',
      'remove',
    ]));
    console.log('G', action);
  } while (action !== 'start');

  const lootDeck = Deck.find('#loot');
  lootDeck.clearIntoPile('Card');
  lootDeck.bonus = false;
  lootDeck.addFromPile('Card[type=loot]');
  lootDeck.shuffle();
  const treasureDeck = Deck.find('#treasure');
  treasureDeck.addFromPile('Card[type=treasure]');
  treasureDeck.shuffle();
  const monsterDeck = Deck.find('#monsters');
  monsterDeck.addFromPile('Card[type=monster]');
  monsterDeck.shuffle();
  game.board.create(Counter, '#bosshp', { name: 'boss health', component: 'HealthCounter', value: 1, max: 8, left: game.players.length > 2 ? 1290 : 990, top: 110 });
  const roomDeck = Deck.find('#rooms');
  roomDeck.addFromPile('Card[type=room]');
  roomDeck.shuffle();
  game.prompt('');

  console.log('G starting while-true loop');
  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions().filter(a => !startingActions.includes(a)));
  }
});

export default game;
