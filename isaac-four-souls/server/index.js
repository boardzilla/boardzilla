const GameInterface = require('game-core-server/interface')

const editions = [
  'Four Souls+ V2',
  /* 'Base Game V2',
   * 'Alt Art', */
  'Requiem',
  'Promo',
  'Gold Box V2',
  'The Unboxing of Isaac',
  'Requiem Warp Zone',
  'Target',
  'Gish',
  'Tapeworm',
  'Dick Knots'
]

const cards = {
  "Isaac": {
    "text": "Isaac",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-isaac-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "The-D6": {
    "text": "The D6",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_d6-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Maggy": {
    "text": "Maggy",
    "type": "character",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-maggy-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Yum-Heart": {
    "text": "Yum Heart",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-yum_heart-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Cain": {
    "text": "Cain",
    "type": "character",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cain-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Sleight-Of-Hand": {
    "text": "Sleight Of Hand",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-sleight_of_hand-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Judas": {
    "text": "Judas",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-judas-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Book-Of-Belial": {
    "text": "Book Of Belial",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-book_of_belial-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Blue-Baby": {
    "text": "Blue Baby",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-blue_baby-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Forever-Alone": {
    "text": "Forever Alone",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-forever_alone-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Eve": {
    "text": "Eve",
    "type": "character",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-eve-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "The-Curse": {
    "text": "The Curse",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_curse-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Samson": {
    "text": "Samson",
    "type": "character",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-samson-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Blood-Lust": {
    "text": "Blood Lust",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-blood_lust-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Lazarus": {
    "text": "Lazarus",
    "type": "character",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-lazarus-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Lazarus-Rags": {
    "text": "Lazarus’ Rags",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-lazarus_rags-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Lilith": {
    "text": "Lilith",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-lilith-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Incubus": {
    "text": "Incubus",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-incubus-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Forgotten": {
    "text": "The Forgotten",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-the_forgotten-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "The-Bone": {
    "text": "The Bone",
    "type": "eternal",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_bone-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Eden": {
    "text": "Eden",
    "type": "character",
    "edition": {
      "Base Game V2": 1,
      "Requiem": 2,
      "Alt Art": 0, //2,
      "Promo": 2
    },
    "front": "b2-eden-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Belly-Button": {
    "text": "Belly Button",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-belly_button-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Bob-s-Brain": {
    "text": "Bob’s Brain",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-bobs_brain-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Breakfast": {
    "text": "Breakfast",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-breakfast-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Brimstone": {
    "text": "Brimstone",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-brimstone-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Bum-Bo-": {
    "text": "Bum-Bo!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-bum_bo-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Cambion-Conception": {
    "text": "Cambion Conception",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cambion_conception-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Champion-Belt": {
    "text": "Champion Belt",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-champion_belt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Charged-Baby": {
    "text": "Charged Baby",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-charged_baby-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Cheese-Grater": {
    "text": "Cheese Grater",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cheese_grater-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Curse-Of-The-Tower": {
    "text": "Curse Of The Tower",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_the_tower-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dad-s-Lost-Coin": {
    "text": "Dad’s Lost Coin",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dads_lost_coin-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dark-Bum": {
    "text": "Dark Bum",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dark_bum-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dead-Bird": {
    "text": "Dead Bird",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dead_bird-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dinner": {
    "text": "Dinner",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dinner-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dry-Baby": {
    "text": "Dry Baby",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dry_baby-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Eden-s-Blessing": {
    "text": "Eden’s Blessing",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-edens_blessing-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Empty-Vessel": {
    "text": "Empty Vessel",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-empty_vessel-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Eye-Of-Greed": {
    "text": "Eye Of Greed",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-eye_of_greed-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Fanny-Pack": {
    "text": "Fanny Pack",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-fanny_pack-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Finger-": {
    "text": "Finger!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-finger-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Goat-Head": {
    "text": "Goat Head",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-goat_head-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Greed-s-Gullet": {
    "text": "Greed’s Gullet",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-greeds_gullet-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Guppy-s-Collar": {
    "text": "Guppy’s Collar",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-guppys_collar-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Ipecac": {
    "text": "Ipecac",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-ipecac-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Meat-": {
    "text": "Meat!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-meat-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Box": {
    "text": "Mom’s Box",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_box-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Coin-Purse": {
    "text": "Mom’s Coin Purse",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_coin_purse-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Purse": {
    "text": "Mom’s Purse",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_purse-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Razor": {
    "text": "Mom’s Razor",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_razor-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Monstro-s-Tooth": {
    "text": "Monstro’s Tooth",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-monstros_tooth-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Polydactyly": {
    "text": "Polydactyly",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-polydactyly-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Restock": {
    "text": "Restock",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-restock-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Sacred-Heart": {
    "text": "Sacred Heart",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-sacred_heart-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Shadow": {
    "text": "Shadow",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-shadow-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Shiny-Rock": {
    "text": "Shiny Rock",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-shiny_rock-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Spider-Mod": {
    "text": "Spider Mod",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-spider_mod-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Starter-Deck": {
    "text": "Starter Deck",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-starter_deck-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Steamy-Sale-": {
    "text": "Steamy Sale!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-steamy_sale-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Suicide-King": {
    "text": "Suicide King",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-suicide_king-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Synthoil": {
    "text": "Synthoil",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-synthoil-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Tarot-Cloth": {
    "text": "Tarot Cloth",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-tarot_cloth-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Blue-Map": {
    "text": "The Blue Map",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_blue_map-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Chest": {
    "text": "The Chest",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_chest-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Compass": {
    "text": "The Compass",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_compass-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-D10": {
    "text": "The D10",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_d10-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Dead-Cat": {
    "text": "The Dead Cat",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_dead_cat-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Habit": {
    "text": "The Habit",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_habit-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Map": {
    "text": "The Map",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_map-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Midas-Touch": {
    "text": "The Midas Touch",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_midas_touch-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Polaroid": {
    "text": "The Polaroid",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_polaroid-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Relic": {
    "text": "The Relic",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_relic-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "There-s-Options": {
    "text": "There’s Options",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-theres_options-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Trinity-Shield": {
    "text": "Trinity Shield",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-trinity_shield-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Blank-Card": {
    "text": "Blank Card",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-blank_card-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Book-Of-Sin": {
    "text": "Book Of Sin",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-book_of_sin-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Boomerang": {
    "text": "Boomerang",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-boomerang-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Box-": {
    "text": "Box!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-box-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Bum-Friend": {
    "text": "Bum Friend",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-bum_friend-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Chaos": {
    "text": "Chaos",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-chaos-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Chaos-Card": {
    "text": "Chaos Card",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-chaos_card-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Compost": {
    "text": "Compost",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-compost-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Crystal-Ball": {
    "text": "Crystal Ball",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-crystal_ball-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Decoy": {
    "text": "Decoy",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-decoy-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Diplopia": {
    "text": "Diplopia",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-diplopia-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Flush-": {
    "text": "Flush!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-flush-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Glass-Cannon": {
    "text": "Glass Cannon",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-glass_cannon-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Godhead": {
    "text": "Godhead",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-godhead-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Guppy-s-Head": {
    "text": "Guppy’s Head",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-guppys_head-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Guppy-s-Paw": {
    "text": "Guppy’s Paw",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-guppys_paw-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Host-Hat": {
    "text": "Host Hat",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-host_hat-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Jawbone": {
    "text": "Jawbone",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-jawbone-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lucky-Foot": {
    "text": "Lucky Foot",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-lucky_foot-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mini-Mush": {
    "text": "Mini Mush",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mini_mush-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Modeling-Clay": {
    "text": "Modeling Clay",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-modeling_clay-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Bra": {
    "text": "Mom’s Bra",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_bra-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Shovel": {
    "text": "Mom’s Shovel",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_shovel-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Monster-Manual": {
    "text": "Monster Manual",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-monster_manual-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mr-Boom": {
    "text": "Mr. Boom",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mr_boom-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mystery-Sack": {
    "text": "Mystery Sack",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mystery_sack-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "No-": {
    "text": "No!",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-no-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Pandora-s-Box": {
    "text": "Pandora’s Box",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-pandoras_box-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Placebo": {
    "text": "Placebo",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-placebo-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Potato-Peeler": {
    "text": "Potato Peeler",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-potato_peeler-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Razor-Blade": {
    "text": "Razor Blade",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-razor_blade-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Remote-Detonator": {
    "text": "Remote Detonator",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-remote_detonator-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Sack-Head": {
    "text": "Sack Head",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-sack_head-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Sack-Of-Pennies": {
    "text": "Sack Of Pennies",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-sack_of_pennies-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Spoon-Bender": {
    "text": "Spoon Bender",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-spoon_bender-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Tech-X": {
    "text": "Tech X",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-tech_x-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Battery": {
    "text": "The Battery",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_battery-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-D100": {
    "text": "The D100",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_d100-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-D20": {
    "text": "The D20",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_d20-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-D4": {
    "text": "The D4",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_d4-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Shovel": {
    "text": "The Shovel",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_shovel-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Two-Of-Clubs": {
    "text": "Two Of Clubs",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-two_of_clubs-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Battery-Bum": {
    "text": "Battery Bum",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-battery_bum-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Contract-From-Below": {
    "text": "Contract From Below",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-contract_from_below-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Donation-Machine": {
    "text": "Donation Machine",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-donation_machine-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Golden-Razor-Blade": {
    "text": "Golden Razor Blade",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-golden_razor_blade-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Pay-To-Play": {
    "text": "Pay To Play",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-pay_to_play-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Portable-Slot-Machine": {
    "text": "Portable Slot Machine",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-portable_slot_machine-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Smelter": {
    "text": "Smelter",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-smelter-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Poop": {
    "text": "The Poop",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_poop-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Baby-Haunt": {
    "text": "Baby Haunt",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-baby_haunt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Daddy-Haunt": {
    "text": "Daddy Haunt",
    "type": "treasure",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-daddy_haunt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "A-Penny-": {
    "text": "A Penny!",
    "type": "loot",
    "edition": {
      "Base Game V2": 6,
      "Gold Box V2": 2,
      "Four Souls+ V2": 3
    },
    "front": "b2-a_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "2-Cents-": {
    "text": "2 Cents!",
    "type": "loot",
    "edition": {
      "Base Game V2": 12,
      "Gold Box V2": 2,
      "Four Souls+ V2": 3,
      "Requiem": 5
    },
    "front": "b2-two_cents_10-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "3-Cents-": {
    "text": "3 Cents!",
    "type": "loot",
    "edition": {
      "Base Game V2": 15,
      "Gold Box V2": 2,
      "Four Souls+ V2": 4,
      "Requiem": 6
    },
    "front": "b2-three_cents_10-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "4-Cents-": {
    "text": "4 Cents!",
    "type": "loot",
    "edition": {
      "Base Game V2": 9,
      "Gold Box V2": 2,
      "Four Souls+ V2": 2,
      "Requiem": 4
    },
    "front": "b2-four_cents_2-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "A-Nickel-": {
    "text": "A Nickel!",
    "type": "loot",
    "edition": {
      "Base Game V2": 5,
      "Four Souls+ V2": 1,
      "Requiem": 1
    },
    "front": "b2-a_nickel_2-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "A-Dime-": {
    "text": "A Dime!!",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-a_dime-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Lil-Battery": {
    "text": "Lil Battery",
    "type": "loot",
    "edition": {
      "Base Game V2": 4
    },
    "front": "b2-lil_battery_2-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Mega-Battery": {
    "text": "Mega Battery",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mega_battery-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Bomb-": {
    "text": "Bomb!",
    "type": "loot",
    "edition": {
      "Base Game V2": 4,
      "Gold Box V2": 1,
      "Four Souls+ V2": 1,
      "Requiem": 3
    },
    "front": "b2-bomb_2-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Gold-Bomb-": {
    "text": "Gold Bomb!!",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-gold_bomb-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Butter-Bean-": {
    "text": "Butter Bean!",
    "type": "loot",
    "edition": {
      "Base Game V2": 3,
      "Four Souls+ V2": 1,
      "Requiem": 3
    },
    "front": "b2-butter_bean_3-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Dice-Shard": {
    "text": "Dice Shard",
    "type": "loot",
    "edition": {
      "Base Game V2": 3,
      "Four Souls+ V2": 1,
      "Requiem": 3
    },
    "front": "b2-dice_shard-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Pills-": {
    "text": "Pills!",
    "type": "loot",
    "edition": {
      "Base Game V2": 3,
      "Gold Box V2": 1,
      "Four Souls+ V2": 3,
      "Requiem": 2
    },
    "front": "b2-pills_2-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Soul-Heart": {
    "text": "Soul Heart",
    "type": "loot",
    "edition": {
      "Base Game V2": 2,
      "Gold Box V2": 1,
      "Requiem": 2
    },
    "front": "b2-soul_heart-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "O-The-Fool": {
    "text": "O. The Fool",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-o_the_fool-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "I-The-Magician": {
    "text": "I. The Magician",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-i_the_magician-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "II-The-High-Priestess": {
    "text": "II. The High Priestess",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-ii_the_high_priestess-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "III-The-Empress": {
    "text": "III. The Empress",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-iii_the_empress-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "IV-The-Emperor": {
    "text": "IV. The Emperor",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-iv_the_emperor-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "V-The-Hierophant": {
    "text": "V. The Hierophant",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-v_the_hierophant-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "VI-The-Lovers": {
    "text": "VI. The Lovers",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-vi_the_lovers-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "VII-The-Chariot": {
    "text": "VII. The Chariot",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-vii_the_chariot-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "VIII-Justice": {
    "text": "VIII. Justice",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-viii_justice-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "IX-The-Hermit": {
    "text": "IX. The Hermit",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-ix_the_hermit-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "X-Wheel-Of-Fortune": {
    "text": "X. Wheel Of Fortune",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-x_wheel_of_fortune-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XI-Strength": {
    "text": "XI. Strength",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xi_strength-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XII-The-Hanged-Man": {
    "text": "XII. The Hanged Man",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xii_the_hanged_man-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XIII-Death": {
    "text": "XIII. Death",
    "type": "loot",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-xiii_death-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XIV-Temperance": {
    "text": "XIV. Temperance",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xiv_temperance-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XV-The-Devil": {
    "text": "XV. The Devil",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xv_the_devil-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XVI-The-Tower": {
    "text": "XVI. The Tower",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xvi_the_tower-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XVII-The-Stars": {
    "text": "XVII. The Stars",
    "type": "loot",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-xvii_the_stars-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XVIII-The-Moon": {
    "text": "XVIII. The Moon",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xviii_the_moon-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XIX-The-Sun": {
    "text": "XIX. The Sun",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xix_the_sun-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XX-Judgement": {
    "text": "XX. Judgement",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xx_judgement-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "XXI-The-World": {
    "text": "XXI. The World",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xxi_the_world-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Dagaz": {
    "text": "Dagaz",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dagaz-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Ehwaz": {
    "text": "Ehwaz",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-ehwaz-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Blank-Rune": {
    "text": "Blank Rune",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-blank_rune-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Bloody-Penny": {
    "text": "Bloody Penny",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-bloody_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Broken-Ankh": {
    "text": "Broken Ankh",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-broken_ankh-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Cain-s-Eye": {
    "text": "Cain’s Eye",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cains_eye-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Counterfeit-Penny": {
    "text": "Counterfeit Penny",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-counterfeit_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Curved-Horn": {
    "text": "Curved Horn",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curved_horn-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Golden-Horseshoe": {
    "text": "Golden Horseshoe",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-golden_horseshoe-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Guppy-s-Hairball": {
    "text": "Guppy’s Hairball",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-guppys_hairball-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Purple-Heart": {
    "text": "Purple Heart",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-purple_heart-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Swallowed-Penny": {
    "text": "Swallowed Penny",
    "type": "loot",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-swallowed_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Lost-Soul": {
    "text": "Lost Soul",
    "type": "loot",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-lost_soul-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Big-Spider": {
    "text": "Big Spider",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-big_spider-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Black-Bony": {
    "text": "Black Bony",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-black_bony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Boom-Fly": {
    "text": "Boom Fly",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-boom_fly-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Clotty": {
    "text": "Clotty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-clotty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cod-Worm": {
    "text": "Cod Worm",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cod_worm-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Conjoined-Fatty": {
    "text": "Conjoined Fatty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-conjoined_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dank-Globin": {
    "text": "Dank Globin",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dank_globin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Delirium": {
    "text": "Delirium",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-delirium-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dinga": {
    "text": "Dinga",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dinga-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dip": {
    "text": "Dip",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dip-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dople": {
    "text": "Dople",
    "type": "monster",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-dople-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Evil-Twin": {
    "text": "Evil Twin",
    "type": "monster",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-evil_twin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Fat-Bat": {
    "text": "Fat Bat",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-fat_bat-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Fatty": {
    "text": "Fatty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Fly": {
    "text": "Fly",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-fly-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Greedling": {
    "text": "Greedling",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-greedling-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Hanger": {
    "text": "Hanger",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-hanger-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Hopper": {
    "text": "Hopper",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-hopper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Horf": {
    "text": "Horf",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-horf-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Keeper-Head": {
    "text": "Keeper Head",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-keeper_head-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Leaper": {
    "text": "Leaper",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-leaper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Leech": {
    "text": "Leech",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-leech-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-s-Dead-Hand": {
    "text": "Mom’s Dead Hand",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_dead_hand-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-s-Eye": {
    "text": "Mom’s Eye",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-moms_eye-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-s-Hand": {
    "text": "Mom’s Hand",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-moms_hand-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mulliboom": {
    "text": "Mulliboom",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-mulliboom-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mulligan": {
    "text": "Mulligan",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-mulligan-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pale-Fatty": {
    "text": "Pale Fatty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-pale_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pooter": {
    "text": "Pooter",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-pooter-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Portal": {
    "text": "Portal",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-portal-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Psy-Horf": {
    "text": "Psy Horf",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-psy_horf-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Rage-Creep": {
    "text": "Rage Creep",
    "type": "monster",
    "p3": true,
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-rage_creep-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Red-Host": {
    "text": "Red Host",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-red_host-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ring-Of-Flies": {
    "text": "Ring Of Flies",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-ring_of_flies-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Spider": {
    "text": "Spider",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-spider-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Squirt": {
    "text": "Squirt",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-squirt-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Stoney": {
    "text": "Stoney",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-stoney-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Swarm-Of-Flies": {
    "text": "Swarm Of Flies",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-swarm_of_flies-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Trite": {
    "text": "Trite",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-trite-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Wizoob": {
    "text": "Wizoob",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-wizoob-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Fatty": {
    "text": "Cursed Fatty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Gaper": {
    "text": "Cursed Gaper",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_gaper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Horf": {
    "text": "Cursed Horf",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_horf-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Keeper-Head": {
    "text": "Cursed Keeper Head",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_keeper_head-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Mom-s-Hand": {
    "text": "Cursed Mom’s Hand",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_moms_hand-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Psy-Horf": {
    "text": "Cursed Psy Horf",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_psy_horf-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Dinga": {
    "text": "Holy Dinga",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-holy_dinga-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Dip": {
    "text": "Holy Dip",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-holy_dip-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Keeper-Head": {
    "text": "Holy Keeper Head",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-holy_keeper_head-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Mom-s-Eye": {
    "text": "Holy Mom’s Eye",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-holy_moms_eye-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Squirt": {
    "text": "Holy Squirt",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-holy_squirt-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Carrion-Queen": {
    "text": "Carrion Queen",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-carrion_queen-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Chub": {
    "text": "Chub",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-chub-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Conquest": {
    "text": "Conquest",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-conquest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Daddy-Long-Legs": {
    "text": "Daddy Long Legs",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-daddy_long_legs-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dark-One": {
    "text": "Dark One",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-dark_one-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Death": {
    "text": "Death",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-death-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Envy": {
    "text": "Envy",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-envy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Famine": {
    "text": "Famine",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-famine-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gemini": {
    "text": "Gemini",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-gemini-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gluttony": {
    "text": "Gluttony",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-gluttony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Greed": {
    "text": "Greed",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-greed-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gurdy": {
    "text": "Gurdy",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-gurdy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gurdy-Jr-": {
    "text": "Gurdy Jr.",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-gurdy_jr-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Larry-Jr-": {
    "text": "Larry Jr.",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-larry_jr-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Little-Horn": {
    "text": "Little Horn",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-little_horn-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Lust": {
    "text": "Lust",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-lust-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mask-Of-Infamy": {
    "text": "Mask Of Infamy",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mask_of_infamy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mega-Fatty": {
    "text": "Mega Fatty",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-mega_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Monstro": {
    "text": "Monstro",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-monstro-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Peep": {
    "text": "Peep",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-peep-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pestilence": {
    "text": "Pestilence",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-pestilence-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pin": {
    "text": "Pin",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-pin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pride": {
    "text": "Pride",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-pride-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Rag-Man": {
    "text": "Rag Man",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-rag_man-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Scolex": {
    "text": "Scolex",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-scolex-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Sloth": {
    "text": "Sloth",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-sloth-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Bloat": {
    "text": "The Bloat",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1,
      "Promo": 2
    },
    "front": "b2-the_bloat-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Duke-Of-Flies": {
    "text": "The Duke Of Flies",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-the_duke_of_flies-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Haunt": {
    "text": "The Haunt",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-the_haunt-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Lamb": {
    "text": "The Lamb",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-the_lamb-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "War": {
    "text": "War",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-war-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Wrath": {
    "text": "Wrath",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-wrath-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-": {
    "text": "Mom!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-mom-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Satan-": {
    "text": "Satan!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1 // no 3p on this
    },
    "front": "b2-satan-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Amnesia": {
    "text": "Curse Of Amnesia",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_amnesia-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Greed": {
    "text": "Curse Of Greed",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_greed-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Loss": {
    "text": "Curse Of Loss",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_loss-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Pain": {
    "text": "Curse Of Pain",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_pain-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-The-Blind": {
    "text": "Curse Of The Blind",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-curse_of_the_blind-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ambush-": {
    "text": "Ambush!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-ambush-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Chest": {
    "text": "Chest",
    "type": "monster",
    "edition": {
      "Base Game V2": 2
    },
    "front": "b2-chest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Chest": {
    "text": "Cursed Chest",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-cursed_chest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dark-Chest": {
    "text": "Dark Chest",
    "type": "monster",
    "edition": {
      "Base Game V2": 2
    },
    "front": "b2-dark_chest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Devil-Deal": {
    "text": "Devil Deal",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-devil_deal-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gold-Chest": {
    "text": "Gold Chest",
    "type": "monster",
    "edition": {
      "Base Game V2": 2
    },
    "front": "b2-gold_chest_2-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Greed-": {
    "text": "Greed!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-greed_event-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "I-Can-See-Forever-": {
    "text": "I Can See Forever!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-i_can_see_forever-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mega-Troll-Bomb-": {
    "text": "Mega Troll Bomb!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-mega_troll_bomb-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Secret-Room-": {
    "text": "Secret Room!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-secret_room-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Shop-Upgrade-": {
    "text": "Shop Upgrade!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Alt Art": 0, //1
    },
    "front": "b2-shop_upgrade-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Troll-Bombs": {
    "text": "Troll Bombs",
    "type": "monster",
    "edition": {
      "Base Game V2": 1,
      "Four Souls+ V2": 1,
      "Requiem": 1
    },
    "front": "b2-troll_bombs-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "We-Need-To-Go-Deeper-": {
    "text": "We Need To Go Deeper!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-we_need_to_go_deeper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Xl-Floor-": {
    "text": "Xl Floor!",
    "type": "monster",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-xl_floor-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Soul-Of-Gluttony": {
    "text": "Soul Of Gluttony",
    "type": "bonus",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-soul_of_gluttony-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Greed": {
    "text": "Soul Of Greed",
    "type": "bonus",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-soul_of_greed-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Guppy": {
    "text": "Soul Of Guppy",
    "type": "bonus",
    "edition": {
      "Base Game V2": 1
    },
    "front": "b2-soul_of_guppy-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Azazel": {
    "text": "Azazel",
    "type": "character",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-azazel-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Lord-Of-The-Pit": {
    "text": "Lord Of The Pit",
    "type": "eternal",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-lord_of_the_pit-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Lost": {
    "text": "The Lost",
    "type": "character",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-the_lost-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Holy-Mantle": {
    "text": "Holy Mantle",
    "type": "eternal",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-holy_mantle-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Keeper": {
    "text": "The Keeper",
    "type": "character",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-the_keeper-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Wooden-Nickel": {
    "text": "Wooden Nickel",
    "type": "eternal",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-wooden_nickel-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Apollyon": {
    "text": "Apollyon",
    "type": "character",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-apollyon-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Void": {
    "text": "Void",
    "type": "eternal",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-void-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "9-Volt": {
    "text": "9 Volt",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-9_volt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Guppy-s-Tail": {
    "text": "Guppy’s Tail",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-guppys_tail-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Infamy": {
    "text": "Infamy",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-infamy-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Knife": {
    "text": "Mom’s Knife",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-moms_knife-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "More-Options": {
    "text": "More Options",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-more_options-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Placenta": {
    "text": "Placenta",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-placenta-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Skeleton-Key": {
    "text": "Skeleton Key",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-skeleton_key-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Soy-Milk": {
    "text": "Soy Milk",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-soy_milk-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Missing-Page": {
    "text": "The Missing Page",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-the_missing_page-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Crooked-Penny": {
    "text": "Crooked Penny",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-crooked_penny-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Fruitcake": {
    "text": "Fruitcake",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-fruitcake-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "I-Can-t-Believe-It-s-Not-Butter-Bean": {
    "text": "I Can’t Believe It’s Not Butter Bean",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-i_cant_believe_its_not_butter_bean-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lemon-Mishap": {
    "text": "Lemon Mishap",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-lemon_mishap-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Library-Card": {
    "text": "Library Card",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-library_card-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Ouija-Board": {
    "text": "Ouija Board",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-ouija_board-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Plan-C": {
    "text": "Plan C",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-plan_c-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Bible": {
    "text": "The Bible",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-the_bible-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Butter-Bean": {
    "text": "The Butter Bean",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-the_butter_bean-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Dad-s-Key": {
    "text": "Dad’s Key",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-dads_key-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Succubus": {
    "text": "Succubus",
    "type": "treasure",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-succubus-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Charged-Penny": {
    "text": "Charged Penny",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-charged_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Credit-Card": {
    "text": "Credit Card",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-credit_card-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Holy-Card": {
    "text": "Holy Card",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-holy_card-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Two-Of-Diamonds": {
    "text": "Two Of Diamonds",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-two_of_diamonds-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Joker": {
    "text": "Joker",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-joker-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Jera": {
    "text": "Jera",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-jera-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Cancer": {
    "text": "Cancer",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-cancer-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Pink-Eye": {
    "text": "Pink Eye",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-pink_eye-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "A-Sack": {
    "text": "A Sack",
    "type": "loot",
    "edition": {
      "Gold Box V2": 1,
      "Requiem": 1
    },
    "front": "g2-a_sack-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Begotten": {
    "text": "Begotten",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-begotten-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Boil": {
    "text": "Boil",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-boil-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charger": {
    "text": "Charger",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-charger-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Death-s-Head": {
    "text": "Death’s Head",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-deaths_head-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gaper": {
    "text": "Gaper",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-gaper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Imp": {
    "text": "Imp",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-imp-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Knight": {
    "text": "Knight",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-knight-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Parabite": {
    "text": "Parabite",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-parabite-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ragling": {
    "text": "Ragling",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-ragling-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Round-Worm": {
    "text": "Round Worm",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-round_worm-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Fistula": {
    "text": "Fistula",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-fistula-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gurglings": {
    "text": "Gurglings",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-gurglings-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Polycephalus": {
    "text": "Polycephalus",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1,
      "Alt Art": 0, //1
    },
    "front": "g2-polycephalus-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Steven": {
    "text": "Steven",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-steven-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Cage": {
    "text": "The Cage",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-the_cage-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Hush": {
    "text": "Hush",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-hush-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Fatigue": {
    "text": "Curse Of Fatigue",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-curse_of_fatigue-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Tiny-Hands": {
    "text": "Curse Of Tiny Hands",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-curse_of_tiny_hands-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "I-Am-Error-": {
    "text": "I Am Error!",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-i_am_error-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Trap-Door-": {
    "text": "Trap Door!",
    "type": "monster",
    "edition": {
      "Gold Box V2": 1
    },
    "front": "g2-trap_door-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Bum-Bo": {
    "text": "Bum-Bo",
    "type": "character",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-bum_bo-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Bag-O-Trash": {
    "text": "Bag-O-Trash",
    "type": "eternal",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-bag_o_trash-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Dark-Judas": {
    "text": "Dark Judas",
    "type": "character",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-dark_judas-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Dark-Arts": {
    "text": "Dark Arts",
    "type": "eternal",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-dark_arts-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Guppy": {
    "text": "Guppy",
    "type": "character",
    "edition": {
      "Four Souls+ V2": 1,
      "Alt Art": 0, //1
    },
    "front": "fsp2-guppy-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Infestation": {
    "text": "Infestation",
    "type": "eternal",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-infestation-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Whore-Of-Babylon": {
    "text": "Whore Of Babylon",
    "type": "character",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-whore_of_babylon-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Gimpy": {
    "text": "Gimpy",
    "type": "eternal",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-gimpy-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "1-Up": {
    "text": "1-Up",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-1_up-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Abaddon": {
    "text": "Abaddon",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-abaddon-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Cursed-Eye": {
    "text": "Cursed Eye",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-cursed_eye-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Daddy-Long-Legs-treasure": {
    "text": "Daddy Long Legs",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-daddy_long_legs-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Euthanasia": {
    "text": "Euthanasia",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-euthanasia-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Game-Breaking-Bug-": {
    "text": "Game Breaking Bug!",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-game_breaking_bug-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Guppy-s-Eye": {
    "text": "Guppy’s Eye",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-guppys_eye-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Head-Of-The-Keeper": {
    "text": "Head Of The Keeper",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-head_of_the_keeper-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Hourglass": {
    "text": "Hourglass",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-hourglass-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lard": {
    "text": "Lard",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-lard-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Magnet": {
    "text": "Magnet",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-magnet-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Eye-Shadow": {
    "text": "Mom’s Eye Shadow",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-moms_eye_shadow-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "P-H-D-": {
    "text": "P.H.D.",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-phd-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Polyphemus": {
    "text": "Polyphemus",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-polyphemus-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Rubber-Cement": {
    "text": "Rubber Cement",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-rubber_cement-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Telepathy-For-Dummies": {
    "text": "Telepathy For Dummies",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-telepathy_for_dummies-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Wiz": {
    "text": "The Wiz",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-the_wiz-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "20-20": {
    "text": "20/20",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-20_20-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Black-Candle": {
    "text": "Black Candle",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-black_candle-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Distant-Admiration": {
    "text": "Distant Admiration",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-distant_admiration-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Divorce-Papers": {
    "text": "Divorce Papers",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-divorce_papers-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Forget-Me-Now": {
    "text": "Forget Me Now",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-forget_me_now-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Head-Of-Krampus": {
    "text": "Head Of Krampus",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-head_of_krampus-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Libra": {
    "text": "Libra",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-libra-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mutant-Spider": {
    "text": "Mutant Spider",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-mutant_spider-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Rainbow-Baby": {
    "text": "Rainbow Baby",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-rainbow_baby-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Red-Candle": {
    "text": "Red Candle",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-red_candle-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Smart-Fly": {
    "text": "Smart Fly",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-smart_fly-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Athame": {
    "text": "Athame",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-athame-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mama-Haunt": {
    "text": "Mama Haunt",
    "type": "treasure",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-mama_haunt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "lil-Battery": {
    "text": "lil Battery",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1,
      "Requiem": 2
    },
    "front": "fsp2-lil_battery-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "-Card": {
    "text": "? Card",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-questionmark_card-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Get-Out-Of-Jail-Card": {
    "text": "Get Out Of Jail Card",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-get_out_of_jail_card-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Ansuz": {
    "text": "Ansuz",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-ansuz-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Perthro": {
    "text": "Perthro",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-perthro-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Black-Rune": {
    "text": "Black Rune",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-black_rune-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "AAA-Battery": {
    "text": "AAA Battery",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-aaa_battery-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Poker-Chip": {
    "text": "Poker Chip",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-poker_chip-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Tape-Worm": {
    "text": "Tape Worm",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-tape_worm-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "The-Left-Hand": {
    "text": "The Left Hand",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-the_left_hand-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Gold-Key": {
    "text": "Gold Key",
    "type": "loot",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-gold_key-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Bony": {
    "text": "Bony",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-bony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Brain": {
    "text": "Brain",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-brain-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Flaming-Hopper": {
    "text": "Flaming Hopper",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-flaming_hopper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Globin": {
    "text": "Globin",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-globin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Nerve-Ending": {
    "text": "Nerve Ending",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-nerve_ending-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Roundy": {
    "text": "Roundy",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-roundy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Sucker": {
    "text": "Sucker",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-sucker-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Swarmer": {
    "text": "Swarmer",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-swarmer-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Tumor": {
    "text": "Tumor",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-tumor-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Globin": {
    "text": "Cursed Globin",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-cursed_globin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Tumor": {
    "text": "Cursed Tumor",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-cursed_tumor-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Bony": {
    "text": "Holy Bony",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-holy_bony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Mulligan": {
    "text": "Holy Mulligan",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-holy_mulligan-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Blastocyst": {
    "text": "Blastocyst",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-blastocyst-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dingle": {
    "text": "Dingle",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1,
      "Alt Art": 0, //1
    },
    "front": "fsp2-dingle-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Headless-Horseman": {
    "text": "Headless Horseman",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-headless_horseman-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Krampus": {
    "text": "Krampus",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-krampus-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Monstro-II": {
    "text": "Monstro II",
    "type": "monster",
    "p3": true,
    "edition": {
      "Four Souls+ V2": 1,
      "Alt Art": 0, //1
    },
    "front": "fsp2-monstro_ii-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Fallen": {
    "text": "The Fallen",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-the_fallen-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Widow": {
    "text": "Widow",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-widow-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Isaac-": {
    "text": "Isaac!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-isaac-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-s-Heart-": {
    "text": "Mom’s Heart!",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-moms_heart-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Blood-Lust": {
    "text": "Curse Of Blood Lust",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-curse_of_blood_lust-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Impulse": {
    "text": "Curse Of Impulse",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-curse_of_impulse-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Angel-Room": {
    "text": "Angel Room",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-angel_room-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Boss-Rush-": {
    "text": "Boss Rush!",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-boss_rush-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Head-Trauma": {
    "text": "Head Trauma",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-head_trauma-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Chest": {
    "text": "Holy Chest",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-holy_chest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Spiked-Chest": {
    "text": "Spiked Chest",
    "type": "monster",
    "edition": {
      "Four Souls+ V2": 1
    },
    "front": "fsp2-spiked_chest-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Bethany": {
    "text": "Bethany",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bethany-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Book-Of-Virtues": {
    "text": "Book Of Virtues",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-book_of_virtues-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Jacob-Esau": {
    "text": "Jacob & Esau",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-jacob_and_esau-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Sibling-Rivalry": {
    "text": "Sibling Rivalry",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-sibling_rivalry-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Broken": {
    "text": "The Broken",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_broken-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Spindown-Dice": {
    "text": "Spindown Dice",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-spindown_dice-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Dauntless": {
    "text": "The Dauntless",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_dauntless-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Hypercoagulation": {
    "text": "Hypercoagulation",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-hypercoagulation-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Hoarder": {
    "text": "The Hoarder",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_hoarder-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Bag-Of-Crafting": {
    "text": "Bag Of Crafting",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bag_of_crafting-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Deceiver": {
    "text": "The Deceiver",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_deceiver-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Ceremonial-Blade": {
    "text": "Ceremonial Blade",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-ceremonial_blade-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Soiled": {
    "text": "The Soiled",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_soiled-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "IBS": {
    "text": "IBS",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-ibs-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Curdled": {
    "text": "The Curdled",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_curdled-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Sumptorium": {
    "text": "Sumptorium",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-sumptorium-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Savage": {
    "text": "The Savage",
    "type": "character",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-the_savage-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Berserk": {
    "text": "Berserk",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-berserk-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Benighted": {
    "text": "The Benighted",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_benighted-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Hemoptysis": {
    "text": "Hemoptysis",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-hemoptysis-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Enigma-amginE-ehT": {
    "text": "The Enigma/amginE ehT",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_enigma-308x420.png",
    "back": "r-the_enigma_back-308x420.png"
  },
  "Flip": {
    "text": "Flip",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-flip-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Capricious": {
    "text": "The Capricious",
    "type": "character",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-the_capricious-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Glitch": {
    "text": "Glitch",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-glitch-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Baleful": {
    "text": "The Baleful",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_baleful-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Soulbond": {
    "text": "Soulbond",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-soulbond-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Harlot": {
    "text": "The Harlot",
    "type": "character",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-the_harlot-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Gello": {
    "text": "Gello",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-gello-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Miser": {
    "text": "The Miser",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_miser-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Keeper-s-Bargain": {
    "text": "Keeper’s Bargain",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-keepers_bargain-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Empty": {
    "text": "The Empty",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_empty-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Abyss": {
    "text": "Abyss",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-abyss-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Fettered": {
    "text": "The Fettered",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_fettered-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Dead-Weight": {
    "text": "Dead Weight",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dead_weight-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Zealot": {
    "text": "The Zealot",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_zealot-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Lemegeton": {
    "text": "Lemegeton",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lemegeton-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Deserter": {
    "text": "The Deserter",
    "type": "character",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_deserter-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Anima-Sola-The-Revenant": {
    "text": "Anima Sola/The Revenant",
    "type": "eternal",
    "edition": {
      "Requiem": 1
    },
    "front": "r-anima_sola-308x420.png",
    "back": "r-the_revenant-308x420.png"
  },
  "Flash-Isaac": {
    "text": "Flash Isaac",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-flash_isaac-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Classic-Roller": {
    "text": "Classic Roller",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-classic_roller-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Abel": {
    "text": "Abel",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-abel-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Alabaster-Box": {
    "text": "Alabaster Box",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-alabaster_box-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Backstabber": {
    "text": "Backstabber",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-backstabber-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Ball-Of-Bandages": {
    "text": "Ball Of Bandages",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-ball_of_bandages-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Blood-Puppy": {
    "text": "Blood Puppy",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blood_puppy-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Bobby-Bomb": {
    "text": "Bobby Bomb",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bobby_bomb-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Chocolate-Milk": {
    "text": "Chocolate Milk",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-chocolate_milk-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Consolation-Prize": {
    "text": "Consolation Prize",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-consolation_prize-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Damocles": {
    "text": "Damocles",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-damocles-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Fire-Mind": {
    "text": "Fire Mind",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-fire_mind-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Gnawed-Leaf": {
    "text": "Gnawed Leaf",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-gnawed_leaf-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Halo-Of-Flies": {
    "text": "Halo Of Flies",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-halo_of_flies-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Handicapped-Placard": {
    "text": "Handicapped Placard",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-handicapped_placard-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Judas-Shadow": {
    "text": "Judas’ Shadow",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-judas_shadow-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Keeper-s-Box": {
    "text": "Keeper’s Box",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-keepers_box-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lil-Chest": {
    "text": "Lil Chest",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lil_chest-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lodestone": {
    "text": "Lodestone",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lodestone-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lunch": {
    "text": "Lunch",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lunch-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mom-s-Bottle-of-Pills": {
    "text": "Mom’s Bottle of Pills",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-moms_bottle_of_pills-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Playdough-Cookie": {
    "text": "Playdough Cookie",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-playdough_cookie-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Punching-Bag": {
    "text": "Punching Bag",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-punching_bag-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Rock-Bottom": {
    "text": "Rock Bottom",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-rock_bottom-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Spelunker-Hat": {
    "text": "Spelunker Hat",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-spelunker_hat-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Trick-Penny": {
    "text": "Trick Penny",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-trick_penny-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Ultra-Flesh-Kid-": {
    "text": "Ultra Flesh Kid!",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-ultra_flesh_kid-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Auction-Gavel": {
    "text": "Auction Gavel",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-auction_gavel-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Birthright": {
    "text": "Birthright",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-birthright-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Book-Of-The-Dead": {
    "text": "Book Of The Dead",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-book_of_the_dead-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Eternal-D6": {
    "text": "Eternal D6",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-eternal_d6-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Experimental-Treatment": {
    "text": "Experimental Treatment",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-experimental_treatment-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Friendly-Ball": {
    "text": "Friendly Ball",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-friendly_ball-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Friendly-Sack": {
    "text": "Friendly Sack",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-friendly_sack-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Hand-Me-Downs": {
    "text": "Hand Me Downs",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-hand_me_downs-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Jar-Of-Flies": {
    "text": "Jar Of Flies",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-jar_of_flies-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Keeper-s-Penny": {
    "text": "Keeper’s Penny",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-keepers_penny-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Magic-Skin": {
    "text": "Magic Skin",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-magic_skin-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Mama-Mega": {
    "text": "Mama Mega",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mama_mega-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Marbles": {
    "text": "Marbles",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-marbles-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Member-Card": {
    "text": "Member Card",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-member_card-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "R-Key": {
    "text": "R Key",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-r_key-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Red-Key": {
    "text": "Red Key",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-red_key-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Clicker": {
    "text": "The Clicker",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_clicker-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Undefined": {
    "text": "Undefined",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-undefined-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "X-Ray-Vision": {
    "text": "X-Ray Vision",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-x_ray_vision-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Battery-Pack": {
    "text": "Battery Pack",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-battery_pack-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Car-Battery": {
    "text": "Car Battery",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-car_battery-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Hallowed-Ground": {
    "text": "Hallowed Ground",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-hallowed_ground-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Keeper-s-Sack": {
    "text": "Keeper’s Sack",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-keepers_sack-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Pageant-Boy": {
    "text": "Pageant Boy",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-pageant_boy-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Sacrificial-Dagger": {
    "text": "Sacrificial Dagger",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-sacrificial_dagger-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Jar": {
    "text": "The Jar",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_jar-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Cursed-Soul": {
    "text": "Cursed Soul",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-cursed_soul-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Fetal-Haunt": {
    "text": "Fetal Haunt",
    "type": "treasure",
    "edition": {
      "Requiem": 1
    },
    "front": "r-fetal_haunt-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "A-Lucky-Penny-": {
    "text": "A Lucky Penny!",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-a_lucky_penny-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Sticky-Nickel": {
    "text": "Sticky Nickel",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-sticky_nickel-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Mega-Bomb-": {
    "text": "Mega Bomb!",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mega_bomb-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Black-Heart": {
    "text": "Black Heart",
    "type": "loot",
    "edition": {
      "Requiem": 2
    },
    "front": "r-black_heart-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Ace-Of-Diamonds": {
    "text": "Ace Of Diamonds",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-ace_of_diamonds-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Emergency-Contact": {
    "text": "Emergency Contact",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-emergency_contact-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Two-Of-Spades": {
    "text": "Two Of Spades",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-two_of_spades-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Algiz": {
    "text": "Algiz",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-algiz-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Berkano": {
    "text": "Berkano",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-berkano-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Hagalaz": {
    "text": "Hagalaz",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-hagalaz-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Bag-Lunch": {
    "text": "Bag Lunch",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bag_lunch-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Broken-Remote": {
    "text": "Broken Remote",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-broken_remote-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Callus": {
    "text": "Callus",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-callus-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Golden-Trinket": {
    "text": "Golden Trinket",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-golden_trinket-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Lucky-Toe": {
    "text": "Lucky Toe",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lucky_toe-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Rib-Of-Greed": {
    "text": "Rib Of Greed",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-rib_of_greed-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Tick": {
    "text": "Tick",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-tick-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Wishbone": {
    "text": "Wishbone",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-wishbone-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Dad-s-Note": {
    "text": "Dad’s Note",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dads_note-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Key": {
    "text": "Key",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-key-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Magic-Marker": {
    "text": "Magic Marker",
    "type": "loot",
    "edition": {
      "Requiem": 1
    },
    "front": "r-magic_marker-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Corny": {
    "text": "Corny",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-corny-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dogma": {
    "text": "Dogma",
    "type": "monster",
    "edition": {
      "Requiem": 1,
      "The Unboxing of Isaac": 1
    },
    "front": "r-dogma-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Gutted-Fatty": {
    "text": "Gutted Fatty",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-gutted_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mushroom": {
    "text": "Mushroom",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mushroom-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Null": {
    "text": "Null",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-null-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Peeping-Fatty": {
    "text": "Peeping Fatty",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-peeping_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Red-Ghost": {
    "text": "Red Ghost",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-red_ghost-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Whipper": {
    "text": "Whipper",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-whipper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Mulliboom": {
    "text": "Cursed Mulliboom",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-cursed_mulliboom-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Dople": {
    "text": "Cursed Dople",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-cursed_dople-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Lil-Haunt": {
    "text": "Cursed Lil Haunt",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-cursed_lil_haunt-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Cursed-Mulligan": {
    "text": "Cursed Mulligan",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-cursed_mulligan-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Brain": {
    "text": "Holy Brain",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-holy_brain-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Greedling": {
    "text": "Holy Greedling",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-holy_greedling-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Portal": {
    "text": "Holy Portal",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-holy_portal-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Holy-Psy-Horf": {
    "text": "Holy Psy Horf",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-holy_psy_horf-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Bony": {
    "text": "Charmed Bony",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_bony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Clotty": {
    "text": "Charmed Clotty",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_clotty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Dip": {
    "text": "Charmed Dip",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_dip-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Fat-Bat": {
    "text": "Charmed Fat Bat",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_fat_bat-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Fatty": {
    "text": "Charmed Fatty",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_fatty-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Globin": {
    "text": "Charmed Globin",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_globin-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Greedling": {
    "text": "Charmed Greedling",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_greedling-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Keeper": {
    "text": "Charmed Keeper",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_keeper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Baby-Plum": {
    "text": "Baby Plum",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-baby_plum-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Brownie": {
    "text": "Brownie",
    "type": "monster",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-brownie-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Charmed-Monstro": {
    "text": "Charmed Monstro",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-charmed_monstro-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Clog": {
    "text": "Clog",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-clog-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Hornfel": {
    "text": "Hornfel",
    "type": "monster",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-hornfel-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mama-Gurdy": {
    "text": "Mama Gurdy",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mama_gurdy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Rag-Mega": {
    "text": "Rag Mega",
    "type": "monster",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-rag_mega-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Sisters-Vis": {
    "text": "Sisters Vis",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-sisters_vis-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Rainmaker": {
    "text": "The Rainmaker",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_rainmaker-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Scourge": {
    "text": "The Scourge",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_scourge-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Siren": {
    "text": "The Siren",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_siren-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Turdlings": {
    "text": "Turdlings",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-turdlings-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ultra-Greed-": {
    "text": "Ultra Greed!",
    "type": "monster",
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //1
    },
    "front": "r-ultra_greed-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mega-Satan-": {
    "text": "Mega Satan!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1,
      "Alt Art": 0, //2
    },
    "front": "r-mega_satan-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "MOTHER-": {
    "text": "MOTHER!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mother-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-Empathy": {
    "text": "Curse Of Empathy",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-curse_of_empathy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-The-Hollow": {
    "text": "Curse Of The Hollow",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-curse_of_the_hollow-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-The-Hunted": {
    "text": "Curse Of The Hunted",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-curse_of_the_hunted-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-The-Soulless": {
    "text": "Curse Of The Soulless",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-curse_of_the_soulless-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Betrayal-": {
    "text": "Betrayal!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-betrayal-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Double-Treasure-": {
    "text": "Double Treasure!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-double_treasure-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dressing-Table": {
    "text": "Dressing Table",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dressing_table-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Golden-Troll-Bomb-": {
    "text": "Golden Troll Bomb!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-golden_troll_bomb-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Lust-For-Blood-": {
    "text": "Lust For Blood!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-lust_for_blood-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mother-s-Shadow-": {
    "text": "Mother’s Shadow!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-mothers_shadow-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Overflow-": {
    "text": "Overflow!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-overflow-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Pitfall-": {
    "text": "Pitfall!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-pitfall-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Tnt-Barrel": {
    "text": "Tnt Barrel",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-tnt_barrel-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "All-Hallows-Eve": {
    "text": "All Hallows’ Eve",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-all_hallows_eve-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Angelic-Intervention": {
    "text": "Angelic Intervention",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-angelic_intervention-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Battle-Royale-": {
    "text": "Battle Royale!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-battle_royale-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Battle-Royale-1": {
    "text": "Battle Royale!!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-battle_royale_2-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Battle-Royale-2": {
    "text": "Battle Royale!!!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-battle_royale_3-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Beggar": {
    "text": "Beggar",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-beggar-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Black-Champions": {
    "text": "Black Champions",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-black_champions-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blessing-Of-Gluttony": {
    "text": "Blessing Of Gluttony",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blessing_of_gluttony-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blessing-Of-Greed": {
    "text": "Blessing Of Greed",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blessing_of_greed-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blessing-Of-Steam": {
    "text": "Blessing Of Steam",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blessing_of_steam-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blessing-Of-The-Inner-Eye": {
    "text": "Blessing Of The Inner Eye",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blessing_of_the_inner_eye-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blessing-Of-The-Sack": {
    "text": "Blessing Of The Sack",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blessing_of_the_sack-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blind-Rage": {
    "text": "Blind Rage",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blind_rage-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blood-Donation": {
    "text": "Blood Donation",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blood_donation-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blood-Lust-room": {
    "text": "Blood Lust",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blood_lust-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Blood-Money": {
    "text": "Blood Money",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-blood_money-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Bomb-Bum": {
    "text": "Bomb Bum",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bomb_bum-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Bum-Bo-Is-Loose-": {
    "text": "Bum-Bo Is Loose!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-bum_bo_is_loose-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Butter-Fingers": {
    "text": "Butter Fingers",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-butter_fingers-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Challenge-Room": {
    "text": "Challenge Room",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-challenge_room-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Conjoined-Twin": {
    "text": "Conjoined Twin",
    "type": "room",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-conjoined_twin-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Devil-Beggar": {
    "text": "Devil Beggar",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-devil_beggar-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-": {
    "text": "Dice Room!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_1-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-1": {
    "text": "Dice Room!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_2-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-2": {
    "text": "Dice Room!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_3-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-3": {
    "text": "Dice Room!!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_4-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-4": {
    "text": "Dice Room!!!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_5-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Dice-Room-5": {
    "text": "Dice Room!!!!!!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-dice_room_6-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Eden-s-Blessing-room": {
    "text": "Eden’s Blessing",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-edens_blessing-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Equality": {
    "text": "Equality",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-equality-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Eternal-Chest": {
    "text": "Eternal Chest",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-eternal_chest-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Floor-Spikes": {
    "text": "Floor Spikes",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-floor_spikes-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Fortune-Teller": {
    "text": "Fortune Teller",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-fortune_teller-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Greed-Looms": {
    "text": "Greed Looms",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-greed_looms-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Gus": {
    "text": "Gus",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-gus-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Haunted-": {
    "text": "Haunted!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-haunted-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Heavy-Is-The-Head": {
    "text": "Heavy Is The Head",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-heavy_is_the_head-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "I-Am-Error": {
    "text": "I Am Error",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-i_am_error-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Isaac-s-Blessing": {
    "text": "Isaac’s Blessing",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-isaacs_blessing-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Key-Master": {
    "text": "Key Master",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-key_master-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Laser-Eye-": {
    "text": "Laser Eye!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-laser_eye-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Maggy-s-Blessing": {
    "text": "Maggy’s Blessing",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-maggys_blessing-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Might-For-The-Meek": {
    "text": "Might For The Meek",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-might_for_the_meek-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Pity-For-The-Poor": {
    "text": "Pity For The Poor",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-pity_for_the_poor-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Planetarium": {
    "text": "Planetarium",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-planetarium-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Red-Champions": {
    "text": "Red Champions",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-red_champions-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Red-Vise": {
    "text": "Red Vise",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-red_vise-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Restock-Machine": {
    "text": "Restock Machine",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-restock_machine-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Samson-s-Blessing": {
    "text": "Samson’s Blessing",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-samsons_blessing-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Shadow-Of-Famine": {
    "text": "Shadow Of Famine",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-shadow_of_famine-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Shadow-Of-War": {
    "text": "Shadow Of War",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-shadow_of_war-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Shell-Game": {
    "text": "Shell Game",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-shell_game-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Slot-Machine": {
    "text": "Slot Machine",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-slot_machine-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Social-Goals-": {
    "text": "Social Goals!",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-social_goals-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Spider-Webs": {
    "text": "Spider Webs",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-spider_webs-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Splash-Damage": {
    "text": "Splash Damage",
    "type": "room",
    "p3": true,
    "edition": {
      "Requiem": 1
    },
    "front": "r-splash_damage-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Spoils-Of-War": {
    "text": "Spoils Of War",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-spoils_of_war-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Static-Shock": {
    "text": "Static Shock",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-static_shock-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Tax-For-The-Mighty": {
    "text": "Tax For The Mighty",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-tax_for_the_mighty-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "The-Mirror": {
    "text": "The Mirror",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_mirror-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "White-Champions": {
    "text": "White Champions",
    "type": "room",
    "edition": {
      "Requiem": 1
    },
    "front": "r-white_champions-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Soul-Of-Envy": {
    "text": "Soul Of Envy",
    "type": "bonus",
    "edition": {
      "Requiem": 1
    },
    "front": "r-soul_of_envy-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Lust": {
    "text": "Soul Of Lust",
    "type": "bonus",
    "edition": {
      "Requiem": 1
    },
    "front": "r-soul_of_lust-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Pride": {
    "text": "Soul Of Pride",
    "type": "bonus",
    "edition": {
      "Requiem": 1
    },
    "front": "r-soul_of_pride-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Sloth": {
    "text": "Soul Of Sloth",
    "type": "bonus",
    "edition": {
      "Requiem": 1
    },
    "front": "r-soul_of_sloth-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Soul-Of-Wrath": {
    "text": "Soul Of Wrath",
    "type": "bonus",
    "edition": {
      "Requiem": 1
    },
    "front": "r-soul_of_wrath-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "The-Harbingers-The-Beast-": {
    "text": "The Harbingers/The Beast!",
    "type": "monster",
    "edition": {
      "Requiem": 1
    },
    "front": "r-the_harbingers-308x420.png",
    "back": "r-the_beast-308x420.png"
  },
  "Ash": {
    "text": "Ash",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-ash-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Ball-Of-Tumors": {
    "text": "Ball Of Tumors",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-ball_of_tumors-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Steven-character": {
    "text": "Steven",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-steven-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Lil-Steven": {
    "text": "Lil Steven",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-lil_steven-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Bum-Bo-The-Weird": {
    "text": "Bum-Bo The Weird",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-bum_bo_the_weird-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Strange-Marble": {
    "text": "Strange Marble",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-strange_marble-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Edmund": {
    "text": "Edmund",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-edmund-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "The-Real-Left-Hand": {
    "text": "The Real Left Hand",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_real_left_hand-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Abe": {
    "text": "Abe",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-abe-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Possession": {
    "text": "Possession",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-possession-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Baba": {
    "text": "Baba",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-baba-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Is-You": {
    "text": "Is You",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-is_you-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Blind-Johnny": {
    "text": "Blind Johnny",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-blind_johnny-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Johnny-s-Knives": {
    "text": "Johnny’s Knives",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-johnnys_knives-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Blue-Archer": {
    "text": "Blue Archer",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-blue_archer-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Bow-And-Arrow": {
    "text": "Bow And Arrow",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-bow_and_arrow-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Boyfriend": {
    "text": "Boyfriend",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-boyfriend-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Girlfriend": {
    "text": "Girlfriend",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-girlfriend-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Captain-Viridian": {
    "text": "Captain Viridian",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-captain_viridian-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Gravity": {
    "text": "Gravity",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-gravity-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Crewmate": {
    "text": "Crewmate",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-crewmate-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Emergency-Meeting-": {
    "text": "Emergency Meeting!",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-emergency_meeting-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Guy-Spelunky": {
    "text": "Guy Spelunky",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-guy_spelunky-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Spelunking-Pack": {
    "text": "Spelunking Pack",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-spelunking_pack-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Johnny": {
    "text": "Johnny",
    "type": "character",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-johnny-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Football": {
    "text": "Football",
    "type": "eternal",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-football-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Pink-Knight": {
    "text": "Pink Knight",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-pink_knight-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Lollypop": {
    "text": "Lollypop",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-lollypop-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Psycho-Goreman": {
    "text": "Psycho Goreman",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-psycho_goreman-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Hunky-Boys": {
    "text": "Hunky Boys",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-hunky_boys-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Quote": {
    "text": "Quote",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-quote-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Polar-Star-Booster-V2-0": {
    "text": "Polar Star/Booster V2.0",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-polar_star-308x420.png",
    "back": "rwz-booster_v20-308x420.png"
  },
  "Salad-Fingers": {
    "text": "Salad Fingers",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-salad_fingers-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Rusty-Spoons": {
    "text": "Rusty Spoons",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-rusty_spoons-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Knight": {
    "text": "The Knight",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_knight-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Focus": {
    "text": "Focus",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-focus-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "The-Silent": {
    "text": "The Silent",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_silent-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Ring-Of-The-Snake": {
    "text": "Ring Of The Snake",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-ring_of_the_snake-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Yung-Venuz": {
    "text": "Yung Venuz",
    "type": "character",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-yung_venuz-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Pop-Pop-": {
    "text": "Pop Pop!",
    "type": "eternal",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-pop_pop-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Aubrey": {
    "text": "Aubrey",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-aubrey-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Birthday-Cake": {
    "text": "Birthday Cake",
    "type": "treasure",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-birthday_cake-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Diogenes-Pot": {
    "text": "Diogenes’ Pot",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-diogenes_pot-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "George": {
    "text": "George",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-george-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Hitops": {
    "text": "Hitops",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-hitops-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Newgrounds-Tank": {
    "text": "Newgrounds Tank",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-newgrounds_tank-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Tony": {
    "text": "Tony",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-tony-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Boxing-Glove": {
    "text": "Boxing Glove",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-boxing_glove-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Doorway": {
    "text": "Doorway",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-doorway-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Gun-That-Can-Kill-The-Past": {
    "text": "Gun That Can Kill The Past",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-gun_that_can_kill_the_past-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Water-Bottle": {
    "text": "Water Bottle",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-water_bottle-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Ser-Junkan": {
    "text": "Ser Junkan",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-ser_junkan-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Spewer": {
    "text": "Spewer",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-spewer-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "The-Crowdfunder": {
    "text": "The Crowdfunder",
    "type": "treasure",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_crowdfunder-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Demon-Form": {
    "text": "Demon Form",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-demon_form-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Fiend-Fire": {
    "text": "Fiend Fire",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-fiend_fire-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Loot-Card": {
    "text": "Loot Card",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-loot_card-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Bible-Thump-": {
    "text": "Bible Thump!",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-bible_thump-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Blanks": {
    "text": "Blanks",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-blanks-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Cheep-Cheep-Cheep-": {
    "text": "Cheep Cheep Cheep!",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-cheep_cheep_cheep-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Chunk-Of-Amber": {
    "text": "Chunk Of Amber",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-chunk_of_amber-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Cow-On-A-Trash-Farm": {
    "text": "Cow On A Trash Farm",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-cow_on_a_trash_farm-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Greed-Butt-": {
    "text": "Greed Butt!",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-greed_butt-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Jester": {
    "text": "Jester",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-jester-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Murder-": {
    "text": "Murder!",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-murder-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Witch": {
    "text": "Witch",
    "type": "loot",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-witch-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "A-Dead-Horse": {
    "text": "A Dead Horse",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-a_dead_horse-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Balrog": {
    "text": "Balrog",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-balrog-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Hubert-Cumberdale": {
    "text": "Hubert Cumberdale",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-hubert_cumberdale-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Javon-": {
    "text": "Javon!",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-javon-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Keke-Is-You": {
    "text": "Keke Is You",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-keke_is_you-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Leatherneck": {
    "text": "Leatherneck",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-leatherneck-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Peeper": {
    "text": "Peeper",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-peeper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Shopkeeper-": {
    "text": "Shopkeeper!",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-shopkeeper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Impostor-": {
    "text": "The Impostor!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_impostor-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Purple-Shirted-Eye-Stabber": {
    "text": "The Purple-Shirted Eye Stabber",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_purple_shirted_eye_stabber-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Zombie-Jesus": {
    "text": "Zombie Jesus",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-zombie_jesus-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Death-Trapper": {
    "text": "Death Trapper",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-death_trapper-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Exp-sito": {
    "text": "Expósito",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-exposito-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Grandparent": {
    "text": "Grandparent",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-grandparent-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Lil-Hunter": {
    "text": "Lil Hunter",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-lil_hunter-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Melqu-ades": {
    "text": "Melquíades",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-melquiades-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Butcher": {
    "text": "The Butcher",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_butcher-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Collector": {
    "text": "The Collector",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_collector-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Gorm": {
    "text": "The Gorm",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_gorm-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Radiance": {
    "text": "The Radiance",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_radiance-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Time-Eater": {
    "text": "Time Eater",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-time_eater-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ballos-": {
    "text": "Ballos!",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-ballos-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Curse-Of-The-Suspicious": {
    "text": "Curse Of The Suspicious",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-curse_of_the_suspicious-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Brea-In-Distress": {
    "text": "Brea In Distress",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-brea_in_distress-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Don-t-Starve-": {
    "text": "Don’t Starve!",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-dont_starve-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Fuck-Bloat": {
    "text": "Fuck Bloat",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-fuck_bloat-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Golden-Idol": {
    "text": "Golden Idol",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-golden_idol-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Grubfather": {
    "text": "Grubfather",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-grubfather-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Nightmare-Tick": {
    "text": "Nightmare Tick",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-nightmare_tick-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "QWOP-": {
    "text": "QWOP!",
    "type": "monster",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-qwop-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Trial-By-Trolley-": {
    "text": "Trial By Trolley!",
    "type": "monster",
    "p3": true,
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-trial_by_trolley-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Isaac-Of-Isaac-Re-Isaac": {
    "text": "The Isaac Of Isaac: Re-Isaac",
    "type": "room",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-the_isaac_of_isaac_re_isaac-420x308.png",
    "back": "RoomCardBack-420x308.png"
  },
  "Strawberry": {
    "text": "Strawberry",
    "type": "bonus",
    "edition": {
      "Requiem Warp Zone": 1
    },
    "front": "rwz-strawberry-308x420.png",
    "back": "BonusSoulCardBack-308x420.png"
  },
  "Epic-Fetus-": {
    "text": "Epic Fetus!",
    "type": "treasure",
    "edition": {
      "Alt Art": 0, //1,
      "Target": 1
    },
    "front": "aa-epic_fetus-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Big-Bony": {
    "text": "Big Bony",
    "type": "monster",
    "edition": {
      "Alt Art": 0, //1
    },
    "front": "aa-big_bony-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Twitchy": {
    "text": "Twitchy",
    "type": "monster",
    "edition": {
      "Alt Art": 0, //1
    },
    "front": "aa-twitchy-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Min-Min": {
    "text": "Min Min",
    "type": "monster",
    "edition": {
      "Alt Art": 0, //1
    },
    "front": "aa-min_min-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "The-Beast": {
    "text": "The Beast",
    "type": "monster",
    "edition": {
      "Alt Art": 0, //1
    },
    "front": "aa-the_beast-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "It-Lives-": {
    "text": "It Lives!",
    "type": "monster",
    "edition": {
      "Alt Art": 0, //1,
      "Promo": 1
    },
    "front": "aa-it_lives-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dead-Eye": {
    "text": "Dead Eye",
    "type": "treasure",
    "edition": {
      "Target": 1
    },
    "front": "t-dead_eye-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Marked": {
    "text": "Marked",
    "type": "treasure",
    "edition": {
      "Target": 1
    },
    "front": "t-marked-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Lil-Gish": {
    "text": "Lil’ Gish",
    "type": "treasure",
    "edition": {
      "Gish": 1
    },
    "front": "gi-lil_gish-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Gish": {
    "text": "Gish",
    "type": "monster",
    "edition": {
      "Gish": 1
    },
    "front": "gi-gish-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Tapeworm": {
    "text": "Tapeworm",
    "type": "character",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-tapeworm-308x420.png",
    "back": "CharacterCardBack-308x420.png"
  },
  "Pink-Proglottid": {
    "text": "Pink Proglottid",
    "type": "eternal",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-pink_proglottid-308x420.png",
    "back": "EternalCardBack-308x420.png"
  },
  "Rainbow-Tapeworm": {
    "text": "Rainbow Tapeworm",
    "type": "loot",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-rainbow_tapeworm-308x420.png",
    "back": "LootCardBack-308x420.png"
  },
  "Black-Proglottid": {
    "text": "Black Proglottid",
    "type": "treasure",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-black_proglottid-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "White-Proglottid": {
    "text": "White Proglottid",
    "type": "treasure",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-white_proglottid-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Red-Proglottid": {
    "text": "Red Proglottid",
    "type": "treasure",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-red_proglottid-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  },
  "Tapeworm-monster": {
    "text": "Tapeworm",
    "type": "monster",
    "edition": {
      "Tapeworm": 1
    },
    "front": "tw-tapeworm_monster-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Dick-Knot-": {
    "text": "Dick Knot!",
    "type": "monster",
    "edition": {
      "Dick Knots": 1
    },
    "front": "dk-dick_knot-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "-Christian-Broadcasts-": {
    "text": "“Christian Broadcasts”",
    "type": "monster",
    "edition": {
      "The Unboxing of Isaac": 1
    },
    "front": "box-christian_broadcasts-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "TV-Static": {
    "text": "TV Static",
    "type": "monster",
    "edition": {
      "The Unboxing of Isaac": 1
    },
    "front": "box-tv_static-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Ultra-Pride": {
    "text": "Ultra Pride",
    "type": "monster",
    "edition": {
      "Promo": 1
    },
    "front": "psp-ultra_pride-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Corrupted-Data": {
    "text": "Corrupted Data",
    "type": "monster",
    "edition": {
      "Promo": 1
    },
    "front": "psp-corrupted_data-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Henry": {
    "text": "Henry",
    "type": "monster",
    "edition": {
      "Promo": 1
    },
    "front": "sp-henry-308x420.png",
    "back": "MonsterCardBack-308x420.png"
  },
  "Mom-s-Ring": {
    "text": "Mom’s Ring",
    "type": "treasure",
    "edition": {
      "Promo": 1
    },
    "front": "p-moms_ring-308x420.png",
    "back": "TreasureCardBack-308x420.png"
  }
}

class FourSouls extends GameInterface {
  constructor(seed) {
    super(seed)
    this.minPlayers = 1;
    this.maxPlayers = 4;

    this.setupPlayerMat = mat => {
      const tableau = mat.addSpace('#tableau', 'area', {spreadX: 80});
      mat.addSpace('#hand', 'area', {spreadX: 80});
      tableau.addComponent('counter', {display: 'hp', initialValue: 2, max: 5, bottom: 10});
      tableau.addComponent('counter', {display: 'attack', initialValue: 1, max: 8, left: 120, bottom: 10});
      tableau.addComponent('counter', {display: 'coin', initialValue: 3, max: 50, right: 10, bottom: 10});
      tableau.addComponent('die', {faces: 6, right: 40, top: 10});
    };

    this.setupBoard = board => {
      const charactersDeck = board.addSpace('#characters', 'deck');
      Object.entries(cards).filter(c => c[1].type=='character').forEach(c => addCard(c, charactersDeck));
      charactersDeck.shuffle()
      const eternalsDeck = board.addSpace('#eternals', 'deck');
      Object.entries(cards).filter(c => c[1].type=='eternal').forEach(c => addCard(c, eternalsDeck));
      eternalsDeck.shuffle()

      const lootDeck = board.addSpace('#loot', 'deck');
      Object.entries(cards).filter(c => c[1].type=='loot').forEach(c => addCard(c, lootDeck));
      lootDeck.shuffle()
      board.addSpace('#loot-discard', 'deck');

      const treasureDeck = board.addSpace('#treasure', 'deck');
      Object.entries(cards).filter(c => c[1].type=='treasure').forEach(c => addCard(c, treasureDeck));
      treasureDeck.shuffle()
      board.addSpace('#treasure-discard', 'deck');
      board.addSpace('#shop', 'area', {spreadX: 80});

      const monsterDeck = board.addSpace('#monsters', 'deck');
      Object.entries(cards).filter(c => c[1].type=='monster').forEach(c => addCard(c, monsterDeck));
      monsterDeck.shuffle()
      board.addSpace('#monsters-discard', 'deck');
      const dungeon = board.addSpace('#dungeon', 'area', {spreadX: 80});
      dungeon.addComponent('counter', {display: 'hp', initialValue:1, max: 8, left: 20, top: 100});

      board.addSpace('#bonus-souls', 'area', {spreadX: 47});
    };

    const addCard = ([id, card], deck) => {
      Object.entries(card.edition).forEach(([edition, count]) => deck.addPieces(count, "#" + id, 'card', {...card, edition}));
    }

    this.afterMove('#hand card, deck card', card => {card.set('active', false); card.set('flipped', false)});

    this.hideBoard(`card[flipped], #player-mat:not(.mine) #hand card, #loot card, #treasure card, #monsters card, #characters card, #eternals card`, ['front', 'text', 'edition']);

    this.actions = {
      shuffle: {
        select: "deck",
        prompt: "Shuffle",
        action: deck => deck.shuffle(),
      },
      flip: {
        select: ".mine card",
        prompt: "Flip",
        action: card => card.set('flipped', !card.get('flipped'))
      },
      activate: {
        select: ".mine #tableau card:not([active]):not([flipped])",
        prompt: "Tap",
        key: "x",
        action: card => card.set('active', true)
      },
      deactivate: {
        prompt: "Untap",
        select: ".mine #tableau card[active]:not([flipped])",
        key: "x",
        action: card => card.set('active', false)
      },
      deactivateAll: {
        prompt: "Untap all",
        select: ".mine #tableau card[active]:not([flipped])",
        key: "l",
        action: card => card.parent().findAll('card[active]').forEach(c => c.set('active', false))
      },
      play: {
        prompt: "Play onto board",
        key: "d",
        drag: ".mine #hand card",
        onto: ".mine #tableau"
      },
      remove: {
        prompt: "Put back in your hand",
        drag: ".mine #tableau card",
        onto: ".mine #hand",
      },
      draw: {
        prompt: "Draw",
        drag: "deck card, #loot-discard card",
        key: "d",
        onto: ".mine #hand",
      },
      drawMultiple: {
        prompt: "Draw multiple",
        select: "deck",
        key: "m",
        next: {
          prompt: "How many?",
          min: 2,
          max: 6,
          action: (deck, n) => deck.move('card', '.mine #hand', n),
        },
      },
      drawOne: {
        prompt: "Draw specific card",
        select: "deck",
        key: "i",
        next: {
          prompt: "Select card",
          select: deck => deck.findAll("card").map(c => c.get('text')),
          action: (deck, text) => deck.find(`card[text="${text}"]`).move('.mine #tableau'),
        }
      },
      purchase: {
        prompt: "Purchase",
        drag: "#shop card, #treasure card",
        key: "p",
        onto: ".mine #tableau",
      },
      intoLootDeckTop: {
        prompt: "Put on top of deck",
        key: "t",
        drag: '.mine card[type="loot"], #loot-discard card',
        onto: '#loot',
      },
      intoLootDeckBottom: {
        prompt: "Put bottom of deck",
        key: "b",
        select: '.mine card[type="loot"]',
        action: card => card.moveToBottom('#loot')
      },
      discardLoot: {
        prompt: "Discard",
        key: "f",
        drag: '#loot card, .mine card[type="loot"]',
        onto: '#loot-discard',
      },
      playLoot: {
        prompt: "Play",
        key: "p",
        drag: '.mine card[type="loot"]',
        onto: '#loot-discard',
      },
      intoShop: {
        prompt: "Put into shop",
        key: "s",
        drag: '#treasure card, #treasure-discard card, .mine card[type="treasure"]',
        onto: '#shop',
      },
      discardTreasure: {
        prompt: "Discard",
        key: "f",
        drag: '#treasure card, #shop card, .mine card[type="treasure"]',
        onto: '#treasure-discard',
      },
      intoTreasureDeck: {
        prompt: "Put top of deck",
        key: "t",
        drag: '#treasure-discard card, #shop card, .mine card[type="treasure"]',
        onto: '#treasure',
      },
      intoTreasureDeckBottom: {
        prompt: "Put bottom of deck",
        key: "b",
        select: '#treasure-discard card, #shop card, .mine card[type="treasure"]',
        action: card => card.moveToBottom('#treasure')
      },
      intoDungeon: {
        prompt: "Put into dungeon",
        key: "s",
        drag: '#monsters card, #monsters-discard card, .mine card[type="monster"]',
        onto: '#dungeon',
      },
      takeMonster: {
        prompt: "Play onto board",
        key: "p",
        drag: '#board card[type="monster"]',
        onto: '.mine #tableau',
      },
      discardMonster: {
        prompt: "Discard",
        key: "f",
        drag: '#board card[type="monster"], .mine card[type="monster"]',
        onto: '#monsters-discard',
      },
      intoMonsterDeck: {
        prompt: "Put top of deck",
        key: "t",
        drag: '#board card[type="monster"], .mine card[type="monster"]',
        onto: '#monsters',
      },
      intoMonsterDeckBottom: {
        prompt: "Put bottom of deck",
        key: "b",
        select: '#board card[type="monster"], .mine card[type="monster"]',
        action: card => card.moveToBottom('#monsters')
      },
      intoMonsterDeckAt: {
        prompt: "Put nth card down in deck",
        key: "n",
        select: '#board card[type="monster"], .mine card[type="monster"]',
        next: {
          prompt: "How far down into deck?",
          min: 2,
          max: 6,
          action: (card, position) => card.move('#monsters', position - 1),
        }
      },
      takeBonus: {
        prompt: "Claim bonus soul",
        key: "d",
        drag: "#board card[type='bonus']",
        onto: ".mine #tableau"
      },
      discardBonus: {
        prompt: "Discard",
        key: "f",
        drag: ".mine card[type='bonus']",
        onto: "#bonus-souls"
      },
      giveCard: {
        prompt: "Give to player",
        promptOnto: "Which player",
        key: "g",
        drag: ".mine #tableau card, .mine card[type='monster']",
        onto: "#player-mat:not(.mine) #tableau",
      },
      giveLoot: {
        prompt: "Give to player",
        promptOnto: "Which player",
        key: "g",
        drag: ".mine #hand card[type='loot']",
        onto: "#player-mat:not(.mine) #hand",
      },
      giveAllLoot: {
        prompt: "Give all cards to player",
        select: ".mine #hand card",
        next: {
          prompt: "Which player?",
          select: "#player-mat:not(.mine) #hand",
          action: (from, to) => from.parent().move('card', to),
        },
      },
      addCounter: {
        prompt: "Add counter",
        key: "c",
        select: ".mine card:empty, #board card:empty",
        action: card => card.addComponent('counter', {max: 99}),
      },
      removeCounter: {
        prompt: "Remove counter",
        key: "c",
        select: ".mine card:not(:empty), #board card:not(:empty)",
        action: card => card.find('counter').destroy(),
      },
      intoCharDeckTop: {
        prompt: "Put back in deck",
        key: "f",
        drag: '.mine card[type="character"]',
        onto: '#characters',
      },
      intoEternalDeckTop: {
        prompt: "Put back in deck",
        key: "f",
        drag: '.mine card[type="eternal"]',
        onto: '#eternals',
      },
      removeP3: {
        prompt: `Remove 3+ player cards`,
        if: () => this.doc.find("#board card[p3], #player-mat card[p3]"),
        action: () => this.doc.clear("#board card[p3], #player-mat card[p3]"),
      },
      start: {
        prompt: "Begin game"
      }
    };

    const startingActions = ['start', 'intoCharDeckTop', 'intoEternalDeckTop', 'removeP3'];
    Object.entries(editions).forEach(([i, edition]) => {
      startingActions.push(`excludeEdition-${i}`);
      this.actions[`excludeEdition-${i}`] = {
        prompt: `Remove ${edition}`,
        if: () => this.doc.find(`#board card[edition="${edition}"], #player-mat card[edition="${edition}"]`),
        action: () => this.doc.clear(`#board card[edition="${edition}"], #player-mat card[edition="${edition}"]`),
      }
    })

    this.play = async () => {
      this.playersMayAlwaysMove('.mine card, .mine counter, #board counter, .mine die, #shop card, #dungeon card, #bonus-souls card');
      this.playersMayAlwaysPlay(['setCounter', 'rollDie']);

      let action;
      this.prompt('Select starting characters and eternals, then hit Begin game');
      do {
        action = await this.anyPlayerPlay([...startingActions, 'draw', 'drawOne', 'drawMultiple', 'shuffle', 'play', 'remove']);
      } while (action != 'start');
      this.board.find('#characters').destroy();
      this.board.find('#eternals').destroy();
      this.prompt();
      const bonusSouls = Object.entries(cards).filter(c => c[1].type=='bonus');
      [1,2,3].forEach(() => {
        const soul = bonusSouls.splice(this.random(bonusSouls.length), 1)[0];
        addCard(soul, this.board.find('#bonus-souls'));
      });

      const allActions = Object.keys(this.actions).filter(a => !startingActions.includes(a));
      while(true) {
        await this.anyPlayerPlay(allActions);
      }
    };

  }
}

module.exports = FourSouls
