/* global game */

game.minPlayers = 1;
game.maxPlayers = 10;

game.setup = () => {
  //utils.times(4, i => game.board.addSpace(`player${i}`, 'tableau'));
  game.board.addSpace('#playarea', 'area');
  game.board.find('#playarea').addPiece('#Abe', 'card', {x:0, y:0});
  game.board.find('#playarea').addPiece('#Isaac', 'card', {x:50, y:50});
}

game.hidden = () => 'card[flipped]'

game.play = async () => {
  game.playersMayAlwaysMove('card');
  while(true) {
    await game.anyPlayerPlay([flip, activate, deactivate]);
  }
}

function flip(card) {
  return game.choose(card, game.board.findAll('card'), () => {
    card.set('flipped', !card.get('flipped'))
  })
}

function activate(card) {
  return game.choose(card, game.board.findAll('card:not([active]):not([flipped])'), () => {
    card.set('active', true)
  })
}

function deactivate(card) {
  return game.choose(card, game.board.findAll('card[active]:not([flipped])'), () => {
    card.set('active', false)
  })
}
