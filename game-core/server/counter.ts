import InteractivePiece from './interactive-piece';

export default class Counter extends InteractivePiece {
  initialize() {
    this.set({
      value: this.getNumber('initialValue'),
      moves: 0,
    });
  }

  actions = {
    set: {
      min: 0,
      max: 99,
      log: () => `$0 set ${this.get('name') || 'counter'} to $1`,
      action: value => {
        let newValue = value;
        newValue = Math.max(newValue, 0, this.getNumber('min'));
        if (this.getNumber('max')) newValue = Math.min(newValue, this.getNumber('max'));
        this.set({
          value: newValue,
          moves: this.getNumber('moves') + 1,
        });
      },
    },
  };
}

Counter.defaults = {
  initialValue: 0,
  min: 0,
  steps: [-1, 1],
};

Counter.component = 'Counter';
