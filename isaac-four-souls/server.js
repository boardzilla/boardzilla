/* global game */
game.minPlayers = 1;
game.maxPlayers = 4;

game.setupPlayerMat = mat => {
  mat.addSpace('#look-at', 'area');
  const tableau = mat.addSpace('#tableau', 'area');
  mat.addSpace('#hand', 'area');
  tableau.addComponent('counter', {display: 'hp', initialValue: 2});
};

game.setupBoard = board => {
  game.playerMat(1).find('#hand').addPiece('#Abe', 'card', {type: 'character'});
  game.playerMat(2).find('#hand').addPiece('#Isaac', 'card', {type: 'character'});
  const charactersDeck = board.addSpace('#characters', 'deck');
  characters.forEach(c => charactersDeck.addPiece("#" + c, 'card', {type: 'character'}))
  const eternalsDeck = board.addSpace('#eternals', 'deck');
  eternals.forEach(c => eternalsDeck.addPiece("#" + c, 'card', {type: 'eternal'}))
  const lootDeck = board.addSpace('#loot-deck', 'deck');
  board.addSpace('#loot-discard', 'deck');
  Object.keys(loot).forEach(c => lootDeck.addPieces(loot[c], "#" + c, 'card', {type: 'loot'}))
  const shop = board.addSpace('#shop', 'area');
  shop.addSpace('#shop-deck', 'deck');
  shop.addSpace('#shop-discard', 'deck');
  const monsters = board.addSpace('#monsters', 'area');
  monsters.addSpace('#monster-deck', 'deck');
  monsters.addSpace('#monster-discard', 'deck');
};

game.hidden = () => `card[flipped], #player-mat:not(.mine) #hand card, #loot-deck card, #shop-deck card, #monster-deck card`;

game.play = async () => {
  game.playersMayAlwaysMove('.mine card, .mine counter');
  game.playersMayAlwaysPlay(['setCounter']);
  const allActions = Object.keys(game.actions);
  while(true) {
    await game.anyPlayerPlay(allActions);
  }
};

game.actions = {
  shuffle: {
    select: "deck",
    prompt: "Shuffle",
    action: deck => deck.shuffle(),
  },
  flip: {
    select: "card",
    prompt: "Flip this card",
    action: card => card.set('flipped', !card.get('flipped'))
  },
  activate: {
    select: "card:not([active]):not([flipped])",
    prompt: "Activate this card",
    action: card => card.set('active', true)
  },
  deactivate: {
    prompt: "Deactivate this card",
    select: "card[active]:not([flipped])",
    action: card => card.set('active', false)
  },
  play: {
    prompt: "Play this card onto your board",
    drag: ".mine #hand card",
    onto: ".mine #tableau"
  },
  remove: {
    prompt: "Put this card back in your hand",
    promptOnto: "Which hand",
    drag: "#tableau card",
    onto: "#hand",
  },
  draw: {
    prompt: "Draw",
    drag: "deck card:last-child",
    onto: ".mine #hand",
  },
  drawMultiple: {
    prompt: "Draw multiple",
    select: "deck",
    next: {
      prompt: "How many?",
      min: 2,
      max: 5,
      action: (deck, n) => deck.move('card', '.mine #hand', n),
    },
  },
  drawOne: {
    prompt: "Draw specific card",
    select: "deck",
    next: {
      prompt: "Select card",
      select: deck => deck.findAll("card").map(c => c.id),
      action: (deck, card) => deck.find(`card#${card}`).move('.mine #hand'),
    }
  },
  intoLootDeckTop: {
    prompt: "Put on top of deck",
    drag: '.mine card[type="loot"]',
    onto: '#loot-deck',
  },
  intoLootDeckBottom: {
    prompt: "Put at bottom of deck",
    select: '.mine card[type="loot"]',
    action: card => card.moveToBottom('#loot-deck')
  },
  discardLoot: {
    prompt: "Discard",
    drag: '.mine card[type="loot"]',
    onto: '#loot-discard',
  },    
  intoCharDeckTop: {
    prompt: "Put on top of deck",
    drag: '.mine card[type="character"]',
    onto: '#characters',
  },
  getCharDeck: {
    prompt: "Get characters",
    if: () => game.pile.find('card[type="character"]'),
    action: () => game.board.find('#characters').add('card[type="character"]'),
  },
  removeCharDeck: {
    prompt: "Remove characters",
    if: () => game.board.find('card[type="character"]'),
    action: () => game.board.find('#characters').clear('card[type="character"]'),
  },
  intoEternalDeckTop: {
    prompt: "Put on top of deck",
    drag: '.mine card[type="eternal"]',
    onto: '#eternals',
  },
  getEternalDeck: {
    prompt: "Get eternals",
    if: () => game.pile.find('card[type="eternal"]'),
    action: () => game.board.find('#eternals').add('card[type="eternal"]'),
  },
  removeEternalDeck: {
    prompt: "Remove eternals",
    if: () => game.board.find('card[type="eternal"]'),
    action: () => game.board.find('#eternals').clear('card[type="eternal"]'),
  },
};

