/* global game */

game.minPlayers = 2
game.maxPlayers = 2

game.initialVariables = {
  winner: null,
  correct: 10, // TODO seed; Math.floor(Math.random() * 10) + 1,
  guesses: 0
}

game.hide("correct")

game.moves = {
  guess: () => {
    game.set({ guesses: game.get('guesses') + 1 })
    return true
  }
}

game.play = async () => {
  console.log('correct', game.get('correct'))
  while (true) {
    let [action, guess] = await game.currentPlayerPlay(game.moves.guess)
    console.log('guess', guess)
    if (guess == game.get('correct')) break;
    console.log('endTurn')
    game.endTurn()
  }
  game.phase = 'finished'
  game.set('winner', game.currentPlayer)
}
