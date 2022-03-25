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
  const shop = board.addSpace('#shop', 'area');
  shop.addSpace('#shop-deck', 'deck');
  shop.addSpace('#shop-discard', 'deck');
  const monsters = board.addSpace('#monsters', 'area');
  monsters.addSpace('#monster-deck', 'deck');
  monsters.addSpace('#monster-discard', 'deck');
};

game.hidden = () => `card[flipped], #player-mat:not(.mine) #hand card, #shop-deck card, #monster-deck card`;

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
    onto: ".mine #tableau",
  },
  drawOne: {
    prompt: "Draw specific card",
    select: "deck",
    next: {
      prompt: "Select card",
      select: deck => deck.findAll("card").map(c => c.id),
      action: (deck, card) => deck.find(`card#${card}`).move('.mine #tableau'),
    }
  },
  intoCharDeckTop: {
    prompt: "Put on top of deck",
    drag: '.mine card[type="character"]',
    onto: '#characters',
  },
  getCharDeck: {
    prompt: "Get Characters",
    if: () => game.pile.find('card[type="character"]'),
    action: () => game.board.find('#characters').add('card[type="character"]'),
  },
  removeCharDeck: {
    prompt: "Remove Characters",
    if: () => game.board.find('card[type="character"]'),
    action: () => game.board.find('#characters').clear('card[type="character"]'),
  },
  intoEternalDeckTop: {
    prompt: "Put on top of deck",
    drag: '.mine card[type="eternal"]',
    onto: '#eternals',
  },
  getEternalDeck: {
    prompt: "Get Eternals",
    if: () => game.pile.find('card[type="eternal"]'),
    action: () => game.board.find('#eternals').add('card[type="eternal"]'),
  },
  removeEternalDeck: {
    prompt: "Remove Eternals",
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
