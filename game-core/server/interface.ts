import random, { RandomSeed } from 'random-seed';
import Player from './player';
import GameDocument from './document';
import GameElement from './element';
import ActionQueue from './actionqueue';
import { asyncTimes, isSpaceNode } from './utils';
import Space from './space';
import Piece from './piece';
import InteractivePiece from './interactive-piece';
import type {Argument, Action, ActionReturn, NamedArg, Phase, PlayerView, QueueAction} from './types.d';

export class InvalidChoiceError extends Error {}
export class InvalidActionError extends Error {}
export class IncompleteActionError extends Error {
  constructor(public args: {prompt: string, min?: number, max?: number, choices?: string[] | Record<string, string>}) {
    super(args.prompt);
  }
}

type PlayerMatSetup = (mat: GameElement, player: number, color: string, turnOrder: number) => void;
type BoardSetup = (e: Space) => void;

export default class GameInterface {
  #players: Player[]; // list of Player objects in turn order
  #numberOfPlayers: number;
  #phase: Phase; // phase state machine: setup (can addPlayer) -> ready (can receive player actions)
  #currentPlayerPosition: number; // table position of current player (starts from 1) or undefined if any player can play
  private minPlayers = 1;
  private maxPlayers: number;
  private setupPlayerMats: PlayerMatSetup[] = []; // list of functions for player-mat setup
  private setupBoards: BoardSetup[] = []; // list of functions for board setup
  private afterMoves: [pieceSelector: string, fn: (e: GameElement) => void][] = []; // list of afterMove callbacks
  private actions: {[index: string]: Action} = {}; // list of available actions
  private playLoop?: () => Promise<void>; // main game loop function
  actionQueue: ActionQueue;
  hiddenKeys: string[];
  hiddenElements: [string, string[]?][];
  variables: Record<string, string | number | boolean>;
  allowedMoveElements: string;
  alwaysAllowedPlays: string[];
  currentActions: string[];
  promptMessage: string;
  changeset: [string, string][];
  random: RandomSeed;
  doc: GameDocument;
  board: Space; 
  pile: Space; 
  initialVariables: Record<string, string | number | boolean>;
  idSequence: number;
  sequence: number;
  lastReplaySequence: number;

  constructor() {
    this.actionQueue = new ActionQueue();
    this.hiddenKeys = [];
    this.hiddenElements = [];
    this.variables = {};
    this.allowedMoveElements = '.piece'; // piece selector that is always valid for moving
    this.alwaysAllowedPlays = []; // actions that anyone can take at any time
    this.currentActions = [];
    this.changeset = []; // list of changes this action [[old-id, new-id],...]
  }

  /**
   * after constructor and all game functions registered
   */
  initialize(rseed: string) {
    console.log('I: initialize');
    this.random = random.create(rseed);
    this.doc = new GameDocument(this);
    this.board = this.doc.board();
    this.pile = this.doc.pile();
    this.variables = this.initialVariables || {};
    this.idSequence = 0;
    this.sequence = 0;
    this.#phase = 'setup';
  }

  async startProcessing() {
    await this.waitForPlayerStart();
    await this.runPlayLoop();
    this.#phase = 'finished';
  }

  async waitForPlayerStart() {
    console.log('I: waitForPlayerStart');
    await this.actionQueue.waitForMatchingAction(({ action }) => action === 'start');
    this.initializeBoardWithPlayers();
    this.lastReplaySequence = -1;
  }

  async processHistory(history: [number, number, string, ...string[]][]) {
    await this.processPlayerStart();
    this.lastReplaySequence = history.length > 0 ? history[history.length - 1][1] : -1;
    return this.replay(history);
  }

  initializeBoardWithPlayers() {
    this.setupBoards.forEach(f => f(this.board));
    Object.entries(this.players).forEach(([turn, { position, color }]) => {
      const playerMat = this.doc.addSpace(`#player-mat-${position}`, { player: position, class: 'player-mat', color });
      this.setupPlayerMats.forEach(f => f(playerMat, position, color, parseInt(turn, 10)));
    });
    this.#currentPlayerPosition = 1;
  }

  defineAction(name: string, action: Action) {
    if (typeof name !== 'string' || typeof action !== 'object') throw Error('usage: defineAction(someAction, { ...action properties... })');
    this.validateAction(name, action);
    this.actions[name] = action;
  }

