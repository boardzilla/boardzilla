const game = require('game-core-server');
const { editions, cards } = require('./data');

game.setPlayers({
  min: 1,
  max: 4,
});

const findCards = type => Object.entries(cards).filter(c => c[1].type === type);

const addCards = (pieces, deck) => {
  pieces.forEach(([id, card]) => {
    Object.entries(card.edition).forEach(([edition, count]) => {
      deck.addPieces(count, `#${id}`, 'card', { ...card, edition });
    });
  });
};

const addAllCards = (type, deck) => addCards(findCards(type), deck);

game.setupPlayerMat(mat => {
  const tableau = mat.addSpace('#tableau', 'area', { spreadX: 100 });
  mat.addSpace('#hand', 'splay', { columns: 16 });
  tableau.addComponent('counter', { name: 'health', display: 'hp', initialValue: 2, max: 5, left: 20, bottom: 20 });
  tableau.addComponent('counter', { name: 'attack', display: 'attack', initialValue: 1, max: 8, left: 140, bottom: 20 });
  tableau.addComponent('counter', { name: 'coins', display: 'coin', initialValue: 3, max: 50, right: 20, bottom: 20 });
  tableau.addComponent('die', { faces: 6, right: 40, top: 20 });
});

game.setupBoard(board => {
  const charactersDeck = board.addSpace('#characters', 'stack', { class: 'deck' });
  addAllCards('character', charactersDeck);
  charactersDeck.shuffle();
  const eternalsDeck = board.addSpace('#eternals', 'stack', { class: 'deck' });
  addAllCards('eternal', eternalsDeck);
  eternalsDeck.shuffle();

  const lootDeck = board.addSpace('#loot', 'stack', { class: 'deck', bonus: true });
  board.addSpace('#loot-discard', 'stack', { class: 'deck' });

  board.addSpace('#treasure', 'stack', { class: 'deck' });
  board.addSpace('#treasure-discard', 'stack', { class: 'deck' });
  board.addSpace('#shop', 'splay', { columns: 3, rows: 2 });

  board.addSpace('#monsters', 'stack', { class: 'deck' });
  board.addSpace('#monsters-discard', 'stack', { class: 'deck' });
  board.addSpace('#dungeon', 'area', { spreadX: 110 });

  const bonusSouls = board.addSpace('#bonus-souls', 'splay', { columns: 3 });
  addAllCards('bonus', lootDeck);
  lootDeck.shuffle();
  lootDeck.move('card', bonusSouls, 3);

  board.addSpace('#rooms', 'stack', { class: 'deck' });
  board.addSpace('#room', 'stack', { class: 'deck' });
  board.addSpace('#room-discard', 'stack', { class: 'deck' });
});

game.afterMove(
  '#hand card, .deck card',
  card => card.set({ active: false, flipped: false }),
);

game.hideBoard(
  'card[flipped], .player-mat:not(.mine) #hand:not([showTo=$me]):not([showTo="Everyone"]) card, #loot card, #treasure card, #monsters card, #characters card, #eternals card, #rooms card',
  ['front', 'name', 'edition', 'p3'],
);

