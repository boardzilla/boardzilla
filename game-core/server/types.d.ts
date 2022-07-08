import type GameElement from './element';

export type Argument = string | number | object;

export interface Action {
  prompt: string | (() => string);
  key?: string;
  log?: string;
  confirm?: string | [string, string];
  select?: string | Argument[] | ((...Argument) => Argument[]);
  next?: Action;
  action?: (...Argument) => void;
  if?: string | ((...Argument) => boolean);
  unless?: string | ((...Argument) => boolean);
  drag?: string;
  onto?: string;
  promptOnto: string;
  toPlayer?: 'other' | 'all' | 'me';
  max?: number;
  min?: number;
}

type ActionReturn = {prompt: string, log: string};

interface ElementLookup extends Element {
  gameElement: GameElement;
}
