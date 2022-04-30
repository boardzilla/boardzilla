const random = require('random-seed');
const GameDocument = require('./document');
const GameElement = require('./element');
const ActionQueue = require('./actionqueue');
const { times, range, asyncTimes } = require('./utils');

class InvalidChoiceError extends Error {}
class InvalidActionError extends Error {}
class IncompleteActionError extends Error {
  constructor({ choices, prompt }) {
    super(prompt);
    this.choices = choices;
    this.prompt = prompt;
  }
}

class GameInterface {
  #minPlayers = 1;

  #maxPlayers;

  // player list [[id, name],...]
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

  // 1-indexed from list of players, or undefined if any player can play
  #currentPlayer;

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
    this.builtinActions = { // TODO this interface still needs work. Needs to look more like #actions? e.g. How set permissions?
      setCounter: (key, value) => {
        const counter = this.doc.find(`counter#${key}`);
        let newValue = value;
        if (counter) {
          newValue = Math.max(newValue, 0, counter.get('min'));
          if (counter.get('max')) newValue = Math.min(newValue, counter.get('max'));
          counter.set('value', newValue);
          counter.set('moves', counter.get('moves') + 1);
          return `${this.colorEncodedName(this.currentPlayer)} set ${counter.get('name') || 'counter'} to ${newValue}`;
        }
        return null;
      },
      rollDie: key => {
        const die = this.doc.find(`die#${key}`);
        if (die) {
          const number = this.random(die.get('faces')) + 1;
          die.set('number', number);
          die.set('rolls', die.get('rolls') + 1);
          return `${this.colorEncodedName(this.currentPlayer)} rolled a ${number}`;
        }
        return null;
      },
    };
  }

  /**
   * after constructor and all game functions registered
   */
  initialize(rseed) {
    console.log('I: initialize');
    this.random = random.create(rseed);
    this.doc = new GameDocument(null, { game: this });
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
    times(this.#players.length, player => {
      const playerMat = this.doc.addSpace(`#player-mat-${player}`, 'area', { player, class: 'player-mat', color: this.color(player) });
      this.#setupPlayerMat.forEach(f => f(playerMat));
    });
    this.#setupBoard.forEach(f => f(this.board));
    this.currentPlayer = 1;
  }

  defineAction(name, action) {
    if (typeof name !== 'string' || typeof action !== 'object') throw Error('usage: defineAction(someAction, { ...action properties... })');
    const unknownAttrs = Object.keys(action).filter(a => !['select', 'prompt', 'promptOnto', 'log', 'if', 'key', 'action', 'next', 'drag', 'onto', 'min', 'max'].includes(a));
    if (unknownAttrs.length) throw Error(`${name} has unknown properties: '${unknownAttrs.join('\', \'')}'`);
    if (!action.prompt) throw Error(`${name} is missing 'prompt'`);
    if (action.next && action.action) throw Error(`${name} may not have both 'next' and 'action'. Use 'next' for a follow-up action, and 'action' only at the end.`);
    if (action.drag && !action.onto) {
      throw Error(`${name} has a 'drag' but no 'onto'`);
    }
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

  playerMat(player = this.currentPlayer) {
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
  addPlayer(userId, username, color) {
    if (this.#players.find(p => p[0] === userId)) return;
    if (this.#maxPlayers && this.#players.length >= this.#maxPlayers) throw Error('game is full');
    if (this.phase !== 'setup') throw Error('not able to add players while playing');
    if (this.#players.length === this.#maxPlayers) throw Error('game already full');
    this.#players.push([userId, username, color]);
  }

  colorEncodedName(player) {
    return `<span color="${this.color(player)}">${this.playerName(player)}</span>`;
  }

  playerName(player) {
    return this.#players[player - 1][1];
  }

  color(player) {
    return this.#players[player - 1][2];
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
    try {
      if (value instanceof Array) return value.map(v => this.deserialize(v));
      if (value.slice && value.slice(0, 4) === '$el(') {
        return this.doc.pieceAt(value.slice(4, -1));
      }
      return JSON.parse(value);
    } catch (e) {
      console.error('unable to deserialize', value);
      throw e;
    }
  }

  getPlayerViews() {
    return [...this.#players.entries()].reduce((views, [index, [userId, name]]) => {
      views[userId] = this.getPlayerView(index + 1);
      return views;
    }, {});
  }

  getPlayerView(player) {
    const playerView = this.doc.clone();

    const allowedDrags = this.inScopeAsPlayer(player, () => {
      this.hiddenElements.forEach(([selector, attrs]) => {
        playerView.findNodes(selector).forEach(n => {
          n.removeAttribute('id');
          attrs.forEach(attr => n.removeAttribute(attr));
          if (n.classList.contains('space')) {
            n.innerHTML = ''; // space contents are hidden
          }
        });
      });

      playerView.findNodes('.mine').forEach(n => n.classList.add('mine'));

      return this.currentActions.reduce((drags, action) => {
        if (this.#actions[action].drag) {
          drags[action] = {
            pieces: this.serialize(this.doc.findAll(this.#actions[action].drag)),
            spaces: this.serialize(this.doc.findAll(this.#actions[action].onto)),
          };
        }
        return drags;
      }, {});
    });

    return {
      variables: this.shownVariables(),
      phase: this.phase,
      players: this.#players,
      currentPlayer: this.currentPlayer,
      sequence: this.sequence,
      doc: playerView.node.outerHTML,
      allowedMove: this.allowedMoveElements,
      allowedActions: this.choicesFromActions(player),
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
    return this.playerPlay(actions, this.currentPlayer);
  }

  // wait for an action from list of actions from any player
  async anyPlayerPlay(actions) {
    return this.playerPlay(actions);
  }

  async playerPlay(allowedActions, allowedPlayer) {
    if (!(allowedActions instanceof Array)) throw Error('called a play action without a list of actions');
    this.currentActions = allowedActions;
    this.currentPlayer = allowedPlayer;
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
    if (!this.currentPlayer) this.currentPlayer = 1;
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
    if (this.currentPlayer !== undefined && player !== this.currentPlayer) return {};
    return this.currentActions.reduce((choices, action) => {
      const { key } = this.builtinActions[action] || this.#actions[action];
      try {
        const { prompt } = this.testAction(action, player);
        choices[action] = { prompt, key };
      } catch (e) {
        if (e instanceof IncompleteActionError) {
          choices[action] = { prompt: e.prompt, choices: e.choices, key };
        } else if (e instanceof InvalidActionError) {
          console.log('skip action', action);
          return choices; // skip
        } else {
          throw e;
        }
      }
      return choices;
    }, {});
  }

  // test a given action without modifying state, rethrow, returns prompt string
  testAction(action, player) {
    return this.inScopeAsPlayer(player, () => this.runAction(action, [], 0, true));
  }

  // function that tries to run an action and delegates to the various main types of actions to determine outcome, returns {prompt, log}
  runAction(actionIdentifier, args = [], argIndex = 0, test = false) {
    if (this.builtinActions[actionIdentifier]) {
      return { log: this.builtinActions[actionIdentifier](...args) };
    }

    let actionName;
    let action = actionIdentifier;

    if (typeof actionIdentifier === 'string' && this.#actions[actionIdentifier]) {
      actionName = actionIdentifier;
      action = this.#actions[actionIdentifier];
    } else {
      actionName = action.prompt;
    }

    const prompt = action.prompt + (action.key ? ` (${action.key.toUpperCase()})` : '');

    if (!action) {
      throw Error(`No such action: ${actionName}`);
    }

    if (action.if && !action.if()) {
      throw new InvalidActionError(`${actionName} not allowed due to "if" condition`);
    }

    let nextAction = action.action;

    if (test) {
      nextAction = () => {};
    } else if (action.next) {
      nextAction = () => this.runAction(action.next, args, argIndex + 1);
    }

    let namedArgs;
    if (!test) namedArgs = this.namedElements(args, []);
    let nextPrompt;
    if (action.drag) {
      nextPrompt = this.dragAction(action.drag, action.onto, prompt, action.promptOnto, nextAction)(...args);
    } if (action.select) {
      if (action.select instanceof Array) {
        nextPrompt = this.chooseAction(action.select, prompt, nextAction, argIndex)(...args);
      } else if (typeof action.select === 'string') {
        nextPrompt = this.chooseAction(this.doc.findAll(action.select), prompt, nextAction, argIndex)(...args);
      } else if (typeof action.select === 'function') {
        nextPrompt = this.chooseAction(action.select(...args), prompt, nextAction, argIndex)(...args);
      } else {
        throw Error(`'select' for ${actionName} must be a list or a finder`);
      }
    } else if (action.max !== undefined || action.min !== undefined) { // simple numerical
      nextPrompt = this.chooseAction(range(action.min, action.max), prompt, nextAction, argIndex)(...args);
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
    const fn = this.chooseAction(
      this.doc.findAll(pieceSelector),
      prompt,
      this.chooseAction(
        this.doc.findAll(spaceSelector),
        promptOnto || prompt,
        (piece, space, x, y) => {
          piece.move(space);
          if (x !== undefined) piece.set('x', x);
          if (y !== undefined) piece.set('y', y);
          if (action) {
            action(piece, space);
          }
        },
        1,
      ),
    );
    fn.type = 'drag';
    return fn;
  }

  // returns a fn (...choices) -> action that throws appropriate choice errors
  chooseAction(validChoices, prompt, action, argIndex = 0) {
    const choices = this.serialize(validChoices);
    return (...args) => {
      const choice = args[argIndex];
      if (choice === undefined) {
        if (validChoices.length === 1 && action && argIndex > 0) {
          // auto-select simgle choice if not the first arg
          action(...args, validChoices[0]);
        } else {
          throw new IncompleteActionError({ choices, prompt });
        }
      } else {
        if (!choices.includes(this.serialize(choice))) throw new InvalidChoiceError(`${this.serialize(choice)} not found in ${choices}`);
        if (action) action(...args);
      }
      return prompt;
    };
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

    if (this.sequence !== sequence) {
      if (sequence <= this.lastReplaySequence) {
        return { type: 'error', message: 'Unable to replay history with this game version' };
      }
      console.log('Out of sequence - trying anyways', this.sequence, sequence);
    }

    try {
      const result = await this.actionQueue.processAction({ player, action, args });
      const actionResult = {
        type: 'ok',
        player,
        sequence: this.sequence,
        action: [action, ...args],
        messages: result && result.log,
        timestamp: Date.now(),
      };
      this.sequence++;
      return actionResult;
    } catch (e) {
      console.log('got processAction error', e);
      if (e instanceof IncompleteActionError) {
        return { type: 'incomplete', choices: e.choices, prompt: e.prompt };
      }
      return { type: 'error', message: e.message };
    }
  }

  logEntry(action, ...args) {
    if (action.drag) args = args.slice(0, 2);
    const name = this.colorEncodedName(this.currentPlayer);
    return [...this.#players.entries()].reduce((entry, [player, [userId]]) => {
      if (action.log) {
        entry[userId] = action.log.replace(/\$(\d+)/g, sub => {
          if (sub[1] === '0') return name;
          const namedArg = args[parseInt(sub[1], 10) - 1];
          if (namedArg && namedArg[player]) return namedArg[player].shown || namedArg[player].hidden;
          return namedArg;
        });
      } else if (action.log !== false) {
        entry[userId] = `${name} : ${action.prompt} ${args.map(a => (a instanceof Array && a[player] ? a[player].shown || a[player].hidden : a)).join(' ')}`.trim();
      }
      return entry;
    }, {});
  }

  // takes [arg, arg...] and returns [ [ {hidden: argname}, {showm: argname},... ], [ {hidden: argname}, {showm: argname},... ],... ]
  // namedElements[el][player]
  namedElements(elements, previousNames) {
    return Object.entries(elements).map(([i, el]) => {
      if (!(el instanceof GameElement)) return el;
      return times(this.#players.length, fromPlayer => {
        if (previousNames[i] && previousNames[i][fromPlayer - 1].shown) return previousNames[i][fromPlayer - 1];
        const hidden = this.inScopeAsPlayer(fromPlayer, () => !!this.hiddenElements.find(([selector]) => el.matches(selector)));
        const name = el.name(fromPlayer, hidden);
        return { [el.id && !hidden ? 'shown' : 'hidden']: name };
      });
    });
  }

  set currentPlayer(player) {
    if (player > this.#players.length || player < 1) {
      throw new Error(`No such player ${player}`);
    }
    this.#currentPlayer = player;
  }

  get currentPlayer() {
    return this.#currentPlayer;
  }

  get phase() {
    return this.#phase;
  }

  get players() {
    return this.#players;
  }

  currentPlayerName() {
    return this.#players[this.currentPlayer - 1][1];
  }

  inScopeAsPlayer(player, fn) {
    const tmpPlayer = this.currentPlayer;
    this.currentPlayer = player;
    try {
      return fn();
    } finally {
      this.currentPlayer = tmpPlayer;
    }
  }

  playerByUserId(userId) {
    const player = this.#players.findIndex(p => p[0] === userId);
    if (player < 0) throw Error(`No such player ${userId}`);
    return player + 1;
  }

  endTurn() {
    this.currentPlayer = (this.currentPlayer % this.#players.length) + 1;
  }

  moveElement(el, x, y) {
    if (el.matches(this.allowedMoveElements)) {
      // preserve any initial positioning
      el.moveToTop();
      el.set('x', x);
      el.set('y', y);
    } else {
      throw new Error(`Illegal moveElement ${el.node.outerHTML}, ${this.allowedMoveElements}`);
    }
  }
}

module.exports = GameInterface;