game.defineActions({
  start: {
    prompt: 'Begin game',
    log: false,
  },
  activate: {
    select: '.mine #tableau card:not([active])',
    prompt: 'Tap',
    log: '$0 tapped $1',
    key: 'x',
    action: card => card.set('active', true),
  },
  deactivate: {
    prompt: 'Untap',
    log: '$0 untapped $1',
    select: '.mine #tableau card[active]',
    key: 'x',
    action: card => card.set('active', false),
  },
  deactivateAll: {
    prompt: 'Untap all',
    log: '$0 untapped all cards',
    select: '.mine #tableau card[active]',
    key: 'l',
    action: card => card.parent().findAll('card[active]').forEach(c => c.set('active', false)),
  },
  play: {
    prompt: 'Play onto board',
    log: '$0 played $1 onto the board',
    key: 'd',
    drag: '.mine #hand card',
    onto: '.mine #tableau',
    action: card => { if (card.get('eternal')) game.doc.find(`.mine #hand #${card.get('eternal')}`).move('.mine #tableau'); },
  },
  draw: {
    prompt: 'Draw',
    log: '$0 drew $1',
    drag: '.deck:not([bonus]):not(#characters) card:last-child, #loot-discard card:last-child',
    key: 'd',
    onto: '.mine #hand',
  },
  drawCharacter: {
    prompt: 'Draw',
    log: '$0 drew $1',
    drag: '#characters card:last-child',
    key: 'd',
    onto: '.mine #tableau',
    action: card => { if (card.get('eternal')) game.board.move(`#${card.get('eternal')}`, '.mine #tableau'); },
  },
  drawMultiple: {
    prompt: 'Draw multiple',
    select: '.deck:not([bonus])',
    key: 'm',
    log: '$0 drew $2 $1',
    next: {
      prompt: 'How many?',
      min: 2,
      max: 6,
      action: (deck, n) => deck.move('card', '.mine #hand', n),
    },
  },
  purchase: {
    prompt: 'Purchase',
    log: '$0 purchased $1',
    drag: '#shop card, #treasure card:last-child',
    key: 'p',
    onto: '.mine #tableau',
  },
  drawOne: {
    prompt: 'Draw specific card',
    log: '$0 drew $2 out of the deck',
    select: '.deck:not([bonus])',
    key: 'i',
    next: {
      prompt: 'Select card',
      select: deck => deck.findAll('card').map(c => c.get('name')),
      action: (deck, name) => {
        const card = deck.find(`card[name="${name}"]`);
        card.move('.mine #hand');
        if (card.get('eternal')) game.board.move(`#${card.get('eternal')}`, '.mine #hand');
      },
    },
  },
  discardLoot: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#loot card:last-child, .mine card[type="loot"], #dungeon card[type="loot"]',
    onto: '#loot-discard',
  },
  playLoot: {
    prompt: 'Play',
    log: '$0 played $1',
    key: 'p',
    drag: '.mine card[type="loot"]',
    onto: '#loot-discard',
  },
  intoLootDeckTop: {
    prompt: 'Put on top of deck',
    log: '$0 put $1 on top of the deck',
    key: 't',
    drag: '.mine card[type="loot"], #loot-discard card:last-child',
    onto: '#loot',
  },
  intoLootDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 on the bottom of the deck',
    key: 'b',
    select: '.mine card[type="loot"]',
    action: card => card.moveToBottom('#loot'),
  },
  intoShop: {
    prompt: 'Put into shop',
    log: false,
    key: 's',
    drag: '#treasure card:last-child, #treasure-discard card:last-child, .mine card[type="treasure"]',
    onto: '#shop',
  },
  discardTreasure: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#treasure card:last-child, #shop card, .mine card[type="treasure"]',
    onto: '#treasure-discard',
  },
  intoTreasureDeck: {
    prompt: 'Put top of deck',
    log: '$0 put $1 on top of the deck',
    key: 't',
    drag: '#treasure-discard card:last-child, #shop card, .mine card[type="treasure"]',
    onto: '#treasure',
  },
  intoTreasureDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 on the bottom of the deck',
    key: 'b',
    select: '#treasure-discard card:last-child, #shop card, .mine card[type="treasure"]',
    action: card => card.moveToBottom('#treasure'),
  },
  intoDungeon: {
    prompt: 'Put into dungeon',
    log: false,
    key: 's',
    drag: '#monsters card:last-child, #monsters-discard card:last-child, .mine card[type="monster"], .mine card[type="loot"], #loot-discard card:last-child',
    onto: '#dungeon',
  },
  takeMonster: {
    prompt: 'Play onto board',
    log: '$0 played $1 onto the board',
    key: 'p',
    drag: '#dungeon card, #monsters card:last-child, #monsters-discard card:last-child',
    onto: '.mine #tableau',
  },
  discardMonster: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#dungeon card[type="monster"], #monsters card:last-child, .mine card[type="monster"]',
    onto: '#monsters-discard',
  },
  intoMonsterDeck: {
    prompt: 'Put top of deck',
    log: '$0 put $1 in the top of the deck',
    key: 't',
    drag: '#dungeon card[type="monster"], #monsters-discard card:last-child, .mine card[type="monster"]',
    onto: '#monsters',
  },
  intoMonsterDeckBottom: {
    prompt: 'Put bottom of deck',
    log: '$0 put $1 in the bottom of the deck',
    key: 'b',
    select: '#dungeon card[type="monster"], #monsters-discard card:last-child, .mine card[type="monster"]',
    action: card => card.moveToBottom('#monsters'),
  },
  intoMonsterDeckAt: {
    prompt: 'Put nth card down in deck',
    log: '$0 put $1 in the deck at position $2',
    key: 'n',
    select: '#dungeon card[type="monster"], #monsters-discard card:last-child, .mine card[type="monster"]',
    next: {
      prompt: 'How far down into deck?',
      min: 2,
      max: 6,
      action: (card, position) => card.move('#monsters', position - 1),
    },
  },
  replaceBonus: {
    prompt: 'Replace with random',
    log: false,
    drag: '#bonus-souls card',
    onto: '#loot',
    action: card => { card.moveToBottom(); game.board.find('#loot card:last-child').move('#bonus-souls'); },
  },
  takeBonus: {
    prompt: 'Claim bonus soul',
    log: '$0 claimed $1',
    key: 'd',
    drag: "#board card[type='bonus']",
    onto: '.mine #tableau',
  },
  discardBonus: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: ".mine card[type='bonus']",
    onto: '#bonus-souls',
  },
  playRoom: {
    prompt: 'Play',
    log: '$0 played $1',
    key: 'p',
    drag: '#rooms card:last-child, .mine card[type="room"]',
    onto: '#room',
  },
  discardRoom: {
    prompt: 'Discard',
    log: '$0 discarded $1',
    key: 'f',
    drag: '#rooms card:last-child, #room card:last-child, .mine card[type="room"]',
    onto: '#room-discard',
  },
  inRoomDeck: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 't',
    drag: '#room-discard card:last-child, #room card:last-child, .mine card[type="room"]',
    onto: '#rooms',
  },
  giveCard: {
    prompt: 'Give to player',
    promptOnto: 'Which player',
    log: '$0 gave $1 to $2',
    key: 'g',
    drag: ".mine #tableau card, .mine card[type='monster']",
    toPlayer: 'other',
    onto: '#tableau',
  },
  giveLoot: {
    prompt: 'Give to player',
    promptOnto: 'Which player',
    log: '$0 gave $1',
    key: 'g',
    drag: ".mine #hand card[type='loot']",
    onto: '.player-mat:not(.mine) #hand',
  },
  giveAllLoot: {
    prompt: 'Give all cards to player',
    select: '.mine #hand card',
    log: '$0 gave all',
    next: {
      prompt: 'Which player?',
      select: '.player-mat:not(.mine) #hand',
      action: (from, to) => from.parent().move('card', to),
    },
  },
  addCounter: {
    prompt: 'Add counter',
    log: '$0 added counter to $1',
    key: 'c',
    select: '.mine card:empty, #board card:empty',
    action: card => card.addComponent('counter', { max: 99 }),
  },
  removeCounter: {
    prompt: 'Remove counter',
    log: '$0 removed counter from $1',
    key: 'c',
    select: '.mine card:not(:empty), #board card:not(:empty)',
    action: card => card.find('counter').destroy(),
  },
  intoCharDeckTop: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 'f',
    drag: '.mine card[type="character"]',
    onto: '#characters',
    action: card => { if (card.get('eternal')) game.doc.move(`.mine #${card.get('eternal')}`, '#eternals'); },
  },
  intoEternalDeckTop: {
    prompt: 'Put back in deck',
    log: '$0 put $1 back into deck',
    key: 'f',
    drag: '.mine card[type="eternal"]',
    onto: '#eternals',
  },
  removeP3: {
    prompt: 'Remove 3+ player cards',
    if: () => game.doc.find('#board card[p3], .player-mat card[p3]'),
    action: () => game.doc.clear('#board card[p3], .player-mat card[p3]'),
  },
  remove: {
    prompt: 'Put back in your hand',
    drag: '.mine #tableau card',
    onto: '.mine #hand',
  },
  shuffle: {
    select: '.deck',
    prompt: 'Shuffle',
    action: deck => deck.shuffle(),
  },
  flip: {
    select: '.mine card, #dungeon card',
    prompt: 'Flip',
    action: card => card.set('flipped', !card.get('flipped')),
  },
  showHand: {
    select: '.mine #hand',
    prompt: 'Show hand',
    log: '$0 showed hand to $2',
    next: {
      select: () => {
        const players = game.otherPlayers();
        if (players.length > 1) players.push('Everyone');
        return players;
      },
      prompt: 'To whom?',
      action: (hand, player) => hand.set({ showTo: player, label: `Showing to ${player.name}` }),
    },
  },
  hideHand: {
    select: '.mine #hand[showTo]',
    prompt: 'Stop showing hand',
    log: '$0 stopped showing hand',
    action: hand => { hand.unset('showTo'); hand.unset('label'); },
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
    if: () => game.doc.find(`#board card[edition="${edition}"], .player-mat card[edition="${edition}"]`),
    action: () => game.doc.clear(`#board card[edition="${edition}"], .player-mat card[edition="${edition}"]`),
  });
});

game.play(async () => {
  game.playersMayAlwaysMove('.mine card, .mine counter, #board counter, .mine die, #shop card, #dungeon card, #bonus-souls card');
  game.playersMayAlwaysPlay(['setCounter', 'rollDie']);

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

  const lootDeck = game.board.find('#loot');
  lootDeck.clear();
  lootDeck.unset('bonus');
  addAllCards('loot', lootDeck);
  lootDeck.shuffle();
  const treasureDeck = game.board.find('#treasure');
  addAllCards('treasure', treasureDeck);
  treasureDeck.shuffle();
  const monsterDeck = game.board.find('#monsters');
  addAllCards('monster', monsterDeck);
  monsterDeck.shuffle();
  game.board.find('#dungeon').addComponent('counter', { display: 'hp', initialValue: 1, max: 8, left: 0, top: 100 });
  const roomDeck = game.board.find('#rooms');
  addAllCards('room', roomDeck);
  roomDeck.shuffle();
  game.prompt(null);

  console.log('G starting while-true loop');
  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions().filter(a => !startingActions.includes(a)));
  }
});

module.exports = game;