const characters = [
  "Isaac",
  "Cain",
  "Maggy",
  "Judas",
  "Samson",
  "Eve",
  "Lilith",
  "Blue-Baby",
  "Lazarus",
  "The-Forgotten",
  "Eden",
  "The-Lost",
  "The-Keeper",
  "Azazel",
  "Apollyon",
  "Guppy",
  "Bum-bo",
  "Whore-of-Babylon",
  "Dark-Judas",
  "Tapeworm",
  "Bethany",
  "Jacob-Esau",
  "The-Broken",
  "The-Hoarder",
  "The-Dauntless",
  "The-Deceiver",
  "The-Savage",
  "The-Curdled",
  "The-Harlot",
  "The-Soiled",
  "The-Enigma",
  "The-Fettered",
  "The-Caprocious",
  "The-Baleful",
  "The-Miser",
  "The-Benighted",
  "The-Empty",
  "The-Zealot",
  "The-Derserter",
  "Ash",
  "Guy-spelunky",
  "The-Silent",
  "Captain-Viridian",
  "The-Knight",
  "Yung-Venuz",
  "Pink-Knight",
  "Boyfriend",
  "Psycho-Goreman",
  "Blind-Johnny",
  "Salad-Fingers",
  "Blue-Archer",
  "Quote",
  "Crewmate",
  "Bum-bo-the-weird",
  "Steven",
  "Abe",
  "Johnny",
  "Baba",
  "Edmund"
];

const eternals = [
  "Abyss",
  "Anima-sola",
  "Bag-o-Trash",
  "Bag-of-Crafting",
  "Ball-of-tumors",
  "Berserk",
  "Blood-Lust",
  "Book-of-Belial",
  "Book-of-Virtues",
  "Booster-v20",
  "Bow-and-arrow",
  "Ceremonial-blade",
  "Dark-Arts",
  "Emerganct-meetingjpg",
  "Flip",
  "Focus",
  "Football",
  "Forever-Alone",
  "Gello",
  "Gimpy",
  "Girlfriend",
  "Glitch",
  "Gravity",
  "Hemoptysis",
  "Holy-Mantle",
  "Hunky-boys",
  "Hypercoagulation",
  "IBS",
  "Incubus",
  "Infestation",
  "Is-you",
  "Johnnys-knives",
  "Keepers-bargain",
  "Lazarus-Rags",
  "Lemegton",
  "Lil-Steven",
  "Lollypop",
  "Lord-of-the-Pit",
  "Pile-o-bones",
  "Pink-Proglottid-Four-Souls-eternal-item",
  "Polar-star",
  "Pop-pop",
  "Possession",
  "Ring-of-the-snake",
  "Rusty-spoons",
  "Sibling-Rivalry",
  "Sleight-of-Hand",
  "Soulbond",
  "Spelunking-pack",
  "Spindown-dice",
  "Strange-marble",
  "Suptorium",
  "The-Bone",
  "The-Curse",
  "The-D6",
  "The-Revenant",
  "The-real-left-hand",
  "Void",
  "Wooden-Nickel",
  "Yum-Heart"
];

const loot = {
  "A-Penny": 11,
  "2-Cents": 17,
  "3-Cents": 21,
  "4-Cents": 13,
  "A-Nickel": 6,
  "A-Dime": 1,
  "Butter-Bean": 4,
  "Pills-Red": 1,
  "Pills-Blue": 1,
  "Pills-Yellow": 1,
  "Bomb": 6,
  "Gold-Bomb": 1,
  "Lil-Battery": 5,
  "Mega-Battery": 1,
  "Dice-Shard": 4,
  "Soul-Heart": 3,
  "Blank-Rune": 1,
  "Dagaz": 1,
  "Ehwaz": 1,
  "Bloody-Penny": 1,
  "Swallowed-Penny": 1,
  "Counterfeit-Penny": 1,
  "Cains-Eye": 1,
  "Broken-Ankh": 1,
  "Curved-Horn": 1,
  "Purple-Heart": 1,
  "Golden-Horseshoe": 1,
  "Guppys-Hairball": 1,
  "Lost-Soul": 1,
  "0-The-Fool": 1,
  "I-The-Magician": 1,
  "II-The-High-Priestess": 1,
  "III-The-Empress": 1,
  "IV-The-Emperor": 1,
  "V-The-Hierophant": 1,
  "VI-The-Lovers": 1,
  "VII-The-Chariot": 1,
  "VIII-Justice": 1,
  "IX-The-Hermit": 1,
  "X-Wheel-of-Fortune": 1,
  "XI-Strength": 1,
  "XII-The-Hanged-Man": 1,
  "XIII-Death": 1,
  "XIV-Temperance": 1,
  "XV-The-Devil": 1,
  "XVI-The-Tower": 1,
  "XVII-The-Stars": 1,
  "XVIII-The-Moon": 1,
  "XIX-The-Sun": 1,
  "XX-Judgement": 1,
  "XXI-The-World": 1,
  "Charged-Penny": 1,
  "Joker": 1,
  "Holy-Card": 1,
  "Two-of-Diamonds": 1,
  "A-Sack": 1,
  "Credit-Card": 1,
  "Jera": 1,
  "Pills-Purple": 1,
  "Pink-Eye": 1,
  "Cancer": 1,
  "Perthro": 1,
  "Ansuz": 1,
  "Black-Rune": 1,
  "Tape-Worm": 1,
  "AAA-Battery": 1,
  "Poker-Chip": 1,
  "The-Left-Hand": 1,
  "Pills-Black": 1,
  "Pills-Spots": 1,
  "Pills-White": 1,
  "Q-Card": 1,
  "Get-Out-of-Jail-Card": 1,
  "Gold-Key": 1,
  "Rainbow-Tapeworm": 1,
}
