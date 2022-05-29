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
    front: 'b40b6d565d130775ef41187b629e73d3c4f6f486b1cb4ed682d5e41c4697faa5-b2-isaac-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-D6',
  },
  'The-D6': {
    name: 'The D6',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b37e28b33c099f62f8a59d7d348cc39965deb7b86d06a519fb6c44ddd07f8f41-b2-the_d6-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Maggy: {
    name: 'Maggy',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f0a873fa658761363d36ede629a35c3bd89a567cee6318a58a80ff8a5e9c201e-b2-maggy-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Yum-Heart',
  },
  'Yum-Heart': {
    name: 'Yum Heart',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f4cf8b3cec4a152ff434ceffa46fa227f1307baef788d3f8f739e61973026722-b2-yum_heart-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Cain: {
    name: 'Cain',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '7a9ad1321536ee0c463c9ce47b4fd023adffbc645f5a8175b2bb5a6738aeeba7-b2-cain-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Sleight-Of-Hand',
  },
  'Sleight-Of-Hand': {
    name: 'Sleight Of Hand',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bc0873a6d8b8e89dd22dad22bd3aea242c6f9b7ae69f4a4ef7f58a2bbbbd06da-b2-sleight_of_hand-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Judas: {
    name: 'Judas',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'aff90f66341c497d5006dc3e3e5988753235da8c4347d3f8bb2ce444fb59de05-b2-judas-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Belial',
  },
  'Book-Of-Belial': {
    name: 'Book Of Belial',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: '30963d114215e42839298f89d800d23088b529d2b7ab8259aa3c06e89c54f5ba-b2-book_of_belial-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Blue-Baby': {
    name: 'Blue Baby',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'decb46438c6d8185213a85b0b8fc2cdb13e9c40171200e420f267fcebb514acb-b2-blue_baby-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Forever-Alone',
  },
  'Forever-Alone': {
    name: 'Forever Alone',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: '3bf398fe4ee0d635e832465ce4da537f8c5103a9d0da90b90050a64c2b31ca65-b2-forever_alone-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Eve: {
    name: 'Eve',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '33ef4acc1a61edf16d1e16c12a6c9b6690caf7e102ab130eee2e0fce116dafd8-b2-eve-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-Curse',
  },
  'The-Curse': {
    name: 'The Curse',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ac35c46b697fcc3a46a1b2d91ffd9515b2bf32f5d8a1d30abc3fd27a354eb1a7-b2-the_curse-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Samson: {
    name: 'Samson',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '0e3dfd7b9111793f5a3e9c71e7e3e6e098355b7629d6490e32baeb7a9c174190-b2-samson-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Blood-Lust',
  },
  'Blood-Lust': {
    name: 'Blood Lust',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: '8340daac7a6de9ff8e4a0e116a62374ecd0d9dc1d762d2863b650655cfae1b02-b2-blood_lust-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Lazarus: {
    name: 'Lazarus',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bde67ca9de1472bc0123d68e6d44038e9018f232bf12e52d414904ff59519cfe-b2-lazarus-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lazarus-Rags',
  },
  'Lazarus-Rags': {
    name: 'Lazarus’ Rags',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: '7248df921b172b620bcbdea3af7ce49ac119a16e5b457e9506894bc0ca08a34c-b2-lazarus_rags-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Lilith: {
    name: 'Lilith',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '3ddbad5f20eaaf44ee991b56f97221a9122e8d51d0908489449511bb0f110f96-b2-lilith-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Incubus',
  },
  Incubus: {
    name: 'Incubus',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ee8d87105bdb5050c0800b63d4cda02860c83ce577f66f440e32ebcd257e62f2-b2-incubus-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Forgotten': {
    name: 'The Forgotten',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '16fcab1d4de6096440c4228de1a4daa4a0beec1be4cb681fb550e13c5927030b-b2-the_forgotten-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-Bone',
  },
  'The-Bone': {
    name: 'The Bone',
    type: 'eternal',
    edition: {
      'Base Game V2': 1,
    },
    front: '5e2a99571980700bf58bbef5b69d671b204672270aa546ca2314761d90ad26d3-b2-the_bone-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Eden: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Base Game V2': 1,
    },
    front: '5f356882f0b7af2666aa2a5ba85dc3fe6c9df3eba9ca016fa82de24e045b622a-b2-eden-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  'Belly-Button': {
    name: 'Belly Button',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '4658f7937683b37ad276deb0e2fbc154dfe353894b85ac0f87754302d91313a2-b2-belly_button-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Bob-s-Brain': {
    name: 'Bob’s Brain',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '9fa96a6ab38eedbc92fc42b74fb825704f33093b1887de1d4bd837ea67959e75-b2-bobs_brain-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Breakfast: {
    name: 'Breakfast',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '60f77a96cab80aef0e6fd9fd8e29e53664657599193782d3734854b76a042f9d-b2-breakfast-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Brimstone: {
    name: 'Brimstone',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'd9f548ec1955c33666fb215651585053c9477d82df3058766e22314eb35b68d6-b2-brimstone-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Bum-Bo-': {
    name: 'Bum-Bo!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '1fe87b32ad24295c88d84b12ee2572a41f9f53892eba98017acd9d37062f24f3-b2-bum_bo-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Cambion-Conception': {
    name: 'Cambion Conception',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '03bc987ff3f4f094bb28d4374b896c8072b93382e973b500358f9354f58d0e54-b2-cambion_conception-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Champion-Belt': {
    name: 'Champion Belt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e3e5c50771bbf532cd8b241f86e0767d78360953c01943953ed2fcb4481675ac-b2-champion_belt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Charged-Baby': {
    name: 'Charged Baby',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '6c82eb40760e570a0d1bb5e02d823e13991a9e1f2c80028695b6e1077f681781-b2-charged_baby-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Cheese-Grater': {
    name: 'Cheese Grater',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2b607474f1d584e1f38683aec82913089a2b3ef0ba41aac6c4e063cce008839c-b2-cheese_grater-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Curse-Of-The-Tower': {
    name: 'Curse Of The Tower',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8aad0fcf6713ddfb0d97408974fa6c1107c33cdcd6a3b69c14eb3c705f4377d3-b2-curse_of_the_tower-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Dad-s-Lost-Coin': {
    name: 'Dad’s Lost Coin',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'cccb1592fc078c9bfe8be00a36cf02d3e35eea41d2ce995cd45afd18216148f3-b2-dads_lost_coin-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Dark-Bum': {
    name: 'Dark Bum',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'd7838c281d6fd7cbc83812d5d3d7fc5867d881011ac64732cc27d25f34cd5dcb-b2-dark_bum-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Dead-Bird': {
    name: 'Dead Bird',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '50733a008944d17e74c96ef1e5bb0a31acc004cc4edc50f122d74b230847ae1f-b2-dead_bird-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Dinner: {
    name: 'Dinner',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ec20ae010116f761a50f40439f18533a894f97141dbebdd5f1438677d84f57fd-b2-dinner-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Dry-Baby': {
    name: 'Dry Baby',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e37d7c15c26aef0fecb5a17bded328706a71012e708a0c8a5ba84803eca490f2-b2-dry_baby-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Eden-s-Blessing': {
    name: 'Eden’s Blessing',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c6d175b10d923894c4fb1ee434b2a0ef680d8cb7815d01882a34657396aeda45-b2-edens_blessing-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Empty-Vessel': {
    name: 'Empty Vessel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '1f7bfde148d5d7ff7f255269b5297bbdb41a7d96baa058c192450ba39d73aaef-b2-empty_vessel-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Eye-Of-Greed': {
    name: 'Eye Of Greed',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2a54caeb76a8ab242016029749bc6b5cc47bc2aa42a09ae53855c5df9d615d03-b2-eye_of_greed-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Fanny-Pack': {
    name: 'Fanny Pack',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ebf1188e4477898ffe7e0750934be44b53624e3f6269b38d740dc99863402090-b2-fanny_pack-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Finger-': {
    name: 'Finger!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '3a8e209053a9ad5ed8aeaf62f6b863ab066510457bb69f946728041a93780ab4-b2-finger-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Goat-Head': {
    name: 'Goat Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '92dc5cf1075d287461c509b9cfcad26056e41575fc043f697a564e83c11a759d-b2-goat_head-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Greed-s-Gullet': {
    name: 'Greed’s Gullet',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c62322cb5f23651806d9476e096fcb175d61ab0f96a534e6a5a3591c8cf87af6-b2-greeds_gullet-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Collar': {
    name: 'Guppy’s Collar',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'd23e769c036c3de9d142789695c4c00da215c190cc6f5b73cd4bee6afebafb00-b2-guppys_collar-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Ipecac: {
    name: 'Ipecac',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ad8289d3134c8c0da5fdb19553d363c3d443f1716c34e0ca556a6350e1f583b4-b2-ipecac-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Meat-': {
    name: 'Meat!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '359e7ca9ca875e204ffc9c1c44fdf140e226bc4514accc40788961d01a2f92ba-b2-meat-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Box': {
    name: 'Mom’s Box',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '422f315c5b4a32872233ba4995e1b84fd80cbd406f925caae6aa64d61bf5e22e-b2-moms_box-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Coin-Purse': {
    name: 'Mom’s Coin Purse',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f4ccace8d9121ba19b78e24e351c373207f96dc3d6850f7d3b809f9051992398-b2-moms_coin_purse-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Purse': {
    name: 'Mom’s Purse',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bd38c4339221ed907ab53f28d87f311084e840101bbbdc1ca581c6fb001bc4bc-b2-moms_purse-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Razor': {
    name: 'Mom’s Razor',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '03fd2329496df8b5b1c6571264c473856ac75a419dcf93e83b9c481438603ca4-b2-moms_razor-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Monstro-s-Tooth': {
    name: 'Monstro’s Tooth',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '791b15875e229622fc67ea7ec1f8854bb9da11364f22f6e5fd2c87db431618c1-b2-monstros_tooth-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Polydactyly: {
    name: 'Polydactyly',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '5fda2223c837ed280ed864691ed0cac24db97fb8f5ade2f8b4bd3eafaacb4ac0-b2-polydactyly-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Restock: {
    name: 'Restock',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c8c379d02a367183f96c22b7f55225ca2e672d650adffa108668f7cadd7bb72d-b2-restock-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Sacred-Heart': {
    name: 'Sacred Heart',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2007ef5f07c754d4d7b5ea5f4f28fc19d3fc45d13bf2b19666ce81f244d20168-b2-sacred_heart-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Shadow: {
    name: 'Shadow',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '7d18826386dea4695a1e9ff24b9da9af583e2a60dcebfec8dac50c18257fbee8-b2-shadow-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Shiny-Rock': {
    name: 'Shiny Rock',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'aae98bd12a3f0d044730c22df915c0a9620316b59a4a55016191caa0387d77eb-b2-shiny_rock-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Spider-Mod': {
    name: 'Spider Mod',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8dc9d689269416e3d6f5e6a61ac56281d12b2d9418bcea829da62a7cab2af571-b2-spider_mod-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Starter-Deck': {
    name: 'Starter Deck',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8a1d30b53deb58c4a4790f0b6288f7315ff2edc020cf4faf875ebef1982b393d-b2-starter_deck-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Steamy-Sale-': {
    name: 'Steamy Sale!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '912daf6c64d4721c61785176c7144863accf8597123faac8f12b7a652c2311dc-b2-steamy_sale-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Suicide-King': {
    name: 'Suicide King',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '873f1057c4eceb35252d368439077e0378ab3cd24772c66ed38e73776bd56c28-b2-suicide_king-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Synthoil: {
    name: 'Synthoil',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '5517852887c3b47f44a7ea7527fd42839121250fb8816ddb88e98f640308e08e-b2-synthoil-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Tarot-Cloth': {
    name: 'Tarot Cloth',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2972740e88e9cb976830414dc7b63e4abe02993f5fe9af03305b72a3a894ca90-b2-tarot_cloth-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Blue-Map': {
    name: 'The Blue Map',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'fbcb676d1869b45113aba5ab8fc9d0aa3c1adbb6d74492f3250bc1ee1c9a1af1-b2-the_blue_map-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Chest': {
    name: 'The Chest',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '7f3657cde6ad704b041902f25ff054afe90ce25d8edd1c68d6e84885edde78aa-b2-the_chest-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Compass': {
    name: 'The Compass',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c002cdef663b10861bc604f5ee60b3d6174bfdae31831b39d9ce14486b515b4d-b2-the_compass-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-D10': {
    name: 'The D10',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8ae5efeecd0d25ea980a8c71782729a861b3a7e49b87408d88c6d7ce4c916aec-b2-the_d10-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Dead-Cat': {
    name: 'The Dead Cat',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '579e8434349990fb5b14c7100424fb3b9a659777ff7680f0bd7524e653c821c9-b2-the_dead_cat-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Habit': {
    name: 'The Habit',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a2472409aae91734408f0845e47bd1d9b1c2408e6e56465e53510c119b47a0ae-b2-the_habit-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Map': {
    name: 'The Map',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'cb701b9b7425ca669d6570c4efd5485bc6f5ea0423c5f13bf0030c029cb07c02-b2-the_map-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Midas-Touch': {
    name: 'The Midas Touch',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b7cc8bf5140597a8bec6979e266a5db24b8273c5c5702b1a7ba8f95f2e2fc448-b2-the_midas_touch-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Polaroid': {
    name: 'The Polaroid',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '17f63f7543bb7f6026a595b86c8dce48c238ad702c1e6a4659f894060b7eb415-b2-the_polaroid-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Relic': {
    name: 'The Relic',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b38703a6968bec588a29b2873efcfaf315b1fca692aa96dee41bf9d97bdc7de5-b2-the_relic-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'There-s-Options': {
    name: 'There’s Options',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f6612b7737f44b108747110e671fc4e0e73e5618b3c80c986142723bcbe0fc04-b2-theres_options-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Trinity-Shield': {
    name: 'Trinity Shield',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'e30feace283c66654c9749f04c0f844cf41056b6298ba633dd78b5844e16955c-b2-trinity_shield-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Blank-Card': {
    name: 'Blank Card',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '05ee298b67ff1d585918973c185ed17fc84837afcdcf8ae1407755bbd223329c-b2-blank_card-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Book-Of-Sin': {
    name: 'Book Of Sin',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '20091443dbc7da4d673acb88c6d21a78cfd82459f9d982c0c7a1bae55445ddfd-b2-book_of_sin-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Boomerang: {
    name: 'Boomerang',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b920284c7dad33327d75daaa09db00b61072c391710e0f4b419e5e4918a79ca3-b2-boomerang-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Box-': {
    name: 'Box!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ea2d3852cbd6f6a4beb131e159f74d629a555cccc3c54d07a0c7413dbb0a03c9-b2-box-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Bum-Friend': {
    name: 'Bum Friend',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'dda68f414265a7b8ec257f4b83bb643350ea876701d6dc629e4eb98cb802d48b-b2-bum_friend-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Chaos: {
    name: 'Chaos',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b5db700cb228eabc2986a3361ed1f6e3fb1f141fd74645bc19a8ca2278b040e9-b2-chaos-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Chaos-Card': {
    name: 'Chaos Card',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'de4fc585b17aa86da86598575c1049ca127f962e8578c3cd20279b984914502b-b2-chaos_card-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Compost: {
    name: 'Compost',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '9e694d5ec8a409513a2fe2c5b317e600de2d5c098baf8c9dbaaf74382143abde-b2-compost-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Crystal-Ball': {
    name: 'Crystal Ball',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ff6db538dc5251a361986f8656e415cf07df4d0278f72410078d94223fe4d81a-b2-crystal_ball-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Decoy: {
    name: 'Decoy',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b27cd8256291d702122728ab75e7f50e037ac3c77cb1669d7015aa5bdfcade27-b2-decoy-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Diplopia: {
    name: 'Diplopia',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b7776a9f2ff1c5c50cb19703d74097cc62e8537c60347c0f6aafa199f2fd9daa-b2-diplopia-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Flush-': {
    name: 'Flush!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '68b5295724f00355f3db1ab3c385d14bac5c2d2ae91d021a692a0c485efd83cc-b2-flush-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Glass-Cannon': {
    name: 'Glass Cannon',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '56b92bc5bb8077b058d6a79bf41de180892b87dde8de5324e27d54f3e58934b8-b2-glass_cannon-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Godhead: {
    name: 'Godhead',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c6ed0b9fa341cb3a7a6e09615d6f6b5e7019fdd4a3aa3d98db4f4c7e2ada7ace-b2-godhead-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Head': {
    name: 'Guppy’s Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '06c49d5a069503fd885c278f93c97fb319649f185f74ff43c5724f9bf4c2840e-b2-guppys_head-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Paw': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '12a4bce1077e3919ea54c5c8c9916c61f4d6ab88ecaf726df9789461acb665cb-b2-guppys_paw-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Host-Hat': {
    name: 'Host Hat',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b5203b996bdee39dc2ebd549d1a2ea386dc9bf25d5216228d3142b676dee1075-b2-host_hat-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Jawbone: {
    name: 'Jawbone',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bfdd429709edc3692c20945984927bba5db3c10daed7729186b7da9d229ccd70-b2-jawbone-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Lucky-Foot': {
    name: 'Lucky Foot',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f74adb6bfb932a63d07a08e60f2aec94d5df9b2727d0cc9ef032cf807d00a6ba-b2-lucky_foot-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mini-Mush': {
    name: 'Mini Mush',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'af570d09cabab442cb30c70cf5bb3818d7372d5642b15c59c23172f4ecdc8bfb-b2-mini_mush-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Modeling-Clay': {
    name: 'Modeling Clay',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f4a0fea309884688204a5713606d741fa1f52e52241828831894f53839b3d43d-b2-modeling_clay-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Bra': {
    name: 'Mom’s Bra',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '0a700ebb42eca41d11ddd3233224029c2eb0d102195401d5ad4c18104f0216f1-b2-moms_bra-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Shovel': {
    name: 'Mom’s Shovel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '119e6973aae1805cb9d2b106675e66cf600204483f9bfbec44e211489fd031cf-b2-moms_shovel-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Monster-Manual': {
    name: 'Monster Manual',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: '521278489a2a0db72fe96edd8987cb509925b6e31a4ffe65293c488319df0d42-b2-monster_manual-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mr-Boom': {
    name: 'Mr. Boom',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '73a8d4560a0c566a9ecfffb62cfd1b32c10986eb8cfee75162dd0a2eef2bcdbd-b2-mr_boom-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mystery-Sack': {
    name: 'Mystery Sack',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8da5cb0e3ba50466072b1f720d3c0bba15045454b618349cf64cb4d1e891673b-b2-mystery_sack-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'No-': {
    name: 'No!',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '0b61cb8ce17c64e581dcf259c3dad6b81608cb9f3ba5108c249e36d6e74574d0-b2-no-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Pandora-s-Box': {
    name: 'Pandora’s Box',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e9d6acc7dd7ccb62a484539cdcbd73db2c2d047cce0479ff8274793ed137ebba-b2-pandoras_box-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Placebo: {
    name: 'Placebo',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '84a27f42655b997b9ff74505b73cc396e2484515314e8c5cb8cff7de324cc51a-b2-placebo-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Potato-Peeler': {
    name: 'Potato Peeler',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '76ad6278a2390e1c279cdfa0cdae4c23b3846db60d67f5057562f8718e774763-b2-potato_peeler-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Razor-Blade': {
    name: 'Razor Blade',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: '582a4f01ca5fb28c160a08364c49fc6255ea26e0ba375f95c35e8d25b4e0d305-b2-razor_blade-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Remote-Detonator': {
    name: 'Remote Detonator',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: '69e26a009517cc225f852014e741edf19c3dca5ed2e89539a040311ff850ebd9-b2-remote_detonator-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Sack-Head': {
    name: 'Sack Head',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'de59b1d7fc101bafff5522abf94715281111168f171912a7dd8b046a6d08cec8-b2-sack_head-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Sack-Of-Pennies': {
    name: 'Sack Of Pennies',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8df5666f350884ed110282523434bde6388c6947ae0fd0cb70d09d826cd06674-b2-sack_of_pennies-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Spoon-Bender': {
    name: 'Spoon Bender',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '4decea2d13dcd3cbad353eb679a97c4b6a77b7fdba147c0a0ea03a93dc84a3a6-b2-spoon_bender-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Tech-X': {
    name: 'Tech X',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '498a9e6d6fd10f858179a3903acd4f77d9b6b6d1384fe3d5ab1d8078905f4a44-b2-tech_x-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Battery': {
    name: 'The Battery',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '7fbcb668413bb73e5fa84361e6fc1fb001f88d2b7072c1bf069300a2e0bc4f2c-b2-the_battery-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-D100': {
    name: 'The D100',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '7885b77c44b8b3778d922d4b1c2be8087f1eb151e82bfa86ae5a62c1c858557e-b2-the_d100-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-D20': {
    name: 'The D20',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '7c0a33c2fd4d21bb4c7429fc2a28ee58fce62d5df87d1ce9183d333bc8d886b0-b2-the_d20-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-D4': {
    name: 'The D4',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2f21ee127efa7f1bd20dd2604286c8a0fbd7475d03b2083274abada5750d2386-b2-the_d4-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Shovel': {
    name: 'The Shovel',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '2274852dfe265765b9415cd59342bd9fd3e164f9b8249285214a2f7b2b90674c-b2-the_shovel-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Two-Of-Clubs': {
    name: 'Two Of Clubs',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e2145bf8494de02721fefd6c7678f9507d95c64c9fcf2e90ef98c3f5e4cda096-b2-two_of_clubs-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Battery-Bum': {
    name: 'Battery Bum',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '8c8310df3a79b2cf5b9269eea520dde09934d1fce3d178c5316cb3472ac4e7ab-b2-battery_bum-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Contract-From-Below': {
    name: 'Contract From Below',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '543ba3a9b2bd0bc27ea8780c2dc56026b888bdd971fae1d84ccd74b80cfe3363-b2-contract_from_below-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Donation-Machine': {
    name: 'Donation Machine',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bcc0fd790d2092cc516c5fe1988eae0f3a1e96e28fe267d57494449f3d37f5be-b2-donation_machine-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Golden-Razor-Blade': {
    name: 'Golden Razor Blade',
    type: 'treasure',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'cf541042844d70ef158f5ab8ba58c0d267c9ad75e397aeb05051dd2a448a94dd-b2-golden_razor_blade-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Pay-To-Play': {
    name: 'Pay To Play',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a379583bea2c17cbd3cf1e827e138c4112bc9ce2373bb09d6d319ab6857551e8-b2-pay_to_play-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Portable-Slot-Machine': {
    name: 'Portable Slot Machine',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '03cb1d0622a0f038636d9543eb2c71d54b7efa6e098c55e45262a9b74331f855-b2-portable_slot_machine-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Smelter: {
    name: 'Smelter',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c239c8f043be6c893725b28171a10bbc346819eace75730142f7d1d099e059c7-b2-smelter-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Poop': {
    name: 'The Poop',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c72c3ae06fcd3333e10029e7a9252099a180d2241ed0d0fb38e245dfdd8a5f34-b2-the_poop-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Baby-Haunt': {
    name: 'Baby Haunt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '221e355b8197a8c611e22cd7ef022781d49fc8a0c03ce0dd255fdf003036e4bc-b2-baby_haunt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Daddy-Haunt': {
    name: 'Daddy Haunt',
    type: 'treasure',
    edition: {
      'Base Game V2': 1,
    },
    front: '4c0b0a3bd02a4be96f4cd1b278ebfc857fbf3f1c40adb46b079d39d9de849f37-b2-daddy_haunt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'A-Penny-': {
    name: 'A Penny!',
    type: 'loot',
    edition: {
      'Base Game V2': 6,
      'Gold Box V2': 2,
      'Four Souls+ V2': 3,
    },
    front: 'd9da5253ace3aa962db47251c6d022ab6a170f2573a64f0247bb8d4ade064ea0-b2-a_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
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
    front: '5698728324ce266b119df778f8c5c082a885af32fdcba9c6daefabfe0fa10055-b2-two_cents_10-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
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
    front: '30ba3f445b05a58185fc94a0ddf37e00ea650252d470cbf3bf5a5db7a845b8da-b2-three_cents_10-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
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
    front: '1e270c59428e4d857a525560f8f34e20132898686e4b9abf91050bea7499db12-b2-four_cents_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'A-Nickel-': {
    name: 'A Nickel!',
    type: 'loot',
    edition: {
      'Base Game V2': 5,
      'Four Souls+ V2': 1,
      Requiem: 1,
    },
    front: '91449b8083c3aa2552151d0f2fd7147020479beb3ff86aaef04f4401ba6cf7cb-b2-a_nickel_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'A-Dime-': {
    name: 'A Dime!!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'd7f9c22addf6c10932d270387532c7da61b4cba2958259b0151c9d3d3811ae6b-b2-a_dime-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Lil-Battery': {
    name: 'Lil Battery',
    type: 'loot',
    edition: {
      'Base Game V2': 4,
    },
    front: '5f881de6539fb1d7bde4adbf4e3f3d1acc70bbdc0fb02764933fd8772eb0fc62-b2-lil_battery_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Mega-Battery': {
    name: 'Mega Battery',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bd7d7ffdfd1176b375ae89b5fcf5603e74d5f78f02dc8500ecefd8225123a665-b2-mega_battery-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
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
    front: '4d0887f102e54ea9b7648578810a0fdd125564343814236bdce37189fea2d062-b2-bomb_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Gold-Bomb-': {
    name: 'Gold Bomb!!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '052f82187833385c20f3747683cf540df4b68651a6698a151acd73ca19effbb3-b2-gold_bomb-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Butter-Bean-': {
    name: 'Butter Bean!',
    type: 'loot',
    edition: {
      'Base Game V2': 3,
      'Four Souls+ V2': 1,
      Requiem: 3,
    },
    front: 'ffffac3a1cabe4ed6aed3360c3045d091d8749bcfd030a61858cc3d725b44921-b2-butter_bean_3-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Dice-Shard': {
    name: 'Dice Shard',
    type: 'loot',
    edition: {
      'Base Game V2': 3,
      'Four Souls+ V2': 1,
      Requiem: 3,
    },
    front: 'ea2d588751e6bc44e94840038619e4d13a9b8769a1ac8f8022269f34f0af7e60-b2-dice_shard-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '1cdbaa0fb82a63dea9c641cb793adc7324177303afa19f55f948390266a262df-b2-pills_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-1': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '8603c58919715f2a2e93fc8dee7b0f14dfd3e9b19cc9ac2861c3f438c054b515-b2-pills_3-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-2': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '9d88b7e738ceb51b9b59262d023f9dc2e112e9d7bb7e2de06e8a3088936d095d-b2-pills-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Soul-Heart': {
    name: 'Soul Heart',
    type: 'loot',
    edition: {
      'Base Game V2': 2,
      'Gold Box V2': 1,
      Requiem: 2,
    },
    front: '06fadcb8310edb67ffafef5be9057ed1268265deb8e87ebc281360d536157ee6-b2-soul_heart-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'O-The-Fool': {
    name: 'O. The Fool',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '9b7d076c95f5f3c074fa33568ece4d2aa64e1f31f52b1fc399d9256f12f82f80-b2-o_the_fool-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'I-The-Magician': {
    name: 'I. The Magician',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '43cee45e8e3c0fc5e584445537f42faafbc5dbd337f0d5feae68b4bcc92ab10f-b2-i_the_magician-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'II-The-High-Priestess': {
    name: 'II. The High Priestess',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '7c44df1e76eec50c88b572b955f382371bf3274bfe06859df895456ebe851faf-b2-ii_the_high_priestess-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'III-The-Empress': {
    name: 'III. The Empress',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b99c7a92246171bad57587f05c0db7a136283ae26f1646a88bc11462f76527c6-b2-iii_the_empress-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'IV-The-Emperor': {
    name: 'IV. The Emperor',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b61b975e87a1b43f6ef9afbf480d75f4fb638848687919993e45575a6855a176-b2-iv_the_emperor-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'V-The-Hierophant': {
    name: 'V. The Hierophant',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'de1d408f8d6b52e245cddccda6e0f4a136e6a8f57657889f32e65c82a364be4c-b2-v_the_hierophant-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'VI-The-Lovers': {
    name: 'VI. The Lovers',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '3130b02111fa80cd8e637e1cdbf1aa1b2b09cae3661fda2aa3bb51b582c5cbc1-b2-vi_the_lovers-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'VII-The-Chariot': {
    name: 'VII. The Chariot',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '8ae12d4b1902f6a470b3b32a54333652372b8dd98d8ef776a7affc1204a24570-b2-vii_the_chariot-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'VIII-Justice': {
    name: 'VIII. Justice',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '8c7d0d2ee6e3c64f81f00ccf7fc3c63313b2bfd2880d8b6d98e33377fc3e28b4-b2-viii_justice-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'IX-The-Hermit': {
    name: 'IX. The Hermit',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '11cd3fe622a54e26c09c8ce80743f9c10ab3f715f6241c389babf9a0e0cf4f25-b2-ix_the_hermit-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'X-Wheel-Of-Fortune': {
    name: 'X. Wheel Of Fortune',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '509567fb634ae21e3cad373bbd8dad963d39abe24007af3e1c7a20dc627d323e-b2-x_wheel_of_fortune-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XI-Strength': {
    name: 'XI. Strength',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ed3054d6afa17fc1513bac98d84de91364030dce58e45a319d58a9347e20ae64-b2-xi_strength-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XII-The-Hanged-Man': {
    name: 'XII. The Hanged Man',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '737f6782d0023414e6418c2b6ba3e90cd453f3bdf5b4c59ef717f9dc2cb70273-b2-xii_the_hanged_man-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XIII-Death': {
    name: 'XIII. Death',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f62d092f5cb5cece835f91f2175b4ea03d9987fb61c1cb7c783d967c8c66b4ba-b2-xiii_death-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XIV-Temperance': {
    name: 'XIV. Temperance',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '6e29914dd6cc5209c66c2c16db5e5e84c91ea15f70e06b8edd3b75080218bbc4-b2-xiv_temperance-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XV-The-Devil': {
    name: 'XV. The Devil',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '158a7777ed53c939ec40dfc78c9c37d6fb9c14ccb4a8c11966773f3ce062611b-b2-xv_the_devil-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XVI-The-Tower': {
    name: 'XVI. The Tower',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '74a87df9a2771bf3f68169cbbbcd536f6205011efcf019b8294dff0b5ebba2d2-b2-xvi_the_tower-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XVII-The-Stars': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '905948b13888fca81ad9fb3a4924cf147067b813f155c28475a76ea70ac25b34-b2-xvii_the_stars-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XVIII-The-Moon': {
    name: 'XVIII. The Moon',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '3b09eb0b59070d03c7748aad24a8da363207bf99d3473d1ef820f5accf3bbd31-b2-xviii_the_moon-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XIX-The-Sun': {
    name: 'XIX. The Sun',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '43908a8580547d23be6e686c98227a73f19295e69471628d927807616fa7762b-b2-xix_the_sun-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XX-Judgement': {
    name: 'XX. Judgement',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '9525da20c242dc7b9214c7ba19ad1fb0854369eb32892c9a4a32cd5f275fe6fe-b2-xx_judgement-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XXI-The-World': {
    name: 'XXI. The World',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'fe3283fd47a742256997f64163e2ca4c1ae19c095dd08af683369653f1a2bf85-b2-xxi_the_world-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Dagaz: {
    name: 'Dagaz',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'dbb01d5708dde1ea9e1d968e77fae02377e0d76cc270e24866fdd43867d1502a-b2-dagaz-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Ehwaz: {
    name: 'Ehwaz',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '95c2e351cdb6951cbf4cb86fda3b993bc7010cca00e85db83a19e1ce4b6dcde4-b2-ehwaz-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Blank-Rune': {
    name: 'Blank Rune',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '97fd62f5fbdda3fe97ae13b5ef4bf942dff7e068d0752671452a8cc5192ac38c-b2-blank_rune-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Bloody-Penny': {
    name: 'Bloody Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ea22751cfbd99e9307e36ee5246d6c7fa2ff41fc5f163ffd340fed09cb3c5e88-b2-bloody_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Broken-Ankh': {
    name: 'Broken Ankh',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bb4a2eb6dfb02fa3a56f5401a04ba9b174076dbf24cd83295266bd4b27391dd8-b2-broken_ankh-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Cain-s-Eye': {
    name: 'Cain’s Eye',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '9c8360fb934b7ebfe510a43382cd92eb6e656e971a579b3b8a9d1d5b266ea721-b2-cains_eye-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Counterfeit-Penny': {
    name: 'Counterfeit Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '70f4dfaf0f4d80e544529cac8ceb5fb3fc2055fb64bae9b3390cdb37f50ceb46-b2-counterfeit_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Curved-Horn': {
    name: 'Curved Horn',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '4f899c30606aeeda7c47abb6ba780180a13280de33f8fbddcd0c0bbde1fae86b-b2-curved_horn-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Golden-Horseshoe': {
    name: 'Golden Horseshoe',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '210c59c8400f1152b6c45f98b29452f6dac62e74ef66c8a3a94e271abda9f52e-b2-golden_horseshoe-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Guppy-s-Hairball': {
    name: 'Guppy’s Hairball',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '3e86e48c6b9e960e2bb7c3781d60e3c4b100db305345829b3fcab6feba564b98-b2-guppys_hairball-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Purple-Heart': {
    name: 'Purple Heart',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'aa3783e4a38455ed0a8a8fc3a928d5cd50e222075956296e15b004d9f6324277-b2-purple_heart-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Swallowed-Penny': {
    name: 'Swallowed Penny',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: 'af71b67b40746b01bf6229bf573a70c9084271b2c3da3affa30fa0a71c59f666-b2-swallowed_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Lost-Soul': {
    name: 'Lost Soul',
    type: 'loot',
    edition: {
      'Base Game V2': 1,
    },
    front: '4319161ff543b380f121b0fc4004b3f99b363411c0420278de6a3996953610b5-b2-lost_soul-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Big-Spider': {
    name: 'Big Spider',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '719ee28db158e99971707e097dd898721c1e998d46c8d0849344a7377fc4e00d-b2-big_spider-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Black-Bony': {
    name: 'Black Bony',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '8a1c939ee0fd9e62425ebcd92f2ec4f174d15ec2a1d72be3c2e0cdb7989fb240-b2-black_bony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Boom-Fly': {
    name: 'Boom Fly',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '34c4a2fbdc703a9d60d417ebb92e899321e85833b5d4e9f8ab7e63a54ff5cef7-b2-boom_fly-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Clotty: {
    name: 'Clotty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b6b2719e4f826022f2dba78cba435093ca3156c211b4a8e2eaaff56d6a2d35dd-b2-clotty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cod-Worm': {
    name: 'Cod Worm',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '56c6f59cda21467a0d006a2b371779c5b7508a5c9711e46257cc209f9465e289-b2-cod_worm-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Conjoined-Fatty': {
    name: 'Conjoined Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ccd3b29a3d927a90af7d726f6303be83617cec3ac37e9507b06c0afb45f91bd9-b2-conjoined_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dank-Globin': {
    name: 'Dank Globin',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b63a9f4ec78fb8742e46364d5cad05de9e00092ea4bdf8136012ac9f71c71489-b2-dank_globin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Delirium: {
    name: 'Delirium',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '5aa6257cd33a71e6df56583dd06970f38a0110e05f3b70fde759cb8278af20ab-b2-delirium-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dinga: {
    name: 'Dinga',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '80bb7af8f82e3f4d3b96b08b0ffeda4ba890f7ac75efc7fbbdf337fb888d410c-b2-dinga-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dip: {
    name: 'Dip',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'cd9db0fdec00ecc7f3dcc1e93ba07136446ceebf2f77bc4b7f88a13bc829f0bd-b2-dip-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dople: {
    name: 'Dople',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'aa6084ca80dcdfac92a0b2ec435b21fb04603d411bb9b42e7f7156756d25851c-b2-dople-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Evil-Twin': {
    name: 'Evil Twin',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: 'f20ff74b222246ab0a3bebe5601ea3c72a92da0527006e3c75110721cc5d7078-b2-evil_twin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Fat-Bat': {
    name: 'Fat Bat',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '54a74c06ca02fbe6b92a68b9d9a4a0d9506b5842a2316a205e342ce496efc090-b2-fat_bat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Fatty: {
    name: 'Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '8471ed22ea4c6961216c97effc57b318431d988b3b04b1bfaa9ab1dc2ab4edf8-b2-fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Fly: {
    name: 'Fly',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '6e0efeee22334177dd65ef4d70d2852e7e9f63c4d9fedab2421900349b5b2e35-b2-fly-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Greedling: {
    name: 'Greedling',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '31d56a4039ddd2888f95d6cf5bce20a987b7995357a18ba4a2820a612e111cfa-b2-greedling-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Hanger: {
    name: 'Hanger',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '8298365612eb23e70b37e4a4aa872c3750f310246408ac977cd78dc7cd456b1c-b2-hanger-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Hopper: {
    name: 'Hopper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '29acd21c00eed711a14aad53d3671525cefe655e98f4a88e1652c5d956b2b23c-b2-hopper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Horf: {
    name: 'Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c5a548feae679e004cb216422f889d46cc6184658ff905adf3a34036248ab2ad-b2-horf-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Keeper-Head': {
    name: 'Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ae983be0cac6ca1ee9e25e2df773413cec90f242cd933615574bdf23ecd7baf5-b2-keeper_head-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Leaper: {
    name: 'Leaper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '95296a040843b7bb59fe98cfb81d1d1b19c24d63cc45a77cfc176f65bc9795c7-b2-leaper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Leech: {
    name: 'Leech',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '722966726cbcf79c59c9a5afcbc6578eb00a63b96d38187b3ab6dcecf3eca97a-b2-leech-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Dead-Hand': {
    name: 'Mom’s Dead Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '42525b547d3ff1822358ec49dccf1459988f3146a54419d6844ef0d529ec5dec-b2-moms_dead_hand-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Eye': {
    name: 'Mom’s Eye',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ce5c8d106a6d0463fbbc41eb02fa636c229195b618542515b33e48ac36d919b3-b2-moms_eye-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Hand': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '491e9e5d703f6520a990941227322e82926950137c79b1ef0a61f9ac5b46ae3c-b2-moms_hand-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Mulliboom: {
    name: 'Mulliboom',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '93a65e83b6e8b37ed08bae5728c4b28d94b8d6b6694cbcc434d9974d53641703-b2-mulliboom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Mulligan: {
    name: 'Mulligan',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '9a978ecfd52864994e0e6a3ff354d3d30814a7226352da33b69892e749a198bc-b2-mulligan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Pale-Fatty': {
    name: 'Pale Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '66429f01b3f308b7977b2f38a394967c7c459391fc6e93d2e3ba9329473c3476-b2-pale_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pooter: {
    name: 'Pooter',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '0d271411fc09ea980724a3e4689dd7d8e8847e0fe889a207bcedbff4891303dc-b2-pooter-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Portal: {
    name: 'Portal',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '172c1000d549edafedfc1b3a4a7400000dad79122a1bf02c2d42240cc755c50a-b2-portal-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Psy-Horf': {
    name: 'Psy Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '53b57d2497fbb9f2ef50bd04f08bcb397dc109f9a3e8fe79cf67f12122fbd44e-b2-psy_horf-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Rage-Creep': {
    name: 'Rage Creep',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: '2fd6c9a0b8a4e5a64c7c8b340519c73d82ac3ea4a48f9aa8cf0ef26735824b7b-b2-rage_creep-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Red-Host': {
    name: 'Red Host',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '14fa1efc1803c3cecfafe48df6200ff80abb204f88c681ccadc429f9ebe0e8e0-b2-red_host-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ring-Of-Flies': {
    name: 'Ring Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e3d857da438f2595fdfea02fcf2ecf761580f2c45382a65e617aa37653938771-b2-ring_of_flies-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Spider: {
    name: 'Spider',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c2ca95c5dceacef70c59f19bcd576b4d99d173d35ff5aaeaba06a98bf7740798-b2-spider-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Squirt: {
    name: 'Squirt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '472c97d56f0584d91a4f1327c49e54ee5e3de5cea648d4e0667265646f102aaa-b2-squirt-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Stoney: {
    name: 'Stoney',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '438e0623d9a0e0040cc91406011e954defe6d0b07d06f254d0e8c62986b92903-b2-stoney-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Swarm-Of-Flies': {
    name: 'Swarm Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ad08200902b5fabd68a25b2b8a8ee2f74865bcf13783c132b587e0a085f9d591-b2-swarm_of_flies-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Trite: {
    name: 'Trite',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '8ae642ee4c09becd937ef74a35d3e1f839be3e363eae5864d8198c3e236f529a-b2-trite-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Wizoob: {
    name: 'Wizoob',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '4740005deb0729efc2d97c1b2c14af83fba43ed50e2fe02d1fdcc45a6c8b4ab6-b2-wizoob-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Fatty': {
    name: 'Cursed Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '72104b22b37de158b9c832516d9c39221778d326d537293bd90f20c917e66cb7-b2-cursed_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Gaper': {
    name: 'Cursed Gaper',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '0b016773a6b9cd9c84c4827bb2a73cdd7c40ae014904606a79b0e4f506503c67-b2-cursed_gaper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Horf': {
    name: 'Cursed Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'afe0486ddcc08fa7d3db785ae13d674d81eda15bfd14b62ba5a7d6a1988c998c-b2-cursed_horf-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Keeper-Head': {
    name: 'Cursed Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a8a529500dd8313e8ae7c7d21f84a43f3ccdb4fdba77d92251b129b858b4d152-b2-cursed_keeper_head-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Mom-s-Hand': {
    name: 'Cursed Mom’s Hand',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '3a30f2a29ba2058ac3b46a15bdf6fc27cf0feb4624769de7d0141f0f585532c8-b2-cursed_moms_hand-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Psy-Horf': {
    name: 'Cursed Psy Horf',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '97056365ff7775b28c14e89bb950d4ab4d270060481700f3a13200e07bf143c4-b2-cursed_psy_horf-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Dinga': {
    name: 'Holy Dinga',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '43d12ac5d54a6af521dee129139c5623cc535e0578ac9c9267d49ba357efafe4-b2-holy_dinga-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Dip': {
    name: 'Holy Dip',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a2a385c90e5c8f010f2ba60cb5a557063aa697df5ba9683ee87119c41627cc4f-b2-holy_dip-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Keeper-Head': {
    name: 'Holy Keeper Head',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ab01bdac05882e3fda95e4844688e863ef996ddc91a95a05e4840ab781a8aa2c-b2-holy_keeper_head-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Mom-s-Eye': {
    name: 'Holy Mom’s Eye',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'd540418ade6b7940282c7ce2bf437327f223cff63d5cf423824ff807d7fa859b-b2-holy_moms_eye-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Squirt': {
    name: 'Holy Squirt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f621eea0725c2b4631bfbffd7cc96c14c8803d67eec016bbf1e039922ffb56e4-b2-holy_squirt-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Carrion-Queen': {
    name: 'Carrion Queen',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '72fd52e1bfa267ab88446c784cd6c72fb5fa136a3491bc7cb2370e8a2730ca28-b2-carrion_queen-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Chub: {
    name: 'Chub',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '4446c58f7549365dcad26ea3e5ab7937f318281d010b40fc6da3a43ce48efab4-b2-chub-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Conquest: {
    name: 'Conquest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '19796d8234454949d0fc2bcef7602d1965901ee92fd976980a46a0feba92b8d5-b2-conquest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Daddy-Long-Legs': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '475360613e4198fe48215d0674dd6b6bb6deecb8a89a94f08e5d23935c6fddb0-b2-daddy_long_legs-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dark-One': {
    name: 'Dark One',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'da7e479b6e4c3e0354ad97a7890ffa31878645199d59391a13568a6e7396d62d-b2-dark_one-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Death: {
    name: 'Death',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '736fa349cee2a23a41e576cb2dd10a76c5f24296e54b285b30447baf8700b9f4-b2-death-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Envy: {
    name: 'Envy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '0076ecbb8e2ed6429dd97b813b12d6108ced2802fff811ddc865bee1aaf577b7-b2-envy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Famine: {
    name: 'Famine',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e1a9a3ae1453dc48d0e6a6113cbff94e0d4107d8ac1ae9220a27145f560a3b88-b2-famine-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gemini: {
    name: 'Gemini',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'dae927579f3d8d47dc922f1f0fc405397aa700b3ff3214bfed5b4471c395495c-b2-gemini-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gluttony: {
    name: 'Gluttony',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '4499ef44156353d507a6ea54a1fc59f4a185ac66c7a2d095c7fe42a4d05261b7-b2-gluttony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Greed: {
    name: 'Greed',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '0b51061834ae9a93dfc3f179236fcb67537ff92fdf4029a71c68bbbe7eb49c8f-b2-greed-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gurdy: {
    name: 'Gurdy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '276ba9c917f60103a5ebeb69124ab47b9d4627285443a0926ff98d6a4562f611-b2-gurdy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Gurdy-Jr-': {
    name: 'Gurdy Jr.',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'c71c3821814022df3dd53b52de3933dc6b8dff7a0b94f1368c157b0efa9130f8-b2-gurdy_jr-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Larry-Jr-': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b3ea965cd20a116030a1e4a6fc1ffed3adf24b97e76f4a4b786c7a068923d984-b2-larry_jr-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Little-Horn': {
    name: 'Little Horn',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'bb1dec12e5dac38afa9deda49120520dcfafa302be779e1cd206c0a8aeda5a16-b2-little_horn-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Lust: {
    name: 'Lust',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'e0fc42c144fa5512307ad40bd91cad70476bf9aafb3ea1139d053c07c0ab2d8a-b2-lust-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mask-Of-Infamy': {
    name: 'Mask Of Infamy',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '812d444e6e7bb2c873e3eb8f108f111e1bd0eff095b79abc11f8ab23a9ddf0fa-b2-mask_of_infamy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Fatty': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '90afd76618055cb6f49c3dd429db51c9269aee73886629b48f7e41b80772b98c-b2-mega_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Monstro: {
    name: 'Monstro',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '81f7dd727776fcbca6c079f04abb004acf427d791c4eb3240b0fde8d1e3955c0-b2-monstro-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Peep: {
    name: 'Peep',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '2eb435ef2740cbac60d226120c192ec07ba33ff48deec1149b99cfce4c1eb2a2-b2-peep-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pestilence: {
    name: 'Pestilence',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '22125bfa11b34653d633e6d288c333d62d3934e5412000d78e52ea3932a90475-b2-pestilence-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pin: {
    name: 'Pin',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'ddd801808d5bc86599be5c8615573556fde9568a376cca2f607d9f8c8270ba73-b2-pin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pride: {
    name: 'Pride',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '2109ece93717922ed57eb2d499af349fd1f83dfe652660eeb1e1678df5ff53c3-b2-pride-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Rag-Man': {
    name: 'Rag Man',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '17296f981a3ba69724a205f636bba0f0a9a43134f28dfa06eb5f10646ac48eba-b2-rag_man-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Scolex: {
    name: 'Scolex',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '578e514774854b0fb3b3c1ef7992a11460931ec82cd04b95a3f164f617d47fea-b2-scolex-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Sloth: {
    name: 'Sloth',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '09ab17bc12a83ccb1aee465428bba0952fb9e10fe6234a28566a7757027a296b-b2-sloth-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Bloat': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '8644dd284b9383328448f8c87f579d4287bb0323667f3b747eb3fe807facf4fc-b2-the_bloat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Duke-Of-Flies': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '84eb9a9f919c4b98e4f08c356a4200a61282d10f59e96497866dbf2ee74bd361-b2-the_duke_of_flies-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Haunt': {
    name: 'The Haunt',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b58bb70a91f644796a6ef0a615d2bf671f67abeed3cebe049819f35e7f3b890c-b2-the_haunt-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Lamb': {
    name: 'The Lamb',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '1d3aca9ce612d8c6e048e57be2d207aeea51367751421569096a5cfa9f990279-b2-the_lamb-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  War: {
    name: 'War',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b74512feca478b6afbe20cf5f1c426ddab08234b53ae97298353b28daa6a45e8-b2-war-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Wrath: {
    name: 'Wrath',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'f75b5567fa3f73ccec2b1f01a7b059eb61532c0afd77da8a09c23fadbd2daaf5-b2-wrath-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-': {
    name: 'Mom!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '7c1045c00a19d0fa3c8b9c6a95c868e958d019540a29b2fdd72bff7bfd5d8362-b2-mom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Satan-': {
    name: 'Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Base Game V2': 1,
    },
    front: '6deefba9658e4365742b1930942bfd3a05df53012b61054f39a47db98e127fe7-b2-satan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Amnesia': {
    name: 'Curse Of Amnesia',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '6d5b5e1ecae24e6311362cad1365f156d6a57b4dfcd9fd03e90bd1c2ac40a44e-b2-curse_of_amnesia-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Greed': {
    name: 'Curse Of Greed',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a3f5404bc9313bd04373800a85407c9fa6805149197a05b0d65d34484bd72168-b2-curse_of_greed-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Loss': {
    name: 'Curse Of Loss',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'fcc20a86704b99cf276b58c90f36dbf1c0490c15135f3781f186ac0539d1be97-b2-curse_of_loss-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Pain': {
    name: 'Curse Of Pain',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '4f2583ff58e03f8ca9703fda2f89e0988773624da226de0c06aa7808bfdb6291-b2-curse_of_pain-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-The-Blind': {
    name: 'Curse Of The Blind',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'a9c2e454e0b40b7c5de9bc90cf68cc82b62835c4154a6b957770704af8a0c943-b2-curse_of_the_blind-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ambush-': {
    name: 'Ambush!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '719ac53e0bbc2a09f104a8fe3d6017a32b42ce8d0db8c71109f10db906b29580-b2-ambush-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Chest: {
    name: 'Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '5465d2ebda1bbec449af2b3b2fefae191ae6a2d44b30ddf98bbf8690e36b0c5f-b2-chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Chest1: {
    name: 'Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '442f53d1d5893eb7ccf4a23664aa74034c63e0ca219e098187b3fd6f736a1e78-b2-chest_2-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Chest': {
    name: 'Cursed Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'dde36a170022b3034a437fd3561064586a9a12a8ac5ab60879aa349a03e2b98f-b2-cursed_chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dark-Chest': {
    name: 'Dark Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '5e8ee5f5d5c1a954430bbb5c7d89cd0b316df8c44b0a4a7b0956bd2509d3f63e-b2-dark_chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dark-Chest1': {
    name: 'Dark Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '9d1f5ca78757b65a21b9edd0fa83c2f091cb475b4c70be4ac753ea017ee3edef-b2-dark_chest_2-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Devil-Deal': {
    name: 'Devil Deal',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '7203169d0eae7c430c2b15de1a97f9aa4549b2394842a37c49b3d07609f6338e-b2-devil_deal-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Gold-Chest': {
    name: 'Gold Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '36fde0fcf3086d363bc39289fbcab1437b580e69f3b8bc94bd798c6635dde393-b2-gold_chest_2-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Gold-Chest1': {
    name: 'Gold Chest',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b69f98a8d2bfa400b5f2a687ccfd36031401f838bbf45b50bd8023bac12e4a98-b2-gold_chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Greed-': {
    name: 'Greed!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '5a53b318bad0c629a3ec4755f98cba1bcbdc504f6a910e7c86a9caf80260216c-b2-greed_event-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'I-Can-See-Forever-': {
    name: 'I Can See Forever!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '62a655f4fd180189f9174125e62ccff82e44b28772961b4d50daff6f8f2cdc64-b2-i_can_see_forever-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Troll-Bomb-': {
    name: 'Mega Troll Bomb!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '0d682e9ff9f9266fb39f47affd935621c725c1e99577f2654b43e249c13a0d47-b2-mega_troll_bomb-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Secret-Room-': {
    name: 'Secret Room!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '2566dd4cb02b4727f820822c5c22d823a95919378583810f309b6631b69b9248-b2-secret_room-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Shop-Upgrade-': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '20a6c5d66726ef310f9af06c842276116536188cf9d5ad9ba1bd75d5b9eabf64-b2-shop_upgrade-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Troll-Bombs': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '3f10e9ef666be5d4d3c05181a5db1e2c2b82beed87593d15c7fad56fd615ea92-b2-troll_bombs-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'We-Need-To-Go-Deeper-': {
    name: 'We Need To Go Deeper!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '3a08a55d1f8580a822cf08715fd36a9e7f2a4886a9111ba3c3cd6be295216f2e-b2-we_need_to_go_deeper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Xl-Floor-': {
    name: 'Xl Floor!',
    type: 'monster',
    edition: {
      'Base Game V2': 1,
    },
    front: '22315d0d8914cdea943fc90fb9a84f81e8f9651a151167abd8aaf52848fab979-b2-xl_floor-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Soul-Of-Gluttony': {
    name: 'Soul Of Gluttony',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: 'b4e7f875d5aaa528cf6850e555dd57ffe8647be7efab6f0fe484aab9706f58cc-b2-soul_of_gluttony-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Greed': {
    name: 'Soul Of Greed',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: '70e2a33ed0c63b63b59068626120c89bcdd902decf41c6ceeafbb7716b22cdb9-b2-soul_of_greed-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Guppy': {
    name: 'Soul Of Guppy',
    type: 'bonus',
    edition: {
      'Base Game V2': 1,
    },
    front: '93febb7130f13694c999de6c1090d7d2b1299533385f22c8b2565af775422ac9-b2-soul_of_guppy-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  Azazel: {
    name: 'Azazel',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'e478c9ecb1f45b04300c7ab70c497084e230bac45e6776fbe8cf1db5e01038cf-g2-azazel-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lord-Of-The-Pit',
  },
  'Lord-Of-The-Pit': {
    name: 'Lord Of The Pit',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: '323305dc641feb73220faa333ecebef8e31352228b2defb7b7af24e431d302e0-g2-lord_of_the_pit-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Lost': {
    name: 'The Lost',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: '70c7a843f67cefb31e8fc71e5844ad8c6fd3681756eba8c6bac33f0a48f07f6a-g2-the_lost-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Holy-Mantle',
  },
  'Holy-Mantle': {
    name: 'Holy Mantle',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'e93279961e444faa6e1524215e204ac23f0903b8ceae0f66dcbd41836584decb-g2-holy_mantle-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Keeper': {
    name: 'The Keeper',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'cda60a03e43bd14c819aa0006017b87c56a575e61c4964e06a0b36a77ba4bb1e-g2-the_keeper-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Wooden-Nickel',
  },
  'Wooden-Nickel': {
    name: 'Wooden Nickel',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: '62b6aace2bd6280a71f6e2993b22626281d4048662c837ab3b1cb5070251eeb3-g2-wooden_nickel-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Apollyon: {
    name: 'Apollyon',
    type: 'character',
    edition: {
      'Gold Box V2': 1,
    },
    front: '6d86c911a66cb7a50983e391380714a2b8500116ee19ccf5bcf2107e8025cc55-g2-apollyon-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Void',
  },
  Void: {
    name: 'Void',
    type: 'eternal',
    edition: {
      'Gold Box V2': 1,
    },
    front: '05b9efc7d794160629c21f64ba55d745aa45cc02909f9cf875039fc522dc8105-g2-void-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  '9-Volt': {
    name: '9 Volt',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '121aacb90a02de9ef78114cf00ae163815d92a36765bfc2e1156cadaa21d416d-g2-9_volt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Tail': {
    name: 'Guppy’s Tail',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'ebcb6b4b2dd757168626d2f2e64a3e940378590d5800ee61657682f0161c7bef-g2-guppys_tail-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Infamy: {
    name: 'Infamy',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '38eb526f4151925fdcca58ddb4c795e19f19621425e8167f92c3921edab80a81-g2-infamy-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Knife': {
    name: 'Mom’s Knife',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '14d8e4abc80643178723507308c3d3491c6abb6ed481e4413009b4688e2d05b4-g2-moms_knife-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'More-Options': {
    name: 'More Options',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '579a90249e66c6008e232717c86734ec996f280d0d6d30df9fbb95d745399cbd-g2-more_options-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Placenta: {
    name: 'Placenta',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'a7a2b78e320ab12263911f53b73eb298da62a21894ded74c6c57b32217eed9e9-g2-placenta-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Skeleton-Key': {
    name: 'Skeleton Key',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'a130766fdc811e10929869677022ee7a8220be8e91a9f55b8e521b5c576bb9e9-g2-skeleton_key-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Soy-Milk': {
    name: 'Soy Milk',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '09a08d304a900272cdac85a21495f15e0e24d8fc803193ff3644453071234a75-g2-soy_milk-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Missing-Page': {
    name: 'The Missing Page',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '67351128ea1eafabf123ce79ba000a961a851203c73528e0b418d3abb83201cb-g2-the_missing_page-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Crooked-Penny': {
    name: 'Crooked Penny',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '9065eb584cf09d42e455570b2a4f2914be65e34e708d3bb306a7b6aa5aa7e371-g2-crooked_penny-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Fruitcake: {
    name: 'Fruitcake',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '127a69406a98e60fa977537a88450cc07f75a33bdac6ef1ae49083b0aead2729-g2-fruitcake-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'I-Can-t-Believe-It-s-Not-Butter-Bean': {
    name: 'I Can’t Believe It’s Not Butter Bean',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'e79e8009c92c252785202f643faaf0fa18519f3d85e7197e22e09003c15c2bba-g2-i_cant_believe_its_not_butter_bean-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Lemon-Mishap': {
    name: 'Lemon Mishap',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '815527fce0a18273df2114439e90f7de55ba3b17991d2d2d37d4123b5655b824-g2-lemon_mishap-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Library-Card': {
    name: 'Library Card',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'e071cb8ba7c5b3fcdff4741e865847fd734069f53ac73f0759ba6fca2d145945-g2-library_card-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Ouija-Board': {
    name: 'Ouija Board',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '91eeeddca9652e097be058f346a1c77ac7c141f5446d63a5f48bc4ee8cf3456a-g2-ouija_board-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Plan-C': {
    name: 'Plan C',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '388701208b10f005d1b12bc9bab7861397e01cd17f31ce921350ce2d97d02b19-g2-plan_c-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Bible': {
    name: 'The Bible',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '8cca3bb44392db9ff90202723a55349b2f5c026bd635c5c6b74251cbeb26da25-g2-the_bible-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Butter-Bean': {
    name: 'The Butter Bean',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '4221171636f8c7bf5a829df1799509a43f863f7e6aa62f77279e4da46dbf225a-g2-the_butter_bean-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Dad-s-Key': {
    name: 'Dad’s Key',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'b9ed68fece2a1022d00ff234c0328171b5339736f80ccbeb5e78029cf846aa32-g2-dads_key-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Succubus: {
    name: 'Succubus',
    type: 'treasure',
    edition: {
      'Gold Box V2': 1,
    },
    front: '5e080e01821a7de23b0b4cc2786fc0291c375f89cc9cbcd3f51665b37d9662f2-g2-succubus-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Charged-Penny': {
    name: 'Charged Penny',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: '541cabe4ce3347500b243ec5529ad1cf391e9f6a145f32bacb6a8a9b680c533c-g2-charged_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-3': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: '772e1e213bc24cbb4b837a8f3384fe0ce808586d3e3eface68323a53161cd8ff-g2-pills-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Credit-Card': {
    name: 'Credit Card',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'f76b5b98e8be70720f29b603629c4f9060de7066204efe48dd00b07f2b94649e-g2-credit_card-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Holy-Card': {
    name: 'Holy Card',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: '613d6b29767cee50bcf21b30c7d631721adb2f17f53f4f885631a3f752062908-g2-holy_card-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Two-Of-Diamonds': {
    name: 'Two Of Diamonds',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'ae7b7013edfd4dcc3ddd4dd702e1ad932e4152f3f7979f2132cc091d3ee0735a-g2-two_of_diamonds-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Joker: {
    name: 'Joker',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: '4a8e17908edb0ffd770b6d9249a01563b035759935d04d67bf0a1c6699cf6e33-g2-joker-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Jera: {
    name: 'Jera',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'cfc5ed667197e5a6219923932ee89af87bd2674e918ccfa3b502d2ed49e8fbd9-g2-jera-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Cancer: {
    name: 'Cancer',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'dccd4a4d45e965e52d5a521d595078ae5b131a71de065c33e98f959347e9a249-g2-cancer-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pink-Eye': {
    name: 'Pink Eye',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'ddb6a28a809092e033d8a10f8bbdd341f0a4cddff346fa96c5949df97901eca8-g2-pink_eye-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'A-Sack': {
    name: 'A Sack',
    type: 'loot',
    edition: {
      'Gold Box V2': 1,
      Requiem: 1,
    },
    front: 'bdf5a9aefb8ce098f9aa2e2e50239cde3b8d2c8366fb280fbdca260e66456b7d-g2-a_sack-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Begotten: {
    name: 'Begotten',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '479bea7aa5d14e1068c7082c4368b2a46c6dc090ff0b48de417d02e8ce7c5d20-g2-begotten-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Boil: {
    name: 'Boil',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'de4bcfe126ad3e7b05b75d748226548be0a4b81192f6904f581248eacb26e993-g2-boil-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Charger: {
    name: 'Charger',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '06fd9c5792ac3faa2682fc763ff5842e7e8b944b6790b736afbaf0d816604dfb-g2-charger-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Death-s-Head': {
    name: 'Death’s Head',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '2482258c9b562dfe092b93a0b70031caf95651ac669d874f7acfdfb2a2a229b1-g2-deaths_head-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gaper: {
    name: 'Gaper',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '8230ec2dd62af9f709216edee36a56be680396c458e1a6114fd42bf7a0e765df-g2-gaper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Imp: {
    name: 'Imp',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '0ea9ade0102caa7523aa5d63f42d831fd49dff411ff3bf97dab5bb7b3e798663-g2-imp-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Knight: {
    name: 'Knight',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '1bd5ab11647e0befda13e3d6d84e5bc1f078eee4e7cfec53019b8934a8b12013-g2-knight-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Parabite: {
    name: 'Parabite',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '3cce9c267a3f40c3799eaeb5e73c342bce55616e6db1bf7865d94440d2bf0647-g2-parabite-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Ragling: {
    name: 'Ragling',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '024b4d28e08cdf46b72ebf3519745c03f3da9e9d1fbba06db3d53422701bc186-g2-ragling-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Round-Worm': {
    name: 'Round Worm',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '4fdcdf226336991086ac8f27122784636bb0a1f4317b7e456cb1d518803ebf5a-g2-round_worm-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Fistula: {
    name: 'Fistula',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '3f361757cc8cf0d9884c9012ce1149ef653c8d511f19fd05847d6af1e3b7ce82-g2-fistula-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gurglings: {
    name: 'Gurglings',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'b53ce9196ade6773bfe93f2b3ad8659e57e1b944917ba51df506be608845e8a1-g2-gurglings-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Polycephalus: {
    name: 'Polycephalus',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'ec4f1e389e66b8036b357d44045cf5edebd728bba578cd594c14e1e510c94e18-g2-polycephalus-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Steven: {
    name: 'Steven',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'ccf186c8fa63b476b160951ee586e20e52c018f5b6b00f526da9f1e360170b27-g2-steven-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Cage': {
    name: 'The Cage',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '105df99748fd43438edf0fc56e526af12b9bfc03f6305db6d58e500953d21a89-g2-the_cage-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Hush: {
    name: 'Hush',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'cc7bcd1310f60c2355d770e3cbbfafcd199c775c4fcdcca3496002c35a985912-g2-hush-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Fatigue': {
    name: 'Curse Of Fatigue',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'dd4cad4e2ecc358f0b5a6e455cc0899b3a0347c215ad3981e5596fc655213ecc-g2-curse_of_fatigue-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Tiny-Hands': {
    name: 'Curse Of Tiny Hands',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'c438784e6c9fbf1edda063378f09a36b7e3d6e162a924243b69bb79b2b60a3b6-g2-curse_of_tiny_hands-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'I-Am-Error-': {
    name: 'I Am Error!',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: '79b5ee741a78097d1c8a59907edba19d195b1be80b9a2708cd9194cab18e8111-g2-i_am_error-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Trap-Door-': {
    name: 'Trap Door!',
    type: 'monster',
    edition: {
      'Gold Box V2': 1,
    },
    front: 'aa0eb8139cc8173605604a920fd62c384fb1b766ea71c8c8a974738801198faa-g2-trap_door-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Bum-Bo': {
    name: 'Bum-Bo',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '9b10f62f7ff1b1ffad831b377e1f22b65c0bf3214cb861777cd18f1a6b32954d-fsp2-bum_bo-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Bag-O-Trash',
  },
  'Bag-O-Trash': {
    name: 'Bag-O-Trash',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'a2d0a36d3876be977992ea82a98adc1ed8af726d97dea52b2779cc028e70725e-fsp2-bag_o_trash-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Dark-Judas': {
    name: 'Dark Judas',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '9af54e1440f0b0d55f8223399da893a5030fef55d5c32967489509caa46dd69c-fsp2-dark_judas-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Dark-Arts',
  },
  'Dark-Arts': {
    name: 'Dark Arts',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '914679a8c410093a885997d7f9e4b1b74def53008ab86f0ccc1289014943ea8e-fsp2-dark_arts-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Guppy: {
    name: 'Guppy',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '4abb85d0196ab0f0091c56a8d345dcd71bc665d5decb00062e7411f8bdb67e3a-fsp2-guppy-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Infestation',
  },
  Infestation: {
    name: 'Infestation',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'ad11a5071c009d0a4f062326bc6dff73d2bd28ce277ee23a0756f23d640a7d8c-fsp2-infestation-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Whore-Of-Babylon': {
    name: 'Whore Of Babylon',
    type: 'character',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '5ad7774c7d22b8953f7ab16b550029ac6c616a07727b7d490488b3925707d0ab-fsp2-whore_of_babylon-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Gimpy',
  },
  Gimpy: {
    name: 'Gimpy',
    type: 'eternal',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'e887911f34fe25b4c2beb0e2f902abe0569be273467c298333e0acf158246b9f-fsp2-gimpy-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  '1-Up': {
    name: '1-Up',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '9ccc754608d4b95471ec0487fd74ab4f05a8273279e8b4c06fbf80916921fedd-fsp2-1_up-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Abaddon: {
    name: 'Abaddon',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '68b7355c93de2b6a2f78c41fd41f397415731525aea78261ee3ab52a0341c67d-fsp2-abaddon-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Cursed-Eye': {
    name: 'Cursed Eye',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '6676b4e001c1949ed26db6c6db775ac9635af2f7b8f3c6d21c79753518beee92-fsp2-cursed_eye-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Daddy-Long-Legs-treasure': {
    name: 'Daddy Long Legs',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '18f626f12c607b1a9786c312edbc93653c2adc22063f04445de0ce0dd787e626-fsp2-daddy_long_legs-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Euthanasia: {
    name: 'Euthanasia',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '487f3797ff984d4c5fc61becd77ceac44002286fb1613e1f1925c834a971ee52-fsp2-euthanasia-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Game-Breaking-Bug-': {
    name: 'Game Breaking Bug!',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c0c32fc0e9fdf451534f7e65f9ec66b4aac2a91d63edaf6094f3605dddd937d7-fsp2-game_breaking_bug-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Eye': {
    name: 'Guppy’s Eye',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '8bb1b677f8c055b121e9a3f146c72305530ab707585ba9cbbf5ea14c8df817fe-fsp2-guppys_eye-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Head-Of-The-Keeper': {
    name: 'Head Of The Keeper',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'd6aa91f1280bbe7c44326ba8711ad1b86c246fc03c7f3521c62acb8bc60821ff-fsp2-head_of_the_keeper-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Hourglass: {
    name: 'Hourglass',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '7e494401749d900b24f07bb51bd2004c0fdc4e360806c73f6d77d29982b147ce-fsp2-hourglass-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Lard: {
    name: 'Lard',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'ec00093527402537e927b4ffd65cd6989682bc3124063734daf7a3c6f0f8c684-fsp2-lard-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Magnet: {
    name: 'Magnet',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c6cfa3a34f56bdfcbd75087e84fde0b57ff679f8ae83a57ec8093defb6ca69ed-fsp2-magnet-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Eye-Shadow': {
    name: 'Mom’s Eye Shadow',
    type: 'treasure',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '6c7d8cd5ddc4268583e5d7ef5a5c72255558a3e3c087766d1c70337ed38b25ce-fsp2-moms_eye_shadow-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'P-H-D-': {
    name: 'P.H.D.',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'a6b57b7dad422f21f78ca5c0018a208f861de298fca76bb8410ff2a4ae440b77-fsp2-phd-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Polyphemus: {
    name: 'Polyphemus',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '5fa5d9de182fed79db2dd57faf23c67878c3758d9a80dd68639dfeffae9a12a7-fsp2-polyphemus-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Rubber-Cement': {
    name: 'Rubber Cement',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'a8da57b0c3961d70911fd217026978e3025849d9ee2054ae091668ced48c0d2b-fsp2-rubber_cement-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Telepathy-For-Dummies': {
    name: 'Telepathy For Dummies',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '8d4db5818e50fb440328021af74efdcff1b15588edd3aca2cd7e673dca409dc8-fsp2-telepathy_for_dummies-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Wiz': {
    name: 'The Wiz',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c284732f51d1d3431f2cc392d663117b0eb2253295379279f89b026d58e08db9-fsp2-the_wiz-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  '20-20': {
    name: '20/20',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '5f465edc4b8e6a2f797f7184d106f603ce8274271cea6dcd0241bcf58e9460e5-fsp2-20_20-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Black-Candle': {
    name: 'Black Candle',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c5eeaed366f870269eb8697a789df3eb5b5817d4ce3326dccfcd96405d58df43-fsp2-black_candle-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Distant-Admiration': {
    name: 'Distant Admiration',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '6bcf882f5556c392ff913445d4c8db404e070f334f495082a1be531b8f5e8b70-fsp2-distant_admiration-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Divorce-Papers': {
    name: 'Divorce Papers',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '01f479ebddc0b05edf212ee0d17daa6416beff79ef3dd86dc14e4ca4bfdcdab0-fsp2-divorce_papers-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Forget-Me-Now': {
    name: 'Forget Me Now',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '0b7914f3d2c7c729e710c664a97cabf437c78289f90632a0b75441fe9f5ba61a-fsp2-forget_me_now-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Head-Of-Krampus': {
    name: 'Head Of Krampus',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '901f75530e33e9625f1a8be5ab4b7e51cf10f4ebd58c877900c984d8575e1a1c-fsp2-head_of_krampus-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Libra: {
    name: 'Libra',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '000e5f17d53191c3874b265460106a4ac69007ee06da81b76c04ca14dc0fc7ee-fsp2-libra-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mutant-Spider': {
    name: 'Mutant Spider',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'ea8377f04d14251d94dbf05c67aaf060117261687195b48707d802adf6699d0b-fsp2-mutant_spider-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Rainbow-Baby': {
    name: 'Rainbow Baby',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '5d85058b0d0cfa13a5b72e36a5846a159fed25cc10495e67e2a99e233d679e71-fsp2-rainbow_baby-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Red-Candle': {
    name: 'Red Candle',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '57bb176d9fb02ffe09ede46318adb9e9909ea2de096d7707f35a1b445c5e854e-fsp2-red_candle-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Smart-Fly': {
    name: 'Smart Fly',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'db1c3e8508b161e74ba817228ecd4e0bc05341822eaf50c2bf47abbdc4255a73-fsp2-smart_fly-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Athame: {
    name: 'Athame',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '8e7b7940b7d60218fc6034ea641907caea3abff4d90be066c5e4cb17fdac1db6-fsp2-athame-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mama-Haunt': {
    name: 'Mama Haunt',
    type: 'treasure',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '0e15626cbb66de7e16c68a2135faa46b0eddc1ea8eb6e2886b6c4f1948a05f87-fsp2-mama_haunt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'lil-Battery': {
    name: 'lil Battery',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
      Requiem: 2,
    },
    front: 'd9862da90ed2e725c947d89b22b08f1872ddb91907d856e5de2cd4848ec41739-fsp2-lil_battery-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-4': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '823e0321f99c09580b051b2959e6f823e1acb55a44987bd38ab96909e51fe067-fsp2-pills-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-5': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '87a741a1f2e59ee0308945fc9e3a13f9d26aa6ec624d2d9ca47b1b3150f47ee6-fsp2-pills_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-6': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'ffb91c311e63fa7becd37e6d4427e3d37e1cd6820db47b93eba736ed73bc9a05-fsp2-pills_3-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  '-Card': {
    name: '? Card',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '786a5e8a65fdcb6bc81447f13a41eb116f81da463046b6e7a4c1f418a2ad4c02-fsp2-questionmark_card-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Get-Out-Of-Jail-Card': {
    name: 'Get Out Of Jail Card',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '083c0484a490697388df51ace63114d802b39b6cbf3425cd93d43ae23188dba0-fsp2-get_out_of_jail_card-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Ansuz: {
    name: 'Ansuz',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '0460f7f79729219b654f2db363a3e48bb8d598b7c71e8eae9076b6a83c765ab6-fsp2-ansuz-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Perthro: {
    name: 'Perthro',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '28e178dd949882316595fd7bee6bb82a6bc5d0abaf87a5aefa9ca50a32169c7a-fsp2-perthro-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Black-Rune': {
    name: 'Black Rune',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c0a152b922c53159bc9d7fa6dca7a47cf4dd72beb467db073facc51f8060316b-fsp2-black_rune-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'AAA-Battery': {
    name: 'AAA Battery',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'ce6857b22e248344054c508419c68ef9f775e5dc065baf623f7925db027a27e4-fsp2-aaa_battery-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Poker-Chip': {
    name: 'Poker Chip',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '3dda6be3f9aa95ae1231912de6b91435da63827e1bad360a374b70ca03018433-fsp2-poker_chip-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Tape-Worm': {
    name: 'Tape Worm',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '3dd4b7fda422e361b946c55e2dddf911c5c96ee4cefb10044252ba2a154f4e5d-fsp2-tape_worm-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'The-Left-Hand': {
    name: 'The Left Hand',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '08aee2a11b62a5d6e48ada21037633fca9cb912938f29e878a181c6587969aa2-fsp2-the_left_hand-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Gold-Key': {
    name: 'Gold Key',
    type: 'loot',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '44b73b2d31f050066b538b8696dd805f1b4f549b588d5f942bfa59292627885b-fsp2-gold_key-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Bony: {
    name: 'Bony',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '461972d281c31cc995a99df687a9052510df252858d8b74693abc72575d794c0-fsp2-bony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Brain: {
    name: 'Brain',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '595ac51b9a2f6115944da44b1e74594f354fb94542005bab3228482fa6489e98-fsp2-brain-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Flaming-Hopper': {
    name: 'Flaming Hopper',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '86336a67c15359cec6152f5ed2887fd1c8b33bfc2e0aa7f7ce580ba03ec501ef-fsp2-flaming_hopper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Globin: {
    name: 'Globin',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '39d5a5669719492676593a4f28c59ab7351900adbe907cb85e73e32bf87f6e0c-fsp2-globin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Nerve-Ending': {
    name: 'Nerve Ending',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '6f0ba8046e818dc353f55015b36f206a207a3745a4266cb683a6483710f33ce0-fsp2-nerve_ending-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Roundy: {
    name: 'Roundy',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '0b17d38ed7963d747733c2fd85f708b21c956b799c855cd750d365de958fcac6-fsp2-roundy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Sucker: {
    name: 'Sucker',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '3ff753f7ef63228f1ede606b3c112e04643493d7fd2a565b0089ce6398b5fab4-fsp2-sucker-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Swarmer: {
    name: 'Swarmer',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '4d7ca388f327f97e9698442cd4d20d53089c72d5bf100c4e00857fac3aab48b4-fsp2-swarmer-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Tumor: {
    name: 'Tumor',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c078fc7806f66d4bc457668dbfe4124df7a642f5e9d51c5c7de6d362f333b3ee-fsp2-tumor-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Globin': {
    name: 'Cursed Globin',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'c81f96cd05c40289117a451f732437e6ae06a7f477ba76fd856c041e11c28054-fsp2-cursed_globin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Tumor': {
    name: 'Cursed Tumor',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'cd87220eacebb4c76e397a8ac489f06df44becdcfc7157527b8f21f54ca6f78e-fsp2-cursed_tumor-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Bony': {
    name: 'Holy Bony',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'b42c2b68f287a63a209a5068c034aa6f04de9b77324c29d1fe21bc03dc74c9c2-fsp2-holy_bony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Mulligan': {
    name: 'Holy Mulligan',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'd0f093f3423e7ad0ace112ebeb3156be78af3e3d2f7b9ab45595032395129bf4-fsp2-holy_mulligan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Blastocyst: {
    name: 'Blastocyst',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '8a002d9fa2d2c3ca0cc03087714b37500d8509f04ee93c568385f82b9b492a7b-fsp2-blastocyst-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dingle: {
    name: 'Dingle',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '35f6da4b4c496f54e8e572bf0b79fe30acece0016fe03aa9b2095896edf3dc96-fsp2-dingle-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Headless-Horseman': {
    name: 'Headless Horseman',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'bbcc353964ae96cb8acf678f2faaadb7506b80b8b7ecbc289d04a2cc3f477450-fsp2-headless_horseman-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Krampus: {
    name: 'Krampus',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'abdec7cf5a2d85a4340d471142292d3f1ee1e5f9b278477d5c477beea10bfe79-fsp2-krampus-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Monstro-II': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '67bc84f22b6ec79dcc50ce65c4588ba145439fba986efd94e7cfb3cc7fa901b6-fsp2-monstro_ii-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Fallen': {
    name: 'The Fallen',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '88d5d4cfac12b1ff859e4309119d43543c764f5e3cac0b0e01cd57ecadd512c2-fsp2-the_fallen-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Widow: {
    name: 'Widow',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: 'd1887f8fab0c1de6b5ae973ba1d0bb1b57c854f53620efd5637a0bf7fe233ae1-fsp2-widow-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Isaac-': {
    name: 'Isaac!',
    type: 'monster',
    p3: true,
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '4adf90bb921127895ba897ba098b6003415f4724d0e5d0363ae71c30466c9735-fsp2-isaac-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Heart-': {
    name: 'Mom’s Heart!',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '39a1b21f1db93bf54bfb215d2e20d004fd53ca257a9dc29abd9daf6ef21bcd1f-fsp2-moms_heart-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Blood-Lust': {
    name: 'Curse Of Blood Lust',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '960e1dd6c512cf5944bc7c488e3739dca5271e00fc45a1c81e094f7fc04b5c65-fsp2-curse_of_blood_lust-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Impulse': {
    name: 'Curse Of Impulse',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '44429d24d0b7dee3e72b3ea4cc7c6d9f67842a6054afa93baa9e50e424abb6ac-fsp2-curse_of_impulse-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Angel-Room': {
    name: 'Angel Room',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '2921920166c7e931a95f14cad842b3978a59d1f343dca85b4f3c66d2b16b3baf-fsp2-angel_room-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Boss-Rush-': {
    name: 'Boss Rush!',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '47826d7757de682958161531bb0d273b140228be66b3f25215a884e3458b584b-fsp2-boss_rush-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Head-Trauma': {
    name: 'Head Trauma',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '76142c17885c121f330ba2acffc3f5526c18f69c95083eca6b73efd53c09ee82-fsp2-head_trauma-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Chest': {
    name: 'Holy Chest',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '908755f8da1e6542971ec68f42b55685f41f55b035460071030b41fefaa49381-fsp2-holy_chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Spiked-Chest': {
    name: 'Spiked Chest',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '8c7d605e273d906576b83e60268af25aea5d01c8b111383ee664044b76d66606-fsp2-spiked_chest-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Troll-Bombs1': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      'Four Souls+ V2': 1,
    },
    front: '870e71cc0872c09b235e6cd9b817a9db8b209998c47ec1eb8d37604acb6abb82-fsp2-troll_bombs-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Bethany: {
    name: 'Bethany',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '8c56621b56cc7374c447e5de074b71f3ab0fce80c4aae69d1d4da754fee092a1-r-bethany-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Virtues',
  },
  'Book-Of-Virtues': {
    name: 'Book Of Virtues',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '417a2894880584ce2f24e718909953a0c312d9794780d0b97875373f7915cd1e-r-book_of_virtues-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Jacob-Esau': {
    name: 'Jacob & Esau',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'df628449852a36e4dda1a30017a341b256e371a8d82e21bc07ebd7ea660e1d03-r-jacob_and_esau-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Sibling-Rivalry',
  },
  'Sibling-Rivalry': {
    name: 'Sibling Rivalry',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '7dccc7e3479ccf341d0bf8772c7991549fd8c73a6ae731ae2c34788c9036bf57-r-sibling_rivalry-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Broken': {
    name: 'The Broken',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '65e33958c61067e323bf56561b825e6c3dc0c7e458569a3767463048aec4ab02-r-the_broken-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Spindown-Dice',
  },
  'Spindown-Dice': {
    name: 'Spindown Dice',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '9dc496bd53debbc6b32551f39afa14bdaac7ddff5762a549bb5f8027c3867e2d-r-spindown_dice-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Dauntless': {
    name: 'The Dauntless',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'c0e7070c54e84d5eb58fe587a5bfe67d10a65d2f86d25cb975ceffe5bfe3af6e-r-the_dauntless-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Hypercoagulation',
  },
  Hypercoagulation: {
    name: 'Hypercoagulation',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '069788bdcb8d2b362486385f7636a83d6290b0f739ffd6dde3acc4c5c13d2054-r-hypercoagulation-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Hoarder': {
    name: 'The Hoarder',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'fbb4dcf3cea7377412929fd3176df0064aea52c13a14f63d6645d337a404324e-r-the_hoarder-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Bag-Of-Crafting',
  },
  'Bag-Of-Crafting': {
    name: 'Bag Of Crafting',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'dd4fc7c82f60c4acce5961afc856ebdf0ae4fcbefbf66b574dd44a3a788eda54-r-bag_of_crafting-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Deceiver': {
    name: 'The Deceiver',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '33ffa6570c06eb7447e9a4a6ae7b6559255c536b6a55903af223b7fa5bbefb76-r-the_deceiver-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Ceremonial-Blade',
  },
  'Ceremonial-Blade': {
    name: 'Ceremonial Blade',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '37b50c37cea874756eba5250f8964417528ed5f65236fde357079addadc81c08-r-ceremonial_blade-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Soiled': {
    name: 'The Soiled',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '99c687280d386351418e8afacbdde78acc231369b30b885ba7c25c3416f553cd-r-the_soiled-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'IBS',
  },
  IBS: {
    name: 'IBS',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '85ff9ae3c82118124022b8c8709d27f235ce9dca448a860e4cfb0e766190d6e6-r-ibs-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Curdled': {
    name: 'The Curdled',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '492b3d18f218bb0e8bf4736252bb8695c7839e0309d0b368bd78da68464b456f-r-the_curdled-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Sumptorium',
  },
  Sumptorium: {
    name: 'Sumptorium',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'e2babf612c6e0d4dab1251a0ff0423a73dfd904f84b7053b52414a484e3f1336-r-sumptorium-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Savage': {
    name: 'The Savage',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'b3a32ac6d348f592f6d9ec89e8dfad9c9769bc0ef26eae51aa1aba314db0e8c4-r-the_savage-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Berserk',
  },
  Berserk: {
    name: 'Berserk',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '9f08c98807d342af1f19362a6091a86e48a53e378f0d328fee1f1c9976a36040-r-berserk-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Benighted': {
    name: 'The Benighted',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '0474e96826fdecb85939ddffa531ed876c098a40b7350cc692342b6ffa76964c-r-the_benighted-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Hemoptysis',
  },
  Hemoptysis: {
    name: 'Hemoptysis',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '797dee9eeb5b6e2536352954f30b604aa17b54fffed48d888fc8944b92053468-r-hemoptysis-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Enigma-amginE-ehT': {
    name: 'The Enigma/amginE ehT',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '260b8199da80c6ca728bdf6b2892c8ba51ea33b00bfc55bbff13b0c55b1acccb-r-the_enigma-308x420.webp',
    back: '2b26f4f6223a14f31908d8c6484691252ab848d3c0405d7cc01c9e812728cb4d-r-the_enigma_back-308x420.webp',
    eternal: 'Flip',
  },
  Flip: {
    name: 'Flip',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '896b1c538738ef0d89ff56ae3cc4009f7b52aa51fa7930f0fc122d676d5dcbcf-r-flip-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Capricious': {
    name: 'The Capricious',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '237e51e99f6de24e33b3b67a06213910a442093e623dfa1aed99264c98c42738-r-the_capricious-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Glitch',
  },
  Glitch: {
    name: 'Glitch',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'f7839537f8cf35c2f203bd8991185813c62a53b993ea7ecec62fdc62d7fa9d5f-r-glitch-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Baleful': {
    name: 'The Baleful',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '87d65658bfd85bbad95de46a69b02463652cab6ff51645555e067d320aa3e83e-r-the_baleful-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Soulbond',
  },
  Soulbond: {
    name: 'Soulbond',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'cd1a7e057a0dbb6575b3af22c724c1b3279baa5bab9b50f8ad3f731b8ddd79f6-r-soulbond-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Harlot': {
    name: 'The Harlot',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'b53a300a89d3e4f91ba16d9f6330685fb35e50b1238637322f2ac62d673f8f37-r-the_harlot-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Gello',
  },
  Gello: {
    name: 'Gello',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'e3902edaf6010d686596849217f627f964f60dcdd1b2bc5df7e7a0f114d9a402-r-gello-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Miser': {
    name: 'The Miser',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '70bb99c40de1673e460890162259df846f7e71a933794113ff133b80cf62a7ca-r-the_miser-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Keeper-s-Bargain',
  },
  'Keeper-s-Bargain': {
    name: 'Keeper’s Bargain',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'd27aebb7477b2ff8288be8e551342f55a862564698305e3a5297e3380a9f8228-r-keepers_bargain-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Empty': {
    name: 'The Empty',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '8c987b752e407d96a408dc7f31f6505018c398558d83ed9313a66be6ed8706b3-r-the_empty-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Abyss',
  },
  Abyss: {
    name: 'Abyss',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'fadd73ffccc9450e5bb87e8798e09aebce7f1fc4718f60d1a6b29a3ce9a39ed9-r-abyss-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Fettered': {
    name: 'The Fettered',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '999143dc60b84a5b719cd09b8b5bff2a1e0f614394aa8286f04079c94ff6cce5-r-the_fettered-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Dead-Weight',
  },
  'Dead-Weight': {
    name: 'Dead Weight',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: 'e358105603f3f48e2fe83cbd19987d45c9fa343d9e47595b6714f444bb9bda9a-r-dead_weight-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Zealot': {
    name: 'The Zealot',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '19d7265054816cc333258742ab42879b7131d3538f04b87d86cff2c80df0c881-r-the_zealot-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lemegeton',
  },
  Lemegeton: {
    name: 'Lemegeton',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '0039836c7a852a1f44457fff6611efc0b9713ca2151a7fa6591a346745c4578d-r-lemegeton-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Deserter': {
    name: 'The Deserter',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '0873637321102b610f122ab3238e44217d621f556dad50c0d03fa2d2d98f3b8e-r-the_deserter-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Anima-Sola-The-Revenant',
  },
  'Anima-Sola-The-Revenant': {
    name: 'Anima Sola/The Revenant',
    type: 'eternal',
    edition: {
      Requiem: 1,
    },
    front: '1b56d5ea0fa8be201705261be1c71338b0763ecbc48c867b32935095b21ec3b4-r-anima_sola-308x420.webp',
    back: 'ace003bbdb50fef96c94543068edc2e6d0521db6a9474d486e9ac8c02cef1619-r-the_revenant-308x420.webp',
  },
  'Flash-Isaac': {
    name: 'Flash Isaac',
    type: 'character',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '922cb5455e8d43dd2a7b774c5e06538ba9c4dfb5cdcbff9ea15126dba48aad0f-r-flash_isaac-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Classic-Roller',
  },
  'Classic-Roller': {
    name: 'Classic Roller',
    type: 'eternal',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '85a3be52007652b106e665bcb8db5f52bb48cc69995e31d92ffd4d83846e5d15-r-classic_roller-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Eden1: {
    name: 'Eden',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: '3e23e4d8ffabbd2ba8eb45537fdf4cac1f7501e08d58685ffa6932931114de9d-r-eden_2-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  Eden2: {
    name: 'Eden',
    type: 'character',
    edition: {
      Requiem: 1,
    },
    front: 'ded06c2a3780a71d3458f8cb471c904b65b0f5d7d5149e8113f257ebdcb2faa9-r-eden-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  Abel: {
    name: 'Abel',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '2b5527b0b58548ba45bffffa30f74064aeba4c2d6fadf88c3852e4e5e4fbce12-r-abel-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Alabaster-Box': {
    name: 'Alabaster Box',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '6a09cdcb98d6afd3e2bd0f5402ded6741e7c9650b156494ba6cb501dd2fee504-r-alabaster_box-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Backstabber: {
    name: 'Backstabber',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '11643cca5c3775d1fbd1cda32fa15aba7888ada74582586bbde4c27b898e7483-r-backstabber-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Ball-Of-Bandages': {
    name: 'Ball Of Bandages',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'd7f98357d69e51053d1c502dd2bbaa231a4e7cae57089e9459f6df28b3bce7c3-r-ball_of_bandages-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Blood-Puppy': {
    name: 'Blood Puppy',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'ae1dd9eda5219ae0cbe7384ecf7e270a5d990bde5e795adee17008d6d4755043-r-blood_puppy-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Bobby-Bomb': {
    name: 'Bobby Bomb',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '91fa71995b6930a33dbf05169531a474d6c37be12aea5f13e6471303329b960c-r-bobby_bomb-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Chocolate-Milk': {
    name: 'Chocolate Milk',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '65657572a9be548be5c49f4e2acba908f92d75be21a480cfb84d889075e872df-r-chocolate_milk-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Consolation-Prize': {
    name: 'Consolation Prize',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '5131f4611addd8031aec88dc3107afc805ac4b8ecd5071900418b9d63cc47192-r-consolation_prize-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Damocles: {
    name: 'Damocles',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'b43f8a6853e210bab6ff03943593337c67b4cab8cbc96a7356024dd5704ea4dd-r-damocles-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Fire-Mind': {
    name: 'Fire Mind',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '7e78ce78c50e0798dafefd63447f6cd2826a1484b10daee74734ed83a4ef1324-r-fire_mind-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Gnawed-Leaf': {
    name: 'Gnawed Leaf',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '4053d4aa6d78194f150c994a132b82124b232bc0249afd37ca659c73a2a86793-r-gnawed_leaf-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Halo-Of-Flies': {
    name: 'Halo Of Flies',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '10fc6455dbecb3a5fbacfb77aabaec886d3bbc534840ea03839460f687b07b37-r-halo_of_flies-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Handicapped-Placard': {
    name: 'Handicapped Placard',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '7a52d63aa2f6a63efdb594d0435f5ee35db65fc2871550696ee28b96c8e7d4ab-r-handicapped_placard-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Judas-Shadow': {
    name: 'Judas’ Shadow',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '966e27b66a6d1bad37f5e01a38c9d2a97a3b219c477e3d5af65069e47b1b7013-r-judas_shadow-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Keeper-s-Box': {
    name: 'Keeper’s Box',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '17d1d1defb82a840805358ff752cfbe72fdcbc49085b0333cd4e43084b3d6ba5-r-keepers_box-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Lil-Chest': {
    name: 'Lil Chest',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '88b191f3deda1242b15e3dbc6478832a2a169872a2123cc3e982d2b2f07ab55f-r-lil_chest-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Lodestone: {
    name: 'Lodestone',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '1dcc30e711978dda030cecca3dd883411498efe366ba045d4dcd6fa76d9495ad-r-lodestone-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Lunch: {
    name: 'Lunch',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'fdd117160b06257c3be806a0efcbc948258685eb1b1f256482560299df9ec79b-r-lunch-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mom-s-Bottle-of-Pills': {
    name: 'Mom’s Bottle of Pills',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '041f04a279f036e30efa7ce1304b134739c90e05da5222f9d8942d55cf467fb2-r-moms_bottle_of_pills-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Playdough-Cookie': {
    name: 'Playdough Cookie',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'b7cf9c01412012328f7d9c5669c7fa71a3b4ab3bc6e847a35478752e379b9a6e-r-playdough_cookie-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Punching-Bag': {
    name: 'Punching Bag',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'c0b012bdd35cabbf0c71ec84ed78d6f55f9722aff89afeade756b714e407f1da-r-punching_bag-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Rock-Bottom': {
    name: 'Rock Bottom',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '1cc3ad64cedf5a79c6f9e0ce2836fb315791d37b7ab8c9703d746d2022f37ab7-r-rock_bottom-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Spelunker-Hat': {
    name: 'Spelunker Hat',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '98e60e769b08e4bcc7d1ae1b93d6c5601378355ee9f92204bccbb631410013c1-r-spelunker_hat-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Trick-Penny': {
    name: 'Trick Penny',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '5a31366ec2b58c48396e77d7c085babb21b1ef4db68cf3a170d027d4be66f99e-r-trick_penny-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Ultra-Flesh-Kid-': {
    name: 'Ultra Flesh Kid!',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'dfe8f36ae49adb7ef889f248c11605f54f8aca1e2153ac4dd51c74fa62bc5e23-r-ultra_flesh_kid-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Auction-Gavel': {
    name: 'Auction Gavel',
    type: 'treasure',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '81d635e61a187e39e5523aa90de175fb03dba916ae9b625bbd9cbdab544306fc-r-auction_gavel-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Birthright: {
    name: 'Birthright',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '6e6c57e68e6daead6258ed0e5c44908158810c22e0b8545ca5eb9378c5ea0477-r-birthright-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Book-Of-The-Dead': {
    name: 'Book Of The Dead',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'a44e0845fb0681c40996464a86f69012fe2dad66a40d5ecb7826506ce9b54cfa-r-book_of_the_dead-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Eternal-D6': {
    name: 'Eternal D6',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '2144afff3547f7c67924860fde85c64ad1eca4aa15478cff670eab00729d2f30-r-eternal_d6-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Experimental-Treatment': {
    name: 'Experimental Treatment',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'e11f2b243a5020c3108c7e22862ca403da997edb25494fa848eb7e39b0f8c056-r-experimental_treatment-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Friendly-Ball': {
    name: 'Friendly Ball',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'fc9faa2fcd63e9cb58adf79b530f0e04271e70fa5972061d93d4889c0c247c37-r-friendly_ball-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Friendly-Sack': {
    name: 'Friendly Sack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '7281ac2fd8537082776a268c71cea338566058650eabe575e6e448838d8c999c-r-friendly_sack-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Hand-Me-Downs': {
    name: 'Hand Me Downs',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'e08e6adef863bfa21e2164b4a3c75667cf82f38c2d81c5254581f219e04c921e-r-hand_me_downs-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Jar-Of-Flies': {
    name: 'Jar Of Flies',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '3d094a852c8cb024ad6eb70960a1ccbc0553cdb8b7dd1ec1f24521aa51e42932-r-jar_of_flies-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Keeper-s-Penny': {
    name: 'Keeper’s Penny',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '8fc98e6b552b99e54254702330838db559a448edb07efb74fcd1417dc188dfc7-r-keepers_penny-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Magic-Skin': {
    name: 'Magic Skin',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '1762c6874355e05db0ad2eedac4a657734b9ac059dc886119f06218ccff5063c-r-magic_skin-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Mama-Mega': {
    name: 'Mama Mega',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '6446bf98898c93e83663d3d659d188288ee06e7292353ebb94d731b6b2ea8fbf-r-mama_mega-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Marbles: {
    name: 'Marbles',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '88ff3375848920e06c4ef17c1be46a80a0537a0e0b1da2dc3a52c7c58e345cfb-r-marbles-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Member-Card': {
    name: 'Member Card',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '5061538375f23fa9d2b492bddff77826bd02e430a5a19110a942d9a9f24ae14f-r-member_card-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'R-Key': {
    name: 'R Key',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'e815b725d562326e587147865b80ccbc5d5cbf25faf8d4b7f0875dacaf641900-r-r_key-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Red-Key': {
    name: 'Red Key',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '7c03afa6fd5216dee36e7d91a5ed69c32389536897e56f327910347a73fc44d6-r-red_key-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Clicker': {
    name: 'The Clicker',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'cb9c9fcf456bdc540e3d0e47253d18b4f756e3ab0fe8cdc19c84a201d444f8ef-r-the_clicker-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Undefined: {
    name: 'Undefined',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '34a1f63d8bfb8aadfc3d81073863c79bfc32936a3fad1787e0013cef5c3eed1b-r-undefined-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'X-Ray-Vision': {
    name: 'X-Ray Vision',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '561a8dadb183c8c2cb5a0d31d4cc272ec6441e9a3639d964eb17f10b368a7d43-r-x_ray_vision-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Battery-Pack': {
    name: 'Battery Pack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'a3a40f074102f53a64279ecdcb75c14e4eb58702c37febc665419e9a39fc3629-r-battery_pack-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Car-Battery': {
    name: 'Car Battery',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'e9e9a982ac370277a84a6740a446ccee317b9076f32fe1d807c7e68394a132eb-r-car_battery-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Hallowed-Ground': {
    name: 'Hallowed Ground',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: 'aead67341354fd32fce01337412605adf6f4162f7c16e87b8a2632017971ac89-r-hallowed_ground-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Keeper-s-Sack': {
    name: 'Keeper’s Sack',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '0152db31bd192368a92232474a6d5e52f30d73819a9e83a56192693abd10a4c6-r-keepers_sack-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Pageant-Boy': {
    name: 'Pageant Boy',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '702c4e6a5c7eab978131eeade3acedbf37f1c5d72dfa75c349fd24b1b61b737a-r-pageant_boy-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Sacrificial-Dagger': {
    name: 'Sacrificial Dagger',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '6dc0d9717dcef300276ad713d48114234ca75bf3ad75ac49a4afe6a6f9d9b50d-r-sacrificial_dagger-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Jar': {
    name: 'The Jar',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '83ae0d19767a4f07f99a82cec8af74e4c1e797559e52f18c477a94404054e8aa-r-the_jar-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Cursed-Soul': {
    name: 'Cursed Soul',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '4f0ba81b1bb925d7190808a6e2d5300aea5e3fb81c422c936ce6323d05641195-r-cursed_soul-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Fetal-Haunt': {
    name: 'Fetal Haunt',
    type: 'treasure',
    edition: {
      Requiem: 1,
    },
    front: '63e17bc8116ac6a372693c876a976d712ef3712432f3b21f42aa5f3f21eccd33-r-fetal_haunt-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'A-Lucky-Penny-': {
    name: 'A Lucky Penny!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '599a9353f3b3acc3da5427b05074c29d083f15eef51a82e3d90d7cfe94874880-r-a_lucky_penny-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Sticky-Nickel': {
    name: 'Sticky Nickel',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '09fb02efbb7fc1fccc000a201abdd5958f703b46a453da8cd33466526fc7f163-r-sticky_nickel-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Mega-Bomb-': {
    name: 'Mega Bomb!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'dc613fe58a069582d301251fc8413ac26c6757a9695c21cca6794d528e4bd345-r-mega_bomb-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-7': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'b397e19a7891011753599c512d2bc0b805e4aa80681bfefd9d27b255dd259e48-r-pills-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Pills-8': {
    name: 'Pills!',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '0a071fb82d0acc7bc1d7b26de8a45caa0722c3dcf47f903608e96e6d47976e30-r-pills_2-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Black-Heart': {
    name: 'Black Heart',
    type: 'loot',
    edition: {
      Requiem: 2,
    },
    front: '72d419f556d5da29d28e33b9ff3dd09fce6c90d90bec66c299ba47040e3cfc0c-r-black_heart-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Ace-Of-Diamonds': {
    name: 'Ace Of Diamonds',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '514e4668147eefa50546cb8d58918b1f118615563e0424b46c7efd816cfdde16-r-ace_of_diamonds-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Emergency-Contact': {
    name: 'Emergency Contact',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '81a6439f3ff357c0ac02969610d0f37f2a57cbeb4cf34e651f750f776858f9c5-r-emergency_contact-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Two-Of-Spades': {
    name: 'Two Of Spades',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'b48a3c26f158e61c199945b380bc931ea496c0139b7f8af32c998bdc113af358-r-two_of_spades-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Algiz: {
    name: 'Algiz',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '7e54d515c8d87a3b97a199f09390f766d190054f447aa3d741bf3a1bd34fb5f5-r-algiz-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Berkano: {
    name: 'Berkano',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'd27f65aa3806c49a886409ec80a953c72123c9cf29644ef164ce19d17c21a316-r-berkano-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Hagalaz: {
    name: 'Hagalaz',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'bec22d7236e815962a4b8e58a290f364a2997b5be7a72f4e8df9ab11d5fb3c90-r-hagalaz-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Bag-Lunch': {
    name: 'Bag Lunch',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '9337f611055d94e2f8364a4400768efdb7d034dfd583527a75e68aa5c0075b47-r-bag_lunch-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Broken-Remote': {
    name: 'Broken Remote',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '6e1a0686a04c3f32f5416d481b838f2d6629d4d0ab088e8e5e5060ab2dd8001b-r-broken_remote-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Callus: {
    name: 'Callus',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '3e4af123b0d78eae7394edc9b91b6c0f181de50d8be2b3417914027d87caf824-r-callus-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Golden-Trinket': {
    name: 'Golden Trinket',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'a1dbf193abf6d2fdad535d0e32f90bbe2a6b31f079c0651fef84d8efd2283a38-r-golden_trinket-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Lucky-Toe': {
    name: 'Lucky Toe',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'd3aa3f99cdf9505bed3efe01df7cae3d23fcf3b4b26e09fd4000318e06ff526d-r-lucky_toe-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Rib-Of-Greed': {
    name: 'Rib Of Greed',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'bf2c844a0303576603c7d6723c1100c73d166eae6f5f3133f2e0432b1fa0fe89-r-rib_of_greed-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Tick: {
    name: 'Tick',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '56b099933fb4145885431839b99667f15d932ab720fd7e00831529a3be99b935-r-tick-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Wishbone: {
    name: 'Wishbone',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '5e4225760eff0bdb3019460da7050095514cecc76323f930966002b0500ddacd-r-wishbone-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Dad-s-Note': {
    name: 'Dad’s Note',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '7c9fd3ab1e573a5fc11b70fa698e3b17441db5cc1e43b231fdf085723ce753d9-r-dads_note-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Key: {
    name: 'Key',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: '36132844f4e7d6bd78015f275e7f9f680e25f72213f262e5e213936625ef5bdf-r-key-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Magic-Marker': {
    name: 'Magic Marker',
    type: 'loot',
    edition: {
      Requiem: 1,
    },
    front: 'a914d0fe2bd172313740a1218cdf06fd6fb2006fbe27ba3e16759353b2c1cbd4-r-magic_marker-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Corny: {
    name: 'Corny',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '6337e9ba04b80d21838c74e316a74ba5f00df17e5225ecff2127c611b2a51954-r-corny-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dogma: {
    name: 'Dogma',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'c8c73ba0b3dac8f266b053301600e2029fae8209279064f1f2d224effad4ff2f-r-dogma-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Gutted-Fatty': {
    name: 'Gutted Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '85894e2977643dcf0e900255603faea8a97275f85945ee28f12771aa04506116-r-gutted_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Mushroom: {
    name: 'Mushroom',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '01faa4ce709eb916a10e3272dda88aa2844873c43f884985547563e71abbff0b-r-mushroom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Null: {
    name: 'Null',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '410a298577f7f65d33754fb62212ba05cb44a90ff3f348fa8fb22311d7d5cb8b-r-null-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Peeping-Fatty': {
    name: 'Peeping Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '898d2568eb37c847f12ca0b5d5e642d37f99184132467c71e9c66f2a64b9413c-r-peeping_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Red-Ghost': {
    name: 'Red Ghost',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '60f47baae265180b73df76a3dc05966188e8734b6049bf55a7e5cce28d171dff-r-red_ghost-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Whipper: {
    name: 'Whipper',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'fe9d265bb376180cbc0b2efc4412c66b275103d9214516ad8f2d14d9731a68a4-r-whipper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Mulliboom': {
    name: 'Cursed Mulliboom',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '768ee92b9803b2907454be57d59fc2d4a46a3072dc0a6c007f6b774bda2b2d5d-r-cursed_mulliboom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Dople': {
    name: 'Cursed Dople',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'db7a205ca2b03f5155bb90a678a0038ec1457f0428aca5f16451b40c2f0f3f4d-r-cursed_dople-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Lil-Haunt': {
    name: 'Cursed Lil Haunt',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'a353daff57c54ded7c2f261889680496acc03c551d6fa5c554225caeb4e6a4b0-r-cursed_lil_haunt-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Cursed-Mulligan': {
    name: 'Cursed Mulligan',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '253fc62219e2ce5cdfad6a8b07effd4e51b7a97b4a2bb79a5f54d09b20f97b28-r-cursed_mulligan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Brain': {
    name: 'Holy Brain',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '5104df77a4d8f06333339b6ac9dcdb2afbc33d4b4bde7f30a93653e8d1064843-r-holy_brain-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Greedling': {
    name: 'Holy Greedling',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '87ccd6fe2ee517eb3729d03cb9c9b5d4b109d0ad3affa8874fd1390d14064793-r-holy_greedling-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Portal': {
    name: 'Holy Portal',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'daf09ca5f4491f875aa082e64926eea62fed3658f124689c58ec1a2aa2fe54fe-r-holy_portal-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Holy-Psy-Horf': {
    name: 'Holy Psy Horf',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '5bf8bf5978bbdf2a95e62b4078d3dce672c907c3370abc0008564a912c9790e9-r-holy_psy_horf-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Bony': {
    name: 'Charmed Bony',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '28459abfc5fcf10563b12a25f0fab4e5fb73b132225b00c28d12354c795eff56-r-charmed_bony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Clotty': {
    name: 'Charmed Clotty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'ef8771df46e924e3492a5a110fff0df49c21814795517058d7259bbff1227b5c-r-charmed_clotty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Dip': {
    name: 'Charmed Dip',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'fdd0a1956b13bd96caddde88b72ad5098e0055405301fbbabf606efe1eea8270-r-charmed_dip-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Fat-Bat': {
    name: 'Charmed Fat Bat',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '8f779ad2ef63bc26eaea80f4250e28c669f7876f79210859a73900a9bd7d1431-r-charmed_fat_bat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Fatty': {
    name: 'Charmed Fatty',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '693468e43a2b96b0c7c1a98d5976c545ccf75ce26ef58883c31f56292ffa11a8-r-charmed_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Globin': {
    name: 'Charmed Globin',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '012f75501aeae0b6239c086fa438b837cff46daea28b5ec9747d2d2da4269250-r-charmed_globin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Greedling': {
    name: 'Charmed Greedling',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'c6009bc2ae667667293db41c83201a2102aa4e734d6aec3f09219bd5a3805e51-r-charmed_greedling-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Keeper': {
    name: 'Charmed Keeper',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '94924f811215c4ae60a83c7d8b7f15f239ca42fad0dea05d635a4e3fedfa6f2c-r-charmed_keeper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Baby-Plum': {
    name: 'Baby Plum',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'b6f6307f2c091131196ec4755a89436530707c2aefa6b207eac089bbb7fac3c3-r-baby_plum-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Brownie: {
    name: 'Brownie',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'fe00373cf53749b328893a82f985a635957964627c52b399c45ba9035778ee74-r-brownie-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Charmed-Monstro': {
    name: 'Charmed Monstro',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '135a4826c4ae53a8fa9bf5ad4f6a3fe1ea54c8983aae6ca1f8d2c367429a026c-r-charmed_monstro-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Clog: {
    name: 'Clog',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '33db7e97b5a151471e984acbdb895a392f989da4fba370b3124c92352058fb12-r-clog-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Hornfel: {
    name: 'Hornfel',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '00dad89c5a50a09819b9d55e205583dba5dabb43d01111bff8b303076893270c-r-hornfel-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mama-Gurdy': {
    name: 'Mama Gurdy',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'c48b228f625166e3610ef489b02a106a3ff551c33aa90cf6f4a5be3dd60d59e8-r-mama_gurdy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Rag-Mega': {
    name: 'Rag Mega',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '0e0bbdb95b6fd3464898bf7161ad9c2a6ebca86f95ee11f5224b2c12d60b7b1b-r-rag_mega-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Sisters-Vis': {
    name: 'Sisters Vis',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'd75353beecfd6d7159a0fa2e4a27d66a2623964242887c030cd749cdc214bca2-r-sisters_vis-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Rainmaker': {
    name: 'The Rainmaker',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '73c59b99ff6a5f6b77d990376d4f8b9215ba3454ed7c46dbfc16c71f2caed1b6-r-the_rainmaker-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Scourge': {
    name: 'The Scourge',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '3d82f609b076c73b4592c6ade404a1ee57e4d67df5622b2f4f68ba2ac4a0c611-r-the_scourge-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Siren': {
    name: 'The Siren',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '7fc11e7544d1645e53a814f5d1847756d08fe189aa2a5b57025429b142195178-r-the_siren-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Turdlings: {
    name: 'Turdlings',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '560fcc85a1750c2ed1311977b4210d58a8c246b229eb0f76b5fe0c39519a1676-r-turdlings-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ultra-Greed-': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '2030a96ddfc4cdc171fc92c04e2c7ec880ce1e73a9c42b852aa870d6d2b7949c-r-ultra_greed-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Satan-': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '57d3be57dbcd701b9d805ee07646bd5629010c7fcd3fca3d9e7d6947701d4f4c-r-mega_satan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'MOTHER-': {
    name: 'MOTHER!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'ac4b5b694a13d219ac875eed61de4d7b6dd9524ed16ea420ef87d8a51a98a161-r-mother-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-Empathy': {
    name: 'Curse Of Empathy',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'a1a37005661aeeff17a3366ca1f4c911f87bc2fbc09ee26358b890e17d2e3248-r-curse_of_empathy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-The-Hollow': {
    name: 'Curse Of The Hollow',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '7d5ebeef8a2fc6ad3c55fa0a0e6bb970a01de5d51cd851f24af62a4f48105092-r-curse_of_the_hollow-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-The-Hunted': {
    name: 'Curse Of The Hunted',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '0d6869400c1bbfdf045b745a2cb654538e0150742d98876ccc2476c250339ef4-r-curse_of_the_hunted-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-The-Soulless': {
    name: 'Curse Of The Soulless',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '373d9ef42ebb014158ca40d61aad79a6f87c92b80e533662315892dac790b7d4-r-curse_of_the_soulless-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Betrayal-': {
    name: 'Betrayal!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '4a6d537e6ccd1ffe94e657d17875bad79c6eb890caf2e9da2531f8908090e32b-r-betrayal-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Double-Treasure-': {
    name: 'Double Treasure!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'dc8b1a18a19023183d4692ec03b028b95ede5b15c2f372768d3e2542e4108349-r-double_treasure-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dressing-Table': {
    name: 'Dressing Table',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '365fbdbb46fb28a9513df1a736d9ccc81603158de5884edd40b56019c4dc4069-r-dressing_table-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Golden-Troll-Bomb-': {
    name: 'Golden Troll Bomb!',
    type: 'monster',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '10dae93badc210f598c4e58090d41ac34f87d5af734197e800d236e908c30146-r-golden_troll_bomb-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Lust-For-Blood-': {
    name: 'Lust For Blood!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '035a4e6412e70e4d76d68ee1ae9707646ebc5aff50a6fdbeb717f2cd66388b58-r-lust_for_blood-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mother-s-Shadow-': {
    name: 'Mother’s Shadow!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '707f16fc881ee553137751f57f57221a732cf23e8d264657c4d047eb43f85e3a-r-mothers_shadow-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Overflow-': {
    name: 'Overflow!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'c13ee6895ee59b3c42e486fd94ed61135e6b1a5f57142962372684452b2282a7-r-overflow-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Pitfall-': {
    name: 'Pitfall!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'c92a5b6dcbb148d7274a9b0fa7902acc219d4686e9a4c3a6f37a23d51eda08ec-r-pitfall-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Tnt-Barrel': {
    name: 'Tnt Barrel',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '3b984ca99b7af7038d96185aa6f6d429ee979467eb31c0379e6bc52cac843610-r-tnt_barrel-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Troll-Bombs2': {
    name: 'Troll Bombs',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: 'f4dd99ef97ffe0a362406a74ee4f37ab247396afa11b8e9106e36fa1cdccf290-r-troll_bombs-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'All-Hallows-Eve': {
    name: 'All Hallows’ Eve',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'ba10a614fd6034c7535b7d60fa1737389d271d993c73d6a7eb5b8524eee5ed53-r-all_hallows_eve-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Angelic-Intervention': {
    name: 'Angelic Intervention',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '65c7de5274f42d79da576e4cba0fdb259432027fa38440609b52747b9cc7ede4-r-angelic_intervention-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Battle-Royale-': {
    name: 'Battle Royale!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '2774b7cfc4ed1983bc44078fb94fdf2190cd14ee6cf17a601bb84634a38cfebe-r-battle_royale-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Battle-Royale-1': {
    name: 'Battle Royale!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '02cd93e211f7c6fc86fc6743895c36ce8a34e81f338e0c2257606a135c147236-r-battle_royale_2-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Battle-Royale-2': {
    name: 'Battle Royale!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '644f275afbb1b9035472522fd19e90ad6a435c94f6264f2aa79c7482b0d0ab9b-r-battle_royale_3-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  Beggar: {
    name: 'Beggar',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'c4db1f331c5d58dd8f4e0f15acc22bf88d3f3b44fb28556554607577a4fc22ba-r-beggar-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Black-Champions': {
    name: 'Black Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'bbf4c12c15fafdda0113ce35430702547dce167500f5a69deacbb2649b82ed47-r-black_champions-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blessing-Of-Gluttony': {
    name: 'Blessing Of Gluttony',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'add9e9217ca582938d32933936566c9008f7ec029c79ca167eba6b52f23d8146-r-blessing_of_gluttony-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blessing-Of-Greed': {
    name: 'Blessing Of Greed',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '0abdc7572ad1e69bc6740a13c75c4cf5b190a174b7cf681520f2a3a75bed0aa1-r-blessing_of_greed-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blessing-Of-Steam': {
    name: 'Blessing Of Steam',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '3388d36053f291f88189ce71063612b4880157dbbfc9578b2bd9a3e3484d910c-r-blessing_of_steam-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blessing-Of-The-Inner-Eye': {
    name: 'Blessing Of The Inner Eye',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '0e8b01a7e58fda849d708c460925239529579f83313959abd2916d6f0971454d-r-blessing_of_the_inner_eye-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blessing-Of-The-Sack': {
    name: 'Blessing Of The Sack',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'c1d377ed5a9e95ac9d3fb19fac2552fb0b71d775e3adad6f4e98a69978017084-r-blessing_of_the_sack-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blind-Rage': {
    name: 'Blind Rage',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '676299b4b96971f11f53be1cc1e25b632c40018b6166e9a47ddf93462367fc0d-r-blind_rage-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blood-Donation': {
    name: 'Blood Donation',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '80469806b8d0a469493bf0e876281d86e9b93d6d1b57c034d18ef7dfd06e73d9-r-blood_donation-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blood-Lust-room': {
    name: 'Blood Lust',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'b8577ca086efb16ead6d54b5a597d5b192bb2b5468daba0f27e18449b1d659e7-r-blood_lust-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Blood-Money': {
    name: 'Blood Money',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '976e7e0e1a57cff6d91ff2b1fa444ea1e115c953b53ded712ad81b6dfb93dd6b-r-blood_money-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Bomb-Bum': {
    name: 'Bomb Bum',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '719e7b2891d4d8b6ed7efc12145b673e1c83c16dfce00d6ecd7cb0f6d3522b52-r-bomb_bum-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Bum-Bo-Is-Loose-': {
    name: 'Bum-Bo Is Loose!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '1a47d74632c8de5155df6a77255aab0a9b39687d26956d649c64788373b5d633-r-bum_bo_is_loose-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Butter-Fingers': {
    name: 'Butter Fingers',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '0946afabeb9a4da7ee31a711816e4430b4e4e377027588521f3826a594f1627a-r-butter_fingers-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Challenge-Room': {
    name: 'Challenge Room',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '80bb297c828f8d2c54a1a32f9da5f4cc458e40a1b12cc30e31176c24b3d43b8a-r-challenge_room-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Conjoined-Twin': {
    name: 'Conjoined Twin',
    type: 'room',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: '19a0d7ad36a4f3b1777233869eeed1ce5664163d3cd144f47d599f0cb1e128d1-r-conjoined_twin-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Devil-Beggar': {
    name: 'Devil Beggar',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '8d5067763686d659df2d771795782682cbb455e55954a34dd95defefca7e892d-r-devil_beggar-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-': {
    name: 'Dice Room!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '213eefc1682ced78a4e4c2f9386cb923d619443662bc48aed888b81768310ea9-r-dice_room_1-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-1': {
    name: 'Dice Room!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '46b4436136da2364e9108e14cdf27c1a846025f19724697d462615fcb4780d09-r-dice_room_2-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-2': {
    name: 'Dice Room!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '19bca1077341c5320e262a4907b8e5f7255e9de91860e5aa2f8b1ce921757cb0-r-dice_room_3-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-3': {
    name: 'Dice Room!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'c0445dc84a9ae687a8a4f413171068b5d57eb10fae506d4f4ffb2467f069c856-r-dice_room_4-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-4': {
    name: 'Dice Room!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'f34b464632fbd6027d27fa5413209ba351bc1c8fccd02b9bc134b1963108c68e-r-dice_room_5-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Dice-Room-5': {
    name: 'Dice Room!!!!!!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '96e33e3bc4bca268f7a25f831b52f104a930666f8ce2db0cf7251aaf03334688-r-dice_room_6-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Eden-s-Blessing-room': {
    name: 'Eden’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '121fb81154cc172c03dd7702a35f9a709457fab2202da09ab1dfbdd4f019449c-r-edens_blessing-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  Equality: {
    name: 'Equality',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '546b0867f67e9cc52d7c0922a6e0d123c695d6e59f65d2ec0bf1a607b50834c3-r-equality-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Eternal-Chest': {
    name: 'Eternal Chest',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'd594c3bd85208069d25ff533988de002f8e537225c4b6e2f1bd62ad80d1e9454-r-eternal_chest-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Floor-Spikes': {
    name: 'Floor Spikes',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '78d53f48c61b4535bddf014aa07711c5ea8c6916e807a0585b450f834b783f9d-r-floor_spikes-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Fortune-Teller': {
    name: 'Fortune Teller',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'd43c90f3a05993db829f549501e724a12ad4f728fed751b8cb0898145f9b27b0-r-fortune_teller-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Greed-Looms': {
    name: 'Greed Looms',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '8c2ee3d0ae8e1298d3dcd31171a335cc5edd3337c298f65be3be8810b3d65a66-r-greed_looms-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  Gus: {
    name: 'Gus',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '1fa1bde45864896d0a33b50ec480ef67cd47d9e238a37fc7a17f4657c7757bd6-r-gus-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Haunted-': {
    name: 'Haunted!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '38856e7ea4e22865a844814da801b8c830ac67d710fba798c69dd7a4669d2b8f-r-haunted-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Heavy-Is-The-Head': {
    name: 'Heavy Is The Head',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'eb66e3aff8cbb133f24a78b1cb2c1c4034ed3d156252a821e698c6d9f444e544-r-heavy_is_the_head-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'I-Am-Error': {
    name: 'I Am Error',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '12de52a981b562eeeae7999e08a6f1f98d4b7b9301154d49bf7a7a67bf7fdfe4-r-i_am_error-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Isaac-s-Blessing': {
    name: 'Isaac’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '53942bff8792f75c9fe7da24e4ad7a951e98c5fb05a932cbc42585d16db7f1e6-r-isaacs_blessing-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Key-Master': {
    name: 'Key Master',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '61513c432456fa03090d35120802e7db57d3e997be081ebda2cb879fc707ccd9-r-key_master-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Laser-Eye-': {
    name: 'Laser Eye!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'd2c03edad34afc8f25933edb2e76d5226d538c2c27aad859a9de96e14696b245-r-laser_eye-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Maggy-s-Blessing': {
    name: 'Maggy’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '45990c095db3f22d59c9daca977dc328df73b1581355b03164fc926f0666e6b4-r-maggys_blessing-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Might-For-The-Meek': {
    name: 'Might For The Meek',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '9c0437579b61a57b5dc800e8835a5537509bc1b256e27e4be135f099b34514cc-r-might_for_the_meek-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Pity-For-The-Poor': {
    name: 'Pity For The Poor',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '5400298c16f01cecd31b7c6ac88df52a8d3f9286b69992891c25d0c8146f80a5-r-pity_for_the_poor-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  Planetarium: {
    name: 'Planetarium',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '3dd3171d497ef613788289919450cda925f28e5096212405478563ca6c5031d2-r-planetarium-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Red-Champions': {
    name: 'Red Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'dba021fe8c6a16128032a7da1dff66cf11ff28083a272f47ccca278b337d701d-r-red_champions-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Red-Vise': {
    name: 'Red Vise',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '353136e701366da35c93b8b9947af8fdcbf22fbd397537859b539ba17d53d4e7-r-red_vise-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Restock-Machine': {
    name: 'Restock Machine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '2681ed62f8212d1f705239335cf50289929166ae9619ba7de25381acb96700fa-r-restock_machine-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Samson-s-Blessing': {
    name: 'Samson’s Blessing',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '19672f6a7c711e2f2e66717fc003ce448e831baf056a776b9822a5d73636216c-r-samsons_blessing-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Shadow-Of-Famine': {
    name: 'Shadow Of Famine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'dbe7845269c6537f8296dd290e01028e883dc49f33fbe9e82ec2b747223ff1f6-r-shadow_of_famine-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Shadow-Of-War': {
    name: 'Shadow Of War',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '31b125073c14c6962d0131ee78882bb6cc2f37c2108ad4c9e1f594a315d7e4f7-r-shadow_of_war-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Shell-Game': {
    name: 'Shell Game',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '5fe81f02df5dac948286b60dc39ef7a1b3591d80cc5d8509610b3355ad032462-r-shell_game-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Slot-Machine': {
    name: 'Slot Machine',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '1f6cdebc4cd2c60718ae3c6b1696a7596a79c6f329df351096afdaed2736d319-r-slot_machine-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Social-Goals-': {
    name: 'Social Goals!',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '714ff1e24b2b35793847fe2128ce502d3e2a83d830ddc591c773b68e5f7eed02-r-social_goals-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Spider-Webs': {
    name: 'Spider Webs',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'ec5e7220dfcb83b3b79e0a959e7f330518dbd1c739847eba7c78c420a6d0406d-r-spider_webs-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Splash-Damage': {
    name: 'Splash Damage',
    type: 'room',
    p3: true,
    edition: {
      Requiem: 1,
    },
    front: 'f649bcd7b2d92881ca887a102a5e3e3f6c0fd51906e6780291d2ebbf2221cf09-r-splash_damage-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Spoils-Of-War': {
    name: 'Spoils Of War',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: 'a0226897c87d350341382600a6685d2ea9085f527b01d19b1fd0336300d2fc2b-r-spoils_of_war-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Static-Shock': {
    name: 'Static Shock',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '1d746c884ec1ae4d37b7fd2872942c2606650ba1a6a8fa44e5d5bf05b0fd6b22-r-static_shock-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Tax-For-The-Mighty': {
    name: 'Tax For The Mighty',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '74f8b494d1336a3c60c6a2040229b0deae8b66737994b8c27fafb3b30abfb0b1-r-tax_for_the_mighty-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'The-Mirror': {
    name: 'The Mirror',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '03354a4f1829e60ac0f919718839676f0d6c2a70dd300abc8f099cb3365dc77d-r-the_mirror-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'White-Champions': {
    name: 'White Champions',
    type: 'room',
    edition: {
      Requiem: 1,
    },
    front: '2aa76997c78f33d7194078acca778ffb6ce73e512508b3f4bdb8ea64968b7390-r-white_champions-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  'Soul-Of-Envy': {
    name: 'Soul Of Envy',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: '6a23bce54aaf1d902bba2626b7eed6a405774b1ad7d65c406500b0aced891879-r-soul_of_envy-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Lust': {
    name: 'Soul Of Lust',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: '4c3d60de542b99a885917abdc9e66d6c7ebd7a30ded957363eadbfb03816f269-r-soul_of_lust-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Pride': {
    name: 'Soul Of Pride',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: '633b1e4d196eafaf8e38a5258c5df314007c084eafc32b9915e834f7a5bb8950-r-soul_of_pride-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Sloth': {
    name: 'Soul Of Sloth',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'bb3c747f7e4ebc1d40e663ab645884d69069eea3645effa9981930d5f565e58b-r-soul_of_sloth-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'Soul-Of-Wrath': {
    name: 'Soul Of Wrath',
    type: 'bonus',
    edition: {
      Requiem: 1,
    },
    front: 'c40f3a829f332bf19c1d8946c31a5d5511b1b3b4b16335005be8cac4bf3141ae-r-soul_of_wrath-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  'The-Harbingers-The-Beast-': {
    name: 'The Harbingers/The Beast!',
    type: 'monster',
    edition: {
      Requiem: 1,
    },
    front: '9876418259c579e0c6d8672390ec44b9224a1bcb0ac51f960368415be937ad7e-r-the_harbingers-308x420.webp',
    back: 'c29cf31b44dfe160f8bb2c93d5592ac3cbfed1618da32cfa40469b94fd4db22b-r-the_beast-308x420.webp',
  },
  Ash: {
    name: 'Ash',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '3457b75ff5425f7441695289295ab1a5ee3de5268c126ec136314a2277bdcf7a-rwz-ash-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Ball-Of-Tumors',
  },
  'Ball-Of-Tumors': {
    name: 'Ball Of Tumors',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2674a86f31a59065a93926b86cbc8d9b1b318827e6dc04e5e51ba3461d4ebdb8-rwz-ball_of_tumors-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Steven-character': {
    name: 'Steven',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '6de0c8a01d1304fabe6213f963bd2535e9ab28f9b687531e5543fcf3e2a97d42-rwz-steven-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lil-Steven',
  },
  'Lil-Steven': {
    name: 'Lil Steven',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '56dbcb44f4f4ea979fecd6b460572c24ac47b593badc4d566a02bc343f251fb0-rwz-lil_steven-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Bum-Bo-The-Weird': {
    name: 'Bum-Bo The Weird',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'd62837ca9bc3b21bf448d06adfa99c6d37034836de12a272843fb7619750d3b7-rwz-bum_bo_the_weird-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Strange-Marble',
  },
  'Strange-Marble': {
    name: 'Strange Marble',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '3b10390df6a8d2d32f56b0820c753cda6f76a798f505a6c80c6c26d0dcaa5b49-rwz-strange_marble-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Edmund: {
    name: 'Edmund',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '24bc807f4c247393b8ba80014d0b335563a78fa82e17e1f88ebe7022fe84c628-rwz-edmund-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-Real-Left-Hand',
  },
  'The-Real-Left-Hand': {
    name: 'The Real Left Hand',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2fd7c54b4bbe29ce18bad1e585a8f28f564330c2d94d1940631aafe137ecbf1c-rwz-the_real_left_hand-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Abe: {
    name: 'Abe',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'ba34d565974268256f786787ce7b7c98a1c6ed8241b9999ef5e77c8db5162d98-rwz-abe-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Possession',
  },
  Possession: {
    name: 'Possession',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '9dd334a6c613bf64eaa1e80154e1f4e8a2aa71e2024a76f4da55144db827f3a4-rwz-possession-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Baba: {
    name: 'Baba',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '46b6f5fedca0805418c69d7fc83a84634e928ef180de909dde4a94a162fd46fb-rwz-baba-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Is-You',
  },
  'Is-You': {
    name: 'Is You',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'b063796e8b318c31ab930fbbebdf6b021c9cfbfa14f1e98ffeaf5ce607da701c-rwz-is_you-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Blind-Johnny': {
    name: 'Blind Johnny',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '689c27f8e1b8ca0750844d2a39f1df84659f35cc9a805bc92f7d03902847913a-rwz-blind_johnny-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Johnny-s-Knives',
  },
  'Johnny-s-Knives': {
    name: 'Johnny’s Knives',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '69330b155217ee79c41c3f3a0829d0dfdd8ecc0aad1ba5eb9d448d5935a5a47e-rwz-johnnys_knives-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Blue-Archer': {
    name: 'Blue Archer',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'a226b3c93cf4a9614eecc398cc1d002ff31037881533d462296f17ed78afc334-rwz-blue_archer-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Bow-And-Arrow',
  },
  'Bow-And-Arrow': {
    name: 'Bow And Arrow',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e0e1fa6fef7cb0e143a0235c6fddf29e73f6cdf60868b4ee19782771416afc3f-rwz-bow_and_arrow-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Boyfriend: {
    name: 'Boyfriend',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '0bfa60e2c70efd3afa97a06d553a3fd739b56ad27073c7a6b93cef3d80fba585-rwz-boyfriend-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Girlfriend',
  },
  Girlfriend: {
    name: 'Girlfriend',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '3a2ecc0387dd0b4f764fd133a1afdc064ea85c486b5577730b01bb273cf39fb4-rwz-girlfriend-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Captain-Viridian': {
    name: 'Captain Viridian',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e9ac7efd3b21cbc7bb4c38c5604771078c8b085436e83f6fdb9534928ab0ba85-rwz-captain_viridian-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Gravity',
  },
  Gravity: {
    name: 'Gravity',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '0d11cfedd3f1ddeac1ac9840060654c2aa1a6c7285e07b75f9557ae0d1ee1e30-rwz-gravity-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Crewmate: {
    name: 'Crewmate',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'db1e001e1a8e5cd3b820f3f17c552b85795ab1e5a26bee2bb142d493495181ad-rwz-crewmate-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Emergency-Meeting-',
  },
  'Emergency-Meeting-': {
    name: 'Emergency Meeting!',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '4083854e2ca17d163b71bbf03a4b4465c726872ff8d94d6a5dc85a8f925e7d10-rwz-emergency_meeting-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Guy-Spelunky': {
    name: 'Guy Spelunky',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'fe8544e0e3ad99d478652dd032e0ba4552e3edada624e839899c94f3fc646225-rwz-guy_spelunky-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Spelunking-Pack',
  },
  'Spelunking-Pack': {
    name: 'Spelunking Pack',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '9a513819f6451e0bc4a3b6846bf48c2544691e6469c2746222650c3138bef35c-rwz-spelunking_pack-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Johnny: {
    name: 'Johnny',
    type: 'character',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '8ac997a80a1cb2872bf1ee27dee8a2e4e6e011706976e7c9ecfd45a504f9a27c-rwz-johnny-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Football',
  },
  Football: {
    name: 'Football',
    type: 'eternal',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '4be07b11b22ff7fbca141d727af1e64978e03cd4df9fde2afc0a40326837a5c3-rwz-football-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Pink-Knight': {
    name: 'Pink Knight',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'eba96cdc8b00fb6e03b033b72b2f55c73d1b67621f0cfd012810677292868b89-rwz-pink_knight-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lollypop',
  },
  Lollypop: {
    name: 'Lollypop',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f1100696a912bb9ebe301053bff028cdcee3cbf85da1ea59c1487d52e96dc8b0-rwz-lollypop-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Psycho-Goreman': {
    name: 'Psycho Goreman',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '094aecf346a00be63fbdee0c57f432c4c5b05ea7d8df6da7eb41ad8f3fee425c-rwz-psycho_goreman-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Hunky-Boys',
  },
  'Hunky-Boys': {
    name: 'Hunky Boys',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'c224659c8bf6d3658e8c6bf7e29c4ac23c318a7225ebe9df49007ef642b2ac83-rwz-hunky_boys-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Quote: {
    name: 'Quote',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'd0c8b2ad925cb5b3f1720a098a4c028028e9225493e432838dcfc5540459b9e3-rwz-quote-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Polar-Star-Booster-V2-0',
  },
  'Polar-Star-Booster-V2-0': {
    name: 'Polar Star/Booster V2.0',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '356796b2019146435e44d6f75898d4fc8530292486b57eb0d9c1ff467c0b0ab4-rwz-polar_star-308x420.webp',
    back: 'c44caf3e35b0b3c20ee0f56716ce73b42a6c2415c78c9d80108e27e37f186e39-rwz-booster_v20-308x420.webp',
  },
  'Salad-Fingers': {
    name: 'Salad Fingers',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '9a2837b4ab9844b102dc04bff1fd87c9a07ec2d69a5220a6b5f9fc0657b6dcae-rwz-salad_fingers-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Rusty-Spoons',
  },
  'Rusty-Spoons': {
    name: 'Rusty Spoons',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e118abe552c796dbf971accdb979f4635859f96471d938890812c012988a71dd-rwz-rusty_spoons-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Knight': {
    name: 'The Knight',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '462a7f1d177df020d088e72db0dd5ecddd005ac8b2cc99d621d6ef68ef330813-rwz-the_knight-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Focus',
  },
  Focus: {
    name: 'Focus',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '55e276bfce0b1b17d66f5a9e8c1346da0485658b15e8a0ac7106360316c6d2cc-rwz-focus-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'The-Silent': {
    name: 'The Silent',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '4bfdf1530226db96cabef41cd2af0bfb2843ff10f563eb81e8f1c6ee34ec3422-rwz-the_silent-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Ring-Of-The-Snake',
  },
  'Ring-Of-The-Snake': {
    name: 'Ring Of The Snake',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '77392a54cd753b449b6ed45e8075805825e16575e7069587685af86da21047f8-rwz-ring_of_the_snake-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Yung-Venuz': {
    name: 'Yung Venuz',
    type: 'character',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f8294fd435740485a73c57171d8dd5feb0e520178c5ccae19a10756159deb2e3-rwz-yung_venuz-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Pop-Pop-',
  },
  'Pop-Pop-': {
    name: 'Pop Pop!',
    type: 'eternal',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '37344fd6f01a3d654b407895a0b2580188027aa217cba3c4ecd94945ec8c1132-rwz-pop_pop-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  Aubrey: {
    name: 'Aubrey',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '5233e1d4c15572be6ea1103a8df562b8b621674990d38503208a285223894d82-rwz-aubrey-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Birthday-Cake': {
    name: 'Birthday Cake',
    type: 'treasure',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'b2c6479a2d70a42cb0c0155e86d584ffec5c5e620d960eb3362ba391893e9d4b-rwz-birthday_cake-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Diogenes-Pot': {
    name: 'Diogenes’ Pot',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '5f447c19e1275e8bdc293a608d2f065506fe38f07d3c31a952d0b0cbbd67764b-rwz-diogenes_pot-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  George: {
    name: 'George',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'd5ab018c8416539970f526064dac8cf54b6f4a4dcd47379296a446a46b45d3ba-rwz-george-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Hitops: {
    name: 'Hitops',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '80ad5770ae05394f63d1c4dea63118dc31aaf18057589b2e50db7ecb35386a81-rwz-hitops-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Newgrounds-Tank': {
    name: 'Newgrounds Tank',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '911291e7ca9424949d53b890fc714ec27d469a221513945c0900f2c62f202542-rwz-newgrounds_tank-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Tony: {
    name: 'Tony',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'b72ee1afef754a3b717ad55fd97093f8cb2813021fc9b9038d43bf9b985fea41-rwz-tony-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Boxing-Glove': {
    name: 'Boxing Glove',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '9afd4892c1419360b33eef723a3229fb635e66ea103ac6309f279cc37dbe509d-rwz-boxing_glove-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Doorway: {
    name: 'Doorway',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '05faaef4bb09f68ee76d8fd617cf0d40938b9cf1de6b6d936135029a5fc564fd-rwz-doorway-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Gun-That-Can-Kill-The-Past': {
    name: 'Gun That Can Kill The Past',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e5c4e18ae603ebc61107fe84bff8e36521fc0eeef720ecfdaa67391464d7ecf8-rwz-gun_that_can_kill_the_past-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Water-Bottle': {
    name: 'Water Bottle',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '3237a5f5d75d94a2e44e5ab898b8bee3574e9d07340454a5614464a8a65075b6-rwz-water_bottle-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Ser-Junkan': {
    name: 'Ser Junkan',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '79b987b3d09b5d7b1081ca312f55e9769bdbb83949357779eb8a6a152a2b38f6-rwz-ser_junkan-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Spewer: {
    name: 'Spewer',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'bd73c4dc2747a34a182733eeb5210cd1087f81490eae2e0c6fdcc12c97d0434b-rwz-spewer-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'The-Crowdfunder': {
    name: 'The Crowdfunder',
    type: 'treasure',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '252d28eef7f0f09e4c64ac82dbb2dffe4064afb15a0b8547f584441850496a7f-rwz-the_crowdfunder-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Demon-Form': {
    name: 'Demon Form',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '4651270ccc6ba81d6d2f1f4259bba889aa1126168ee47887f76893eb1c2ab3ec-rwz-demon_form-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Fiend-Fire': {
    name: 'Fiend Fire',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'b773d63c7b360053b48afe9cde493562bcf3be3e28b70dd951dbd5dba5fe5ba0-rwz-fiend_fire-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Loot-Card': {
    name: 'Loot Card',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '70da575425d16f09cfb90a84fdd78bb1b983c8e7a0d0f0a5ed053c18a9e971ca-rwz-loot_card-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Bible-Thump-': {
    name: 'Bible Thump!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f2d4033326e4889e75e143645284e882b20c58ac320863ac361e5ab7631fe65f-rwz-bible_thump-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Blanks: {
    name: 'Blanks',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e6141cf9b886a3773a66b435c287670eb3c3ee43f70a7a7cd952d72fe21f9f02-rwz-blanks-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Cheep-Cheep-Cheep-': {
    name: 'Cheep Cheep Cheep!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2654f8872256f788700ddd7a98dd443680add58917b26eb6a995e7a864b80e40-rwz-cheep_cheep_cheep-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Chunk-Of-Amber': {
    name: 'Chunk Of Amber',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '1847ee81105e39708e4102db91fc44577f019d31ed9c266312a5b63ad6936d4e-rwz-chunk_of_amber-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Cow-On-A-Trash-Farm': {
    name: 'Cow On A Trash Farm',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '62ce7d6bba479f78f805aafbb001a5cb9c7294eb6489d9c3187b7bc287e875ed-rwz-cow_on_a_trash_farm-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Greed-Butt-': {
    name: 'Greed Butt!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '6716393995a38e70249324a87d1703d9080b1a9ff59079ff66f95d916d5dd498-rwz-greed_butt-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Jester: {
    name: 'Jester',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2879498e878c382ee16c6a7213410a63324bd7c408ac5afa8d018b4acdf82dba-rwz-jester-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Murder-': {
    name: 'Murder!',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '1e7ebc1e2d4e1f7fca7a20df1f0c83772ba04bee3afbc96075d8af30239b7523-rwz-murder-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Witch: {
    name: 'Witch',
    type: 'loot',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '22c3e0260f72bc0834988f4783a1a84ceb28136f76abecd47df19d26ad3120ba-rwz-witch-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'A-Dead-Horse': {
    name: 'A Dead Horse',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'ee534ba3c0f4ae73faa0bf8689b307d5d80548b550939b3ddd8db22e6003da2c-rwz-a_dead_horse-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Balrog: {
    name: 'Balrog',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '6c445a09882c0e503890f0d196c0105ba548ac6f12652239835bd221546bb43c-rwz-balrog-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Hubert-Cumberdale': {
    name: 'Hubert Cumberdale',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f0866ec56efd9956b17e0ce959760b8d4dbcc54adeb2a9854f308072211d95ee-rwz-hubert_cumberdale-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Javon-': {
    name: 'Javon!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2b9d86f900cbf137a37321b79675aecbaecedfa2b1923bd339ea10b8acaea7a2-rwz-javon-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Keke-Is-You': {
    name: 'Keke Is You',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '89f569ca02672803943d01bb68fb3cd4124dcbf99e0c094870ab6a70ce04870d-rwz-keke_is_you-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Leatherneck: {
    name: 'Leatherneck',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'b13e1347f1cb51281bd1f081bd5883d5ffbee17faf40ea555623933c598f9d7c-rwz-leatherneck-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Peeper: {
    name: 'Peeper',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'eb9b65f46133d42bd7517e3653dedce57e7082ec16c92614d3d560ab2693e960-rwz-peeper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Shopkeeper-': {
    name: 'Shopkeeper!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '7199e3528310d96d231da4d88e54edbf7c83cad08e5482eceaefc1ceafe446cb-rwz-shopkeeper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Impostor-': {
    name: 'The Impostor!',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '10aee5a69a437442f413e55f7f73e9b05bdb251a89b33d048d0d051d0c210d39-rwz-the_impostor-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Purple-Shirted-Eye-Stabber': {
    name: 'The Purple-Shirted Eye Stabber',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'bdb501270c77e4e95f6269da2b56ad0fd60c8a7fdf1b45d41446f43e008cf9fc-rwz-the_purple_shirted_eye_stabber-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Zombie-Jesus': {
    name: 'Zombie Jesus',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '9801970edcccb7da02916d0042ea79c288e77171504534e236c1d9a685eb9d50-rwz-zombie_jesus-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Death-Trapper': {
    name: 'Death Trapper',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f29ac70ace75347b4822db6fc5298df7dd9a05c4c138bc7035e0f6520f920237-rwz-death_trapper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Exp-sito': {
    name: 'Expósito',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '1a17a277c6da548dbce998c54ffa80396b3939e29c347906cf4b7d767cd217d8-rwz-exposito-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Grandparent: {
    name: 'Grandparent',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '380b45ffd3608ca094c88dc55992692ffe54a884d5c17cbb00f1aa1b5ac6afde-rwz-grandparent-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Lil-Hunter': {
    name: 'Lil Hunter',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'a536b8ebb32cb9c9ab755fdf2043761890c753e0dac71d0358e739050704a90f-rwz-lil_hunter-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Melqu-ades': {
    name: 'Melquíades',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '5dfc29e3fac600d8ff20df81385a415897eb165822f4d2f3c7bfc10af89319a1-rwz-melquiades-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Butcher': {
    name: 'The Butcher',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '871a01820837e9c98f54734db6f2c95070c4c65994686af19f430230c9d00a8b-rwz-the_butcher-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Collector': {
    name: 'The Collector',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '56501722a83b93d51105cede1ec5fae66d115989af547285c5734d872861047e-rwz-the_collector-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Gorm': {
    name: 'The Gorm',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'ec4f66beae3069950c4b5066fd145086f183a581396fa15c106a478ca779db44-rwz-the_gorm-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Radiance': {
    name: 'The Radiance',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '06308c7a9ca2efe82892a03a33e2d6ebb06fb8072c38a5bd32624106316c93c1-rwz-the_radiance-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Time-Eater': {
    name: 'Time Eater',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '0fb3629d482fb183746807de1d99de8de1673acf12421ac5fb5951f1cd23e58b-rwz-time_eater-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ballos-': {
    name: 'Ballos!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'd069fe6fa8e23306e3c4cb37e3c0a2c821ec03eb308f687ee0bf8ab5c4e3bc22-rwz-ballos-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Curse-Of-The-Suspicious': {
    name: 'Curse Of The Suspicious',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '77559650eeb86237d447776181638a49e233c9bad33a1266f4cb6a51d236ffec-rwz-curse_of_the_suspicious-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Brea-In-Distress': {
    name: 'Brea In Distress',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '65c1ad9cb2b693adb9e53e11b1b5bcf4cfafcc543fc29a4b615056eb2a865645-rwz-brea_in_distress-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Don-t-Starve-': {
    name: 'Don’t Starve!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'c2cd98a651a380cb2160728a5b4dade98c950152ef55b65ca6e43c36e10fee25-rwz-dont_starve-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Fuck-Bloat': {
    name: 'Fuck Bloat',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'e67d541b383ff96e569e7a06df16de7c28d712b0b08335503e49571841962379-rwz-fuck_bloat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Golden-Idol': {
    name: 'Golden Idol',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '930a5ddb1b2c0fa701ec48953f3df81a9ca991062381260f1b735051bed10956-rwz-golden_idol-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Grubfather: {
    name: 'Grubfather',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '2171c3bb440b4ab49e6a4d54f9883c93ada281203bb8b0d0e672f01c9f3c779e-rwz-grubfather-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Nightmare-Tick': {
    name: 'Nightmare Tick',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: 'f3d2137ce3bc1fe46756a530aa6340aac5fcbdea71e75d8b2fd96591799051a5-rwz-nightmare_tick-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'QWOP-': {
    name: 'QWOP!',
    type: 'monster',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '59db92a50d323da59f65d50192eef323bbbc6e594e12170399cb1ff51eb34893-rwz-qwop-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Trial-By-Trolley-': {
    name: 'Trial By Trolley!',
    type: 'monster',
    p3: true,
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '1a36a5b65c17782406f4fb24c355cfcb5599ca273030619ade0d7d4af907fb54-rwz-trial_by_trolley-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Isaac-Of-Isaac-Re-Isaac': {
    name: 'The Isaac Of Isaac: Re-Isaac',
    type: 'room',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '084011046cefb627d8e73ec52fa448fb27f2af48ae264b26e61142b314fc7630-rwz-the_isaac_of_isaac_re_isaac-420x308.webp',
    back: '171b99f56e74545f76fc8e85cd4af5a38c62a559711b2fdef823e21c00371479-RoomCardBack-420x308.webp',
  },
  Strawberry: {
    name: 'Strawberry',
    type: 'bonus',
    edition: {
      'Requiem Warp Zone': 1,
    },
    front: '25947db7a2e421263d5ec9afe6d0f704a938e4d549ccdd0cc557e10324375d0e-rwz-strawberry-308x420.webp',
    back: '989af6e99f0551fc2629101bf0d034803218f3d64ca3e931661d5c98907205f8-BonusSoulCardBack-308x420.webp',
  },
  Isaac1: {
    name: 'Isaac',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'ceb2a45cc9c9d909d05966cc2db81a8a6b37a573dd89ef2e64f46a5430eed151-aa-isaac-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-D6',
  },
  Judas1: {
    name: 'Judas',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '5b9204041151b6886fb0d8104d8ce91a8778e527b34849179d36c681ac72ddae-aa-judas-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Book-Of-Belial',
  },
  'Blue-Baby1': {
    name: 'Blue Baby',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'b6d7d5102715297dc11a7917f0d3121a13b65f8470fac142cdf3cb295af7b71d-aa-blue_baby-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Forever-Alone',
  },
  Azazel1: {
    name: 'Azazel',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'ce56824de3b7a1b8c55fa5603ba197706c657083290c4ab88e4606fc7e30588c-aa-azazel-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Lord-Of-The-Pit',
  },
  'The-Lost1': {
    name: 'The Lost',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '06148df84fdc35994ff0958fda2816a7b24ae3c4b9d9ef7273650ce7077021e2-aa-the_lost-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Holy-Mantle',
  },
  Lilith1: {
    name: 'Lilith',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '75f2f015adf3f22ed4499e3469ca0e3e7cb5ebfe1b8275c91a9aded1df225f88-aa-lilith-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Incubus',
  },
  'The-Keeper1': {
    name: 'The Keeper',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '39aa72ed83621f235a36ac21ca356956b13a01390711c75e24c32be44f6ffbb1-aa-the_keeper-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Wooden-Nickel',
  },
  'The-Forgotten1': {
    name: 'The Forgotten',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'a11a5e346b142149754f542435930b116055d672088d6db7f909fc410d269246-aa-the_forgotten-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'The-Bone',
  },
  Guppy1: {
    name: 'Guppy',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '26b8fc3ae0c37346649467631aa0414916a62ed606746d93b94c9bd2586feba5-aa-guppy-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Infestation',
  },
  'The-Capricious1': {
    name: 'The Capricious',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'cf55db052504cf7fd2395a0de066ce970fe28a99ef49e106b479dcefa9d7ec85-aa-the_capricious-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Glitch',
  },
  'The-Savage1': {
    name: 'The Savage',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '37ab2db9fdbbfffc295a339211fda42455c3198f55d0abaf60b73060a50c0ef6-aa-the_savage-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Berserk',
  },
  'The-Harlot1': {
    name: 'The Harlot',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'e0316852d8d0a7ca11fcd6dc14cfc06aa7be1c0a66eb4ab36517cd7e1f6a67aa-aa-the_harlot-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Gello',
  },
  Eden3: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: '1b7272d947a31d41c173953c3d17c7e7c42f1b176d421a1903a616d96f043027-aa-eden-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  Eden4: {
    name: 'Eden',
    type: 'character',
    edition: {
      'Alt Art': 1,
    },
    front: 'd1bd5d5b5ff4161051cffd0256174a743f004e4c1cc4dc9982a449d69c782b4e-aa-eden_2-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  Brimstone1: {
    name: 'Brimstone',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: '18dd4c3cab24a9e88c1b5ad6fd32ce48c52cc49d6e4987534047b7256a0a125f-aa-brimstone-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Epic-Fetus-': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: '50d7a3a75be5a251c2d6347b419bfa3bd6070c9e2ba01bedd9bfc2a8f147c6ee-aa-epic_fetus-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Godhead1: {
    name: 'Godhead',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'a217f7a5c1dad6b2fad1de42208349c10d35a3f3eecdd0247ca28f87bd6545bd-aa-godhead-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Guppy-s-Paw1': {
    name: 'Guppy’s Paw',
    type: 'treasure',
    edition: {
      'Alt Art': 1,
    },
    front: 'bbbf14a8c9f96970da0a010c135154bbe171c41420b1aa76b1a42d63a0f58490-aa-guppys_paw-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'XIII-Death1': {
    name: 'XIII. Death',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: 'b4e9d2745574100d248a89a3137143a7421680aba5420e100c405e066f7e3a41-aa-xiii_death-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'XVII-The-Stars1': {
    name: 'XVII. The Stars',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: '97c2fa412b7e89826abf6b211d02b6c99a5db1c3d1b04509a85b8a05de6f0aa1-aa-xvii_the_stars-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Lost-Soul1': {
    name: 'Lost Soul',
    type: 'loot',
    edition: {
      'Alt Art': 1,
    },
    front: 'dcbcd47a77188b69342e52f7960c9e6c27f7baa43be21fa26e8a67e12f92c97e-aa-lost_soul-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  Begotten1: {
    name: 'Begotten',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '66975798eafcdfe6a48dc957ab5ac02394b8cc2f1218efae877707a287ab365c-aa-begotten-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Big-Bony': {
    name: 'Big Bony',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '0e970baf788751692dcca951a062214179979c9f428cc0a2c38614e8253c2ba1-aa-big_bony-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Clotty1: {
    name: 'Clotty',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'b27152e1c9c632c67a13d24f9441782269a2a0418a84c81a695a4402679dc63e-aa-clotty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Delirium1: {
    name: 'Delirium',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'e8c20a54d15774248e077a07f568cc6afd9444af3f3d0d554c75c9860b214e5e-aa-delirium-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gaper1: {
    name: 'Gaper',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '0167a07cd841adfff64153dffa1bcab36f3a9c1e16f7bbd9137b0a978e86f44c-aa-gaper-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Hand1': {
    name: 'Mom’s Hand',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'eb923fe60d5a894934f3443cd5bf616d31ea1d2e963fc7b9a39e352f3212d140-aa-moms_hand-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Mulliboom1: {
    name: 'Mulliboom',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'a189399608c97e7749a67135b082b72130f0ea5c284d762d4df9e332c2e8cadb-aa-mulliboom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Mulligan1: {
    name: 'Mulligan',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '246171dc363562018e086cfeeba6ac56b5482ee2a9878c8cd84b29d7bcf80cf0-aa-mulligan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Twitchy: {
    name: 'Twitchy',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '2ce105ebe67c1df6b5e6c20f2b3f540e8997fcdb114462903ccd41eccf95b4cb-aa-twitchy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Brownie1: {
    name: 'Brownie',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '9c6dd5d0ece4500e984932cad7eb73be999ba9cf531b6a4de0f6c5d13d152d8d-aa-brownie-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Daddy-Long-Legs1': {
    name: 'Daddy Long Legs',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'ea2f5ca5bfc832850e597528396f66d8013e461b09a9c0a304c9e4d5c56cfcea-aa-daddy_long_legs-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dark-One1': {
    name: 'Dark One',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'e0a3dc2c4257be3e10f67d5f26326490a3d34e27ac6cf9480ad216e3479985e2-aa-dark_one-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dingle1: {
    name: 'Dingle',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'f7fc665edcd60adeb89379d431bbc889b178ba027f491f66bb0a636b6d95113d-aa-dingle-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Famine1: {
    name: 'Famine',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '69190f479586dbb4f7fc31cc3772cdec5d8df0829ba3cca98a8bd5da20dd4dd1-aa-famine-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Fistula1: {
    name: 'Fistula',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '56d2cb828813fe3b9662d5b4e21211f7c4b09910f2ceef9b8ace82c0f02cc81d-aa-fistula-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Gurdy1: {
    name: 'Gurdy',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '991c7aef347bd6d60c44417734436f255017c70e23ceb82d156793870b32e15b-aa-gurdy-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Hornfel1: {
    name: 'Hornfel',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '4ca005c3d06d63aeebef9596059eca684788c714199dd31faf3c1818e0432fa2-aa-hornfel-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Larry-Jr-1': {
    name: 'Larry Jr.',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '565af7daae0147494e9ad71c22ab7571560dbfdf312d2085fc62fe76aa65de4a-aa-larry_jr-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Little-Horn1': {
    name: 'Little Horn',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'd6f0a05835d623029c2d70aba7476e97376148e3796f713e3612115c3ff49fdd-aa-little_horn-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Fatty1': {
    name: 'Mega Fatty',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'a2aa91cac41c9e74bfe6b983f5b1d8fbb8bea1e6d30d8050fef88b41b6e166f8-aa-mega_fatty-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Satan-1': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'be6cff11d54e5302993234dc1fe75bc39f52540204de4a38a2eb523570e76325-aa-mega_satan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Min-Min': {
    name: 'Min Min',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '8fd23fb42c53335030ef68d936475666b60a7630669c6f0513a3d9d35eced86a-aa-min_min-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Monstro1: {
    name: 'Monstro',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '6af06ee8488e7449574ed7ed333634fbe511b4f7c1ff272e502283963cde7391-aa-monstro-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Monstro-II1': {
    name: 'Monstro II',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'e4f36c38d0d825aa55e64582491893a04c9b012ab4d0c11bdab0b3f9f1488047-aa-monstro_ii-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pestilence1: {
    name: 'Pestilence',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'd329435f035ea0f0be54627dad957f84330498ea951a7f5181f146750ee9f14e-aa-pestilence-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Pin1: {
    name: 'Pin',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'af74af0dc82a27a8211e1d03132d022104da6c5c7a960e35c3fd5f7f9b19db5e-aa-pin-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Polycephalus1: {
    name: 'Polycephalus',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '7cba7a4e5ca3dbc917e6f7305f32680300ce61a2bad6b6b11c9c4024575b889c-aa-polycephalus-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Rag-Man1': {
    name: 'Rag Man',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '12528c1b2c2112d63e620239427f0ac70729ff7328d709cca641b4bfcbb97dd2-aa-rag_man-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Rag-Mega1': {
    name: 'Rag Mega',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '88abffc38ecef6232a53f0e4fe1bdab1b375b165a5aefb4624403d79cf16d57b-aa-rag_mega-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Beast': {
    name: 'The Beast',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '62f2baa2a227a63c8f33185a0a0a0c9be1ca220a82ffb3b5c57aff1898294075-aa-the_beast-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Bloat1': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '05d1e3082b003aa657b110f12f16b8b1a39b9802d3c5bfe52c30ca6c7fe18ffe-aa-the_bloat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Duke-Of-Flies1': {
    name: 'The Duke Of Flies',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '78ca0937dc2fd042013381f6df72a3eb90365b7eccb66524f057981dd0c1705d-aa-the_duke_of_flies-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Lamb1': {
    name: 'The Lamb',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '85dc5a4844ef9a19d04b28e09b3c839de6e813f448a2299b695646d0afb67f45-aa-the_lamb-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ultra-Greed-1': {
    name: 'Ultra Greed!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '87dfc14b3dbe888927910e202d7599a5a3085d099a5ceef5849a97ae678340cb-aa-ultra_greed-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'It-Lives-': {
    name: 'It Lives!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '266b0e3048ff354a3a4d63d71b6c69874102a80437105134c87ed7097582e4e3-aa-it_lives-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mega-Satan-2': {
    name: 'Mega Satan!',
    type: 'monster',
    p3: true,
    edition: {
      'Alt Art': 1,
    },
    front: 'e45eb2935646a7a727cc0772fc2f1dd25e2b3c64f770214ec264a4c7f464ba87-aa-mega_satan_2-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-1': {
    name: 'Mom!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'ef0f61951f7b2e5e0cfbb3bba31369d47aa9b7cf666ce8103eacbcc47093cddc-aa-mom-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Satan-1': {
    name: 'Satan!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '61fc691a5f3488078ae703154140648b4b77e2668032f4e63703feab46beac19-aa-satan-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ambush-1': {
    name: 'Ambush!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '9c972320e2480123d6119df99f35dc470a3f12f60d12ae3c3bd7d7f733fccdbe-aa-ambush-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Devil-Deal1': {
    name: 'Devil Deal',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '9d6884d811de017e5666f10789033f3a2b6e21420f60d16821e7791b6940bce8-aa-devil_deal-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Secret-Room-1': {
    name: 'Secret Room!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: 'b2ee692b4fc58aa8406eac0f062254f413f89cd6edda4d14597aafe67bed6c10-aa-secret_room-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Shop-Upgrade-1': {
    name: 'Shop Upgrade!',
    type: 'monster',
    edition: {
      'Alt Art': 1,
    },
    front: '8343712b89ddce7250656088c741680379f59338f78b4190180aaf2478e99684-aa-shop_upgrade-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dead-Eye': {
    name: 'Dead Eye',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: '8efca0bfb270c53fc0e1acf7dec693de514ca61109392b409dc36c34bc264518-t-dead_eye-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Marked: {
    name: 'Marked',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: '10358389e02f98bfdaf6158447a247a8dae74f1c15db1724288bafb300b53f37-t-marked-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Epic-Fetus-1': {
    name: 'Epic Fetus!',
    type: 'treasure',
    edition: {
      Target: 1,
    },
    front: '59790f2c4694fb880866c112b368248e0cd4332287cc205a05274252961d52b9-t-epic_fetus-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Lil-Gish': {
    name: 'Lil’ Gish',
    type: 'treasure',
    edition: {
      Gish: 1,
    },
    front: 'cfb0a96c613149d297daf1cf9ee1e24c5cc02cbab974f2f87c916ed75fb75903-gi-lil_gish-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  Gish: {
    name: 'Gish',
    type: 'monster',
    edition: {
      Gish: 1,
    },
    front: 'ede1f62aeb4b51d5d51393ed45100324324e3a944e899371b5adfe1b00e48ee2-gi-gish-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Tapeworm: {
    name: 'Tapeworm',
    type: 'character',
    edition: {
      Tapeworm: 1,
    },
    front: '0692eafa2670c05e6bbb8b06428c4d91b051e8e2435710868f1e83d8a283d81c-tw-tapeworm-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
    eternal: 'Pink-Proglottid',
  },
  'Pink-Proglottid': {
    name: 'Pink Proglottid',
    type: 'eternal',
    edition: {
      Tapeworm: 1,
    },
    front: '879febacd0435ea325dddba44c38f32cbc0f2aed01358ec874d3b077c263777f-tw-pink_proglottid-308x420.webp',
    back: 'eb223ce91f9977f3c550ed8313e6b12a9b65c04de6e45a53c9353d99c37c6c28-EternalCardBack-308x420.webp',
  },
  'Rainbow-Tapeworm': {
    name: 'Rainbow Tapeworm',
    type: 'loot',
    edition: {
      Tapeworm: 1,
    },
    front: 'd29fa51d812394795d76bcda047d7c53b8521010096a367a7935dd1d8a392e3e-tw-rainbow_tapeworm-308x420.webp',
    back: '0d8c260ff93f5abaf0b463d3e039706830afbfdc791e76ae9039650dbf366fc2-LootCardBack-308x420.webp',
  },
  'Black-Proglottid': {
    name: 'Black Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: 'ead97cb569618ae42dba78f48d60588d00a19e2693996576ebcd1270d9cf0fbe-tw-black_proglottid-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'White-Proglottid': {
    name: 'White Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: '13ba297b6526d64d310f4125c61517ed84d3b835ec54e8079fabfb447cd39d30-tw-white_proglottid-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Red-Proglottid': {
    name: 'Red Proglottid',
    type: 'treasure',
    edition: {
      Tapeworm: 1,
    },
    front: '0b9fb65f56ac374a9b053fcba0c64558ca33462d0925d5863203e1a7a90a4aa9-tw-red_proglottid-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
  'Tapeworm-monster': {
    name: 'Tapeworm',
    type: 'monster',
    edition: {
      Tapeworm: 1,
    },
    front: '9e10a3f185aa6c977d611612370c22573ae1f5d8504eb564246dc03841b5c83c-tw-tapeworm_monster-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Dick-Knot-': {
    name: 'Dick Knot!',
    type: 'monster',
    edition: {
      'Dick Knots': 1,
    },
    front: '540196860c1a6cdb42ff53a671b7f85bb1c149817deedadb84ae7ece5e7d523e-dk-dick_knot-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  '-Christian-Broadcasts-': {
    name: '“Christian Broadcasts”',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'e81a4fd42b69e78f477d8d36a3bce63b7ad2bb0584e709349a3db53b45dc5480-box-christian_broadcasts-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Dogma1: {
    name: 'Dogma',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'b522e51d2124f7a1a00b1c5abd16069248b2fa81f06e8c2ad25752db2c13e2c5-box-dogma-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'TV-Static': {
    name: 'TV Static',
    type: 'monster',
    edition: {
      'The Unboxing of Isaac': 1,
    },
    front: 'a92ee50ad1d3afedc977edb7ddb24b5f3fe0c298f35816dc4b21780d11382ec2-box-tv_static-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'The-Bloat2': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: '12508691c85f934c930dca36e4422297f96c846eb580a61d356cea97ab2ab29f-psp-the_bloat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Eden5: {
    name: 'Eden',
    type: 'character',
    edition: {
      Promo: 1,
    },
    front: '0e33c64cb59ac94ecd1e4297230335a9bd859f222a5c86276301c9db1384cd6a-sp-eden-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  Eden6: {
    name: 'Eden',
    type: 'character',
    edition: {
      Promo: 1,
    },
    front: 'e08228857e9ffbfb096a692f58c3e6895e14e4bdf5f9a55dce50d0abd72b088d-psp-eden-308x420.webp',
    back: '6bf2d1fcefda714fe089edd534462fabd0046ea2820a86e6fd1fd217d750f70a-CharacterCardBack-308x420.webp',
  },
  'The-Bloat3': {
    name: 'The Bloat',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: '12508691c85f934c930dca36e4422297f96c846eb580a61d356cea97ab2ab29f-psp-the_bloat-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'It-Lives-1': {
    name: 'It Lives!',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: '27234bf402ca214e2333a34853c725368b1bc16456c815820e66ef877c3c4603-sp-it_lives-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Ultra-Pride': {
    name: 'Ultra Pride',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: '2768cf96519c5e80b45760d718755721f3193ae153c2132f60f400317b5627fc-psp-ultra_pride-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Corrupted-Data': {
    name: 'Corrupted Data',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: 'ea0444f81c8d0a35528cefadaa98261dad14209b21f22b003e7437116cbc8150-psp-corrupted_data-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  Henry: {
    name: 'Henry',
    type: 'monster',
    edition: {
      Promo: 1,
    },
    front: '5332ad5c81f82d134da217115d2850e2c78531f7e0c1dca5b7da1c20ae0d4c77-sp-henry-308x420.webp',
    back: 'f458da3420b4badc0cdfd803021d7adb378f825e21fc516bd5a2a68ac671402d-MonsterCardBack-308x420.webp',
  },
  'Mom-s-Ring': {
    name: 'Mom’s Ring',
    type: 'treasure',
    edition: {
      Promo: 1,
    },
    front: '285efa396c8e66a848b2eca2f9c8351b53e4b15ebd48e6474d663fc26d2dee0e-p-moms_ring-308x420.webp',
    back: '5295c5496771e6d92db1c8cec38ae1ed709a8ced837d1038558125450f9da93b-TreasureCardBack-308x420.webp',
  },
};

module.exports = { editions, cards };
