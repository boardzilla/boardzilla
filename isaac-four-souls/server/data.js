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
    edition: { 'Base Game V2': 1 },
    front: 'b2-isaac-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-D6'
  },
  'The-D6': {
    name: 'The D6',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d6-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-D6': {
    name: 'The D6',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d6-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Maggy: {
    name: 'Maggy',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-maggy-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Yum-Heart'
  },
  'Yum-Heart': {
    name: 'Yum Heart',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-yum_heart-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Cain: {
    name: 'Cain',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cain-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Sleight-Of-Hand'
  },
  'Sleight-Of-Hand': {
    name: 'Sleight Of Hand',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-sleight_of_hand-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Judas: {
    name: 'Judas',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-judas-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Belial'
  },
  'Book-Of-Belial': {
    name: 'Book Of Belial',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-book_of_belial-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Book-Of-Belial': {
    name: 'Book Of Belial',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-book_of_belial-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Blue-Baby': {
    name: 'Blue Baby',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-blue_baby-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Forever-Alone'
  },
  'Forever-Alone': {
    name: 'Forever Alone',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-forever_alone-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Forever-Alone': {
    name: 'Forever Alone',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-forever_alone-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Eve: {
    name: 'Eve',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-eve-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-Curse'
  },
  'The-Curse': {
    name: 'The Curse',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_curse-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Samson: {
    name: 'Samson',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-samson-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Blood-Lust'
  },
  'Blood-Lust': {
    name: 'Blood Lust',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-blood_lust-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Lazarus: {
    name: 'Lazarus',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lazarus-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lazarus-Rags'
  },
  'Lazarus-Rags': {
    name: 'Lazarus’ Rags',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lazarus_rags-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Lilith: {
    name: 'Lilith',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lilith-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Incubus'
  },
  Incubus: {
    name: 'Incubus',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-incubus-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Incubus: {
    name: 'Incubus',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-incubus-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Forgotten': {
    name: 'The Forgotten',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_forgotten-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-Bone'
  },
  'The-Bone': {
    name: 'The Bone',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_bone-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Bone': {
    name: 'The Bone',
    type: 'eternal',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_bone-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Eden: {
    name: 'Eden',
    type: 'character',
    edition: { 'Base Game V2': 1 },
    front: 'b2-eden-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  'Belly-Button': {
    name: 'Belly Button',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-belly_button-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Bob-s-Brain': {
    name: 'Bob’s Brain',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-bobs_brain-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Breakfast: {
    name: 'Breakfast',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-breakfast-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Brimstone: {
    name: 'Brimstone',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-brimstone-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Bum-Bo-': {
    name: 'Bum-Bo!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-bum_bo-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Cambion-Conception': {
    name: 'Cambion Conception',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cambion_conception-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Champion-Belt': {
    name: 'Champion Belt',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-champion_belt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Charged-Baby': {
    name: 'Charged Baby',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-charged_baby-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Cheese-Grater': {
    name: 'Cheese Grater',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cheese_grater-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Curse-Of-The-Tower': {
    name: 'Curse Of The Tower',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_the_tower-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Dad-s-Lost-Coin': {
    name: 'Dad’s Lost Coin',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dads_lost_coin-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Dark-Bum': {
    name: 'Dark Bum',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dark_bum-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Dead-Bird': {
    name: 'Dead Bird',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dead_bird-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Dinner: {
    name: 'Dinner',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dinner-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Dry-Baby': {
    name: 'Dry Baby',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dry_baby-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Eden-s-Blessing': {
    name: 'Eden’s Blessing',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-edens_blessing-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Empty-Vessel': {
    name: 'Empty Vessel',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-empty_vessel-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Eye-Of-Greed': {
    name: 'Eye Of Greed',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-eye_of_greed-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Fanny-Pack': {
    name: 'Fanny Pack',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-fanny_pack-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Finger-': {
    name: 'Finger!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-finger-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Goat-Head': {
    name: 'Goat Head',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-goat_head-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Greed-s-Gullet': {
    name: 'Greed’s Gullet',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-greeds_gullet-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Collar': {
    name: 'Guppy’s Collar',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-guppys_collar-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Ipecac: {
    name: 'Ipecac',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ipecac-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Meat-': {
    name: 'Meat!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-meat-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Box': {
    name: 'Mom’s Box',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_box-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Coin-Purse': {
    name: 'Mom’s Coin Purse',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_coin_purse-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Purse': {
    name: 'Mom’s Purse',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_purse-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Razor': {
    name: 'Mom’s Razor',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_razor-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Monstro-s-Tooth': {
    name: 'Monstro’s Tooth',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-monstros_tooth-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Polydactyly: {
    name: 'Polydactyly',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-polydactyly-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Restock: {
    name: 'Restock',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-restock-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Sacred-Heart': {
    name: 'Sacred Heart',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-sacred_heart-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Shadow: {
    name: 'Shadow',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-shadow-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Shiny-Rock': {
    name: 'Shiny Rock',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-shiny_rock-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Spider-Mod': {
    name: 'Spider Mod',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-spider_mod-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Starter-Deck': {
    name: 'Starter Deck',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-starter_deck-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Steamy-Sale-': {
    name: 'Steamy Sale!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-steamy_sale-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Suicide-King': {
    name: 'Suicide King',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-suicide_king-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Synthoil: {
    name: 'Synthoil',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-synthoil-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Tarot-Cloth': {
    name: 'Tarot Cloth',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-tarot_cloth-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Blue-Map': {
    name: 'The Blue Map',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_blue_map-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Chest': {
    name: 'The Chest',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_chest-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Compass': {
    name: 'The Compass',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_compass-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-D10': {
    name: 'The D10',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d10-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Dead-Cat': {
    name: 'The Dead Cat',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_dead_cat-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Habit': {
    name: 'The Habit',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_habit-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Map': {
    name: 'The Map',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_map-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Midas-Touch': {
    name: 'The Midas Touch',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_midas_touch-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Polaroid': {
    name: 'The Polaroid',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_polaroid-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Relic': {
    name: 'The Relic',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_relic-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'There-s-Options': {
    name: 'There’s Options',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-theres_options-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Trinity-Shield': {
    name: 'Trinity Shield',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-trinity_shield-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Blank-Card': {
    name: 'Blank Card',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-blank_card-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Book-Of-Sin': {
    name: 'Book Of Sin',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-book_of_sin-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Boomerang: {
    name: 'Boomerang',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-boomerang-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Box-': {
    name: 'Box!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-box-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Bum-Friend': {
    name: 'Bum Friend',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-bum_friend-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Chaos: {
    name: 'Chaos',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-chaos-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Chaos-Card': {
    name: 'Chaos Card',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-chaos_card-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Compost: {
    name: 'Compost',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-compost-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Crystal-Ball': {
    name: 'Crystal Ball',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-crystal_ball-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Decoy: {
    name: 'Decoy',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-decoy-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Diplopia: {
    name: 'Diplopia',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-diplopia-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Flush-': {
    name: 'Flush!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-flush-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Glass-Cannon': {
    name: 'Glass Cannon',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-glass_cannon-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Godhead: {
    name: 'Godhead',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-godhead-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Head': {
    name: 'Guppy’s Head',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-guppys_head-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Paw': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-guppys_paw-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Host-Hat': {
    name: 'Host Hat',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-host_hat-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Jawbone: {
    name: 'Jawbone',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-jawbone-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Lucky-Foot': {
    name: 'Lucky Foot',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lucky_foot-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mini-Mush': {
    name: 'Mini Mush',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mini_mush-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Modeling-Clay': {
    name: 'Modeling Clay',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-modeling_clay-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Bra': {
    name: 'Mom’s Bra',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_bra-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Shovel': {
    name: 'Mom’s Shovel',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_shovel-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Monster-Manual': {
    name: 'Monster Manual',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-monster_manual-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mr-Boom': {
    name: 'Mr. Boom',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mr_boom-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mystery-Sack': {
    name: 'Mystery Sack',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mystery_sack-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'No-': {
    name: 'No!',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-no-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Pandora-s-Box': {
    name: 'Pandora’s Box',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pandoras_box-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Placebo: {
    name: 'Placebo',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-placebo-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Potato-Peeler': {
    name: 'Potato Peeler',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-potato_peeler-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Razor-Blade': {
    name: 'Razor Blade',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-razor_blade-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Remote-Detonator': {
    name: 'Remote Detonator',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-remote_detonator-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Sack-Head': {
    name: 'Sack Head',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-sack_head-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Sack-Of-Pennies': {
    name: 'Sack Of Pennies',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-sack_of_pennies-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Spoon-Bender': {
    name: 'Spoon Bender',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-spoon_bender-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Tech-X': {
    name: 'Tech X',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-tech_x-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Battery': {
    name: 'The Battery',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_battery-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-D100': {
    name: 'The D100',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d100-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-D20': {
    name: 'The D20',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d20-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-D4': {
    name: 'The D4',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_d4-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Shovel': {
    name: 'The Shovel',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_shovel-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Two-Of-Clubs': {
    name: 'Two Of Clubs',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-two_of_clubs-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Battery-Bum': {
    name: 'Battery Bum',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-battery_bum-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Contract-From-Below': {
    name: 'Contract From Below',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-contract_from_below-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Donation-Machine': {
    name: 'Donation Machine',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-donation_machine-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Golden-Razor-Blade': {
    name: 'Golden Razor Blade',
    type: 'treasure',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-golden_razor_blade-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Pay-To-Play': {
    name: 'Pay To Play',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pay_to_play-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Portable-Slot-Machine': {
    name: 'Portable Slot Machine',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-portable_slot_machine-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Smelter: {
    name: 'Smelter',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-smelter-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Poop': {
    name: 'The Poop',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_poop-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Baby-Haunt': {
    name: 'Baby Haunt',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-baby_haunt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Daddy-Haunt': {
    name: 'Daddy Haunt',
    type: 'treasure',
    edition: { 'Base Game V2': 1 },
    front: 'b2-daddy_haunt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'A-Penny-': {
    name: 'A Penny!',
    type: 'loot',
    edition: { 'Base Game V2': 6, 'Gold Box V2': 2, 'Four Souls+ V2': 3 },
    front: 'b2-a_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  '2-Cents-': {
    name: '2 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 12,
      'Gold Box V2': 2,
      'Four Souls+ V2': 3,
      Requiem: 5
    },
    front: 'b2-two_cents_10-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  '3-Cents-': {
    name: '3 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 15,
      'Gold Box V2': 2,
      'Four Souls+ V2': 4,
      Requiem: 6
    },
    front: 'b2-three_cents_10-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  '4-Cents-': {
    name: '4 Cents!',
    type: 'loot',
    edition: {
      'Base Game V2': 9,
      'Gold Box V2': 2,
      'Four Souls+ V2': 2,
      Requiem: 4
    },
    front: 'b2-four_cents_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'A-Nickel-': {
    name: 'A Nickel!',
    type: 'loot',
    edition: { 'Base Game V2': 5, 'Four Souls+ V2': 1, Requiem: 1 },
    front: 'b2-a_nickel_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'A-Dime-': {
    name: 'A Dime!!',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-a_dime-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Lil-Battery': {
    name: 'Lil Battery',
    type: 'loot',
    edition: { 'Base Game V2': 4 },
    front: 'b2-lil_battery_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Mega-Battery': {
    name: 'Mega Battery',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mega_battery-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Bomb-': {
    name: 'Bomb!',
    type: 'loot',
    edition: {
      'Base Game V2': 4,
      'Gold Box V2': 1,
      'Four Souls+ V2': 1,
      Requiem: 3
    },
    front: 'b2-bomb_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Gold-Bomb-': {
    name: 'Gold Bomb!!',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gold_bomb-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Butter-Bean-': {
    name: 'Butter Bean!',
    type: 'loot',
    edition: { 'Base Game V2': 3, 'Four Souls+ V2': 1, Requiem: 3 },
    front: 'b2-butter_bean_3-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Dice-Shard': {
    name: 'Dice Shard',
    type: 'loot',
    edition: { 'Base Game V2': 3, 'Four Souls+ V2': 1, Requiem: 3 },
    front: 'b2-dice_shard-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pills_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-1': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pills_3-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-2': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pills-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Soul-Heart': {
    name: 'Soul Heart',
    type: 'loot',
    edition: { 'Base Game V2': 2, 'Gold Box V2': 1, Requiem: 2 },
    front: 'b2-soul_heart-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'O-The-Fool': {
    name: 'O. The Fool',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-o_the_fool-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'I-The-Magician': {
    name: 'I. The Magician',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-i_the_magician-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'II-The-High-Priestess': {
    name: 'II. The High Priestess',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ii_the_high_priestess-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'III-The-Empress': {
    name: 'III. The Empress',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-iii_the_empress-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'IV-The-Emperor': {
    name: 'IV. The Emperor',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-iv_the_emperor-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'V-The-Hierophant': {
    name: 'V. The Hierophant',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-v_the_hierophant-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'VI-The-Lovers': {
    name: 'VI. The Lovers',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-vi_the_lovers-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'VII-The-Chariot': {
    name: 'VII. The Chariot',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-vii_the_chariot-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'VIII-Justice': {
    name: 'VIII. Justice',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-viii_justice-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'IX-The-Hermit': {
    name: 'IX. The Hermit',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ix_the_hermit-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'X-Wheel-Of-Fortune': {
    name: 'X. Wheel Of Fortune',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-x_wheel_of_fortune-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XI-Strength': {
    name: 'XI. Strength',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xi_strength-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XII-The-Hanged-Man': {
    name: 'XII. The Hanged Man',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xii_the_hanged_man-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XIII-Death': {
    name: 'XIII. Death',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xiii_death-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XIV-Temperance': {
    name: 'XIV. Temperance',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xiv_temperance-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XV-The-Devil': {
    name: 'XV. The Devil',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xv_the_devil-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XVI-The-Tower': {
    name: 'XVI. The Tower',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xvi_the_tower-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XVII-The-Stars': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xvii_the_stars-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XVIII-The-Moon': {
    name: 'XVIII. The Moon',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xviii_the_moon-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XIX-The-Sun': {
    name: 'XIX. The Sun',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xix_the_sun-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XX-Judgement': {
    name: 'XX. Judgement',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xx_judgement-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XXI-The-World': {
    name: 'XXI. The World',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xxi_the_world-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Dagaz: {
    name: 'Dagaz',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dagaz-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Ehwaz: {
    name: 'Ehwaz',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ehwaz-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Blank-Rune': {
    name: 'Blank Rune',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-blank_rune-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Bloody-Penny': {
    name: 'Bloody Penny',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-bloody_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Broken-Ankh': {
    name: 'Broken Ankh',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-broken_ankh-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Cain-s-Eye': {
    name: 'Cain’s Eye',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cains_eye-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Counterfeit-Penny': {
    name: 'Counterfeit Penny',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-counterfeit_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Curved-Horn': {
    name: 'Curved Horn',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curved_horn-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Golden-Horseshoe': {
    name: 'Golden Horseshoe',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-golden_horseshoe-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Guppy-s-Hairball': {
    name: 'Guppy’s Hairball',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-guppys_hairball-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Purple-Heart': {
    name: 'Purple Heart',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-purple_heart-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Swallowed-Penny': {
    name: 'Swallowed Penny',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-swallowed_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Lost-Soul': {
    name: 'Lost Soul',
    type: 'loot',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lost_soul-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Big-Spider': {
    name: 'Big Spider',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-big_spider-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Black-Bony': {
    name: 'Black Bony',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-black_bony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Boom-Fly': {
    name: 'Boom Fly',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-boom_fly-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Clotty: {
    name: 'Clotty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-clotty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cod-Worm': {
    name: 'Cod Worm',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cod_worm-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Conjoined-Fatty': {
    name: 'Conjoined Fatty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-conjoined_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dank-Globin': {
    name: 'Dank Globin',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dank_globin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Delirium: {
    name: 'Delirium',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-delirium-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dinga: {
    name: 'Dinga',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dinga-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dip: {
    name: 'Dip',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dip-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dople: {
    name: 'Dople',
    type: 'monster',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-dople-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Evil-Twin': {
    name: 'Evil Twin',
    type: 'monster',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-evil_twin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Fat-Bat': {
    name: 'Fat Bat',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-fat_bat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Fatty: {
    name: 'Fatty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Fly: {
    name: 'Fly',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-fly-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Greedling: {
    name: 'Greedling',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-greedling-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Hanger: {
    name: 'Hanger',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-hanger-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Hopper: {
    name: 'Hopper',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-hopper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Horf: {
    name: 'Horf',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-horf-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Keeper-Head': {
    name: 'Keeper Head',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-keeper_head-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Leaper: {
    name: 'Leaper',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-leaper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Leech: {
    name: 'Leech',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-leech-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Dead-Hand': {
    name: 'Mom’s Dead Hand',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_dead_hand-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Eye': {
    name: 'Mom’s Eye',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_eye-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Hand': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-moms_hand-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Mulliboom: {
    name: 'Mulliboom',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mulliboom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Mulligan: {
    name: 'Mulligan',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mulligan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Pale-Fatty': {
    name: 'Pale Fatty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pale_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pooter: {
    name: 'Pooter',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pooter-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Portal: {
    name: 'Portal',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-portal-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Psy-Horf': {
    name: 'Psy Horf',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-psy_horf-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Rage-Creep': {
    name: 'Rage Creep',
    type: 'monster',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-rage_creep-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Red-Host': {
    name: 'Red Host',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-red_host-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ring-Of-Flies': {
    name: 'Ring Of Flies',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ring_of_flies-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Spider: {
    name: 'Spider',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-spider-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Squirt: {
    name: 'Squirt',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-squirt-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Stoney: {
    name: 'Stoney',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-stoney-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Swarm-Of-Flies': {
    name: 'Swarm Of Flies',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-swarm_of_flies-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Trite: {
    name: 'Trite',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-trite-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Wizoob: {
    name: 'Wizoob',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-wizoob-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Fatty': {
    name: 'Cursed Fatty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Gaper': {
    name: 'Cursed Gaper',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_gaper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Horf': {
    name: 'Cursed Horf',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_horf-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Keeper-Head': {
    name: 'Cursed Keeper Head',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_keeper_head-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Mom-s-Hand': {
    name: 'Cursed Mom’s Hand',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_moms_hand-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Psy-Horf': {
    name: 'Cursed Psy Horf',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_psy_horf-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Dinga': {
    name: 'Holy Dinga',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-holy_dinga-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Dip': {
    name: 'Holy Dip',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-holy_dip-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Keeper-Head': {
    name: 'Holy Keeper Head',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-holy_keeper_head-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Mom-s-Eye': {
    name: 'Holy Mom’s Eye',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-holy_moms_eye-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Squirt': {
    name: 'Holy Squirt',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-holy_squirt-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Carrion-Queen': {
    name: 'Carrion Queen',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-carrion_queen-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Chub: {
    name: 'Chub',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-chub-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Conquest: {
    name: 'Conquest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-conquest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Daddy-Long-Legs': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-daddy_long_legs-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dark-One': {
    name: 'Dark One',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dark_one-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Death: {
    name: 'Death',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-death-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Envy: {
    name: 'Envy',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-envy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Famine: {
    name: 'Famine',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-famine-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gemini: {
    name: 'Gemini',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gemini-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gluttony: {
    name: 'Gluttony',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gluttony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Greed: {
    name: 'Greed',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-greed-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gurdy: {
    name: 'Gurdy',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gurdy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Gurdy-Jr-': {
    name: 'Gurdy Jr.',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gurdy_jr-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Larry-Jr-': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-larry_jr-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Little-Horn': {
    name: 'Little Horn',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-little_horn-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Lust: {
    name: 'Lust',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-lust-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mask-Of-Infamy': {
    name: 'Mask Of Infamy',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mask_of_infamy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Fatty': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mega_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Monstro: {
    name: 'Monstro',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-monstro-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Peep: {
    name: 'Peep',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-peep-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pestilence: {
    name: 'Pestilence',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pestilence-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pin: {
    name: 'Pin',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pride: {
    name: 'Pride',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-pride-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Rag-Man': {
    name: 'Rag Man',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-rag_man-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Scolex: {
    name: 'Scolex',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-scolex-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Sloth: {
    name: 'Sloth',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-sloth-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Bloat': {
    name: 'The Bloat',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_bloat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Duke-Of-Flies': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_duke_of_flies-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Haunt': {
    name: 'The Haunt',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_haunt-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Lamb': {
    name: 'The Lamb',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-the_lamb-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  War: {
    name: 'War',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-war-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Wrath: {
    name: 'Wrath',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-wrath-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-': {
    name: 'Mom!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Satan-': {
    name: 'Satan!',
    type: 'monster',
    p3: true,
    edition: { 'Base Game V2': 1 },
    front: 'b2-satan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Amnesia': {
    name: 'Curse Of Amnesia',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_amnesia-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Greed': {
    name: 'Curse Of Greed',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_greed-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Loss': {
    name: 'Curse Of Loss',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_loss-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Pain': {
    name: 'Curse Of Pain',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_pain-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-The-Blind': {
    name: 'Curse Of The Blind',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-curse_of_the_blind-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ambush-': {
    name: 'Ambush!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-ambush-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Chest: {
    name: 'Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Chest1: {
    name: 'Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-chest_2-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Chest': {
    name: 'Cursed Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-cursed_chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dark-Chest': {
    name: 'Dark Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dark_chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dark-Chest1': {
    name: 'Dark Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-dark_chest_2-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Devil-Deal': {
    name: 'Devil Deal',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-devil_deal-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Gold-Chest': {
    name: 'Gold Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gold_chest_2-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Gold-Chest1': {
    name: 'Gold Chest',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-gold_chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Greed-': {
    name: 'Greed!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-greed_event-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'I-Can-See-Forever-': {
    name: 'I Can See Forever!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-i_can_see_forever-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Troll-Bomb-': {
    name: 'Mega Troll Bomb!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-mega_troll_bomb-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Secret-Room-': {
    name: 'Secret Room!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-secret_room-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Shop-Upgrade-': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-shop_upgrade-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Troll-Bombs': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-troll_bombs-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'We-Need-To-Go-Deeper-': {
    name: 'We Need To Go Deeper!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-we_need_to_go_deeper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Xl-Floor-': {
    name: 'Xl Floor!',
    type: 'monster',
    edition: { 'Base Game V2': 1 },
    front: 'b2-xl_floor-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Soul-Of-Gluttony': {
    name: 'Soul Of Gluttony',
    type: 'bonus',
    edition: { 'Base Game V2': 1 },
    front: 'b2-soul_of_gluttony-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Greed': {
    name: 'Soul Of Greed',
    type: 'bonus',
    edition: { 'Base Game V2': 1 },
    front: 'b2-soul_of_greed-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Guppy': {
    name: 'Soul Of Guppy',
    type: 'bonus',
    edition: { 'Base Game V2': 1 },
    front: 'b2-soul_of_guppy-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  Azazel: {
    name: 'Azazel',
    type: 'character',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-azazel-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lord-Of-The-Pit'
  },
  'Lord-Of-The-Pit': {
    name: 'Lord Of The Pit',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-lord_of_the_pit-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Lord-Of-The-Pit': {
    name: 'Lord Of The Pit',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-lord_of_the_pit-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Lost': {
    name: 'The Lost',
    type: 'character',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_lost-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Holy-Mantle'
  },
  'Holy-Mantle': {
    name: 'Holy Mantle',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-holy_mantle-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Holy-Mantle': {
    name: 'Holy Mantle',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-holy_mantle-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Keeper': {
    name: 'The Keeper',
    type: 'character',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_keeper-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Wooden-Nickel'
  },
  'Wooden-Nickel': {
    name: 'Wooden Nickel',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-wooden_nickel-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Wooden-Nickel': {
    name: 'Wooden Nickel',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-wooden_nickel-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Apollyon: {
    name: 'Apollyon',
    type: 'character',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-apollyon-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Void'
  },
  Void: {
    name: 'Void',
    type: 'eternal',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-void-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  '9-Volt': {
    name: '9 Volt',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-9_volt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Tail': {
    name: 'Guppy’s Tail',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-guppys_tail-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Infamy: {
    name: 'Infamy',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-infamy-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Knife': {
    name: 'Mom’s Knife',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-moms_knife-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'More-Options': {
    name: 'More Options',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-more_options-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Placenta: {
    name: 'Placenta',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-placenta-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Skeleton-Key': {
    name: 'Skeleton Key',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-skeleton_key-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Soy-Milk': {
    name: 'Soy Milk',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-soy_milk-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Missing-Page': {
    name: 'The Missing Page',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_missing_page-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Crooked-Penny': {
    name: 'Crooked Penny',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-crooked_penny-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Fruitcake: {
    name: 'Fruitcake',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-fruitcake-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'I-Can-t-Believe-It-s-Not-Butter-Bean': {
    name: 'I Can’t Believe It’s Not Butter Bean',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-i_cant_believe_its_not_butter_bean-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Lemon-Mishap': {
    name: 'Lemon Mishap',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-lemon_mishap-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Library-Card': {
    name: 'Library Card',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-library_card-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Ouija-Board': {
    name: 'Ouija Board',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-ouija_board-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Plan-C': {
    name: 'Plan C',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-plan_c-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Bible': {
    name: 'The Bible',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_bible-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Butter-Bean': {
    name: 'The Butter Bean',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_butter_bean-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Dad-s-Key': {
    name: 'Dad’s Key',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-dads_key-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Succubus: {
    name: 'Succubus',
    type: 'treasure',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-succubus-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Charged-Penny': {
    name: 'Charged Penny',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-charged_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-3': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-pills-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Credit-Card': {
    name: 'Credit Card',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-credit_card-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Holy-Card': {
    name: 'Holy Card',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-holy_card-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Two-Of-Diamonds': {
    name: 'Two Of Diamonds',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-two_of_diamonds-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Joker: {
    name: 'Joker',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-joker-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Jera: {
    name: 'Jera',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-jera-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Cancer: {
    name: 'Cancer',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-cancer-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pink-Eye': {
    name: 'Pink Eye',
    type: 'loot',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-pink_eye-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'A-Sack': {
    name: 'A Sack',
    type: 'loot',
    edition: { 'Gold Box V2': 1, Requiem: 1 },
    front: 'g2-a_sack-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Begotten: {
    name: 'Begotten',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-begotten-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Boil: {
    name: 'Boil',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-boil-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Charger: {
    name: 'Charger',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-charger-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Death-s-Head': {
    name: 'Death’s Head',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-deaths_head-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gaper: {
    name: 'Gaper',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-gaper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Imp: {
    name: 'Imp',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-imp-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Knight: {
    name: 'Knight',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-knight-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Parabite: {
    name: 'Parabite',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-parabite-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Ragling: {
    name: 'Ragling',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-ragling-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Round-Worm': {
    name: 'Round Worm',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-round_worm-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Fistula: {
    name: 'Fistula',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-fistula-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gurglings: {
    name: 'Gurglings',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-gurglings-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Polycephalus: {
    name: 'Polycephalus',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-polycephalus-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Steven: {
    name: 'Steven',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-steven-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Cage': {
    name: 'The Cage',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-the_cage-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Hush: {
    name: 'Hush',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-hush-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Fatigue': {
    name: 'Curse Of Fatigue',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-curse_of_fatigue-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Tiny-Hands': {
    name: 'Curse Of Tiny Hands',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-curse_of_tiny_hands-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'I-Am-Error-': {
    name: 'I Am Error!',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-i_am_error-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Trap-Door-': {
    name: 'Trap Door!',
    type: 'monster',
    edition: { 'Gold Box V2': 1 },
    front: 'g2-trap_door-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Bum-Bo': {
    name: 'Bum-Bo',
    type: 'character',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-bum_bo-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Bag-O-Trash'
  },
  'Bag-O-Trash': {
    name: 'Bag-O-Trash',
    type: 'eternal',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-bag_o_trash-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Dark-Judas': {
    name: 'Dark Judas',
    type: 'character',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-dark_judas-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Dark-Arts'
  },
  'Dark-Arts': {
    name: 'Dark Arts',
    type: 'eternal',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-dark_arts-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Guppy: {
    name: 'Guppy',
    type: 'character',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-guppy-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Infestation'
  },
  Infestation: {
    name: 'Infestation',
    type: 'eternal',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-infestation-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Infestation: {
    name: 'Infestation',
    type: 'eternal',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-infestation-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Whore-Of-Babylon': {
    name: 'Whore Of Babylon',
    type: 'character',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-whore_of_babylon-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Gimpy'
  },
  Gimpy: {
    name: 'Gimpy',
    type: 'eternal',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-gimpy-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  '1-Up': {
    name: '1-Up',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-1_up-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Abaddon: {
    name: 'Abaddon',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-abaddon-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Cursed-Eye': {
    name: 'Cursed Eye',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-cursed_eye-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Daddy-Long-Legs-treasure': {
    name: 'Daddy Long Legs',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-daddy_long_legs-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Euthanasia: {
    name: 'Euthanasia',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-euthanasia-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Game-Breaking-Bug-': {
    name: 'Game Breaking Bug!',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-game_breaking_bug-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Eye': {
    name: 'Guppy’s Eye',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-guppys_eye-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Head-Of-The-Keeper': {
    name: 'Head Of The Keeper',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-head_of_the_keeper-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Hourglass: {
    name: 'Hourglass',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-hourglass-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Lard: {
    name: 'Lard',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-lard-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Magnet: {
    name: 'Magnet',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-magnet-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Eye-Shadow': {
    name: 'Mom’s Eye Shadow',
    type: 'treasure',
    p3: true,
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-moms_eye_shadow-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'P-H-D-': {
    name: 'P.H.D.',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-phd-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Polyphemus: {
    name: 'Polyphemus',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-polyphemus-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Rubber-Cement': {
    name: 'Rubber Cement',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-rubber_cement-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Telepathy-For-Dummies': {
    name: 'Telepathy For Dummies',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-telepathy_for_dummies-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Wiz': {
    name: 'The Wiz',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-the_wiz-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  '20-20': {
    name: '20/20',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-20_20-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Black-Candle': {
    name: 'Black Candle',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-black_candle-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Distant-Admiration': {
    name: 'Distant Admiration',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-distant_admiration-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Divorce-Papers': {
    name: 'Divorce Papers',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-divorce_papers-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Forget-Me-Now': {
    name: 'Forget Me Now',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-forget_me_now-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Head-Of-Krampus': {
    name: 'Head Of Krampus',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-head_of_krampus-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Libra: {
    name: 'Libra',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-libra-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mutant-Spider': {
    name: 'Mutant Spider',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-mutant_spider-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Rainbow-Baby': {
    name: 'Rainbow Baby',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-rainbow_baby-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Red-Candle': {
    name: 'Red Candle',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-red_candle-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Smart-Fly': {
    name: 'Smart Fly',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-smart_fly-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Athame: {
    name: 'Athame',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-athame-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mama-Haunt': {
    name: 'Mama Haunt',
    type: 'treasure',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-mama_haunt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'lil-Battery': {
    name: 'lil Battery',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1, Requiem: 2 },
    front: 'fsp2-lil_battery-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-4': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-pills-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-5': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-pills_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-6': {
    name: 'Pills!',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-pills_3-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  '-Card': {
    name: '? Card',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-questionmark_card-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Get-Out-Of-Jail-Card': {
    name: 'Get Out Of Jail Card',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-get_out_of_jail_card-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Ansuz: {
    name: 'Ansuz',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-ansuz-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Perthro: {
    name: 'Perthro',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-perthro-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Black-Rune': {
    name: 'Black Rune',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-black_rune-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'AAA-Battery': {
    name: 'AAA Battery',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-aaa_battery-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Poker-Chip': {
    name: 'Poker Chip',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-poker_chip-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Tape-Worm': {
    name: 'Tape Worm',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-tape_worm-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'The-Left-Hand': {
    name: 'The Left Hand',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-the_left_hand-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Gold-Key': {
    name: 'Gold Key',
    type: 'loot',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-gold_key-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Bony: {
    name: 'Bony',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-bony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Brain: {
    name: 'Brain',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-brain-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Flaming-Hopper': {
    name: 'Flaming Hopper',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-flaming_hopper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Globin: {
    name: 'Globin',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-globin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Nerve-Ending': {
    name: 'Nerve Ending',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-nerve_ending-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Roundy: {
    name: 'Roundy',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-roundy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Sucker: {
    name: 'Sucker',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-sucker-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Swarmer: {
    name: 'Swarmer',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-swarmer-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Tumor: {
    name: 'Tumor',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-tumor-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Globin': {
    name: 'Cursed Globin',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-cursed_globin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Tumor': {
    name: 'Cursed Tumor',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-cursed_tumor-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Bony': {
    name: 'Holy Bony',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-holy_bony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Mulligan': {
    name: 'Holy Mulligan',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-holy_mulligan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Blastocyst: {
    name: 'Blastocyst',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-blastocyst-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dingle: {
    name: 'Dingle',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-dingle-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Headless-Horseman': {
    name: 'Headless Horseman',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-headless_horseman-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Krampus: {
    name: 'Krampus',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-krampus-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Monstro-II': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-monstro_ii-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Fallen': {
    name: 'The Fallen',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-the_fallen-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Widow: {
    name: 'Widow',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-widow-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Isaac-': {
    name: 'Isaac!',
    type: 'monster',
    p3: true,
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-isaac-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Heart-': {
    name: 'Mom’s Heart!',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-moms_heart-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Blood-Lust': {
    name: 'Curse Of Blood Lust',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-curse_of_blood_lust-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Impulse': {
    name: 'Curse Of Impulse',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-curse_of_impulse-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Angel-Room': {
    name: 'Angel Room',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-angel_room-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Boss-Rush-': {
    name: 'Boss Rush!',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-boss_rush-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Head-Trauma': {
    name: 'Head Trauma',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-head_trauma-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Chest': {
    name: 'Holy Chest',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-holy_chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Spiked-Chest': {
    name: 'Spiked Chest',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-spiked_chest-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Troll-Bombs1': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: { 'Four Souls+ V2': 1 },
    front: 'fsp2-troll_bombs-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Bethany: {
    name: 'Bethany',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-bethany-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Virtues'
  },
  'Book-Of-Virtues': {
    name: 'Book Of Virtues',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-book_of_virtues-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Jacob-Esau': {
    name: 'Jacob & Esau',
    type: 'character',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-jacob_and_esau-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Sibling-Rivalry'
  },
  'Sibling-Rivalry': {
    name: 'Sibling Rivalry',
    type: 'eternal',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-sibling_rivalry-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Broken': {
    name: 'The Broken',
    type: 'character',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-the_broken-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Spindown-Dice'
  },
  'Spindown-Dice': {
    name: 'Spindown Dice',
    type: 'eternal',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-spindown_dice-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Dauntless': {
    name: 'The Dauntless',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_dauntless-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Hypercoagulation'
  },
  Hypercoagulation: {
    name: 'Hypercoagulation',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-hypercoagulation-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Hoarder': {
    name: 'The Hoarder',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_hoarder-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Bag-Of-Crafting'
  },
  'Bag-Of-Crafting': {
    name: 'Bag Of Crafting',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-bag_of_crafting-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Deceiver': {
    name: 'The Deceiver',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_deceiver-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Ceremonial-Blade'
  },
  'Ceremonial-Blade': {
    name: 'Ceremonial Blade',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-ceremonial_blade-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Soiled': {
    name: 'The Soiled',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_soiled-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'IBS'
  },
  IBS: {
    name: 'IBS',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-ibs-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Curdled': {
    name: 'The Curdled',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_curdled-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Sumptorium'
  },
  Sumptorium: {
    name: 'Sumptorium',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-sumptorium-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Savage': {
    name: 'The Savage',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_savage-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Berserk'
  },
  Berserk: {
    name: 'Berserk',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-berserk-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Berserk: {
    name: 'Berserk',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-berserk-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Benighted': {
    name: 'The Benighted',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_benighted-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Hemoptysis'
  },
  Hemoptysis: {
    name: 'Hemoptysis',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-hemoptysis-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Enigma-amginE-ehT': {
    name: 'The Enigma/amginE ehT',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_enigma-308x420.webp',
    back: 'r-the_enigma_back-308x420.webp',
    eternal: 'Flip'
  },
  Flip: {
    name: 'Flip',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-flip-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Capricious': {
    name: 'The Capricious',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_capricious-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Glitch'
  },
  Glitch: {
    name: 'Glitch',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-glitch-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Glitch: {
    name: 'Glitch',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-glitch-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Baleful': {
    name: 'The Baleful',
    type: 'character',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-the_baleful-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Soulbond'
  },
  Soulbond: {
    name: 'Soulbond',
    type: 'eternal',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-soulbond-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Harlot': {
    name: 'The Harlot',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_harlot-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Gello'
  },
  Gello: {
    name: 'Gello',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-gello-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Gello: {
    name: 'Gello',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-gello-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Miser': {
    name: 'The Miser',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_miser-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Keeper-s-Bargain'
  },
  'Keeper-s-Bargain': {
    name: 'Keeper’s Bargain',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-keepers_bargain-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Empty': {
    name: 'The Empty',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_empty-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Abyss'
  },
  Abyss: {
    name: 'Abyss',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-abyss-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Fettered': {
    name: 'The Fettered',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_fettered-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Dead-Weight'
  },
  'Dead-Weight': {
    name: 'Dead Weight',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-dead_weight-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Zealot': {
    name: 'The Zealot',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_zealot-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lemegeton'
  },
  Lemegeton: {
    name: 'Lemegeton',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-lemegeton-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Deserter': {
    name: 'The Deserter',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-the_deserter-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Anima-Sola-The-Revenant'
  },
  'Anima-Sola-The-Revenant': {
    name: 'Anima Sola/The Revenant',
    type: 'eternal',
    edition: { Requiem: 1 },
    front: 'r-anima_sola-308x420.webp',
    back: 'r-the_revenant-308x420.webp'
  },
  'Flash-Isaac': {
    name: 'Flash Isaac',
    type: 'character',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-flash_isaac-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Classic-Roller'
  },
  'Classic-Roller': {
    name: 'Classic Roller',
    type: 'eternal',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-classic_roller-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Eden1: {
    name: 'Eden',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-eden_2-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  Eden2: {
    name: 'Eden',
    type: 'character',
    edition: { Requiem: 1 },
    front: 'r-eden-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  Abel: {
    name: 'Abel',
    type: 'treasure',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-abel-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Alabaster-Box': {
    name: 'Alabaster Box',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-alabaster_box-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Backstabber: {
    name: 'Backstabber',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-backstabber-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Ball-Of-Bandages': {
    name: 'Ball Of Bandages',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-ball_of_bandages-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Blood-Puppy': {
    name: 'Blood Puppy',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-blood_puppy-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Bobby-Bomb': {
    name: 'Bobby Bomb',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-bobby_bomb-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Chocolate-Milk': {
    name: 'Chocolate Milk',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-chocolate_milk-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Consolation-Prize': {
    name: 'Consolation Prize',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-consolation_prize-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Damocles: {
    name: 'Damocles',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-damocles-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Fire-Mind': {
    name: 'Fire Mind',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-fire_mind-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Gnawed-Leaf': {
    name: 'Gnawed Leaf',
    type: 'treasure',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-gnawed_leaf-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Halo-Of-Flies': {
    name: 'Halo Of Flies',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-halo_of_flies-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Handicapped-Placard': {
    name: 'Handicapped Placard',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-handicapped_placard-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Judas-Shadow': {
    name: 'Judas’ Shadow',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-judas_shadow-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Keeper-s-Box': {
    name: 'Keeper’s Box',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-keepers_box-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Lil-Chest': {
    name: 'Lil Chest',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-lil_chest-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Lodestone: {
    name: 'Lodestone',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-lodestone-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Lunch: {
    name: 'Lunch',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-lunch-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mom-s-Bottle-of-Pills': {
    name: 'Mom’s Bottle of Pills',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-moms_bottle_of_pills-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Playdough-Cookie': {
    name: 'Playdough Cookie',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-playdough_cookie-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Punching-Bag': {
    name: 'Punching Bag',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-punching_bag-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Rock-Bottom': {
    name: 'Rock Bottom',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-rock_bottom-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Spelunker-Hat': {
    name: 'Spelunker Hat',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-spelunker_hat-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Trick-Penny': {
    name: 'Trick Penny',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-trick_penny-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Ultra-Flesh-Kid-': {
    name: 'Ultra Flesh Kid!',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-ultra_flesh_kid-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Auction-Gavel': {
    name: 'Auction Gavel',
    type: 'treasure',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-auction_gavel-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Birthright: {
    name: 'Birthright',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-birthright-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Book-Of-The-Dead': {
    name: 'Book Of The Dead',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-book_of_the_dead-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Eternal-D6': {
    name: 'Eternal D6',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-eternal_d6-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Experimental-Treatment': {
    name: 'Experimental Treatment',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-experimental_treatment-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Friendly-Ball': {
    name: 'Friendly Ball',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-friendly_ball-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Friendly-Sack': {
    name: 'Friendly Sack',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-friendly_sack-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Hand-Me-Downs': {
    name: 'Hand Me Downs',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-hand_me_downs-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Jar-Of-Flies': {
    name: 'Jar Of Flies',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-jar_of_flies-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Keeper-s-Penny': {
    name: 'Keeper’s Penny',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-keepers_penny-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Magic-Skin': {
    name: 'Magic Skin',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-magic_skin-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Mama-Mega': {
    name: 'Mama Mega',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-mama_mega-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Marbles: {
    name: 'Marbles',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-marbles-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Member-Card': {
    name: 'Member Card',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-member_card-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'R-Key': {
    name: 'R Key',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-r_key-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Red-Key': {
    name: 'Red Key',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-red_key-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Clicker': {
    name: 'The Clicker',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-the_clicker-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Undefined: {
    name: 'Undefined',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-undefined-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'X-Ray-Vision': {
    name: 'X-Ray Vision',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-x_ray_vision-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Battery-Pack': {
    name: 'Battery Pack',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-battery_pack-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Car-Battery': {
    name: 'Car Battery',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-car_battery-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Hallowed-Ground': {
    name: 'Hallowed Ground',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-hallowed_ground-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Keeper-s-Sack': {
    name: 'Keeper’s Sack',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-keepers_sack-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Pageant-Boy': {
    name: 'Pageant Boy',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-pageant_boy-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Sacrificial-Dagger': {
    name: 'Sacrificial Dagger',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-sacrificial_dagger-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Jar': {
    name: 'The Jar',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-the_jar-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Cursed-Soul': {
    name: 'Cursed Soul',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-cursed_soul-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Fetal-Haunt': {
    name: 'Fetal Haunt',
    type: 'treasure',
    edition: { Requiem: 1 },
    front: 'r-fetal_haunt-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'A-Lucky-Penny-': {
    name: 'A Lucky Penny!',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-a_lucky_penny-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Sticky-Nickel': {
    name: 'Sticky Nickel',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-sticky_nickel-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Mega-Bomb-': {
    name: 'Mega Bomb!',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-mega_bomb-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-7': {
    name: 'Pills!',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-pills-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Pills-8': {
    name: 'Pills!',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-pills_2-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Black-Heart': {
    name: 'Black Heart',
    type: 'loot',
    edition: { Requiem: 2 },
    front: 'r-black_heart-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Ace-Of-Diamonds': {
    name: 'Ace Of Diamonds',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-ace_of_diamonds-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Emergency-Contact': {
    name: 'Emergency Contact',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-emergency_contact-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Two-Of-Spades': {
    name: 'Two Of Spades',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-two_of_spades-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Algiz: {
    name: 'Algiz',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-algiz-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Berkano: {
    name: 'Berkano',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-berkano-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Hagalaz: {
    name: 'Hagalaz',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-hagalaz-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Bag-Lunch': {
    name: 'Bag Lunch',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-bag_lunch-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Broken-Remote': {
    name: 'Broken Remote',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-broken_remote-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Callus: {
    name: 'Callus',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-callus-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Golden-Trinket': {
    name: 'Golden Trinket',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-golden_trinket-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Lucky-Toe': {
    name: 'Lucky Toe',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-lucky_toe-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Rib-Of-Greed': {
    name: 'Rib Of Greed',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-rib_of_greed-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Tick: {
    name: 'Tick',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-tick-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Wishbone: {
    name: 'Wishbone',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-wishbone-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Dad-s-Note': {
    name: 'Dad’s Note',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-dads_note-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Key: {
    name: 'Key',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-key-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Magic-Marker': {
    name: 'Magic Marker',
    type: 'loot',
    edition: { Requiem: 1 },
    front: 'r-magic_marker-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Corny: {
    name: 'Corny',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-corny-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dogma: {
    name: 'Dogma',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-dogma-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Gutted-Fatty': {
    name: 'Gutted Fatty',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-gutted_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Mushroom: {
    name: 'Mushroom',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-mushroom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Null: {
    name: 'Null',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-null-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Peeping-Fatty': {
    name: 'Peeping Fatty',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-peeping_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Red-Ghost': {
    name: 'Red Ghost',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-red_ghost-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Whipper: {
    name: 'Whipper',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-whipper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Mulliboom': {
    name: 'Cursed Mulliboom',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-cursed_mulliboom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Dople': {
    name: 'Cursed Dople',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-cursed_dople-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Lil-Haunt': {
    name: 'Cursed Lil Haunt',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-cursed_lil_haunt-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Cursed-Mulligan': {
    name: 'Cursed Mulligan',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-cursed_mulligan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Brain': {
    name: 'Holy Brain',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-holy_brain-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Greedling': {
    name: 'Holy Greedling',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-holy_greedling-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Portal': {
    name: 'Holy Portal',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-holy_portal-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Holy-Psy-Horf': {
    name: 'Holy Psy Horf',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-holy_psy_horf-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Bony': {
    name: 'Charmed Bony',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_bony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Clotty': {
    name: 'Charmed Clotty',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_clotty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Dip': {
    name: 'Charmed Dip',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_dip-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Fat-Bat': {
    name: 'Charmed Fat Bat',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_fat_bat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Fatty': {
    name: 'Charmed Fatty',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Globin': {
    name: 'Charmed Globin',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_globin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Greedling': {
    name: 'Charmed Greedling',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_greedling-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Keeper': {
    name: 'Charmed Keeper',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_keeper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Baby-Plum': {
    name: 'Baby Plum',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-baby_plum-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Brownie: {
    name: 'Brownie',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-brownie-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Charmed-Monstro': {
    name: 'Charmed Monstro',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-charmed_monstro-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Clog: {
    name: 'Clog',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-clog-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Hornfel: {
    name: 'Hornfel',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-hornfel-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mama-Gurdy': {
    name: 'Mama Gurdy',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-mama_gurdy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Rag-Mega': {
    name: 'Rag Mega',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-rag_mega-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Sisters-Vis': {
    name: 'Sisters Vis',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-sisters_vis-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Rainmaker': {
    name: 'The Rainmaker',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-the_rainmaker-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Scourge': {
    name: 'The Scourge',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-the_scourge-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Siren': {
    name: 'The Siren',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-the_siren-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Turdlings: {
    name: 'Turdlings',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-turdlings-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ultra-Greed-': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-ultra_greed-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Satan-': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-mega_satan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'MOTHER-': {
    name: 'MOTHER!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-mother-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-Empathy': {
    name: 'Curse Of Empathy',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-curse_of_empathy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-The-Hollow': {
    name: 'Curse Of The Hollow',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-curse_of_the_hollow-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-The-Hunted': {
    name: 'Curse Of The Hunted',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-curse_of_the_hunted-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-The-Soulless': {
    name: 'Curse Of The Soulless',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-curse_of_the_soulless-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Betrayal-': {
    name: 'Betrayal!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-betrayal-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Double-Treasure-': {
    name: 'Double Treasure!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-double_treasure-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dressing-Table': {
    name: 'Dressing Table',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-dressing_table-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Golden-Troll-Bomb-': {
    name: 'Golden Troll Bomb!',
    type: 'monster',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-golden_troll_bomb-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Lust-For-Blood-': {
    name: 'Lust For Blood!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-lust_for_blood-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mother-s-Shadow-': {
    name: 'Mother’s Shadow!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-mothers_shadow-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Overflow-': {
    name: 'Overflow!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-overflow-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Pitfall-': {
    name: 'Pitfall!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-pitfall-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Tnt-Barrel': {
    name: 'Tnt Barrel',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-tnt_barrel-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Troll-Bombs2': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-troll_bombs-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'All-Hallows-Eve': {
    name: 'All Hallows’ Eve',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-all_hallows_eve-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Angelic-Intervention': {
    name: 'Angelic Intervention',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-angelic_intervention-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Battle-Royale-': {
    name: 'Battle Royale!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-battle_royale-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Battle-Royale-1': {
    name: 'Battle Royale!!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-battle_royale_2-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Battle-Royale-2': {
    name: 'Battle Royale!!!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-battle_royale_3-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  Beggar: {
    name: 'Beggar',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-beggar-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Black-Champions': {
    name: 'Black Champions',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-black_champions-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blessing-Of-Gluttony': {
    name: 'Blessing Of Gluttony',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blessing_of_gluttony-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blessing-Of-Greed': {
    name: 'Blessing Of Greed',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blessing_of_greed-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blessing-Of-Steam': {
    name: 'Blessing Of Steam',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blessing_of_steam-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blessing-Of-The-Inner-Eye': {
    name: 'Blessing Of The Inner Eye',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blessing_of_the_inner_eye-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blessing-Of-The-Sack': {
    name: 'Blessing Of The Sack',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blessing_of_the_sack-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blind-Rage': {
    name: 'Blind Rage',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blind_rage-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blood-Donation': {
    name: 'Blood Donation',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blood_donation-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blood-Lust-room': {
    name: 'Blood Lust',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blood_lust-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Blood-Money': {
    name: 'Blood Money',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-blood_money-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Bomb-Bum': {
    name: 'Bomb Bum',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-bomb_bum-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Bum-Bo-Is-Loose-': {
    name: 'Bum-Bo Is Loose!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-bum_bo_is_loose-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Butter-Fingers': {
    name: 'Butter Fingers',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-butter_fingers-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Challenge-Room': {
    name: 'Challenge Room',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-challenge_room-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Conjoined-Twin': {
    name: 'Conjoined Twin',
    type: 'room',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-conjoined_twin-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Devil-Beggar': {
    name: 'Devil Beggar',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-devil_beggar-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-': {
    name: 'Dice Room!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_1-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-1': {
    name: 'Dice Room!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_2-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-2': {
    name: 'Dice Room!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_3-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-3': {
    name: 'Dice Room!!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_4-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-4': {
    name: 'Dice Room!!!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_5-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Dice-Room-5': {
    name: 'Dice Room!!!!!!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-dice_room_6-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Eden-s-Blessing-room': {
    name: 'Eden’s Blessing',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-edens_blessing-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  Equality: {
    name: 'Equality',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-equality-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Eternal-Chest': {
    name: 'Eternal Chest',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-eternal_chest-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Floor-Spikes': {
    name: 'Floor Spikes',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-floor_spikes-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Fortune-Teller': {
    name: 'Fortune Teller',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-fortune_teller-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Greed-Looms': {
    name: 'Greed Looms',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-greed_looms-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  Gus: {
    name: 'Gus',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-gus-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Haunted-': {
    name: 'Haunted!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-haunted-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Heavy-Is-The-Head': {
    name: 'Heavy Is The Head',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-heavy_is_the_head-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'I-Am-Error': {
    name: 'I Am Error',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-i_am_error-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Isaac-s-Blessing': {
    name: 'Isaac’s Blessing',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-isaacs_blessing-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Key-Master': {
    name: 'Key Master',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-key_master-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Laser-Eye-': {
    name: 'Laser Eye!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-laser_eye-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Maggy-s-Blessing': {
    name: 'Maggy’s Blessing',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-maggys_blessing-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Might-For-The-Meek': {
    name: 'Might For The Meek',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-might_for_the_meek-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Pity-For-The-Poor': {
    name: 'Pity For The Poor',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-pity_for_the_poor-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  Planetarium: {
    name: 'Planetarium',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-planetarium-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Red-Champions': {
    name: 'Red Champions',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-red_champions-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Red-Vise': {
    name: 'Red Vise',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-red_vise-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Restock-Machine': {
    name: 'Restock Machine',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-restock_machine-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Samson-s-Blessing': {
    name: 'Samson’s Blessing',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-samsons_blessing-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Shadow-Of-Famine': {
    name: 'Shadow Of Famine',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-shadow_of_famine-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Shadow-Of-War': {
    name: 'Shadow Of War',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-shadow_of_war-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Shell-Game': {
    name: 'Shell Game',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-shell_game-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Slot-Machine': {
    name: 'Slot Machine',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-slot_machine-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Social-Goals-': {
    name: 'Social Goals!',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-social_goals-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Spider-Webs': {
    name: 'Spider Webs',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-spider_webs-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Splash-Damage': {
    name: 'Splash Damage',
    type: 'room',
    p3: true,
    edition: { Requiem: 1 },
    front: 'r-splash_damage-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Spoils-Of-War': {
    name: 'Spoils Of War',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-spoils_of_war-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Static-Shock': {
    name: 'Static Shock',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-static_shock-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Tax-For-The-Mighty': {
    name: 'Tax For The Mighty',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-tax_for_the_mighty-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'The-Mirror': {
    name: 'The Mirror',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-the_mirror-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'White-Champions': {
    name: 'White Champions',
    type: 'room',
    edition: { Requiem: 1 },
    front: 'r-white_champions-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  'Soul-Of-Envy': {
    name: 'Soul Of Envy',
    type: 'bonus',
    edition: { Requiem: 1 },
    front: 'r-soul_of_envy-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Lust': {
    name: 'Soul Of Lust',
    type: 'bonus',
    edition: { Requiem: 1 },
    front: 'r-soul_of_lust-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Pride': {
    name: 'Soul Of Pride',
    type: 'bonus',
    edition: { Requiem: 1 },
    front: 'r-soul_of_pride-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Sloth': {
    name: 'Soul Of Sloth',
    type: 'bonus',
    edition: { Requiem: 1 },
    front: 'r-soul_of_sloth-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'Soul-Of-Wrath': {
    name: 'Soul Of Wrath',
    type: 'bonus',
    edition: { Requiem: 1 },
    front: 'r-soul_of_wrath-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  'The-Harbingers-The-Beast-': {
    name: 'The Harbingers/The Beast!',
    type: 'monster',
    edition: { Requiem: 1 },
    front: 'r-the_harbingers-308x420.webp',
    back: 'r-the_beast-308x420.webp'
  },
  Ash: {
    name: 'Ash',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-ash-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Ball-Of-Tumors'
  },
  'Ball-Of-Tumors': {
    name: 'Ball Of Tumors',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-ball_of_tumors-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Steven-character': {
    name: 'Steven',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-steven-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lil-Steven'
  },
  'Lil-Steven': {
    name: 'Lil Steven',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-lil_steven-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Bum-Bo-The-Weird': {
    name: 'Bum-Bo The Weird',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-bum_bo_the_weird-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Strange-Marble'
  },
  'Strange-Marble': {
    name: 'Strange Marble',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-strange_marble-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Edmund: {
    name: 'Edmund',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-edmund-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-Real-Left-Hand'
  },
  'The-Real-Left-Hand': {
    name: 'The Real Left Hand',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_real_left_hand-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Abe: {
    name: 'Abe',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-abe-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Possession'
  },
  Possession: {
    name: 'Possession',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-possession-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Baba: {
    name: 'Baba',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-baba-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Is-You'
  },
  'Is-You': {
    name: 'Is You',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-is_you-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Blind-Johnny': {
    name: 'Blind Johnny',
    type: 'character',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-blind_johnny-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Johnny-s-Knives'
  },
  'Johnny-s-Knives': {
    name: 'Johnny’s Knives',
    type: 'eternal',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-johnnys_knives-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Blue-Archer': {
    name: 'Blue Archer',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-blue_archer-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Bow-And-Arrow'
  },
  'Bow-And-Arrow': {
    name: 'Bow And Arrow',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-bow_and_arrow-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Boyfriend: {
    name: 'Boyfriend',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-boyfriend-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Girlfriend'
  },
  Girlfriend: {
    name: 'Girlfriend',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-girlfriend-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Captain-Viridian': {
    name: 'Captain Viridian',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-captain_viridian-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Gravity'
  },
  Gravity: {
    name: 'Gravity',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-gravity-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Crewmate: {
    name: 'Crewmate',
    type: 'character',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-crewmate-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Emergency-Meeting-'
  },
  'Emergency-Meeting-': {
    name: 'Emergency Meeting!',
    type: 'eternal',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-emergency_meeting-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Guy-Spelunky': {
    name: 'Guy Spelunky',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-guy_spelunky-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Spelunking-Pack'
  },
  'Spelunking-Pack': {
    name: 'Spelunking Pack',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-spelunking_pack-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Johnny: {
    name: 'Johnny',
    type: 'character',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-johnny-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Football'
  },
  Football: {
    name: 'Football',
    type: 'eternal',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-football-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Pink-Knight': {
    name: 'Pink Knight',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-pink_knight-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lollypop'
  },
  Lollypop: {
    name: 'Lollypop',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-lollypop-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Psycho-Goreman': {
    name: 'Psycho Goreman',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-psycho_goreman-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Hunky-Boys'
  },
  'Hunky-Boys': {
    name: 'Hunky Boys',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-hunky_boys-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Quote: {
    name: 'Quote',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-quote-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Polar-Star-Booster-V2-0'
  },
  'Polar-Star-Booster-V2-0': {
    name: 'Polar Star/Booster V2.0',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-polar_star-308x420.webp',
    back: 'rwz-booster_v20-308x420.webp'
  },
  'Salad-Fingers': {
    name: 'Salad Fingers',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-salad_fingers-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Rusty-Spoons'
  },
  'Rusty-Spoons': {
    name: 'Rusty Spoons',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-rusty_spoons-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Knight': {
    name: 'The Knight',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_knight-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Focus'
  },
  Focus: {
    name: 'Focus',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-focus-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'The-Silent': {
    name: 'The Silent',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_silent-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Ring-Of-The-Snake'
  },
  'Ring-Of-The-Snake': {
    name: 'Ring Of The Snake',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-ring_of_the_snake-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Yung-Venuz': {
    name: 'Yung Venuz',
    type: 'character',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-yung_venuz-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Pop-Pop-'
  },
  'Pop-Pop-': {
    name: 'Pop Pop!',
    type: 'eternal',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-pop_pop-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  Aubrey: {
    name: 'Aubrey',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-aubrey-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Birthday-Cake': {
    name: 'Birthday Cake',
    type: 'treasure',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-birthday_cake-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Diogenes-Pot': {
    name: 'Diogenes’ Pot',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-diogenes_pot-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  George: {
    name: 'George',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-george-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Hitops: {
    name: 'Hitops',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-hitops-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Newgrounds-Tank': {
    name: 'Newgrounds Tank',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-newgrounds_tank-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Tony: {
    name: 'Tony',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-tony-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Boxing-Glove': {
    name: 'Boxing Glove',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-boxing_glove-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Doorway: {
    name: 'Doorway',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-doorway-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Gun-That-Can-Kill-The-Past': {
    name: 'Gun That Can Kill The Past',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-gun_that_can_kill_the_past-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Water-Bottle': {
    name: 'Water Bottle',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-water_bottle-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Ser-Junkan': {
    name: 'Ser Junkan',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-ser_junkan-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Spewer: {
    name: 'Spewer',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-spewer-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'The-Crowdfunder': {
    name: 'The Crowdfunder',
    type: 'treasure',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_crowdfunder-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Demon-Form': {
    name: 'Demon Form',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-demon_form-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Fiend-Fire': {
    name: 'Fiend Fire',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-fiend_fire-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Loot-Card': {
    name: 'Loot Card',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-loot_card-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Bible-Thump-': {
    name: 'Bible Thump!',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-bible_thump-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Blanks: {
    name: 'Blanks',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-blanks-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Cheep-Cheep-Cheep-': {
    name: 'Cheep Cheep Cheep!',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-cheep_cheep_cheep-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Chunk-Of-Amber': {
    name: 'Chunk Of Amber',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-chunk_of_amber-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Cow-On-A-Trash-Farm': {
    name: 'Cow On A Trash Farm',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-cow_on_a_trash_farm-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Greed-Butt-': {
    name: 'Greed Butt!',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-greed_butt-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Jester: {
    name: 'Jester',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-jester-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Murder-': {
    name: 'Murder!',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-murder-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Witch: {
    name: 'Witch',
    type: 'loot',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-witch-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'A-Dead-Horse': {
    name: 'A Dead Horse',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-a_dead_horse-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Balrog: {
    name: 'Balrog',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-balrog-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Hubert-Cumberdale': {
    name: 'Hubert Cumberdale',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-hubert_cumberdale-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Javon-': {
    name: 'Javon!',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-javon-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Keke-Is-You': {
    name: 'Keke Is You',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-keke_is_you-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Leatherneck: {
    name: 'Leatherneck',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-leatherneck-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Peeper: {
    name: 'Peeper',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-peeper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Shopkeeper-': {
    name: 'Shopkeeper!',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-shopkeeper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Impostor-': {
    name: 'The Impostor!',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_impostor-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Purple-Shirted-Eye-Stabber': {
    name: 'The Purple-Shirted Eye Stabber',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_purple_shirted_eye_stabber-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Zombie-Jesus': {
    name: 'Zombie Jesus',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-zombie_jesus-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Death-Trapper': {
    name: 'Death Trapper',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-death_trapper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Exp-sito': {
    name: 'Expósito',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-exposito-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Grandparent: {
    name: 'Grandparent',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-grandparent-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Lil-Hunter': {
    name: 'Lil Hunter',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-lil_hunter-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Melqu-ades': {
    name: 'Melquíades',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-melquiades-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Butcher': {
    name: 'The Butcher',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_butcher-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Collector': {
    name: 'The Collector',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_collector-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Gorm': {
    name: 'The Gorm',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_gorm-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Radiance': {
    name: 'The Radiance',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_radiance-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Time-Eater': {
    name: 'Time Eater',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-time_eater-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ballos-': {
    name: 'Ballos!',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-ballos-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Curse-Of-The-Suspicious': {
    name: 'Curse Of The Suspicious',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-curse_of_the_suspicious-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Brea-In-Distress': {
    name: 'Brea In Distress',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-brea_in_distress-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Don-t-Starve-': {
    name: 'Don’t Starve!',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-dont_starve-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Fuck-Bloat': {
    name: 'Fuck Bloat',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-fuck_bloat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Golden-Idol': {
    name: 'Golden Idol',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-golden_idol-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Grubfather: {
    name: 'Grubfather',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-grubfather-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Nightmare-Tick': {
    name: 'Nightmare Tick',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-nightmare_tick-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'QWOP-': {
    name: 'QWOP!',
    type: 'monster',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-qwop-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Trial-By-Trolley-': {
    name: 'Trial By Trolley!',
    type: 'monster',
    p3: true,
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-trial_by_trolley-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Isaac-Of-Isaac-Re-Isaac': {
    name: 'The Isaac Of Isaac: Re-Isaac',
    type: 'room',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-the_isaac_of_isaac_re_isaac-420x308.webp',
    back: 'RoomCardBack-420x308.webp'
  },
  Strawberry: {
    name: 'Strawberry',
    type: 'bonus',
    edition: { 'Requiem Warp Zone': 1 },
    front: 'rwz-strawberry-308x420.webp',
    back: 'BonusSoulCardBack-308x420.webp'
  },
  Isaac1: {
    name: 'Isaac',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-isaac-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-D6'
  },
  Judas1: {
    name: 'Judas',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-judas-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Belial'
  },
  'Blue-Baby1': {
    name: 'Blue Baby',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-blue_baby-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Forever-Alone'
  },
  Azazel1: {
    name: 'Azazel',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-azazel-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Lord-Of-The-Pit'
  },
  'The-Lost1': {
    name: 'The Lost',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_lost-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Holy-Mantle'
  },
  Lilith1: {
    name: 'Lilith',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-lilith-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Incubus'
  },
  'The-Keeper1': {
    name: 'The Keeper',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_keeper-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Wooden-Nickel'
  },
  'The-Forgotten1': {
    name: 'The Forgotten',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_forgotten-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'The-Bone'
  },
  Guppy1: {
    name: 'Guppy',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-guppy-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Infestation'
  },
  'The-Capricious1': {
    name: 'The Capricious',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_capricious-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Glitch'
  },
  'The-Savage1': {
    name: 'The Savage',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_savage-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Berserk'
  },
  'The-Harlot1': {
    name: 'The Harlot',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_harlot-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Gello'
  },
  Eden3: {
    name: 'Eden',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-eden-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  Eden4: {
    name: 'Eden',
    type: 'character',
    edition: { 'Alt Art': 1 },
    front: 'aa-eden_2-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  Brimstone1: {
    name: 'Brimstone',
    type: 'treasure',
    edition: { 'Alt Art': 1 },
    front: 'aa-brimstone-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Epic-Fetus-': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: { 'Alt Art': 1 },
    front: 'aa-epic_fetus-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Godhead1: {
    name: 'Godhead',
    type: 'treasure',
    edition: { 'Alt Art': 1 },
    front: 'aa-godhead-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Guppy-s-Paw1': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: { 'Alt Art': 1 },
    front: 'aa-guppys_paw-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'XIII-Death1': {
    name: 'XIII. Death',
    type: 'loot',
    edition: { 'Alt Art': 1 },
    front: 'aa-xiii_death-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'XVII-The-Stars1': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: { 'Alt Art': 1 },
    front: 'aa-xvii_the_stars-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Lost-Soul1': {
    name: 'Lost Soul',
    type: 'loot',
    edition: { 'Alt Art': 1 },
    front: 'aa-lost_soul-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  Begotten1: {
    name: 'Begotten',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-begotten-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Big-Bony': {
    name: 'Big Bony',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-big_bony-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Clotty1: {
    name: 'Clotty',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-clotty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Delirium1: {
    name: 'Delirium',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-delirium-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gaper1: {
    name: 'Gaper',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-gaper-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Hand1': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-moms_hand-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Mulliboom1: {
    name: 'Mulliboom',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-mulliboom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Mulligan1: {
    name: 'Mulligan',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-mulligan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Twitchy: {
    name: 'Twitchy',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-twitchy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Brownie1: {
    name: 'Brownie',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-brownie-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Daddy-Long-Legs1': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-daddy_long_legs-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dark-One1': {
    name: 'Dark One',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-dark_one-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dingle1: {
    name: 'Dingle',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-dingle-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Famine1: {
    name: 'Famine',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-famine-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Fistula1: {
    name: 'Fistula',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-fistula-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Gurdy1: {
    name: 'Gurdy',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-gurdy-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Hornfel1: {
    name: 'Hornfel',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-hornfel-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Larry-Jr-1': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-larry_jr-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Little-Horn1': {
    name: 'Little Horn',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-little_horn-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Fatty1': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-mega_fatty-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Satan-1': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: { 'Alt Art': 1 },
    front: 'aa-mega_satan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Min-Min': {
    name: 'Min Min',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-min_min-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Monstro1: {
    name: 'Monstro',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-monstro-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Monstro-II1': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: { 'Alt Art': 1 },
    front: 'aa-monstro_ii-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pestilence1: {
    name: 'Pestilence',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-pestilence-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Pin1: {
    name: 'Pin',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-pin-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Polycephalus1: {
    name: 'Polycephalus',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-polycephalus-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Rag-Man1': {
    name: 'Rag Man',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-rag_man-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Rag-Mega1': {
    name: 'Rag Mega',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-rag_mega-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Beast': {
    name: 'The Beast',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_beast-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Bloat1': {
    name: 'The Bloat',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_bloat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Duke-Of-Flies1': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_duke_of_flies-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Lamb1': {
    name: 'The Lamb',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-the_lamb-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ultra-Greed-1': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-ultra_greed-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'It-Lives-': {
    name: 'It Lives!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-it_lives-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mega-Satan-2': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: { 'Alt Art': 1 },
    front: 'aa-mega_satan_2-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-1': {
    name: 'Mom!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-mom-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Satan-1': {
    name: 'Satan!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-satan-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ambush-1': {
    name: 'Ambush!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-ambush-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Devil-Deal1': {
    name: 'Devil Deal',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-devil_deal-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Secret-Room-1': {
    name: 'Secret Room!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-secret_room-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Shop-Upgrade-1': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: { 'Alt Art': 1 },
    front: 'aa-shop_upgrade-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dead-Eye': {
    name: 'Dead Eye',
    type: 'treasure',
    edition: { Target: 1 },
    front: 't-dead_eye-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Marked: {
    name: 'Marked',
    type: 'treasure',
    edition: { Target: 1 },
    front: 't-marked-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Epic-Fetus-1': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: { Target: 1 },
    front: 't-epic_fetus-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Lil-Gish': {
    name: 'Lil’ Gish',
    type: 'treasure',
    edition: { Gish: 1 },
    front: 'gi-lil_gish-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  Gish: {
    name: 'Gish',
    type: 'monster',
    edition: { Gish: 1 },
    front: 'gi-gish-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Tapeworm: {
    name: 'Tapeworm',
    type: 'character',
    edition: { Tapeworm: 1 },
    front: 'tw-tapeworm-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: 'Pink-Proglottid'
  },
  'Pink-Proglottid': {
    name: 'Pink Proglottid',
    type: 'eternal',
    edition: { Tapeworm: 1 },
    front: 'tw-pink_proglottid-308x420.webp',
    back: 'EternalCardBack-308x420.webp'
  },
  'Rainbow-Tapeworm': {
    name: 'Rainbow Tapeworm',
    type: 'loot',
    edition: { Tapeworm: 1 },
    front: 'tw-rainbow_tapeworm-308x420.webp',
    back: 'LootCardBack-308x420.webp'
  },
  'Black-Proglottid': {
    name: 'Black Proglottid',
    type: 'treasure',
    edition: { Tapeworm: 1 },
    front: 'tw-black_proglottid-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'White-Proglottid': {
    name: 'White Proglottid',
    type: 'treasure',
    edition: { Tapeworm: 1 },
    front: 'tw-white_proglottid-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Red-Proglottid': {
    name: 'Red Proglottid',
    type: 'treasure',
    edition: { Tapeworm: 1 },
    front: 'tw-red_proglottid-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  },
  'Tapeworm-monster': {
    name: 'Tapeworm',
    type: 'monster',
    edition: { Tapeworm: 1 },
    front: 'tw-tapeworm_monster-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Dick-Knot-': {
    name: 'Dick Knot!',
    type: 'monster',
    edition: { 'Dick Knots': 1 },
    front: 'dk-dick_knot-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  '-Christian-Broadcasts-': {
    name: '“Christian Broadcasts”',
    type: 'monster',
    edition: { 'The Unboxing of Isaac': 1 },
    front: 'box-christian_broadcasts-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Dogma1: {
    name: 'Dogma',
    type: 'monster',
    edition: { 'The Unboxing of Isaac': 1 },
    front: 'box-dogma-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'TV-Static': {
    name: 'TV Static',
    type: 'monster',
    edition: { 'The Unboxing of Isaac': 1 },
    front: 'box-tv_static-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'The-Bloat2': {
    name: 'The Bloat',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'p-the_bloat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Eden5: {
    name: 'Eden',
    type: 'character',
    edition: { Promo: 1 },
    front: 'sp-eden-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  Eden6: {
    name: 'Eden',
    type: 'character',
    edition: { Promo: 1 },
    front: 'psp-eden-308x420.webp',
    back: 'CharacterCardBack-308x420.webp',
    eternal: undefined
  },
  'The-Bloat3': {
    name: 'The Bloat',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'psp-the_bloat-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'It-Lives-1': {
    name: 'It Lives!',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'sp-it_lives-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Ultra-Pride': {
    name: 'Ultra Pride',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'psp-ultra_pride-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Corrupted-Data': {
    name: 'Corrupted Data',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'psp-corrupted_data-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  Henry: {
    name: 'Henry',
    type: 'monster',
    edition: { Promo: 1 },
    front: 'sp-henry-308x420.webp',
    back: 'MonsterCardBack-308x420.webp'
  },
  'Mom-s-Ring': {
    name: 'Mom’s Ring',
    type: 'treasure',
    edition: { Promo: 1 },
    front: 'p-moms_ring-308x420.webp',
    back: 'TreasureCardBack-308x420.webp'
  }
};

module.exports = { editions, cards };
