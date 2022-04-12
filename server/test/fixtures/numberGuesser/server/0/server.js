const GameInterface = require('game-core-server/interface');

class NumberGuesser extends GameInterface {
  constructor(seed) {
    super(seed);
    this.minPlayers = 1;
    this.maxPlayers = 2;

    this.initialVariables = {
      winner: null,
      correct: 10, // TODO seed; Math.floor(Math.random() * 10) + 1,
      guesses: 0,
    };

    this.hide('correct');

    this.actions = {
      guess: {
        min: 1,
        max: 10,
        next: () => this.set({ guesses: this.get('guesses') + 1 }),
      },
    };

    this.play = async () => {
      console.log('correct', this.get('correct'));
      while (true) {
        const [action, guess] = await this.currentPlayerPlay('guess');
        if (guess == this.get('correct')) break;
        console.log('endTurn');
        this.endTurn();
      }
      this.phase = 'finished';
      this.set('winner', this.currentPlayer);
    };
  }
}

module.exports = NumberGuesser;
