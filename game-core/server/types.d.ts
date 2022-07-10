import type GameElement from './element';
import type Player from './player';
declare module 'linkedom/cached';

type Argument = string | number | boolean | Record<string, string | number> | GameElement | Player;

interface Action {
  prompt?: string | ((...a: Argument[]) => string);
  key?: string;
  log?: false | string | ((...a: Argument[]) => string);
  confirm?: string | [string, string];
  select?: string | Argument[] | ((...a: Argument[]) => Argument[]);
  next?: Action;
  action?: (...a: Argument[]) => void;
  if?: string | ((...a: Argument[]) => boolean);
  unless?: string | ((...a: Argument[]) => boolean);
  drag?: string;
  onto?: string;
  promptOnto?: string;
  toPlayer?: 'other' | 'all' | 'me';
  max?: number | ((...a: Argument[]) => number);
  min?: number | ((...a: Argument[]) => number);
}

type ActionReturn = {prompt: string, log: string | Record<string, string>};

interface ElementLookup extends Element {
  gameElement: GameElement;
}

type Phase = 'setup' | 'ready' | 'finished';

type PlayerView = {
  variables: Record<string, string | number | boolean>,
  phase: Phase,
  players: Player[],
  sequence: number,
  doc: string,
  changes: [string, string][],
  allowedMove: string,
  allowedActions: Record<string, {prompt: string, key?: string, choices?: string[] | Record<string, string>}>,
  allowedDrags: Record<string, {pieces: string[], spaces: string[]}>,
  prompt: string,
};

type QueueAction = {action: string; args: string[]; player: number};

interface QueueItem {
  action: QueueAction;
  resolve: (r: void | ActionReturn) => void;
  reject: (e: Error) => void;
}

type NamedArg = (string | {hidden?: string, shown?: string}[]);
