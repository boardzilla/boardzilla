const random = require('random-seed');
const Player = require('./player');
const GameDocument = require('./document');
const GameElement = require('./element');
const ActionQueue = require('./actionqueue');
const { asyncTimes, isSpaceNode } = require('./utils');

class InvalidChoiceError extends Error {}
class InvalidActionError extends Error {}
class IncompleteActionError extends Error {
  constructor(args) {
    super(args.prompt);
    this.args = args;
  }
}

class GameInterface {
  #minPlayers = 1;

  #maxPlayers;

  // list of Player objects in turn order
  #players = [];

  // phase state machine: setup (can addPlayer) -> ready (can receive player actions)
  #phase;

  // list of functions for player-mat setup
  #setupPlayerMat = [];

  // list of functions for board setup
  #setupBoard = [];

  // list of afterMove callbacks
  #afterMoves = [];

  // list of available actions
  #actions = {};

  // main game loop function
  #play;

  // position of current player, or undefined if any player can play
  #currentPlayerPosition;

  constructor() {
    this.actionQueue = new ActionQueue();
    this.hiddenKeys = [];
    this.hiddenElements = [];
    this.variables = {};
    this.allowedMoveElements = ''; // piece selector that is always valid for moving
    this.alwaysAllowedPlays = []; // actions that anyone can take at any time
    this.drags = {};
    this.currentActions = [];
    this.promptMessage = null;
    this.changeset = []; // list of changes this action [[old-id, new-id],...]
  }

