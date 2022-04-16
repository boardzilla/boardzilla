const editions = [
  'Four Souls+ V2',
  'Alt Art',
  'Requiem',
  'Promo',
  'Gold Box V2',
  'The Unboxing of Isaac',
  'Requiem Warp Zone',
  'Target',
  'Gish',
  'Tapeworm',
  'Dick Knots',
];

const cards = {
  Isaac: {
    name: 'Isaac',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-isaac-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-D6': {
    name: 'The D6',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_d6-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Maggy: {
    name: 'Maggy',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-maggy-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Yum-Heart': {
    name: 'Yum Heart',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-yum_heart-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Cain: {
    name: 'Cain',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cain-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Sleight-Of-Hand': {
    name: 'Sleight Of Hand',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-sleight_of_hand-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Judas: {
    name: 'Judas',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-judas-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Book-Of-Belial': {
    name: 'Book Of Belial',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-book_of_belial-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Blue-Baby': {
    name: 'Blue Baby',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-blue_baby-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Forever-Alone': {
    name: 'Forever Alone',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-forever_alone-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Eve: {
    name: 'Eve',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-eve-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Curse': {
    name: 'The Curse',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_curse-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Samson: {
    name: 'Samson',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-samson-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Blood-Lust': {
    name: 'Blood Lust',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-blood_lust-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Lazarus: {
    name: 'Lazarus',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lazarus-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Lazarus-Rags': {
    name: 'Lazarus’ Rags',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lazarus_rags-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Lilith: {
    name: 'Lilith',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lilith-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Incubus: {
    name: 'Incubus',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-incubus-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Forgotten': {
    name: 'The Forgotten',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_forgotten-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Bone': {
    name: 'The Bone',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_bone-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Eden: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-eden-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Belly-Button': {
    name: 'Belly Button',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-belly_button-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Bob-s-Brain': {
    name: 'Bob’s Brain',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-bobs_brain-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Breakfast: {
    name: 'Breakfast',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-breakfast-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Brimstone: {
    name: 'Brimstone',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-brimstone-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Bum-Bo-': {
    name: 'Bum-Bo!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-bum_bo-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Cambion-Conception': {
    name: 'Cambion Conception',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cambion_conception-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Champion-Belt': {
    name: 'Champion Belt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-champion_belt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Charged-Baby': {
    name: 'Charged Baby',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-charged_baby-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Cheese-Grater': {
    name: 'Cheese Grater',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cheese_grater-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Curse-Of-The-Tower': {
    name: 'Curse Of The Tower',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_the_tower-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Dad-s-Lost-Coin': {
    name: 'Dad’s Lost Coin',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dads_lost_coin-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Dark-Bum': {
    name: 'Dark Bum',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dark_bum-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Dead-Bird': {
    name: 'Dead Bird',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dead_bird-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Dinner: {
    name: 'Dinner',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dinner-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Dry-Baby': {
    name: 'Dry Baby',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dry_baby-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Eden-s-Blessing': {
    name: 'Eden’s Blessing',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-edens_blessing-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Empty-Vessel': {
    name: 'Empty Vessel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-empty_vessel-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Eye-Of-Greed': {
    name: 'Eye Of Greed',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-eye_of_greed-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Fanny-Pack': {
    name: 'Fanny Pack',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-fanny_pack-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Finger-': {
    name: 'Finger!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-finger-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Goat-Head': {
    name: 'Goat Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-goat_head-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Greed-s-Gullet': {
    name: 'Greed’s Gullet',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-greeds_gullet-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Collar': {
    name: 'Guppy’s Collar',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-guppys_collar-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Ipecac: {
    name: 'Ipecac',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ipecac-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Meat-': {
    name: 'Meat!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-meat-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Box': {
    name: 'Mom’s Box',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_box-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Coin-Purse': {
    name: 'Mom’s Coin Purse',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_coin_purse-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Purse': {
    name: 'Mom’s Purse',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_purse-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Razor': {
    name: 'Mom’s Razor',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_razor-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Monstro-s-Tooth': {
    name: 'Monstro’s Tooth',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-monstros_tooth-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Polydactyly: {
    name: 'Polydactyly',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-polydactyly-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Restock: {
    name: 'Restock',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-restock-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Sacred-Heart': {
    name: 'Sacred Heart',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-sacred_heart-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Shadow: {
    name: 'Shadow',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-shadow-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Shiny-Rock': {
    name: 'Shiny Rock',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-shiny_rock-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Spider-Mod': {
    name: 'Spider Mod',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-spider_mod-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Starter-Deck': {
    name: 'Starter Deck',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-starter_deck-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Steamy-Sale-': {
    name: 'Steamy Sale!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-steamy_sale-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Suicide-King': {
    name: 'Suicide King',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-suicide_king-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Synthoil: {
    name: 'Synthoil',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-synthoil-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Tarot-Cloth': {
    name: 'Tarot Cloth',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-tarot_cloth-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Blue-Map': {
    name: 'The Blue Map',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_blue_map-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Chest': {
    name: 'The Chest',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_chest-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Compass': {
    name: 'The Compass',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_compass-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-D10': {
    name: 'The D10',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_d10-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Dead-Cat': {
    name: 'The Dead Cat',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_dead_cat-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Habit': {
    name: 'The Habit',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_habit-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Map': {
    name: 'The Map',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_map-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Midas-Touch': {
    name: 'The Midas Touch',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_midas_touch-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Polaroid': {
    name: 'The Polaroid',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_polaroid-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Relic': {
    name: 'The Relic',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_relic-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'There-s-Options': {
    name: 'There’s Options',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-theres_options-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Trinity-Shield': {
    name: 'Trinity Shield',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-trinity_shield-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Blank-Card': {
    name: 'Blank Card',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-blank_card-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Book-Of-Sin': {
    name: 'Book Of Sin',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-book_of_sin-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Boomerang: {
    name: 'Boomerang',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-boomerang-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Box-': {
    name: 'Box!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-box-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Bum-Friend': {
    name: 'Bum Friend',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-bum_friend-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Chaos: {
    name: 'Chaos',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-chaos-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Chaos-Card': {
    name: 'Chaos Card',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-chaos_card-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Compost: {
    name: 'Compost',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-compost-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Crystal-Ball': {
    name: 'Crystal Ball',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-crystal_ball-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Decoy: {
    name: 'Decoy',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-decoy-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Diplopia: {
    name: 'Diplopia',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-diplopia-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Flush-': {
    name: 'Flush!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-flush-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Glass-Cannon': {
    name: 'Glass Cannon',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-glass_cannon-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Godhead: {
    name: 'Godhead',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-godhead-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Head': {
    name: 'Guppy’s Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-guppys_head-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Paw': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-guppys_paw-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Host-Hat': {
    name: 'Host Hat',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-host_hat-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Jawbone: {
    name: 'Jawbone',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-jawbone-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Lucky-Foot': {
    name: 'Lucky Foot',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lucky_foot-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mini-Mush': {
    name: 'Mini Mush',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mini_mush-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Modeling-Clay': {
    name: 'Modeling Clay',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-modeling_clay-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Bra': {
    name: 'Mom’s Bra',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_bra-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Shovel': {
    name: 'Mom’s Shovel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_shovel-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Monster-Manual': {
    name: 'Monster Manual',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-monster_manual-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mr-Boom': {
    name: 'Mr. Boom',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mr_boom-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mystery-Sack': {
    name: 'Mystery Sack',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mystery_sack-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'No-': {
    name: 'No!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-no-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Pandora-s-Box': {
    name: 'Pandora’s Box',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pandoras_box-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Placebo: {
    name: 'Placebo',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-placebo-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Potato-Peeler': {
    name: 'Potato Peeler',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-potato_peeler-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Razor-Blade': {
    name: 'Razor Blade',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-razor_blade-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Remote-Detonator': {
    name: 'Remote Detonator',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-remote_detonator-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Sack-Head': {
    name: 'Sack Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-sack_head-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Sack-Of-Pennies': {
    name: 'Sack Of Pennies',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-sack_of_pennies-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Spoon-Bender': {
    name: 'Spoon Bender',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-spoon_bender-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Tech-X': {
    name: 'Tech X',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-tech_x-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Battery': {
    name: 'The Battery',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_battery-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-D100': {
    name: 'The D100',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_d100-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-D20': {
    name: 'The D20',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_d20-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-D4': {
    name: 'The D4',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_d4-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Shovel': {
    name: 'The Shovel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_shovel-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Two-Of-Clubs': {
    name: 'Two Of Clubs',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-two_of_clubs-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Battery-Bum': {
    name: 'Battery Bum',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-battery_bum-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Contract-From-Below': {
    name: 'Contract From Below',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-contract_from_below-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Donation-Machine': {
    name: 'Donation Machine',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-donation_machine-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Golden-Razor-Blade': {
    name: 'Golden Razor Blade',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-golden_razor_blade-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Pay-To-Play': {
    name: 'Pay To Play',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pay_to_play-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Portable-Slot-Machine': {
    name: 'Portable Slot Machine',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-portable_slot_machine-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Smelter: {
    name: 'Smelter',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-smelter-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Poop': {
    name: 'The Poop',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_poop-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Baby-Haunt': {
    name: 'Baby Haunt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-baby_haunt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Daddy-Haunt': {
    name: 'Daddy Haunt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-daddy_haunt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'A-Penny-': {
    name: 'A Penny!',
    type: 'loot',
    edition: {
      'Base Game V2': 6,
      'Gold Box V2': 2,
      'Four Souls+ V2': 3,
    },
    front: 'b2-a_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  '2-Cents-': {
    name: '2 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 12,
      'Gold Box V2': 2,
      'Four Souls+ V2': 3,
      Requiem: 5,
    },
    front: 'b2-two_cents_10-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  '3-Cents-': {
    name: '3 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 15,
      'Gold Box V2': 2,
      'Four Souls+ V2': 4,
      Requiem: 6,
    },
    front: 'b2-three_cents_10-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  '4-Cents-': {
    name: '4 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 9,
      'Gold Box V2': 2,
      'Four Souls+ V2': 2,
      Requiem: 4,
    },
    front: 'b2-four_cents_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'A-Nickel-': {
    name: 'A Nickel!',
    type: 'loot',
    edition: {
      'Base Game V2': 5,
      'Four Souls+ V2': 1,
      Requiem: 1,
    },
    front: 'b2-a_nickel_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'A-Dime-': {
    name: 'A Dime!!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-a_dime-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Lil-Battery': {
    name: 'Lil Battery',
    type: 'loot',
    edition: {
      'Base Game V2': 4,
    },
    front: 'b2-lil_battery_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Mega-Battery': {
    name: 'Mega Battery',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mega_battery-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Bomb-': {
    name: 'Bomb!',
    type: 'loot',
    edition: {
      'Base Game V2': 4,
      'Gold Box V2': 1,
      'Four Souls+ V2': 1,
      Requiem: 3,
    },
    front: 'b2-bomb_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Gold-Bomb-': {
    name: 'Gold Bomb!!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gold_bomb-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Butter-Bean-': {
    name: 'Butter Bean!',
    type: 'loot',
    edition: {
      'Base Game V2': 3,
      'Four Souls+ V2': 1,
      Requiem: 3,
    },
    front: 'b2-butter_bean_3-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Dice-Shard': {
    name: 'Dice Shard',
    type: 'loot',
    edition: {
      'Base Game V2': 3,
      'Four Souls+ V2': 1,
      Requiem: 3,
    },
    front: 'b2-dice_shard-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pills_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-1': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pills_3-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-2': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pills-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Soul-Heart': {
    name: 'Soul Heart',
    type: 'loot',
    edition: {
      'Base Game V2': 2,
      'Gold Box V2': 1,
      Requiem: 2,
    },
    front: 'b2-soul_heart-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'O-The-Fool': {
    name: 'O. The Fool',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-o_the_fool-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'I-The-Magician': {
    name: 'I. The Magician',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-i_the_magician-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'II-The-High-Priestess': {
    name: 'II. The High Priestess',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ii_the_high_priestess-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'III-The-Empress': {
    name: 'III. The Empress',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-iii_the_empress-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'IV-The-Emperor': {
    name: 'IV. The Emperor',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-iv_the_emperor-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'V-The-Hierophant': {
    name: 'V. The Hierophant',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-v_the_hierophant-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'VI-The-Lovers': {
    name: 'VI. The Lovers',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-vi_the_lovers-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'VII-The-Chariot': {
    name: 'VII. The Chariot',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-vii_the_chariot-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'VIII-Justice': {
    name: 'VIII. Justice',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-viii_justice-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'IX-The-Hermit': {
    name: 'IX. The Hermit',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ix_the_hermit-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'X-Wheel-Of-Fortune': {
    name: 'X. Wheel Of Fortune',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-x_wheel_of_fortune-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XI-Strength': {
    name: 'XI. Strength',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xi_strength-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XII-The-Hanged-Man': {
    name: 'XII. The Hanged Man',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xii_the_hanged_man-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XIII-Death': {
    name: 'XIII. Death',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xiii_death-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XIV-Temperance': {
    name: 'XIV. Temperance',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xiv_temperance-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XV-The-Devil': {
    name: 'XV. The Devil',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xv_the_devil-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XVI-The-Tower': {
    name: 'XVI. The Tower',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xvi_the_tower-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XVII-The-Stars': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xvii_the_stars-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XVIII-The-Moon': {
    name: 'XVIII. The Moon',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xviii_the_moon-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XIX-The-Sun': {
    name: 'XIX. The Sun',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xix_the_sun-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XX-Judgement': {
    name: 'XX. Judgement',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xx_judgement-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XXI-The-World': {
    name: 'XXI. The World',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xxi_the_world-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Dagaz: {
    name: 'Dagaz',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dagaz-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Ehwaz: {
    name: 'Ehwaz',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ehwaz-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Blank-Rune': {
    name: 'Blank Rune',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-blank_rune-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Bloody-Penny': {
    name: 'Bloody Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-bloody_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Broken-Ankh': {
    name: 'Broken Ankh',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-broken_ankh-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Cain-s-Eye': {
    name: 'Cain’s Eye',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cains_eye-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Counterfeit-Penny': {
    name: 'Counterfeit Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-counterfeit_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Curved-Horn': {
    name: 'Curved Horn',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curved_horn-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Golden-Horseshoe': {
    name: 'Golden Horseshoe',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-golden_horseshoe-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Guppy-s-Hairball': {
    name: 'Guppy’s Hairball',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-guppys_hairball-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Purple-Heart': {
    name: 'Purple Heart',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-purple_heart-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Swallowed-Penny': {
    name: 'Swallowed Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-swallowed_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Lost-Soul': {
    name: 'Lost Soul',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lost_soul-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Big-Spider': {
    name: 'Big Spider',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-big_spider-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Black-Bony': {
    name: 'Black Bony',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-black_bony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Boom-Fly': {
    name: 'Boom Fly',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-boom_fly-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Clotty: {
    name: 'Clotty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-clotty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cod-Worm': {
    name: 'Cod Worm',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cod_worm-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Conjoined-Fatty': {
    name: 'Conjoined Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-conjoined_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dank-Globin': {
    name: 'Dank Globin',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dank_globin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Delirium: {
    name: 'Delirium',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-delirium-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dinga: {
    name: 'Dinga',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dinga-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dip: {
    name: 'Dip',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dip-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dople: {
    name: 'Dople',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dople-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Evil-Twin': {
    name: 'Evil Twin',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-evil_twin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Fat-Bat': {
    name: 'Fat Bat',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-fat_bat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Fatty: {
    name: 'Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Fly: {
    name: 'Fly',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-fly-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Greedling: {
    name: 'Greedling',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-greedling-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Hanger: {
    name: 'Hanger',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-hanger-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Hopper: {
    name: 'Hopper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-hopper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Horf: {
    name: 'Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-horf-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Keeper-Head': {
    name: 'Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-keeper_head-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Leaper: {
    name: 'Leaper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-leaper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Leech: {
    name: 'Leech',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-leech-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Dead-Hand': {
    name: 'Mom’s Dead Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_dead_hand-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Eye': {
    name: 'Mom’s Eye',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_eye-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Hand': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-moms_hand-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Mulliboom: {
    name: 'Mulliboom',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mulliboom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Mulligan: {
    name: 'Mulligan',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mulligan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Pale-Fatty': {
    name: 'Pale Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pale_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pooter: {
    name: 'Pooter',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pooter-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Portal: {
    name: 'Portal',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-portal-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Psy-Horf': {
    name: 'Psy Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-psy_horf-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Rage-Creep': {
    name: 'Rage Creep',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-rage_creep-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Red-Host': {
    name: 'Red Host',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-red_host-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ring-Of-Flies': {
    name: 'Ring Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ring_of_flies-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Spider: {
    name: 'Spider',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-spider-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Squirt: {
    name: 'Squirt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-squirt-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Stoney: {
    name: 'Stoney',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-stoney-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Swarm-Of-Flies': {
    name: 'Swarm Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-swarm_of_flies-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Trite: {
    name: 'Trite',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-trite-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Wizoob: {
    name: 'Wizoob',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-wizoob-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Fatty': {
    name: 'Cursed Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Gaper': {
    name: 'Cursed Gaper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_gaper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Horf': {
    name: 'Cursed Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_horf-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Keeper-Head': {
    name: 'Cursed Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_keeper_head-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Mom-s-Hand': {
    name: 'Cursed Mom’s Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_moms_hand-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Psy-Horf': {
    name: 'Cursed Psy Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_psy_horf-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Dinga': {
    name: 'Holy Dinga',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-holy_dinga-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Dip': {
    name: 'Holy Dip',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-holy_dip-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Keeper-Head': {
    name: 'Holy Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-holy_keeper_head-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Mom-s-Eye': {
    name: 'Holy Mom’s Eye',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-holy_moms_eye-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Squirt': {
    name: 'Holy Squirt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-holy_squirt-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Carrion-Queen': {
    name: 'Carrion Queen',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-carrion_queen-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Chub: {
    name: 'Chub',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-chub-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Conquest: {
    name: 'Conquest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-conquest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Daddy-Long-Legs': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-daddy_long_legs-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dark-One': {
    name: 'Dark One',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dark_one-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Death: {
    name: 'Death',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-death-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Envy: {
    name: 'Envy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-envy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Famine: {
    name: 'Famine',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-famine-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gemini: {
    name: 'Gemini',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gemini-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gluttony: {
    name: 'Gluttony',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gluttony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Greed: {
    name: 'Greed',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-greed-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gurdy: {
    name: 'Gurdy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gurdy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Gurdy-Jr-': {
    name: 'Gurdy Jr.',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gurdy_jr-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Larry-Jr-': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-larry_jr-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Little-Horn': {
    name: 'Little Horn',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-little_horn-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Lust: {
    name: 'Lust',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-lust-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mask-Of-Infamy': {
    name: 'Mask Of Infamy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mask_of_infamy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Fatty': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mega_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Monstro: {
    name: 'Monstro',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-monstro-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Peep: {
    name: 'Peep',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-peep-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pestilence: {
    name: 'Pestilence',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pestilence-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pin: {
    name: 'Pin',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pride: {
    name: 'Pride',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-pride-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Rag-Man': {
    name: 'Rag Man',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-rag_man-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Scolex: {
    name: 'Scolex',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-scolex-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Sloth: {
    name: 'Sloth',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-sloth-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Bloat': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_bloat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Duke-Of-Flies': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_duke_of_flies-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Haunt': {
    name: 'The Haunt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_haunt-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Lamb': {
    name: 'The Lamb',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-the_lamb-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  War: {
    name: 'War',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-war-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Wrath: {
    name: 'Wrath',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-wrath-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-': {
    name: 'Mom!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Satan-': {
    name: 'Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-satan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Amnesia': {
    name: 'Curse Of Amnesia',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_amnesia-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Greed': {
    name: 'Curse Of Greed',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_greed-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Loss': {
    name: 'Curse Of Loss',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_loss-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Pain': {
    name: 'Curse Of Pain',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_pain-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-The-Blind': {
    name: 'Curse Of The Blind',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-curse_of_the_blind-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ambush-': {
    name: 'Ambush!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-ambush-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Chest: {
    name: 'Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Chest1: {
    name: 'Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-chest_2-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Chest': {
    name: 'Cursed Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-cursed_chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dark-Chest': {
    name: 'Dark Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dark_chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dark-Chest1': {
    name: 'Dark Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-dark_chest_2-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Devil-Deal': {
    name: 'Devil Deal',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-devil_deal-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Gold-Chest': {
    name: 'Gold Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gold_chest_2-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Gold-Chest1': {
    name: 'Gold Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-gold_chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Greed-': {
    name: 'Greed!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-greed_event-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'I-Can-See-Forever-': {
    name: 'I Can See Forever!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-i_can_see_forever-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Troll-Bomb-': {
    name: 'Mega Troll Bomb!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-mega_troll_bomb-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Secret-Room-': {
    name: 'Secret Room!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-secret_room-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Shop-Upgrade-': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-shop_upgrade-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Troll-Bombs': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-troll_bombs-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'We-Need-To-Go-Deeper-': {
    name: 'We Need To Go Deeper!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-we_need_to_go_deeper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Xl-Floor-': {
    name: 'Xl Floor!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-xl_floor-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Soul-Of-Gluttony': {
    name: 'Soul Of Gluttony',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-soul_of_gluttony-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Greed': {
    name: 'Soul Of Greed',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-soul_of_greed-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Guppy': {
    name: 'Soul Of Guppy',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b2-soul_of_guppy-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  Azazel: {
    name: 'Azazel',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-azazel-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Lord-Of-The-Pit': {
    name: 'Lord Of The Pit',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-lord_of_the_pit-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Lost': {
    name: 'The Lost',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_lost-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Holy-Mantle': {
    name: 'Holy Mantle',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-holy_mantle-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Keeper': {
    name: 'The Keeper',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_keeper-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Wooden-Nickel': {
    name: 'Wooden Nickel',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-wooden_nickel-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Apollyon: {
    name: 'Apollyon',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-apollyon-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Void: {
    name: 'Void',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-void-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  '9-Volt': {
    name: '9 Volt',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-9_volt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Tail': {
    name: 'Guppy’s Tail',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-guppys_tail-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Infamy: {
    name: 'Infamy',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-infamy-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Knife': {
    name: 'Mom’s Knife',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-moms_knife-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'More-Options': {
    name: 'More Options',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-more_options-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Placenta: {
    name: 'Placenta',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-placenta-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Skeleton-Key': {
    name: 'Skeleton Key',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-skeleton_key-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Soy-Milk': {
    name: 'Soy Milk',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-soy_milk-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Missing-Page': {
    name: 'The Missing Page',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_missing_page-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Crooked-Penny': {
    name: 'Crooked Penny',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-crooked_penny-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Fruitcake: {
    name: 'Fruitcake',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-fruitcake-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'I-Can-t-Believe-It-s-Not-Butter-Bean': {
    name: 'I Can’t Believe It’s Not Butter Bean',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-i_cant_believe_its_not_butter_bean-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Lemon-Mishap': {
    name: 'Lemon Mishap',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-lemon_mishap-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Library-Card': {
    name: 'Library Card',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-library_card-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Ouija-Board': {
    name: 'Ouija Board',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-ouija_board-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Plan-C': {
    name: 'Plan C',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-plan_c-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Bible': {
    name: 'The Bible',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_bible-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Butter-Bean': {
    name: 'The Butter Bean',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_butter_bean-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Dad-s-Key': {
    name: 'Dad’s Key',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-dads_key-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Succubus: {
    name: 'Succubus',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-succubus-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Charged-Penny': {
    name: 'Charged Penny',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-charged_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-3': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-pills-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Credit-Card': {
    name: 'Credit Card',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-credit_card-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Holy-Card': {
    name: 'Holy Card',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-holy_card-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Two-Of-Diamonds': {
    name: 'Two Of Diamonds',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-two_of_diamonds-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Joker: {
    name: 'Joker',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-joker-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Jera: {
    name: 'Jera',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-jera-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Cancer: {
    name: 'Cancer',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-cancer-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pink-Eye': {
    name: 'Pink Eye',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-pink_eye-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'A-Sack': {
    name: 'A Sack',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
      Requiem: 1,
    },
    front: 'g2-a_sack-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Begotten: {
    name: 'Begotten',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-begotten-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Boil: {
    name: 'Boil',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-boil-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Charger: {
    name: 'Charger',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-charger-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Death-s-Head': {
    name: 'Death’s Head',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-deaths_head-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gaper: {
    name: 'Gaper',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-gaper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Imp: {
    name: 'Imp',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-imp-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Knight: {
    name: 'Knight',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-knight-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Parabite: {
    name: 'Parabite',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-parabite-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Ragling: {
    name: 'Ragling',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-ragling-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Round-Worm': {
    name: 'Round Worm',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-round_worm-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Fistula: {
    name: 'Fistula',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-fistula-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gurglings: {
    name: 'Gurglings',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-gurglings-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Polycephalus: {
    name: 'Polycephalus',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-polycephalus-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Steven: {
    name: 'Steven',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-steven-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Cage': {
    name: 'The Cage',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-the_cage-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Hush: {
    name: 'Hush',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-hush-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Fatigue': {
    name: 'Curse Of Fatigue',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-curse_of_fatigue-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Tiny-Hands': {
    name: 'Curse Of Tiny Hands',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-curse_of_tiny_hands-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'I-Am-Error-': {
    name: 'I Am Error!',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-i_am_error-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Trap-Door-': {
    name: 'Trap Door!',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'g2-trap_door-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Bum-Bo': {
    name: 'Bum-Bo',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-bum_bo-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Bag-O-Trash': {
    name: 'Bag-O-Trash',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-bag_o_trash-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Dark-Judas': {
    name: 'Dark Judas',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-dark_judas-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Dark-Arts': {
    name: 'Dark Arts',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-dark_arts-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Guppy: {
    name: 'Guppy',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-guppy-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Infestation: {
    name: 'Infestation',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-infestation-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Whore-Of-Babylon': {
    name: 'Whore Of Babylon',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-whore_of_babylon-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Gimpy: {
    name: 'Gimpy',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-gimpy-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  '1-Up': {
    name: '1-Up',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-1_up-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Abaddon: {
    name: 'Abaddon',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-abaddon-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Cursed-Eye': {
    name: 'Cursed Eye',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-cursed_eye-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Daddy-Long-Legs-treasure': {
    name: 'Daddy Long Legs',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-daddy_long_legs-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Euthanasia: {
    name: 'Euthanasia',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-euthanasia-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Game-Breaking-Bug-': {
    name: 'Game Breaking Bug!',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-game_breaking_bug-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Eye': {
    name: 'Guppy’s Eye',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-guppys_eye-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Head-Of-The-Keeper': {
    name: 'Head Of The Keeper',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-head_of_the_keeper-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Hourglass: {
    name: 'Hourglass',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-hourglass-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Lard: {
    name: 'Lard',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-lard-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Magnet: {
    name: 'Magnet',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-magnet-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Eye-Shadow': {
    name: 'Mom’s Eye Shadow',
    type: 'treasure',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-moms_eye_shadow-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'P-H-D-': {
    name: 'P.H.D.',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-phd-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Polyphemus: {
    name: 'Polyphemus',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-polyphemus-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Rubber-Cement': {
    name: 'Rubber Cement',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-rubber_cement-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Telepathy-For-Dummies': {
    name: 'Telepathy For Dummies',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-telepathy_for_dummies-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Wiz': {
    name: 'The Wiz',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-the_wiz-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  '20-20': {
    name: '20/20',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-20_20-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Black-Candle': {
    name: 'Black Candle',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-black_candle-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Distant-Admiration': {
    name: 'Distant Admiration',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-distant_admiration-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Divorce-Papers': {
    name: 'Divorce Papers',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-divorce_papers-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Forget-Me-Now': {
    name: 'Forget Me Now',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-forget_me_now-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Head-Of-Krampus': {
    name: 'Head Of Krampus',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-head_of_krampus-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Libra: {
    name: 'Libra',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-libra-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mutant-Spider': {
    name: 'Mutant Spider',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-mutant_spider-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Rainbow-Baby': {
    name: 'Rainbow Baby',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-rainbow_baby-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Red-Candle': {
    name: 'Red Candle',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-red_candle-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Smart-Fly': {
    name: 'Smart Fly',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-smart_fly-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Athame: {
    name: 'Athame',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-athame-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mama-Haunt': {
    name: 'Mama Haunt',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-mama_haunt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'lil-Battery': {
    name: 'lil Battery',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
      Requiem: 2,
    },
    front: 'fsp2-lil_battery-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-4': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-pills-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-5': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-pills_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-6': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-pills_3-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  '-Card': {
    name: '? Card',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-questionmark_card-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Get-Out-Of-Jail-Card': {
    name: 'Get Out Of Jail Card',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-get_out_of_jail_card-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Ansuz: {
    name: 'Ansuz',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-ansuz-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Perthro: {
    name: 'Perthro',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-perthro-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Black-Rune': {
    name: 'Black Rune',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-black_rune-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'AAA-Battery': {
    name: 'AAA Battery',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-aaa_battery-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Poker-Chip': {
    name: 'Poker Chip',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-poker_chip-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Tape-Worm': {
    name: 'Tape Worm',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-tape_worm-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'The-Left-Hand': {
    name: 'The Left Hand',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-the_left_hand-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Gold-Key': {
    name: 'Gold Key',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-gold_key-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Bony: {
    name: 'Bony',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-bony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Brain: {
    name: 'Brain',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-brain-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Flaming-Hopper': {
    name: 'Flaming Hopper',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-flaming_hopper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Globin: {
    name: 'Globin',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-globin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Nerve-Ending': {
    name: 'Nerve Ending',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-nerve_ending-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Roundy: {
    name: 'Roundy',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-roundy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Sucker: {
    name: 'Sucker',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-sucker-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Swarmer: {
    name: 'Swarmer',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-swarmer-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Tumor: {
    name: 'Tumor',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-tumor-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Globin': {
    name: 'Cursed Globin',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-cursed_globin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Tumor': {
    name: 'Cursed Tumor',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-cursed_tumor-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Bony': {
    name: 'Holy Bony',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-holy_bony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Mulligan': {
    name: 'Holy Mulligan',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-holy_mulligan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Blastocyst: {
    name: 'Blastocyst',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-blastocyst-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dingle: {
    name: 'Dingle',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-dingle-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Headless-Horseman': {
    name: 'Headless Horseman',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-headless_horseman-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Krampus: {
    name: 'Krampus',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-krampus-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Monstro-II': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-monstro_ii-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Fallen': {
    name: 'The Fallen',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-the_fallen-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Widow: {
    name: 'Widow',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-widow-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Isaac-': {
    name: 'Isaac!',
    type: 'monster',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-isaac-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Heart-': {
    name: 'Mom’s Heart!',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-moms_heart-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Blood-Lust': {
    name: 'Curse Of Blood Lust',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-curse_of_blood_lust-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Impulse': {
    name: 'Curse Of Impulse',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-curse_of_impulse-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Angel-Room': {
    name: 'Angel Room',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-angel_room-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Boss-Rush-': {
    name: 'Boss Rush!',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-boss_rush-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Head-Trauma': {
    name: 'Head Trauma',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-head_trauma-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Chest': {
    name: 'Holy Chest',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-holy_chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Spiked-Chest': {
    name: 'Spiked Chest',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-spiked_chest-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Troll-Bombs1': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'fsp2-troll_bombs-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Bethany: {
    name: 'Bethany',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-bethany-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Book-Of-Virtues': {
    name: 'Book Of Virtues',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-book_of_virtues-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Jacob-Esau': {
    name: 'Jacob & Esau',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-jacob_and_esau-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Sibling-Rivalry': {
    name: 'Sibling Rivalry',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-sibling_rivalry-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Broken': {
    name: 'The Broken',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-the_broken-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Spindown-Dice': {
    name: 'Spindown Dice',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-spindown_dice-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Dauntless': {
    name: 'The Dauntless',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_dauntless-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Hypercoagulation: {
    name: 'Hypercoagulation',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-hypercoagulation-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Hoarder': {
    name: 'The Hoarder',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_hoarder-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Bag-Of-Crafting': {
    name: 'Bag Of Crafting',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-bag_of_crafting-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Deceiver': {
    name: 'The Deceiver',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_deceiver-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Ceremonial-Blade': {
    name: 'Ceremonial Blade',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-ceremonial_blade-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Soiled': {
    name: 'The Soiled',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_soiled-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  IBS: {
    name: 'IBS',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-ibs-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Curdled': {
    name: 'The Curdled',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_curdled-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Sumptorium: {
    name: 'Sumptorium',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-sumptorium-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Savage': {
    name: 'The Savage',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_savage-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Berserk: {
    name: 'Berserk',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-berserk-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Benighted': {
    name: 'The Benighted',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_benighted-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Hemoptysis: {
    name: 'Hemoptysis',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-hemoptysis-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Enigma-amginE-ehT': {
    name: 'The Enigma/amginE ehT',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_enigma-308x420.png',
    back: 'r-the_enigma_back-308x420.png',
  },
  Flip: {
    name: 'Flip',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-flip-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Capricious': {
    name: 'The Capricious',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_capricious-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Glitch: {
    name: 'Glitch',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-glitch-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Baleful': {
    name: 'The Baleful',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-the_baleful-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Soulbond: {
    name: 'Soulbond',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-soulbond-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Harlot': {
    name: 'The Harlot',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_harlot-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Gello: {
    name: 'Gello',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-gello-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Miser': {
    name: 'The Miser',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_miser-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Keeper-s-Bargain': {
    name: 'Keeper’s Bargain',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-keepers_bargain-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Empty': {
    name: 'The Empty',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_empty-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Abyss: {
    name: 'Abyss',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-abyss-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Fettered': {
    name: 'The Fettered',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_fettered-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Dead-Weight': {
    name: 'Dead Weight',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-dead_weight-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Zealot': {
    name: 'The Zealot',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_zealot-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Lemegeton: {
    name: 'Lemegeton',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-lemegeton-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Deserter': {
    name: 'The Deserter',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_deserter-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Anima-Sola-The-Revenant': {
    name: 'Anima Sola/The Revenant',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'r-anima_sola-308x420.png',
    back: 'r-the_revenant-308x420.png',
  },
  'Flash-Isaac': {
    name: 'Flash Isaac',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-flash_isaac-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Classic-Roller': {
    name: 'Classic Roller',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-classic_roller-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Eden1: {
    name: 'Eden',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-eden_2-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Eden2: {
    name: 'Eden',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'r-eden-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Abel: {
    name: 'Abel',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-abel-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Alabaster-Box': {
    name: 'Alabaster Box',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-alabaster_box-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Backstabber: {
    name: 'Backstabber',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-backstabber-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Ball-Of-Bandages': {
    name: 'Ball Of Bandages',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-ball_of_bandages-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Blood-Puppy': {
    name: 'Blood Puppy',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-blood_puppy-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Bobby-Bomb': {
    name: 'Bobby Bomb',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-bobby_bomb-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Chocolate-Milk': {
    name: 'Chocolate Milk',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-chocolate_milk-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Consolation-Prize': {
    name: 'Consolation Prize',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-consolation_prize-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Damocles: {
    name: 'Damocles',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-damocles-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Fire-Mind': {
    name: 'Fire Mind',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-fire_mind-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Gnawed-Leaf': {
    name: 'Gnawed Leaf',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-gnawed_leaf-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Halo-Of-Flies': {
    name: 'Halo Of Flies',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-halo_of_flies-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Handicapped-Placard': {
    name: 'Handicapped Placard',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-handicapped_placard-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Judas-Shadow': {
    name: 'Judas’ Shadow',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-judas_shadow-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Keeper-s-Box': {
    name: 'Keeper’s Box',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-keepers_box-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Lil-Chest': {
    name: 'Lil Chest',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-lil_chest-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Lodestone: {
    name: 'Lodestone',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-lodestone-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Lunch: {
    name: 'Lunch',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-lunch-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mom-s-Bottle-of-Pills': {
    name: 'Mom’s Bottle of Pills',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-moms_bottle_of_pills-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Playdough-Cookie': {
    name: 'Playdough Cookie',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-playdough_cookie-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Punching-Bag': {
    name: 'Punching Bag',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-punching_bag-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Rock-Bottom': {
    name: 'Rock Bottom',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-rock_bottom-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Spelunker-Hat': {
    name: 'Spelunker Hat',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-spelunker_hat-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Trick-Penny': {
    name: 'Trick Penny',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-trick_penny-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Ultra-Flesh-Kid-': {
    name: 'Ultra Flesh Kid!',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-ultra_flesh_kid-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Auction-Gavel': {
    name: 'Auction Gavel',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-auction_gavel-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Birthright: {
    name: 'Birthright',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-birthright-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Book-Of-The-Dead': {
    name: 'Book Of The Dead',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-book_of_the_dead-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Eternal-D6': {
    name: 'Eternal D6',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-eternal_d6-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Experimental-Treatment': {
    name: 'Experimental Treatment',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-experimental_treatment-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Friendly-Ball': {
    name: 'Friendly Ball',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-friendly_ball-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Friendly-Sack': {
    name: 'Friendly Sack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-friendly_sack-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Hand-Me-Downs': {
    name: 'Hand Me Downs',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-hand_me_downs-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Jar-Of-Flies': {
    name: 'Jar Of Flies',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-jar_of_flies-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Keeper-s-Penny': {
    name: 'Keeper’s Penny',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-keepers_penny-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Magic-Skin': {
    name: 'Magic Skin',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-magic_skin-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Mama-Mega': {
    name: 'Mama Mega',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-mama_mega-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Marbles: {
    name: 'Marbles',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-marbles-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Member-Card': {
    name: 'Member Card',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-member_card-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'R-Key': {
    name: 'R Key',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-r_key-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Red-Key': {
    name: 'Red Key',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-red_key-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Clicker': {
    name: 'The Clicker',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_clicker-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Undefined: {
    name: 'Undefined',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-undefined-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'X-Ray-Vision': {
    name: 'X-Ray Vision',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-x_ray_vision-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Battery-Pack': {
    name: 'Battery Pack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-battery_pack-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Car-Battery': {
    name: 'Car Battery',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-car_battery-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Hallowed-Ground': {
    name: 'Hallowed Ground',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-hallowed_ground-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Keeper-s-Sack': {
    name: 'Keeper’s Sack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-keepers_sack-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Pageant-Boy': {
    name: 'Pageant Boy',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-pageant_boy-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Sacrificial-Dagger': {
    name: 'Sacrificial Dagger',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-sacrificial_dagger-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Jar': {
    name: 'The Jar',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_jar-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Cursed-Soul': {
    name: 'Cursed Soul',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-cursed_soul-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Fetal-Haunt': {
    name: 'Fetal Haunt',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'r-fetal_haunt-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'A-Lucky-Penny-': {
    name: 'A Lucky Penny!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-a_lucky_penny-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Sticky-Nickel': {
    name: 'Sticky Nickel',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-sticky_nickel-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Mega-Bomb-': {
    name: 'Mega Bomb!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-mega_bomb-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-7': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-pills-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Pills-8': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-pills_2-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Black-Heart': {
    name: 'Black Heart',
    type: 'loot',
    edition: {
      Requiem: 2,
    },
    front: 'r-black_heart-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Ace-Of-Diamonds': {
    name: 'Ace Of Diamonds',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-ace_of_diamonds-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Emergency-Contact': {
    name: 'Emergency Contact',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-emergency_contact-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Two-Of-Spades': {
    name: 'Two Of Spades',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-two_of_spades-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Algiz: {
    name: 'Algiz',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-algiz-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Berkano: {
    name: 'Berkano',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-berkano-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Hagalaz: {
    name: 'Hagalaz',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-hagalaz-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Bag-Lunch': {
    name: 'Bag Lunch',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-bag_lunch-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Broken-Remote': {
    name: 'Broken Remote',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-broken_remote-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Callus: {
    name: 'Callus',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-callus-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Golden-Trinket': {
    name: 'Golden Trinket',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-golden_trinket-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Lucky-Toe': {
    name: 'Lucky Toe',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-lucky_toe-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Rib-Of-Greed': {
    name: 'Rib Of Greed',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-rib_of_greed-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Tick: {
    name: 'Tick',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-tick-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Wishbone: {
    name: 'Wishbone',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-wishbone-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Dad-s-Note': {
    name: 'Dad’s Note',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-dads_note-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Key: {
    name: 'Key',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-key-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Magic-Marker': {
    name: 'Magic Marker',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'r-magic_marker-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Corny: {
    name: 'Corny',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-corny-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dogma: {
    name: 'Dogma',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-dogma-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Gutted-Fatty': {
    name: 'Gutted Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-gutted_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Mushroom: {
    name: 'Mushroom',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-mushroom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Null: {
    name: 'Null',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-null-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Peeping-Fatty': {
    name: 'Peeping Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-peeping_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Red-Ghost': {
    name: 'Red Ghost',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-red_ghost-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Whipper: {
    name: 'Whipper',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-whipper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Mulliboom': {
    name: 'Cursed Mulliboom',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-cursed_mulliboom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Dople': {
    name: 'Cursed Dople',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-cursed_dople-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Lil-Haunt': {
    name: 'Cursed Lil Haunt',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-cursed_lil_haunt-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Cursed-Mulligan': {
    name: 'Cursed Mulligan',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-cursed_mulligan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Brain': {
    name: 'Holy Brain',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-holy_brain-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Greedling': {
    name: 'Holy Greedling',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-holy_greedling-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Portal': {
    name: 'Holy Portal',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-holy_portal-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Holy-Psy-Horf': {
    name: 'Holy Psy Horf',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-holy_psy_horf-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Bony': {
    name: 'Charmed Bony',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_bony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Clotty': {
    name: 'Charmed Clotty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_clotty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Dip': {
    name: 'Charmed Dip',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_dip-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Fat-Bat': {
    name: 'Charmed Fat Bat',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_fat_bat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Fatty': {
    name: 'Charmed Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Globin': {
    name: 'Charmed Globin',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_globin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Greedling': {
    name: 'Charmed Greedling',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_greedling-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Keeper': {
    name: 'Charmed Keeper',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_keeper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Baby-Plum': {
    name: 'Baby Plum',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-baby_plum-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Brownie: {
    name: 'Brownie',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-brownie-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Charmed-Monstro': {
    name: 'Charmed Monstro',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-charmed_monstro-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Clog: {
    name: 'Clog',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-clog-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Hornfel: {
    name: 'Hornfel',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-hornfel-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mama-Gurdy': {
    name: 'Mama Gurdy',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-mama_gurdy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Rag-Mega': {
    name: 'Rag Mega',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-rag_mega-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Sisters-Vis': {
    name: 'Sisters Vis',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-sisters_vis-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Rainmaker': {
    name: 'The Rainmaker',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_rainmaker-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Scourge': {
    name: 'The Scourge',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-the_scourge-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Siren': {
    name: 'The Siren',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_siren-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Turdlings: {
    name: 'Turdlings',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-turdlings-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ultra-Greed-': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-ultra_greed-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Satan-': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-mega_satan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'MOTHER-': {
    name: 'MOTHER!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-mother-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-Empathy': {
    name: 'Curse Of Empathy',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-curse_of_empathy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-The-Hollow': {
    name: 'Curse Of The Hollow',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-curse_of_the_hollow-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-The-Hunted': {
    name: 'Curse Of The Hunted',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-curse_of_the_hunted-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-The-Soulless': {
    name: 'Curse Of The Soulless',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-curse_of_the_soulless-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Betrayal-': {
    name: 'Betrayal!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-betrayal-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Double-Treasure-': {
    name: 'Double Treasure!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-double_treasure-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dressing-Table': {
    name: 'Dressing Table',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-dressing_table-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Golden-Troll-Bomb-': {
    name: 'Golden Troll Bomb!',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-golden_troll_bomb-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Lust-For-Blood-': {
    name: 'Lust For Blood!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-lust_for_blood-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mother-s-Shadow-': {
    name: 'Mother’s Shadow!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-mothers_shadow-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Overflow-': {
    name: 'Overflow!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-overflow-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Pitfall-': {
    name: 'Pitfall!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-pitfall-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Tnt-Barrel': {
    name: 'Tnt Barrel',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-tnt_barrel-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Troll-Bombs2': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-troll_bombs-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'All-Hallows-Eve': {
    name: 'All Hallows’ Eve',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-all_hallows_eve-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Angelic-Intervention': {
    name: 'Angelic Intervention',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-angelic_intervention-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Battle-Royale-': {
    name: 'Battle Royale!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-battle_royale-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Battle-Royale-1': {
    name: 'Battle Royale!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-battle_royale_2-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Battle-Royale-2': {
    name: 'Battle Royale!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-battle_royale_3-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  Beggar: {
    name: 'Beggar',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-beggar-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Black-Champions': {
    name: 'Black Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-black_champions-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blessing-Of-Gluttony': {
    name: 'Blessing Of Gluttony',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blessing_of_gluttony-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blessing-Of-Greed': {
    name: 'Blessing Of Greed',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blessing_of_greed-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blessing-Of-Steam': {
    name: 'Blessing Of Steam',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blessing_of_steam-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blessing-Of-The-Inner-Eye': {
    name: 'Blessing Of The Inner Eye',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blessing_of_the_inner_eye-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blessing-Of-The-Sack': {
    name: 'Blessing Of The Sack',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blessing_of_the_sack-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blind-Rage': {
    name: 'Blind Rage',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blind_rage-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blood-Donation': {
    name: 'Blood Donation',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blood_donation-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blood-Lust-room': {
    name: 'Blood Lust',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blood_lust-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Blood-Money': {
    name: 'Blood Money',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-blood_money-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Bomb-Bum': {
    name: 'Bomb Bum',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-bomb_bum-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Bum-Bo-Is-Loose-': {
    name: 'Bum-Bo Is Loose!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-bum_bo_is_loose-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Butter-Fingers': {
    name: 'Butter Fingers',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-butter_fingers-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Challenge-Room': {
    name: 'Challenge Room',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-challenge_room-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Conjoined-Twin': {
    name: 'Conjoined Twin',
    type: 'room',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-conjoined_twin-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Devil-Beggar': {
    name: 'Devil Beggar',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-devil_beggar-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-': {
    name: 'Dice Room!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_1-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-1': {
    name: 'Dice Room!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_2-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-2': {
    name: 'Dice Room!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_3-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-3': {
    name: 'Dice Room!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_4-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-4': {
    name: 'Dice Room!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_5-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Dice-Room-5': {
    name: 'Dice Room!!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-dice_room_6-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Eden-s-Blessing-room': {
    name: 'Eden’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-edens_blessing-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  Equality: {
    name: 'Equality',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-equality-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Eternal-Chest': {
    name: 'Eternal Chest',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-eternal_chest-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Floor-Spikes': {
    name: 'Floor Spikes',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-floor_spikes-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Fortune-Teller': {
    name: 'Fortune Teller',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-fortune_teller-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Greed-Looms': {
    name: 'Greed Looms',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-greed_looms-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  Gus: {
    name: 'Gus',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-gus-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Haunted-': {
    name: 'Haunted!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-haunted-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Heavy-Is-The-Head': {
    name: 'Heavy Is The Head',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-heavy_is_the_head-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'I-Am-Error': {
    name: 'I Am Error',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-i_am_error-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Isaac-s-Blessing': {
    name: 'Isaac’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-isaacs_blessing-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Key-Master': {
    name: 'Key Master',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-key_master-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Laser-Eye-': {
    name: 'Laser Eye!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-laser_eye-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Maggy-s-Blessing': {
    name: 'Maggy’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-maggys_blessing-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Might-For-The-Meek': {
    name: 'Might For The Meek',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-might_for_the_meek-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Pity-For-The-Poor': {
    name: 'Pity For The Poor',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-pity_for_the_poor-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  Planetarium: {
    name: 'Planetarium',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-planetarium-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Red-Champions': {
    name: 'Red Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-red_champions-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Red-Vise': {
    name: 'Red Vise',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-red_vise-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Restock-Machine': {
    name: 'Restock Machine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-restock_machine-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Samson-s-Blessing': {
    name: 'Samson’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-samsons_blessing-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Shadow-Of-Famine': {
    name: 'Shadow Of Famine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-shadow_of_famine-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Shadow-Of-War': {
    name: 'Shadow Of War',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-shadow_of_war-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Shell-Game': {
    name: 'Shell Game',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-shell_game-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Slot-Machine': {
    name: 'Slot Machine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-slot_machine-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Social-Goals-': {
    name: 'Social Goals!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-social_goals-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Spider-Webs': {
    name: 'Spider Webs',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-spider_webs-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Splash-Damage': {
    name: 'Splash Damage',
    type: 'room',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'r-splash_damage-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Spoils-Of-War': {
    name: 'Spoils Of War',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-spoils_of_war-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Static-Shock': {
    name: 'Static Shock',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-static_shock-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Tax-For-The-Mighty': {
    name: 'Tax For The Mighty',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-tax_for_the_mighty-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'The-Mirror': {
    name: 'The Mirror',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_mirror-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'White-Champions': {
    name: 'White Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'r-white_champions-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  'Soul-Of-Envy': {
    name: 'Soul Of Envy',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'r-soul_of_envy-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Lust': {
    name: 'Soul Of Lust',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'r-soul_of_lust-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Pride': {
    name: 'Soul Of Pride',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'r-soul_of_pride-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Sloth': {
    name: 'Soul Of Sloth',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'r-soul_of_sloth-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'Soul-Of-Wrath': {
    name: 'Soul Of Wrath',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'r-soul_of_wrath-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  'The-Harbingers-The-Beast-': {
    name: 'The Harbingers/The Beast!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'r-the_harbingers-308x420.png',
    back: 'r-the_beast-308x420.png',
  },
  Ash: {
    name: 'Ash',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-ash-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Ball-Of-Tumors': {
    name: 'Ball Of Tumors',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-ball_of_tumors-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Steven-character': {
    name: 'Steven',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-steven-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Lil-Steven': {
    name: 'Lil Steven',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-lil_steven-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Bum-Bo-The-Weird': {
    name: 'Bum-Bo The Weird',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-bum_bo_the_weird-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Strange-Marble': {
    name: 'Strange Marble',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-strange_marble-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Edmund: {
    name: 'Edmund',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-edmund-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Real-Left-Hand': {
    name: 'The Real Left Hand',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_real_left_hand-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Abe: {
    name: 'Abe',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-abe-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Possession: {
    name: 'Possession',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-possession-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Baba: {
    name: 'Baba',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-baba-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Is-You': {
    name: 'Is You',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-is_you-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Blind-Johnny': {
    name: 'Blind Johnny',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-blind_johnny-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Johnny-s-Knives': {
    name: 'Johnny’s Knives',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-johnnys_knives-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Blue-Archer': {
    name: 'Blue Archer',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-blue_archer-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Bow-And-Arrow': {
    name: 'Bow And Arrow',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-bow_and_arrow-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Boyfriend: {
    name: 'Boyfriend',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-boyfriend-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Girlfriend: {
    name: 'Girlfriend',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-girlfriend-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Captain-Viridian': {
    name: 'Captain Viridian',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-captain_viridian-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Gravity: {
    name: 'Gravity',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-gravity-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Crewmate: {
    name: 'Crewmate',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-crewmate-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Emergency-Meeting-': {
    name: 'Emergency Meeting!',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-emergency_meeting-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Guy-Spelunky': {
    name: 'Guy Spelunky',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-guy_spelunky-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Spelunking-Pack': {
    name: 'Spelunking Pack',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-spelunking_pack-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Johnny: {
    name: 'Johnny',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-johnny-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Football: {
    name: 'Football',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-football-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Pink-Knight': {
    name: 'Pink Knight',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-pink_knight-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Lollypop: {
    name: 'Lollypop',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-lollypop-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Psycho-Goreman': {
    name: 'Psycho Goreman',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-psycho_goreman-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Hunky-Boys': {
    name: 'Hunky Boys',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-hunky_boys-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Quote: {
    name: 'Quote',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-quote-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Polar-Star-Booster-V2-0': {
    name: 'Polar Star/Booster V2.0',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-polar_star-308x420.png',
    back: 'rwz-booster_v20-308x420.png',
  },
  'Salad-Fingers': {
    name: 'Salad Fingers',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-salad_fingers-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Rusty-Spoons': {
    name: 'Rusty Spoons',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-rusty_spoons-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Knight': {
    name: 'The Knight',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_knight-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Focus: {
    name: 'Focus',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-focus-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'The-Silent': {
    name: 'The Silent',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_silent-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Ring-Of-The-Snake': {
    name: 'Ring Of The Snake',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-ring_of_the_snake-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Yung-Venuz': {
    name: 'Yung Venuz',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-yung_venuz-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Pop-Pop-': {
    name: 'Pop Pop!',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-pop_pop-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  Aubrey: {
    name: 'Aubrey',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-aubrey-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Birthday-Cake': {
    name: 'Birthday Cake',
    type: 'treasure',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-birthday_cake-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Diogenes-Pot': {
    name: 'Diogenes’ Pot',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-diogenes_pot-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  George: {
    name: 'George',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-george-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Hitops: {
    name: 'Hitops',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-hitops-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Newgrounds-Tank': {
    name: 'Newgrounds Tank',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-newgrounds_tank-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Tony: {
    name: 'Tony',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-tony-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Boxing-Glove': {
    name: 'Boxing Glove',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-boxing_glove-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Doorway: {
    name: 'Doorway',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-doorway-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Gun-That-Can-Kill-The-Past': {
    name: 'Gun That Can Kill The Past',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-gun_that_can_kill_the_past-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Water-Bottle': {
    name: 'Water Bottle',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-water_bottle-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Ser-Junkan': {
    name: 'Ser Junkan',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-ser_junkan-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Spewer: {
    name: 'Spewer',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-spewer-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'The-Crowdfunder': {
    name: 'The Crowdfunder',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_crowdfunder-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Demon-Form': {
    name: 'Demon Form',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-demon_form-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Fiend-Fire': {
    name: 'Fiend Fire',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-fiend_fire-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Loot-Card': {
    name: 'Loot Card',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-loot_card-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Bible-Thump-': {
    name: 'Bible Thump!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-bible_thump-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Blanks: {
    name: 'Blanks',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-blanks-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Cheep-Cheep-Cheep-': {
    name: 'Cheep Cheep Cheep!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-cheep_cheep_cheep-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Chunk-Of-Amber': {
    name: 'Chunk Of Amber',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-chunk_of_amber-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Cow-On-A-Trash-Farm': {
    name: 'Cow On A Trash Farm',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-cow_on_a_trash_farm-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Greed-Butt-': {
    name: 'Greed Butt!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-greed_butt-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Jester: {
    name: 'Jester',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-jester-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Murder-': {
    name: 'Murder!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-murder-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Witch: {
    name: 'Witch',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-witch-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'A-Dead-Horse': {
    name: 'A Dead Horse',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-a_dead_horse-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Balrog: {
    name: 'Balrog',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-balrog-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Hubert-Cumberdale': {
    name: 'Hubert Cumberdale',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-hubert_cumberdale-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Javon-': {
    name: 'Javon!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-javon-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Keke-Is-You': {
    name: 'Keke Is You',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-keke_is_you-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Leatherneck: {
    name: 'Leatherneck',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-leatherneck-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Peeper: {
    name: 'Peeper',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-peeper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Shopkeeper-': {
    name: 'Shopkeeper!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-shopkeeper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Impostor-': {
    name: 'The Impostor!',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_impostor-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Purple-Shirted-Eye-Stabber': {
    name: 'The Purple-Shirted Eye Stabber',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_purple_shirted_eye_stabber-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Zombie-Jesus': {
    name: 'Zombie Jesus',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-zombie_jesus-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Death-Trapper': {
    name: 'Death Trapper',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-death_trapper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Exp-sito': {
    name: 'Expósito',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-exposito-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Grandparent: {
    name: 'Grandparent',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-grandparent-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Lil-Hunter': {
    name: 'Lil Hunter',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-lil_hunter-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Melqu-ades': {
    name: 'Melquíades',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-melquiades-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Butcher': {
    name: 'The Butcher',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_butcher-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Collector': {
    name: 'The Collector',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_collector-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Gorm': {
    name: 'The Gorm',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_gorm-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Radiance': {
    name: 'The Radiance',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_radiance-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Time-Eater': {
    name: 'Time Eater',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-time_eater-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ballos-': {
    name: 'Ballos!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-ballos-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Curse-Of-The-Suspicious': {
    name: 'Curse Of The Suspicious',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-curse_of_the_suspicious-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Brea-In-Distress': {
    name: 'Brea In Distress',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-brea_in_distress-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Don-t-Starve-': {
    name: 'Don’t Starve!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-dont_starve-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Fuck-Bloat': {
    name: 'Fuck Bloat',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-fuck_bloat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Golden-Idol': {
    name: 'Golden Idol',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-golden_idol-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Grubfather: {
    name: 'Grubfather',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-grubfather-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Nightmare-Tick': {
    name: 'Nightmare Tick',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-nightmare_tick-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'QWOP-': {
    name: 'QWOP!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-qwop-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Trial-By-Trolley-': {
    name: 'Trial By Trolley!',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-trial_by_trolley-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Isaac-Of-Isaac-Re-Isaac': {
    name: 'The Isaac Of Isaac: Re-Isaac',
    type: 'room',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-the_isaac_of_isaac_re_isaac-420x308.png',
    back: 'RoomCardBack-420x308.png',
  },
  Strawberry: {
    name: 'Strawberry',
    type: 'bonus',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'rwz-strawberry-308x420.png',
    back: 'BonusSoulCardBack-308x420.png',
  },
  Isaac1: {
    name: 'Isaac',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-isaac-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Judas1: {
    name: 'Judas',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-judas-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Blue-Baby1': {
    name: 'Blue Baby',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-blue_baby-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Azazel1: {
    name: 'Azazel',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-azazel-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Lost1': {
    name: 'The Lost',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_lost-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Lilith1: {
    name: 'Lilith',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-lilith-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Keeper1': {
    name: 'The Keeper',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_keeper-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Forgotten1': {
    name: 'The Forgotten',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_forgotten-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Guppy1: {
    name: 'Guppy',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-guppy-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Capricious1': {
    name: 'The Capricious',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_capricious-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Savage1': {
    name: 'The Savage',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_savage-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Harlot1': {
    name: 'The Harlot',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_harlot-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Eden3: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-eden-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Eden4: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-eden_2-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Brimstone1: {
    name: 'Brimstone',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-brimstone-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Epic-Fetus-': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-epic_fetus-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Godhead1: {
    name: 'Godhead',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-godhead-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Guppy-s-Paw1': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-guppys_paw-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'XIII-Death1': {
    name: 'XIII. Death',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-xiii_death-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'XVII-The-Stars1': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-xvii_the_stars-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Lost-Soul1': {
    name: 'Lost Soul',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-lost_soul-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  Begotten1: {
    name: 'Begotten',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-begotten-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Big-Bony': {
    name: 'Big Bony',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-big_bony-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Clotty1: {
    name: 'Clotty',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-clotty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Delirium1: {
    name: 'Delirium',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-delirium-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gaper1: {
    name: 'Gaper',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-gaper-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Hand1': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-moms_hand-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Mulliboom1: {
    name: 'Mulliboom',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mulliboom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Mulligan1: {
    name: 'Mulligan',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mulligan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Twitchy: {
    name: 'Twitchy',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-twitchy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Brownie1: {
    name: 'Brownie',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-brownie-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Daddy-Long-Legs1': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-daddy_long_legs-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dark-One1': {
    name: 'Dark One',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-dark_one-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dingle1: {
    name: 'Dingle',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-dingle-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Famine1: {
    name: 'Famine',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-famine-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Fistula1: {
    name: 'Fistula',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-fistula-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Gurdy1: {
    name: 'Gurdy',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-gurdy-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Hornfel1: {
    name: 'Hornfel',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-hornfel-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Larry-Jr-1': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-larry_jr-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Little-Horn1': {
    name: 'Little Horn',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-little_horn-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Fatty1': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mega_fatty-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Satan-1': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mega_satan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Min-Min': {
    name: 'Min Min',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-min_min-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Monstro1: {
    name: 'Monstro',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-monstro-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Monstro-II1': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-monstro_ii-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pestilence1: {
    name: 'Pestilence',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-pestilence-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Pin1: {
    name: 'Pin',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-pin-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Polycephalus1: {
    name: 'Polycephalus',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-polycephalus-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Rag-Man1': {
    name: 'Rag Man',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-rag_man-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Rag-Mega1': {
    name: 'Rag Mega',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-rag_mega-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Beast': {
    name: 'The Beast',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_beast-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Bloat1': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_bloat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Duke-Of-Flies1': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_duke_of_flies-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Lamb1': {
    name: 'The Lamb',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-the_lamb-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ultra-Greed-1': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-ultra_greed-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'It-Lives-': {
    name: 'It Lives!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-it_lives-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mega-Satan-2': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mega_satan_2-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-1': {
    name: 'Mom!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-mom-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Satan-1': {
    name: 'Satan!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-satan-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ambush-1': {
    name: 'Ambush!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-ambush-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Devil-Deal1': {
    name: 'Devil Deal',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-devil_deal-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Secret-Room-1': {
    name: 'Secret Room!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-secret_room-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Shop-Upgrade-1': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'aa-shop_upgrade-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dead-Eye': {
    name: 'Dead Eye',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: 't-dead_eye-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Marked: {
    name: 'Marked',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: 't-marked-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Epic-Fetus-1': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: 't-epic_fetus-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Lil-Gish': {
    name: 'Lil’ Gish',
    type: 'treasure',
    edition: {
      Gish: 1,
    },
    front: 'gi-lil_gish-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  Gish: {
    name: 'Gish',
    type: 'monster',
    edition: {
      Gish: 1,
    },
    front: 'gi-gish-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Tapeworm: {
    name: 'Tapeworm',
    type: 'character',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-tapeworm-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'Pink-Proglottid': {
    name: 'Pink Proglottid',
    type: 'eternal',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-pink_proglottid-308x420.png',
    back: 'EternalCardBack-308x420.png',
  },
  'Rainbow-Tapeworm': {
    name: 'Rainbow Tapeworm',
    type: 'loot',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-rainbow_tapeworm-308x420.png',
    back: 'LootCardBack-308x420.png',
  },
  'Black-Proglottid': {
    name: 'Black Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-black_proglottid-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'White-Proglottid': {
    name: 'White Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-white_proglottid-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Red-Proglottid': {
    name: 'Red Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-red_proglottid-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
  'Tapeworm-monster': {
    name: 'Tapeworm',
    type: 'monster',
    edition: {
      Tapeworm: 1,
    },
    front: 'tw-tapeworm_monster-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Dick-Knot-': {
    name: 'Dick Knot!',
    type: 'monster',
    edition: {
      'Dick Knots': 1,
    },
    front: 'dk-dick_knot-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  '-Christian-Broadcasts-': {
    name: '“Christian Broadcasts”',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'box-christian_broadcasts-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Dogma1: {
    name: 'Dogma',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'box-dogma-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'TV-Static': {
    name: 'TV Static',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'box-tv_static-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'The-Bloat2': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'p-the_bloat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Eden5: {
    name: 'Eden',
    type: 'character',
    edition: {
      Promo: 1,
    },
    front: 'sp-eden-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  Eden6: {
    name: 'Eden',
    type: 'character',
    edition: {
      Promo: 1,
    },
    front: 'psp-eden-308x420.png',
    back: 'CharacterCardBack-308x420.png',
  },
  'The-Bloat3': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'psp-the_bloat-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'It-Lives-1': {
    name: 'It Lives!',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'sp-it_lives-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Ultra-Pride': {
    name: 'Ultra Pride',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'psp-ultra_pride-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Corrupted-Data': {
    name: 'Corrupted Data',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'psp-corrupted_data-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  Henry: {
    name: 'Henry',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'sp-henry-308x420.png',
    back: 'MonsterCardBack-308x420.png',
  },
  'Mom-s-Ring': {
    name: 'Mom’s Ring',
    type: 'treasure',
    edition: {
      Promo: 1,
    },
    front: 'p-moms_ring-308x420.png',
    back: 'TreasureCardBack-308x420.png',
  },
};

module.exports = { editions, cards };
