import InteractivePiece from './interactive-piece';

export default class Counter extends InteractivePiece {
  value: number;
  moves?: number = 0;
  name?: string;
  min?: number = 0;
  max?: number;
  steps?: number[] = [-1, 1];

  static serializable = ['value', 'moves', 'min', 'max', 'steps'];

  static component = 'Counter';

  actions = {
    set: {
      min: 0,
      max: 99,
      log: () => `$0 set ${this.name || 'counter'} to $1`,
      action: (value: number) => {
        let newValue = value;
        newValue = Math.max(newValue, 0, this.min!);
        if (this.max) newValue = Math.min(newValue, this.max);
        this.value = newValue;
        this.moves! += 1;
      },
    },
  };
}