  /**
   * after constructor and all game functions registered
   */
  initialize(rseed) {
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

  async processHistory(history) {
    await this.processPlayerStart();
    this.lastReplaySequence = history.length > 0 ? history[history.length - 1][1] : -1;
    return this.replay(history);
  }

  initializeBoardWithPlayers() {
    this.#players.forEach(({ position, color }) => {
      const playerMat = this.doc.addSpace(`#player-mat-${position}`, { player: position, class: 'player-mat', color });
      this.#setupPlayerMat.forEach(f => f(playerMat));
    });
    this.#setupBoard.forEach(f => f(this.board));
    this.currentPlayerPosition = 1;
  }

  defineAction(name, action) {
    if (typeof name !== 'string' || typeof action !== 'object') throw Error('usage: defineAction(someAction, { ...action properties... })');
    const unknownAttrs = Object.keys(action).filter(a => !['select', 'prompt', 'promptOnto', 'log', 'if', 'key', 'action', 'next', 'drag', 'onto', 'min', 'max', 'toPlayer'].includes(a));
    if (unknownAttrs.length) throw Error(`${name} has unknown properties: '${unknownAttrs.join('\', \'')}'`);
    if (!action.prompt) throw Error(`${name} is missing 'prompt'`);
    if (action.next && action.action) throw Error(`${name} may not have both 'next' and 'action'. Use 'next' for a follow-up action, and 'action' only at the end.`);
    if (action.drag) {
      if (!action.onto && !action.toPlayer) throw Error(`${name} has a 'drag' but no 'onto' or 'toPlayer'`);
      if (action.onto instanceof Array && action.onto.length === 0) {
        throw Error(`${name} has an 'onto' with no spaces.`);
      }
    }
    if (action.toPlayer && action.toPlayer !== 'other' && action.toPlayer !== 'all') throw Error(`${name} 'toPlayer' must be 'other' or 'all'`);
    if (action.max === undefined ? action.min !== undefined : action.min === undefined) {
      throw Error(`${name} has 'min' or 'max' but needs both`);
    }
    this.#actions[name] = action;
  }

  defineActions(actions) {
    if (typeof actions !== 'object') throw Error('usage: defineActions({ someAction: { ...action properties... },... })');
    Object.entries(actions).forEach(action => this.defineAction(...action));
  }

  getAllActions() {
    return Object.keys(this.#actions);
  }

  setupBoard(fn) {
    if (typeof fn !== 'function') throw Error('usage: setupBoard(board => { ... add things to `board` ... });');
    this.#setupBoard.push(fn);
  }

  playerMat(player) {
    if (!player) throw Error('playerMat called without a player or a current player');
    return this.doc.find(`#player-mat[player="${player}"]`);
  }

  setupPlayerMat(fn) {
    if (typeof fn !== 'function') throw Error('usage: setupPlayerMat(mat => { ... add things to `mat` ... });');
    this.#setupPlayerMat.push(fn);
  }

  setPlayers({ min, max }) {
    this.#minPlayers = min;
    this.#maxPlayers = max;
  }

  async processPlayerStart() {
    return this.actionQueue.processAction({ action: 'start' });
  }

  play(fn) {
    if (typeof fn !== 'function') throw Error('usage: play(async () => { ... play actions ... });');
    if (this.#play) throw Error('play() must not be called more than once');
    this.#play = fn;
  }

  async runPlayLoop() {
    console.log('I: ready');
    this.#phase = 'ready';
    if (!this.#play) throw Error('play() must be called');
    return this.#play();
  }

  // add player to game
  addPlayers(players) {
    if (this.phase !== 'setup') throw Error('not able to add players while playing');
    if (players.length > this.#maxPlayers) throw Error('too many players');
    this.#players = Object.entries(players).map(([index, { id, name, color }]) => new Player({ userId: id, name, color, position: parseInt(index, 10) + 1 }));
  }

  get(key) {
    return this.variables[key];
  }

  set(key, value) {
    this.variables[key] = value;
  }

  delete(key) {
    delete this.variables[key];
  }

  registerId(ns) {
    return `${ns}-${++this.idSequence}`;
  }

  hide(key) {
    this.hiddenKeys.push(key);
  }

  hideBoard(selector, attrs) {
    if (typeof selector !== 'string' || !(attrs instanceof Array)) throw Error('usage: hideBoard(selector, attributes) e.g. hideBoard(\'card.flipped\', [\'name\'])');
    this.hiddenElements.push([selector, attrs]);
  }

  shownVariables() {
    const a = this.hiddenKeys.reduce((vars, key) => {
      const { [key]: _, ...rest } = vars;
      return rest;
    }, this.variables);
    return a;
  }

  serialize(value) {
    try {
      if (value instanceof Array) return value.map(v => this.serialize(v));
      if (value instanceof Player) return `$p(${this.playerByUserId(value.userId)})`;
      if (value && value.serialize) {
        return value.serialize();
      }
      return JSON.stringify(value);
    } catch (e) {
      console.error('unable to serialize', value);
      throw e;
    }
  }

  deserialize(value) {
    if (value === undefined) return undefined;
    try {
      if (value instanceof Array) return value.map(v => this.deserialize(v));
      if (value && value.slice) {
        if (value.slice(0, 4) === '$el(') {
          return this.doc.pieceAt(value.slice(4, -1));
        }
        if (value.slice(0, 6) === '$uuid(') {
          return this.doc.find(`[uuid="${value.slice(6, -1)}"]`);
        }
        if (value.slice(0, 3) === '$p(') {
          return this.player(parseInt(value.slice(3, -1), 10));
        }
      }
      return JSON.parse(value);
    } catch (e) {
      console.error('unable to deserialize', value);
      throw e;
    }
  }

  normalize(value) {
    if (value instanceof Array) return value.map(v => this.normalize(v));
    if (value.slice && value.slice(0, 6) === '$uuid(') {
      return this.deserialize(value).branch();
    }
    return value;
  }

  getPlayerViews() {
    return this.#players.reduce((views, { position, userId }) => {
      views[userId] = this.getPlayerView(position);
      return views;
    }, {});
  }

  getPlayerView(player) {
    console.time('getPlayerView');
    const playerView = this.doc.clone();
    console.log('getPlayerView:doc.clone');
    console.timeLog('getPlayerView');

    const allowedDrags = this.inScopeAsPlayer(player, () => {
      this.hiddenElements.forEach(([selector, attrs]) => {
        playerView.findNodes(selector).forEach(n => {
          n.removeAttribute('id');
          attrs.forEach(attr => n.removeAttribute(attr));
          if (isSpaceNode(n)) n.innerHTML = ''; // space contents are hidden
        });
      });
      console.log('getPlayerView:hidden');
      console.timeLog('getPlayerView');

      playerView.findNodes('.mine').forEach(n => n.classList.add('mine'));
      playerView.findNodes('[player]:not(.mine)').forEach(n => (
        n.setAttribute('player-after-me', (parseInt(n.attributes.player.value, 10) - player + this.players.length) % this.players.length)
      ));

      const view = this.currentActions.reduce((drags, action) => {
        if (this.#actions[action].drag) {
          drags[action] = {
            pieces: this.serialize(this.doc.findAll(this.#actions[action].drag)),
            spaces: this.serialize(this.doc.findAll(this.ontoSelector(action))),
          };
        }
        return drags;
      }, {});
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
  afterMove(pieceSelector, fn) {
    if (typeof pieceSelector !== 'string' || typeof fn !== 'function') throw Error('usage: afterMove(selector, piece => { ... do things to `piece` ... });');
    this.#afterMoves.push([pieceSelector, fn]);
  }

  // wait for an action from list of actions from current player
  async currentPlayerPlay(actions) {
    return this.playerPlay(actions, this.currentPlayerPosition);
  }

  // wait for an action from list of actions from any player
  async anyPlayerPlay(actions) {
    return this.playerPlay(actions);
  }

  async playerPlay(allowedActions, allowedPlayer) {
    if (!(allowedActions instanceof Array)) throw Error('called a play action without a list of actions');
    this.currentActions = allowedActions;
    this.currentPlayerPosition = allowedPlayer;

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
      if (action === 'moveElement') {
        return this.inScopeAsPlayer(player, () => this.moveElement(...this.deserialize(args)));
      }
      return this.inScopeAsPlayer(player, () => this.runAction(action, this.deserialize(args)));
    });
    if (allowedActions.includes(completedAction.action)) return completedAction;
    return this.playerPlay(allowedActions, allowedPlayer);
  }

  // runs provided async block for each player, starting with the current
  async playersInTurn(fn) {
    if (!this.currentPlayerPosition) this.currentPlayerPosition = this.players[0].position;
    await asyncTimes(this.#players.length, async turn => {
      await fn(turn);
      this.endTurn();
    });
  }

  // allow movement of pieces within their space if match the given selector
  playersMayAlwaysMove(selector) {
    this.allowedMoveElements = selector;
  }

  playersMayAlwaysPlay(actions) {
    this.alwaysAllowedPlays = actions;
  }

  processAfterMoves(elements) {
    this.#afterMoves.forEach(([pieceSelector, fn]) => {
      elements.forEach(el => {
        if (el.matches(pieceSelector)) fn(el);
      });
    });
  }

  prompt(promptMessage) {
    this.promptMessage = promptMessage;
  }

  // test list of actions for validity and options, returns object of name:{prompt, choices?}
  choicesFromActions(player) {
    if (this.currentPlayerPosition !== undefined && player !== this.currentPlayerPosition) return {};
    return this.currentActions.reduce((choices, action) => {
      // console.time('choicesFromActions:' + action);
      const { key } = this.#actions[action] || {};
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
    }, {});
  }

  // test a given action without modifying state, rethrow, returns prompt string
  testAction(action, player) {
    return this.inScopeAsPlayer(player, () => this.runAction(action, [], 0, true));
  }

  // function that tries to run an action and delegates to the various main types of actions to determine outcome, returns {prompt, log}
  runAction(actionIdentifier, args = [], argIndex = 0, test = false) {
    let actionName;
    let action = actionIdentifier;

    if (actionIdentifier === 'interactWithPiece') {
      let interactivePiece;
      ([interactivePiece, actionName, ...args] = args);
      action = interactivePiece.actions[actionName];
    } else {
      if (typeof actionIdentifier === 'string' && this.#actions[actionIdentifier]) {
        actionName = actionIdentifier;
        action = this.#actions[actionIdentifier];
      } else {
        actionName = action.prompt;
      }
    }

    const prompt = action.prompt + (action.key ? ` (${action.key.toUpperCase()})` : '');

    if (!action) {
      throw Error(`No such action: ${actionName}`);
    }

    if (action.if) {
      let result = true;
      if (typeof action.if === 'function') result = action.if();
      if (typeof action.if === 'string') result = this.doc.contains(action.if);
      if (!result) throw new InvalidActionError(`${actionName} not allowed due to "if" condition`);
    }

    let nextAction;
    if (action.action) nextAction = a => action.action.apply(null, a);
    if (test) {
      nextAction = () => {};
    } else if (action.next) {
      nextAction = () => this.runAction(action.next, args, argIndex + 1);
    }

    let namedArgs;
    if (!test) namedArgs = this.namedElements(args, []);
    let nextPrompt;
    if (action.drag) {
      nextPrompt = this.dragAction(action.drag, this.ontoSelector(actionName), prompt, action.promptOnto, nextAction)(args);
      if (action.toPlayer) {
        args[1] = this.player(args[1].player());
      }
    } else if (action.select) {
      if (action.select instanceof Array) {
        nextPrompt = this.chooseAction(action.select, prompt, nextAction, argIndex)(args);
      } else if (typeof action.select === 'string') {
        nextPrompt = this.chooseAction(this.doc.findAll(action.select), prompt, nextAction, argIndex)(args);
      } else if (typeof action.select === 'function') {
        nextPrompt = this.chooseAction(action.select(...args), prompt, nextAction, argIndex)(args);
      } else {
        throw Error(`'select' for ${actionName} must be a list or a finder`);
      }
    } else if (action.max !== undefined || action.min !== undefined) { // simple numerical
      nextPrompt = this.chooseNumberAction(action.min, action.max, prompt, nextAction, argIndex)(args);
    } else if (nextAction) {
      const result = nextAction(...args);
      if (result && result.prompt) nextPrompt = prompt;
    }
    let log;
    if (!test) {
      namedArgs = this.namedElements(args, namedArgs);
      log = this.logEntry(action, ...namedArgs);
    }
    return { prompt: nextPrompt || prompt, log };
  }

  dragAction(pieceSelector, spaceSelector, prompt, promptOnto, action) {
    return this.chooseAction(
      this.doc.findAll(pieceSelector),
      prompt,
      args => this.chooseAction(
        this.doc.findAll(spaceSelector),
        promptOnto || prompt,
        ([piece, space, positioning]) => {
          if (positioning && positioning.pos !== undefined) {
            piece.move(space, -1 - positioning.pos);
          } else {
            piece.move(space);
            if (positioning) piece.set(positioning);
          }
          if (action) {
            action([piece, space]);
          }
        },
        1,
      )(args),
    );
  }

  // returns a fn (...choices) -> action that throws appropriate choice errors
  chooseNumberAction(min, max, prompt, action, argIndex = 0) {
    return args => {
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
  chooseAction(validChoices, prompt, action, argIndex = 0) {
    const choices = this.serialize(validChoices);
    return args => {
      const choice = args[argIndex];
      if (choice === undefined) {
        if (validChoices.length === 1 && action && argIndex > 0) {
          // auto-select simgle choice if not the first arg
          args.push(validChoices[0]);
          action(args);
        } else {
          throw new IncompleteActionError({ choices, prompt });
        }
      } else {
        if (!choices.includes(this.serialize(choice))) throw new InvalidChoiceError(`${this.serialize(choice)} not found in ${choices}`);
        if (action) action(args);
      }
      return prompt;
    };
  }

  ontoSelector(action) {
    let { onto, toPlayer } = this.#actions[action]; // eslint-disable-line prefer-const
    if (toPlayer) {
      if (toPlayer === 'other') {
        onto = `.player-mat:not(.mine) ${onto}`;
      }
      if (toPlayer === 'all') {
        onto = `.player-mat ${onto}`;
      }
    }
    return onto;
  }

  async replay(actions) {
    console.log('I: replay');
    for (let i = 0; i !== actions.length; i++) {
      await this.processAction(...actions[i]);
    }
  }

  async processAction(player, sequence, action, ...args) {
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

  logEntry(action, ...args) {
    if (action.drag) args = args.slice(0, 2);
    const name = this.currentPlayer() && this.currentPlayer().colorEncodedName();
    return this.#players.reduce((entry, { position, userId }) => {
      position -= 1;
      if (action.log) {
        let { log } = action;
        if (typeof log === 'function') log = log(...args);
        entry[userId] = log.replace(/\$(\d+)/g, sub => {
          if (sub[1] === '0') return name;
          const namedArg = args[parseInt(sub[1], 10) - 1];
          if (namedArg instanceof Array && namedArg[position]) return namedArg[position].shown || namedArg[position].hidden;
          return namedArg;
        });
      } else if (action.log !== false) {
        entry[userId] = `${name} : ${action.prompt} ${args.map(a => (a instanceof Array && a[position] ? a[position].shown || a[position].hidden : a)).join(' ')}`.trim();
      }
      return entry;
    }, {});
  }

  // takes [arg, arg...] and returns [ [ {hidden: argname}, {showm: argname},... ], [ {hidden: argname}, {showm: argname},... ],... ]
  // namedElements[el][player]
  namedElements(elements, previousNames) {
    return Object.entries(elements).map(([i, el]) => {
      if (el instanceof Player) return el.name;
      if (!(el instanceof GameElement)) return el;
      return this.playersInPositionOrder().map(({ position }) => {
        if (previousNames[i] && previousNames[i][position - 1].shown) return previousNames[i][position - 1];
        const hidden = this.inScopeAsPlayer(position, () => !!this.hiddenElements.find(([selector]) => el.matches(selector)));
        const name = el.name(position, hidden);
        return { [el.id && !hidden ? 'shown' : 'hidden']: name };
      });
    });
  }

  set currentPlayerPosition(player) {
    if (player > this.#players.length || player < 1) {
      throw new Error(`No such player ${player}`);
    }
    this.#currentPlayerPosition = player;
  }

  get currentPlayerPosition() {
    return this.#currentPlayerPosition;
  }

  player(position) {
    return this.#players.find(p => p.position === position);
  }

  currentPlayer() {
    return this.player(this.currentPlayerPosition);
  }

  get phase() {
    return this.#phase;
  }

  get players() {
    return this.#players;
  }

  otherPlayers() {
    return this.players.filter(p => p.position !== this.currentPlayerPosition);
  }

  reorderPlayersBy(fn) {
    if (typeof fn !== 'function') throw Error('reorderPlayersBy must be called with a player ranking function, e.g. "reorderPlayersBy(playerNumber => getScore(playerNumber))"');
    const ranks = this.playersInPositionOrder().map(p => fn(p.position));
    this.players.sort((p1, p2) => (ranks[p1.position] > ranks[p2.position] ? 1 : (ranks[p1.position] < ranks[p2.position] ? -1 : 0)));
  }

  playersInPositionOrder() {
    return this.players.sort((p1, p2) => (p1.position > p2.position ? 1 : -1));
  }

  inScopeAsPlayer(player, fn) {
    const tmpPlayer = this.currentPlayerPosition;
    this.currentPlayerPosition = player;
    try {
      return fn();
    } finally {
      this.currentPlayerPosition = tmpPlayer;
    }
  }

  playerByUserId(userId) {
    const player = this.#players.find(p => p.userId === userId);
    if (!player) throw Error(`No such player ${userId}`);
    return player.position;
  }

  endTurn() {
    this.currentPlayerPosition = (this.players.findIndex(p => p.position === this.currentPlayerPosition) % this.#players.length) + 1;
  }

  moveElement(el, positioning) {
    if (el.matches(this.allowedMoveElements)) {
      if (positioning.pos !== undefined) {
        el.move(null, -1 - positioning.pos);
      } else {
        el.moveToTop();
        el.set(positioning);
      }
    } else {
      throw new Error(`Illegal moveElement ${el.node.outerHTML}, ${this.allowedMoveElements}`);
    }
  }
}

module.exports = GameInterface;
