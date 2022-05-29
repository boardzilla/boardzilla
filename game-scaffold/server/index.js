const { game } = require('game-core-server');

game.setPlayers({
  min: 1,
  max: 4,
});

game.setupPlayerMat(mat => {
});

game.setupBoard(board => {
});

game.defineActions({
});

game.play(async () => {
  while (true) { // eslint-disable-line no-constant-condition
    await game.anyPlayerPlay(game.getAllActions());
  }
});

module.exports = game;