  defineActions(actions: Record<string, Action>) {
    if (typeof actions !== 'object') throw Error('usage: defineActions({ someAction: { ...action properties... },... })');
    Object.entries(actions).forEach(action => this.defineAction(...action));
  }

  validateAction(name: string, action: Action) {
    if (!action.prompt) throw Error(`${name} is missing a 'prompt'`);
    if (action.confirm && action.select) throw Error(`${name} may not have both 'confirm' and 'select'`);
    if (action.next && action.action) throw Error(`${name} may not have both 'next' and 'action'. Use 'next' for a follow-up action, and 'action' only at the end.`);
    if (action.if && action.unless) throw Error(`${name} may not have both 'if' and 'unless'`);
    if (action.drag) {
      if (!action.onto && !action.toPlayer) throw Error(`${name} has a 'drag' but no 'onto' or 'toPlayer'`);
    }
    if (action.max === undefined ? action.min !== undefined : action.min === undefined) {
      throw Error(`${name} has 'min' or 'max' but needs both`);
    }
    if (action.next) this.validateAction(`${name}.next`, action.next);
  }

  getAllActions() {
    return Object.keys(this.actions);
  }

  setupBoard(fn: BoardSetup) {
    this.setupBoards.push(fn);
  }

  playerMat(player = this.currentPlayerPosition) {
    if (!player) throw Error('playerMat called without a player');
    return this.doc.find(`.player-mat[player="${player}"]`);
  }

  setupPlayerMat(fn: PlayerMatSetup) {
    if (typeof fn !== 'function') throw Error('usage: setupPlayerMat((mat, player, color, turnOrder) => { ... add things to `mat` ... });');
    this.setupPlayerMats.push(fn);
  }

  setPlayers({min, max}: { min: number, max: number }) {
    this.minPlayers = min;
    this.maxPlayers = max;
  }

  async processPlayerStart() {
    return this.actionQueue.processAction({ action: 'start', player: 1, args: [] });
  }

  play(fn: () => Promise<void>) {
    if (this.playLoop) throw Error('play() must not be called more than once');
    this.playLoop = fn;
  }

  async runPlayLoop() {
    console.log('I: ready');
    this.#phase = 'ready';
    if (!this.playLoop) throw Error('play() must be called');
    return this.playLoop();
  }

  // add player to game
  addPlayers(players: {id: number, name: string, color: string}[]) {
    if (this.phase !== 'setup') throw Error('not able to add players while playing');
    if (players.length > this.maxPlayers) throw Error('too many players');
    this.#players = Object.entries(players).map(([index, { id, name, color }]) => new Player(name, color, id, parseInt(index, 10) + 1));
    this.#numberOfPlayers = this.players.length;
  }

  get(key: string) {
    return this.variables[key];
  }

  /**
   * set game properties
   * set({ attr1: newValue, attr2: newValue,... })
   * set(attr1, newValue)
   */
  set(key: string | Record<string, string | number | boolean>, value?: string | number | boolean) {
    if (typeof key === 'object') {
      Object.entries(key).forEach(([n, v]) => this.set(n, v));
    } else {
      if (value === undefined) {
        this.set(key, true);
      } else {
        this.variables[key] = value;
      }
    }
  }

  unset(key: string) {
    delete this.variables[key];
  }

  registerId(ns: string) {
    return `${ns}-${++this.idSequence}`;
  }

  hide(key: string) {
    this.hiddenKeys.push(key);
  }

  hideBoard(selector: string, attrs?: string[]) {
    this.hiddenElements.push([selector, attrs]);
  }

  shownVariables() {
    const a = this.hiddenKeys.reduce((vars, key) => {
      const { [key]: _, ...rest } = vars;
      return rest;
    }, this.variables);
    return a;
  }

