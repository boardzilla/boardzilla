const GameInterface = require('game-core-server/interface');
const { editions, cards } = require('./data');

class FourSouls extends GameInterface {
  constructor(seed) {
    super(seed);
    this.minPlayers = 1;
    this.maxPlayers = 4;

    const addCard = ([id, card], deck) => {
      Object.entries(card.edition).forEach(([edition, count]) => deck.addPieces(count, `#${id}`, 'card', { ...card, edition }));
    };

    this.setupPlayerMat = (mat) => {
      const tableau = mat.addSpace('#tableau', 'area', { spreadX: 80 });
      mat.addSpace('#hand', 'area', { spreadX: 80 });
      tableau.addComponent('counter', { display: 'hp', initialValue: 2, max: 5, bottom: 10 });
      tableau.addComponent('counter', { display: 'attack', initialValue: 1, max: 8, left: 120, bottom: 10 });
      tableau.addComponent('counter', { display: 'coin', initialValue: 3, max: 50, right: 10, bottom: 10 });
      tableau.addComponent('die', { faces: 6, right: 40, top: 10 });
    };

    this.setupBoard = (board) => {
      const charactersDeck = board.addSpace('#characters', 'deck');
      Object.entries(cards).filter((c) => c[1].type === 'character').forEach((c) => addCard(c, charactersDeck));
      charactersDeck.shuffle();
      const eternalsDeck = board.addSpace('#eternals', 'deck');
      Object.entries(cards).filter((c) => c[1].type === 'eternal').forEach((c) => addCard(c, eternalsDeck));
      eternalsDeck.shuffle();

      const lootDeck = board.addSpace('#loot', 'deck');
      Object.entries(cards).filter((c) => c[1].type === 'loot').forEach((c) => addCard(c, lootDeck));
      lootDeck.shuffle();
      board.addSpace('#loot-discard', 'deck');

      const treasureDeck = board.addSpace('#treasure', 'deck');
      Object.entries(cards).filter((c) => c[1].type === 'treasure').forEach((c) => addCard(c, treasureDeck));
      treasureDeck.shuffle();
      board.addSpace('#treasure-discard', 'deck');
      board.addSpace('#shop', 'area', { spreadX: 80 });

      const monsterDeck = board.addSpace('#monsters', 'deck');
      Object.entries(cards).filter((c) => c[1].type === 'monster').forEach((c) => addCard(c, monsterDeck));
      monsterDeck.shuffle();
      board.addSpace('#monsters-discard', 'deck');
      const dungeon = board.addSpace('#dungeon', 'area', { spreadX: 80 });
      dungeon.addComponent('counter', { display: 'hp', initialValue: 1, max: 8, left: 20, top: 100 });

      board.addSpace('#bonus-souls', 'area', { spreadX: 47 });
    };

    this.afterMove('#hand card, deck card', (card) => { card.set('active', false); card.set('flipped', false); });

    this.hideBoard('card[flipped], .player-mat:not(.mine) #hand card, #loot card, #treasure card, #monsters card, #characters card, #eternals card', ['front', 'text', 'edition']);

    this.actions = {
      shuffle: {
        select: 'deck',
        prompt: 'Shuffle',
        action: (deck) => deck.shuffle(),
      },
      flip: {
        select: '.mine card',
        prompt: 'Flip',
        action: (card) => card.set('flipped', !card.get('flipped')),
      },
      activate: {
        select: '.mine #tableau card:not([active]):not([flipped])',
        prompt: 'Tap',
        key: 'x',
        action: (card) => card.set('active', true),
      },
      deactivate: {
        prompt: 'Untap',
        select: '.mine #tableau card[active]:not([flipped])',
        key: 'x',
        action: (card) => card.set('active', false),
      },
      deactivateAll: {
        prompt: 'Untap all',
        select: '.mine #tableau card[active]:not([flipped])',
        key: 'l',
        action: (card) => card.parent().findAll('card[active]').forEach((c) => c.set('active', false)),
      },
      play: {
        prompt: 'Play onto board',
        log: '$0 played $1 onto the board',
        key: 'd',
        drag: '.mine #hand card',
        onto: '.mine #tableau',
      },
      remove: {
        prompt: 'Put back in your hand',
        drag: '.mine #tableau card',
        onto: '.mine #hand',
      },
      draw: {
        prompt: 'Draw',
        log: '$0 drew $1',
        drag: 'deck card, #loot-discard card',
        key: 'd',
        onto: '.mine #hand',
      },
      drawMultiple: {
        prompt: 'Draw multiple',
        select: 'deck',
        key: 'm',
        next: {
          prompt: 'How many?',
          min: 2,
          max: 6,
          action: (deck, n) => deck.move('card', '.mine #hand', n),
        },
      },
      drawOne: {
        prompt: 'Draw specific card',
        select: 'deck',
        key: 'i',
        next: {
          prompt: 'Select card',
          select: (deck) => deck.findAll('card').map((c) => c.get('text')),
          action: (deck, text) => deck.find(`card[text="${text}"]`).move('.mine #tableau'),
        },
      },
      purchase: {
        prompt: 'Purchase',
        drag: '#shop card, #treasure card',
        key: 'p',
        onto: '.mine #tableau',
      },
      intoLootDeckTop: {
        prompt: 'Put on top of deck',
        log: '$0 put $1 on top of the deck',
        key: 't',
        drag: '.mine card[type="loot"], #loot-discard card',
        onto: '#loot',
      },
      intoLootDeckBottom: {
        prompt: 'Put bottom of deck',
        key: 'b',
        select: '.mine card[type="loot"]',
        action: (card) => card.moveToBottom('#loot'),
      },
      discardLoot: {
        prompt: 'Discard',
        key: 'f',
        drag: '#loot card, .mine card[type="loot"]',
        onto: '#loot-discard',
      },
      playLoot: {
        prompt: 'Play',
        key: 'p',
        drag: '.mine card[type="loot"]',
        onto: '#loot-discard',
      },
      intoShop: {
        prompt: 'Put into shop',
        key: 's',
        drag: '#treasure card, #treasure-discard card, .mine card[type="treasure"]',
        onto: '#shop',
      },
      discardTreasure: {
        prompt: 'Discard',
        key: 'f',
        drag: '#treasure card, #shop card, .mine card[type="treasure"]',
        onto: '#treasure-discard',
      },
      intoTreasureDeck: {
        prompt: 'Put top of deck',
        key: 't',
        drag: '#treasure-discard card, #shop card, .mine card[type="treasure"]',
        onto: '#treasure',
      },
      intoTreasureDeckBottom: {
        prompt: 'Put bottom of deck',
        key: 'b',
        select: '#treasure-discard card, #shop card, .mine card[type="treasure"]',
        action: (card) => card.moveToBottom('#treasure'),
      },
      intoDungeon: {
        prompt: 'Put into dungeon',
        key: 's',
        drag: '#monsters card, #monsters-discard card, .mine card[type="monster"]',
        onto: '#dungeon',
      },
      takeMonster: {
        prompt: 'Play onto board',
        key: 'p',
        drag: '#board card[type="monster"]',
        onto: '.mine #tableau',
      },
      discardMonster: {
        prompt: 'Discard',
        key: 'f',
        drag: '#board card[type="monster"], .mine card[type="monster"]',
        onto: '#monsters-discard',
      },
      intoMonsterDeck: {
        prompt: 'Put top of deck',
        key: 't',
        drag: '#board card[type="monster"], .mine card[type="monster"]',
        onto: '#monsters',
      },
      intoMonsterDeckBottom: {
        prompt: 'Put bottom of deck',
        key: 'b',
        select: '#board card[type="monster"], .mine card[type="monster"]',
        action: (card) => card.moveToBottom('#monsters'),
      },
      intoMonsterDeckAt: {
        prompt: 'Put nth card down in deck',
        key: 'n',
        select: '#board card[type="monster"], .mine card[type="monster"]',
        next: {
          prompt: 'How far down into deck?',
          min: 2,
          max: 6,
          action: (card, position) => card.move('#monsters', position - 1),
        },
      },
      takeBonus: {
        prompt: 'Claim bonus soul',
        key: 'd',
        drag: "#board card[type='bonus']",
        onto: '.mine #tableau',
      },
      discardBonus: {
        prompt: 'Discard',
        key: 'f',
        drag: ".mine card[type='bonus']",
        onto: '#bonus-souls',
      },
      giveCard: {
        prompt: 'Give to player',
        promptOnto: 'Which player',
        key: 'g',
        drag: ".mine #tableau card, .mine card[type='monster']",
        onto: '.player-mat:not(.mine) #tableau',
      },
      giveLoot: {
        prompt: 'Give to player',
        promptOnto: 'Which player',
        key: 'g',
        drag: ".mine #hand card[type='loot']",
        onto: '.player-mat:not(.mine) #hand',
      },
      giveAllLoot: {
        prompt: 'Give all cards to player',
        select: '.mine #hand card',
        next: {
          prompt: 'Which player?',
          select: '.player-mat:not(.mine) #hand',
          action: (from, to) => from.parent().move('card', to),
        },
      },
      addCounter: {
        prompt: 'Add counter',
        key: 'c',
        select: '.mine card:empty, #board card:empty',
        action: (card) => card.addComponent('counter', { max: 99 }),
      },
      removeCounter: {
        prompt: 'Remove counter',
        key: 'c',
        select: '.mine card:not(:empty), #board card:not(:empty)',
        action: (card) => card.find('counter').destroy(),
      },
      intoCharDeckTop: {
        prompt: 'Put back in deck',
        key: 'f',
        drag: '.mine card[type="character"]',
        onto: '#characters',
      },
      intoEternalDeckTop: {
        prompt: 'Put back in deck',
        key: 'f',
        drag: '.mine card[type="eternal"]',
        onto: '#eternals',
      },
      removeP3: {
        prompt: 'Remove 3+ player cards',
        if: () => this.doc.find('#board card[p3], .player-mat card[p3]'),
        action: () => this.doc.clear('#board card[p3], .player-mat card[p3]'),
      },
      start: {
        prompt: 'Begin game',
      },
    };

    const startingActions = ['start', 'intoCharDeckTop', 'intoEternalDeckTop', 'removeP3'];
    Object.entries(editions).forEach(([i, edition]) => {
      startingActions.push(`excludeEdition-${i}`);
      this.actions[`excludeEdition-${i}`] = {
        prompt: `Remove ${edition}`,
        if: () => this.doc.find(`#board card[edition="${edition}"], .player-mat card[edition="${edition}"]`),
        action: () => this.doc.clear(`#board card[edition="${edition}"], .player-mat card[edition="${edition}"]`),
      };
    });

    this.play = async () => {
      this.playersMayAlwaysMove('.mine card, .mine counter, #board counter, .mine die, #shop card, #dungeon card, #bonus-souls card');
      this.playersMayAlwaysPlay(['setCounter', 'rollDie']);

      let action;
      this.prompt('Select starting characters and eternals, then hit Begin game');
      do {
        [action] = await this.anyPlayerPlay([...startingActions, 'draw', 'drawOne', 'drawMultiple', 'shuffle', 'play', 'remove']);
      } while (action !== 'start');
      this.board.find('#characters').destroy();
      this.board.find('#eternals').destroy();
      this.prompt();
      const bonusSouls = Object.entries(cards).filter((c) => c[1].type === 'bonus');
      [1, 2, 3].forEach(() => {
        const soul = bonusSouls.splice(this.random(bonusSouls.length), 1)[0];
        addCard(soul, this.board.find('#bonus-souls'));
      });

      const allActions = Object.keys(this.actions).filter((a) => !startingActions.includes(a));
      while (true) { // eslint-disable-line no-constant-condition
        await this.anyPlayerPlay(allActions);
      }
    };
  }
}

module.exports = FourSouls;
