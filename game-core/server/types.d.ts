import type GameElement from './element';
import type GameDocument from './document';
import type Piece from './piece';
import type Space from './space';
import type InteractivePiece from './interactive-piece';
import type GameInterface from './interface';
import type Player from './player';

type Argument = string | number | boolean | Record<string, string | number | boolean> | GameElement | Player;
type AttributeValue = string | number | boolean | undefined;
type Attribute = AttributeValue | AttributeValue[] | Record<string, AttributeValue>

interface Action {
  prompt?: string | ((...a: Argument[]) => string);
  key?: string;
  log?: false | string | ((...a: Argument[]) => string);
  confirm?: string | [string, string];
  select?: string | Argument[] | Record<string, Argument> | ((...a: Argument[]) => Argument[]);
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

type PlayerMatSetup = (mat: GameElement, player: number, color: string) => void;
type BoardSetup = (e: Space) => void;
type ActionReturn = {prompt: string, log: string | Record<string, string>};

interface ElementLookup extends Element {
  gameElement: GameElement;
}

type Phase = 'setup' | 'ready' | 'finished';

type PlayerView = {
  variables: Record<string, AttributeValue>,
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

type ElementClass<T extends GameElement> = {
  new(context: Context, attrs: Record<string, any>): T,
  ctx: Context,
  serializable?: string[],
}

type Context = {
  node: ElementLookup;
  document: GameDocument;
  game: GameInterface;
}

type GameElementSerialization = 'player' | 'uuid' | 'x' | 'y' | 'left' | 'right' | 'top' | 'bottom' | 'columns' | 'rows' | 'layout' | 'zoom' | 'minWidth' | 'minHeight';
type PieceSerialization = GameElementSerialization | 'cell';
type InteractivePieceSerialization = PieceSerialization | 'component';
type SpaceSerialization = GameElementSerialization | 'label';
type BaseType<T> = (T extends InteractivePiece ? InteractivePiece : (T extends Piece ? Piece : Space))

type ElementAttributes<T extends GameElement> =
  // required attrs are non-optional attrs added beyond the base type
  {[K2 in Exclude<{[K in keyof T]: T extends Record<K, T[K]> ? K : never}[keyof T], undefined | keyof BaseType<T>>]: T[K2]} &
  // optional attrs are optional attrs added beyond the base type plus the serialization attributes on the base type
  {
    [K2 in Exclude<{[K in keyof T]: T extends Record<K, T[K]> ? never : K}[keyof T], undefined | keyof BaseType<T>> |
    keyof T & (T extends InteractivePiece ? InteractivePieceSerialization : (T extends Piece ? PieceSerialization : SpaceSerialization))]?: T[K2]
  } &
  // other args that are allowed but not stored on attrs or serialized normally
  {className?: string}