  serialize(value: Argument): string;
  serialize(value: Argument[]): string[];
  serialize(value: Record<string, Argument>): Record<string, string>;
  serialize(value: Argument[] | Record<string, Argument>): string[] | Record<string, string>;
  serialize(value: Argument | Argument[] | Record<string, Argument>): string | string[] | Record<string, string> {
    try {
      if (value instanceof Array) return value.map(v => this.serialize(v));
      if (value instanceof Player) return `$p(${this.playerByUserId(value.userId)})`;
      if (value instanceof GameElement) return value.serialize();
      if (typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, this.serialize(v)]));
      return JSON.stringify(value);
    } catch (e) {
      console.error('unable to serialize', value);
      throw e;
    }
  }

  deserialize(value: string[]): Argument[];
  deserialize(value: string): Argument;
  deserialize(value: string | string[]): Argument | Argument[] {
    // if (value === undefined) return undefined;
    try {
      if (value instanceof Array) return value.map(v => this.deserialize(v));
      // if (typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, this.deserialize(v)]));
      if (typeof value === 'string') {
        let deserialized: (GameElement | Player | undefined);
        if (value.slice(0, 4) === '$el(') {
          deserialized = this.doc.pieceAt(value.slice(4, -1));
        }
        if (value.slice(0, 6) === '$uuid(') {
          deserialized = this.doc.find(`[uuid="${value.slice(6, -1)}"]`);
        }
        if (value.slice(0, 3) === '$p(') {
          deserialized = this.player(parseInt(value.slice(3, -1), 10));
        }
        if (deserialized) return deserialized;
      }
      return JSON.parse(value);
    } catch (e) {
      console.error('unable to deserialize', value);
      throw e;
    }
  }

  // convert uuid-based references to branch-references
  normalize(value: string): string
  normalize(value: string[]): string[];
  normalize(value: string | string[]): string | string[];
  normalize(value: string | string[]): string | string[] {
    if (value instanceof Array) return value.map(v => this.normalize(v));
    if (value.slice && value.slice(0, 6) === '$uuid(') {
      return (this.deserialize(value) as GameElement).branch();
    }
    return value;
  }

  getPlayerViews() {
    return this.players.reduce((views, { position, userId }) => {
      views[userId] = this.getPlayerView(position);
      return views;
    }, {} as Record<string, object>);
  }

  getPlayerView(player: number): PlayerView {
    console.time('getPlayerView');
    const playerView = this.doc.clone();
    console.log('getPlayerView:doc.clone');
    console.timeLog('getPlayerView');

    const allowedDrags = this.inScopeAsPlayer(player, () => {
      this.hiddenElements.forEach(([selector, attrs]) => {
        playerView.findNodes(selector).forEach(n => {
          n.removeAttribute('id');
          (attrs || n.getAttributeNames())
            .filter(attr => !['class', 'className', 'style', 'player', 'layout', 'component', 'x', 'y', 'top', 'left', 'right', 'bottom'].includes(attr))
            .forEach(attr => n.removeAttribute(attr));
          if (isSpaceNode(n)) n.innerHTML = ''; // space contents are hidden
        });
      });
      console.log('getPlayerView:hidden');
      console.timeLog('getPlayerView');

      playerView.findNodes('.mine').forEach(n => n.classList.add('mine'));
      playerView.findNodes('[player]:not(.mine)').forEach(n => (
        n.setAttribute('player-after-me', String((parseInt(n.getAttribute('player')!, 10) - player + this.players.length) % this.players.length))
      ));

      const view = this.currentActions.reduce((drags, action) => {
        const drag = this.actions[action].drag;
        if (drag) {
          drags[action] = {
            pieces: this.serialize(this.doc.findAll(drag)),
            spaces: this.serialize(this.doc.findAll(this.ontoSelector(this.actions[action]))),
          };
        }
        return drags;
      }, {} as Record<string, {pieces: string[], spaces: string[]}>);
      console.log('getPlayerView:allowedDrags');
      console.timeLog('getPlayerView');
      return view;
    });

    const allowedActions = this.choicesFromActions(player);
    console.log('getPlayerView:allowedActions');
    console.timeEnd('getPlayerView');

    return {
      variables: this.shownVariables(),
      phase: this.phase,
      players: this.players,
      sequence: this.sequence,
      doc: playerView.node.outerHTML,
      changes: this.changeset,
      allowedMove: this.allowedMoveElements,
      allowedActions,
      allowedDrags,
      prompt: this.promptMessage,
    };
  }

  // provide a fn that should be run after any board moves
  afterMove(pieceSelector: string, fn: (e: GameElement) => void) {
    this.afterMoves.push([pieceSelector, fn]);
  }

  // wait for an action from list of actions from current player
  async currentPlayerPlay(actions: string[]) {
    return this.playerPlay(actions, this.currentPlayerPosition);
  }

  // wait for an action from list of actions from any player
  async anyPlayerPlay(actions: string[]) {
    return this.playerPlay(actions);
  }

  async playerPlay(allowedActions: string[], allowedPlayer?: number): Promise<QueueAction> {
    if (!(allowedActions instanceof Array)) throw Error('called a play action without a list of actions');
    this.currentActions = allowedActions;
    if (allowedPlayer !== undefined) this.#currentPlayerPosition = allowedPlayer;

    const allAllowedActions = [...allowedActions, ...this.alwaysAllowedPlays, 'moveElement'];

    const completedAction = await this.actionQueue.waitForMatchingAction(({ player, action }) => {
      if (!allAllowedActions.includes(action)) {
        return `'${action}' not allowed right now. Only '${allowedActions.join('\', \'')}'`;
      }
      if (allowedPlayer && allowedPlayer !== player) {
        return `Waiting for player ${allowedPlayer} and rejected action from player ${player}.`;
      }
      return true;
    }, ({ player, action, args }) => {
      console.log('I runAction', action, args);
      if (action === 'moveElement' && args) {
        return this.inScopeAsPlayer(player, () => this.moveElement(
          this.deserialize(args[0]) as Piece,
          this.deserialize(args[1]) as {pos?: number, x?: number, y?: number}
        ));
      }
      this.inScopeAsPlayer(player, () => this.runAction(action, this.deserialize(args)));
    });
    if (allowedActions.includes(completedAction.action)) return completedAction;
    return this.playerPlay(allowedActions, allowedPlayer);
  }

  // runs provided async block for each player, starting with the current
  async playersInTurn(fn: (p: number) => Promise<void>) {
    if (!this.currentPlayerPosition) this.#currentPlayerPosition = this.players[0].position;
    await asyncTimes(this.players.length, async () => {
      console.log('asyncTimes');
      const startedThisTurn = this.currentPlayerPosition;
      console.log('starting playersInTurn', this.currentPlayerPosition);
      await fn(this.currentPlayerPosition);
      this.#currentPlayerPosition = startedThisTurn;
      this.endTurn();
      console.log('ending playersInTurn', this.currentPlayerPosition);
    });
  }

  turnOrderOf(playerPosition: number) {
    return this.players.findIndex(p => p.position === playerPosition);
  }

  // allow movement of pieces within their space if match the given selector
  playersMayAlwaysMove(selector: string) {
    this.allowedMoveElements = selector;
  }

  playersMayAlwaysPlay(actions: string[]) {
    this.alwaysAllowedPlays = actions;
  }

  processAfterMoves(elements: GameElement[]) {
    this.afterMoves.forEach(([pieceSelector, fn]) => {
      elements.forEach(el => {
        if (el.matches(pieceSelector)) fn(el);
      });
    });
  }

  prompt(promptMessage: string) {
    this.promptMessage = promptMessage;
  }

  // test list of actions for validity and options, returns object of name:{prompt, choices?}
  choicesFromActions(player: number) {
    if (this.currentPlayerPosition !== undefined && player !== this.currentPlayerPosition) return {};
    return this.currentActions.reduce((choices, action) => {
      // console.time('choicesFromActions:' + action);
      const { key } = this.actions[action] || {};
      try {
        const { prompt } = this.testAction(action, player);
        choices[action] = { prompt, key };
      } catch (e) {
        if (e instanceof IncompleteActionError) {
          choices[action] = { ...e.args, key };
        } else if (e instanceof InvalidActionError) {
          console.log('skip action', action);
          return choices; // skip
        } else {
          throw e;
        }
      }
      // console.timeEnd('choicesFromActions:'+action);
      return choices;
    }, {} as Record<string, {prompt: string, key?: string, choices?: string[] | Record<string, string>}>);
  }

  // test a given action without modifying state, rethrow, returns prompt string
  testAction(action: string, player: number) {
    return this.inScopeAsPlayer(player, () => this.runAction(action, [], 0, true));
  }

  // function that tries to run an action and delegates to the various main types of actions to determine outcome, returns {prompt, log}
  runAction(actionIdentifier: string | Action, args: Argument[] = [], argIndex = 0, test = false) {
    let actionName: string;
    let action: Action;

    if (actionIdentifier === 'interactWithPiece') {
      let interactivePiece, interactiveAction;
      ([interactivePiece, interactiveAction, ...args] = args);
      if (!(interactivePiece instanceof InteractivePiece) || typeof interactiveAction !== 'string') throw Error('interactWithPiece called without Piece, action');
      actionName = interactiveAction;
      action = interactivePiece.actions[actionName];
    } else {
      if (typeof actionIdentifier === 'string') {
        actionName = actionIdentifier;
        action = this.actions[actionIdentifier];
      } else {
        action = actionIdentifier;
        if (typeof action.prompt === 'function') {
          actionName = action.prompt(...args);
        } else {
          actionName = action.prompt || 'action';
        }
      }
    }

    let { prompt } = action;
    if (typeof prompt === 'function') prompt = prompt(...args);
    if (!prompt) prompt = 'prompt'
    if (action.key) prompt += ` (${action.key.toUpperCase()})`;

    if (!action) {
      throw Error(`No such action: ${actionName}`);
    }

    if (action.if || action.unless) {
      const condition = action.if || action.unless;
      let result = true;
      if (typeof condition === 'function') result = condition(...args);
      if (typeof condition === 'string') result = this.doc.contains(condition);
      result = action.unless ? !result : result;
      if (!result) throw new InvalidActionError(`${actionName} not allowed due to "if" condition`);
    }

    let nextAction: (a: Argument[]) => void | ActionReturn = () => {};
    if (action.action) {
      const nestedAction = action.action
      nextAction = a => nestedAction(...a);
    }
    if (!test && action.next) {
      const nestedAction = action.next;
      nextAction = () => this.runAction(nestedAction, args, argIndex + (action.drag ? 3 : 1)); // drag uses 3 args instead of 1
    }

    let namedArgs: NamedArg[] = [];
    if (!test) namedArgs = this.namedElements(args, []);
    let nextPrompt;
    if (action.drag) {
      nextPrompt = this.dragAction(action.drag, this.ontoSelector(action), prompt, action.promptOnto, nextAction)(args);
      if (action.toPlayer && args[1] instanceof GameElement) {
        const player = args[1].player();
        if (player !== null) args[1] = this.player(player) || args[1];
      }
    } else if (action.select) {
      if (typeof action.select === 'object') {
        nextPrompt = this.chooseAction(action.select, prompt, nextAction, argIndex)(args);
      } else if (typeof action.select === 'string') {
        nextPrompt = this.chooseAction(this.doc.findAll(action.select), prompt, nextAction, argIndex)(args);
      } else if (typeof action.select === 'function') {
        nextPrompt = this.chooseAction(action.select(...args), prompt, nextAction, argIndex)(args);
      } else {
        throw Error(`'select' for ${actionName} must be a list or a finder`);
      }
    } else if (action.confirm) {
      const confirmationOptions = action.confirm instanceof Array ? { true: action.confirm[0], false: action.confirm[1] } : { true: action.confirm, false: 'Cancel' };
      if (args[argIndex] === false) throw new InvalidActionError(); // just cancel the action
      nextPrompt = this.chooseAction(confirmationOptions, prompt, nextAction, argIndex)(args);
    } else if (action.max !== undefined && action.min !== undefined) { // simple numerical
      const min = (typeof action.min === 'function') ? action.min(...args) : action.min;
      const max = (typeof action.max === 'function') ? action.max(...args) : action.max;
      nextPrompt = this.chooseNumberAction(min, max, prompt, nextAction, argIndex)(args);
    } else if (nextAction) {
      const result = nextAction(args);
      if (result) {
        nextPrompt = result.prompt;
      } else {
        nextPrompt = prompt;
      }
    } else {
      throw Error(`Could not determine type of action ${actionName}`);
    }

    let log;
    if (!test) {
      namedArgs = this.namedElements(args, namedArgs);
      log = this.logEntry(action, args, namedArgs);
    } else {
      log = '';
    }
    return { prompt: nextPrompt, log };
  }

  dragAction(pieceSelector: string, spaceSelector: string, prompt: string, promptOnto: string | undefined, action: (a: Argument[]) => void) {
    return this.chooseAction(
      this.doc.findAll(pieceSelector),
      prompt,
      args => this.chooseAction(
        this.doc.findAll(spaceSelector),
        promptOnto || prompt,
        ([piece, space, positioning]) => {
          if (action) {
            action([piece, space]);
          }
          if (positioning && typeof positioning === 'object' && !(positioning instanceof GameElement) && !(positioning instanceof Player) && piece instanceof Piece && space instanceof GameElement) {
            if (positioning && positioning.pos! !== undefined) {
              piece.moveTo(space, -1 - (positioning.pos as number));
            } else {
              piece.moveTo(space);
              if (positioning) piece.set(positioning);
            }
          }
        },
        1,
      )(args),
    );
  }

  // returns a fn (...choices) -> action that throws appropriate choice errors
  chooseNumberAction(min: number, max: number, prompt: string, action: (a: Argument[]) => void, argIndex = 0) {
    return (args: Argument[]) => {
      const choice = args[argIndex];
      if (choice === undefined) {
        if (min === max && action && argIndex > 0) {
          // auto-select simgle choice if not the first arg
          args.push(min);
          action(args);
        } else {
          throw new IncompleteActionError({ min, max, prompt });
        }
      } else {
        if (Number.isNaN(choice)) throw new InvalidChoiceError(`${choice} is not a number`);
        if (min > choice || max < choice) throw new InvalidChoiceError(`${choice} not between ${min} and ${max}`);
        if (action) action(args);
      }
      return prompt;
    };
  }

  // returns a fn (...choices) -> action that throws appropriate choice errors
  chooseAction(validChoices: Argument[] | Record<string, Argument>, prompt: string, action: (a: Argument[]) => void, argIndex = 0) {
    const choices = this.serialize(validChoices);
    return (args: Argument[]) => {
      const choice = args[argIndex];
      if (choice === undefined) {
        if (Object.values(choices).length === 1 && action && argIndex > 0) {
          // auto-select simgle choice if not the first arg
          args.push((validChoices instanceof Array ? validChoices : Object.keys(validChoices))[0]);
          action(args);
        } else {
          throw new IncompleteActionError({ choices, prompt });
        }
      } else {
        if (!(choices instanceof Array ? choices : Object.keys(choices)).includes(this.serialize(choice))) {
          throw new InvalidChoiceError(`${this.serialize(choice)} not found in ${choices instanceof Array ? choices : Object.keys(choices)}`);
        }
        if (action) action(args);
      }
      return prompt;
    };
  }

  ontoSelector(action: Action) {
    let { onto, toPlayer } = action; // eslint-disable-line prefer-const
    if (toPlayer) {
      onto = onto || '';
      if (toPlayer === 'other') {
        onto = `.player-mat:not(.mine) ${onto}`;
      }
      if (toPlayer === 'all') {
        onto = `.player-mat ${onto}`;
      }
      if (toPlayer === 'me') {
        onto = `.player-mat.mine ${onto}`;
      }
    }
    return onto || '*';
  }

  async replay(actions: [number, number, string, ...string[]][]) {
    console.log('I: replay');
    for (let i = 0; i !== actions.length; i++) {
      await this.processAction(actions[i][0], actions[i][1], actions[i][2], ...actions[i].slice(3) as string[]);
    }
  }

  async processAction(player: number, sequence: number, action: string, ...args: string[]) {
    if (this.phase !== 'ready') throw Error(`Received action ${action} before ready`);
    console.log(`received action (p=${player}, #${sequence} =? #${this.sequence}, ${action}, ${args})`);
    const start = Date.now();
    this.changeset = [];

    if (this.sequence !== sequence) {
      if (sequence <= this.lastReplaySequence) {
        return { type: 'error', message: 'Unable to replay history with this game version' };
      }
      console.log('Out of sequence - trying anyways', this.sequence, sequence);
    }

    try {
      const normalizedArgs = this.normalize(args);
      const result = await this.actionQueue.processAction({ player, action, args: normalizedArgs });
      const actionResult = {
        type: 'ok',
        player,
        sequence: this.sequence,
        action: [action, ...normalizedArgs],
        messages: result && result.log,
        start,
        timestamp: Date.now(),
      };
      this.sequence++;
      return actionResult;
    } catch (e) {
      console.log('got processAction error', e);
      if (e instanceof IncompleteActionError) {
        return { type: 'incomplete', ...e.args };
      }
      return { type: 'error', message: e.message };
    }
  }

  logEntry(action: Action, args: Argument[], namedArgs: NamedArg[]) {
    if (action.drag) namedArgs = namedArgs.slice(0, 2);
    const name = this.currentPlayer() && this.currentPlayer().colorEncodedName();
    return this.players.reduce((entry, { position, userId }) => {
      position -= 1;
      if (action.log) {
        let { log } = action;
        if (typeof log === 'function') log = log(...args);
        entry[userId] = log.replace(/\$(\d+)/g, sub => {
          if (sub[1] === '0') return name;
          const namedArg = namedArgs[parseInt(sub[1], 10) - 1];
          if (namedArg instanceof Array) return (namedArg[position].shown || namedArg[position].hidden)!;
          return namedArg;
        });
      } else if (action.log !== false) {
        entry[userId] = `${name} : ${action.prompt} ${namedArgs.map(a => (a instanceof Array && a[position] ? a[position].shown || a[position].hidden : a)).join(' ')}`.trim();
      }
      return entry;
    }, {} as Record<string, string>);
  }

  // takes [arg, arg...] and returns [ [ {hidden: argname}, {showm: argname},... ], [ {hidden: argname}, {showm: argname},... ],... ]
  // namedElements[el][player]
  namedElements(elements: Argument[], previousNames: NamedArg[]): NamedArg[] {
    return Object.entries(elements).map(([i, el]) => {
      if (el instanceof Player) return el.name;
      if (!(el instanceof GameElement)) return String(el);
      return this.playersInPositionOrder().map(({ position }) => {
        const previous = previousNames[parseInt(i, 10)];
        if (previous && typeof previous !== 'string' && previous[position - 1].shown) return previous[position - 1];
        const hidden = this.inScopeAsPlayer(position, () => !!this.hiddenElements.find(([selector]) => el.matches(selector)));
        const name = el.name(position, hidden);
        return { [el.id && !hidden ? 'shown' : 'hidden']: name };
      });
    });
  }

  set currentPlayerPosition(player) {
    if (player > this.players.length || player < 1) {
      throw Error(`No such player ${player}`);
    }
    this.#currentPlayerPosition = player;
  }

  get currentPlayerPosition() {
    return this.#currentPlayerPosition;
  }

  player(position: number) {
    return this.players.find(p => p.position === position);
  }

  currentPlayer() {
    return this.player(this.currentPlayerPosition)!;
  }

  get phase() {
    return this.#phase;
  }

  get players() {
    return this.#players;
  }

  get numberOfPlayers() {
    return this.#numberOfPlayers;
  }

  otherPlayers() {
    return this.players.filter(p => p.position !== this.currentPlayerPosition);
  }

  reorderPlayersBy(fn: (p: number) => number | string) {
    if (typeof fn !== 'function') throw Error('reorderPlayersBy must be called with a player ranking function, e.g. "reorderPlayersBy(playerNumber => getScore(playerNumber))"');
    const ranks = this.playersInPositionOrder().map(p => fn(p.position));
    this.players.sort((p1, p2) => (ranks[p1.position - 1] > ranks[p2.position - 1] ? 1 : (ranks[p1.position - 1] < ranks[p2.position - 1] ? -1 : 0)));
  }

  playersInPositionOrder() {
    return this.players.sort((p1, p2) => (p1.position > p2.position ? 1 : -1));
  }

  inScopeAsPlayer<T>(player: number, fn: () => T): T {
    const tmpPlayer = this.currentPlayerPosition;
    this.#currentPlayerPosition = player;
    try {
      return fn();
    } finally {
      this.#currentPlayerPosition = tmpPlayer;
    }
  }

  playerByUserId(userId: number) {
    const player = this.players.find(p => p.userId === userId);
    if (!player) throw Error(`No such player ${userId}`);
    return player.position;
  }

  endTurn() {
    this.#currentPlayerPosition = this.players[(this.turnOrderOf(this.currentPlayerPosition) + 1) % this.players.length].position;
  }

  moveElement(el: Piece, positioning: {pos?: number, x?: number, y?: number}) {
    if (el.matches(this.allowedMoveElements)) {
      if (positioning.pos !== undefined) {
        el.moveTo(undefined, -1 - positioning.pos);
      } else {
        el.moveToTop();
        el.set(positioning);
      }
    } else {
      throw Error(`Illegal moveElement ${el.node.outerHTML}, ${this.allowedMoveElements}`);
    }
  }
}
