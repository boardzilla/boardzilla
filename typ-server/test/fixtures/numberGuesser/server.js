/* global game */

game.minPlayers = 1
game.maxPlayers = 2

game.initialVariables = {
  winner: null,
  correct: 10, // TODO seed; Math.floor(Math.random() * 10) + 1,
  guesses: 0
}

game.hide("correct")

game.actions = {
  guess: {
    min: 1,
    max: 10,
    next: () => game.set({ guesses: game.get('guesses') + 1 })
  }
}

game.play = async () => {
  console.log('correct', game.get('correct'))
  while (true) {
    let [action, guess] = await game.currentPlayerPlay('guess')
    if (guess == game.get('correct')) break;
    console.log('endTurn')
    game.endTurn()
  }
  game.phase = 'finished'
  game.set('winner', game.currentPlayer)
}
