const EventEmitter = require('events');
const random = require('random-seed');
const GameDocument = require('./document');
const GameElement = require('./element');
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

class GameInterface extends EventEmitter {
  constructor(seed) {
    super();
    this.random = random.create(seed);
    this.players = [];
    this.phase = 'setup'; // setup -> replay -> ready
    this.hiddenKeys = [];
    this.hiddenElements = [];
    this.variables = {};
    this.allowedMoveElements = ''; // piece selector that is always valid for moving
    this.alwaysAllowedPlays = []; // actions that anyone can take at any time
    this.doc = new GameDocument(null, { game: this });
    this.board = this.doc.board();
    this.pile = this.doc.pile();
    this.logs = {}; // log entries in form {seq: [player: string, player: string,...] or string (same for all),...}
    this.drags = {};
    this.actions = {};
    this.currentPlayer = undefined; // 1-indexed from list of players, or undefined if any player can play
    this.currentActions = [];
    this.afterMoves = [];
    this.promptMessage = null;
    this.builtinActions = {
      setCounter: (key, value) => {
        const counter = this.doc.find(`counter#${key}`);
        let newValue = value;
        if (counter) {
          newValue = Math.max(newValue, 0, counter.get('min'));
          if (counter.get('max')) newValue = Math.min(newValue, counter.get('max'));
          counter.set('value', newValue);
          counter.set('moves', counter.get('moves') + 1);
          this.log(`${this.currentPlayerName()} set ${counter.get('name') || 'counter'} to ${newValue}`);
        }
      },
      rollDie: key => {
        const die = this.doc.find(`die#${key}`);
        if (die) {
          const number = this.random(die.get('faces')) + 1;
          die.set('number', number);
          die.set('rolls', die.get('rolls') + 1);
          this.log(`${this.currentPlayerName()} rolled a ${number}`);
        }
      },
    };
    this.idSequence = 0;
    this.lastReplaySequence = -1;
  }

  // start game from scratch and run history. resolves when game is done
  async start(history) {
    if (!history.length) { // waiting for start
      this.sequence = 0;
      this.updatePlayers(); // initial game state with only start allowed
      await new Promise(resolve => {
        this.on('action', (realtime, player, sequence, action) => {
          if (action === 'start') {
            if (this.players.length < this.minPlayers) {
              console.error('not enough players');
            } else {
              this.registerAction(player, ['start']);
              this.removeAllListeners('action');
              resolve();
            }
          }
        });
      });
    }
    this.sequence = 1;
    this.lastReplaySequence = 0;

    this.phase = 'replay';
    this.variables = this.initialVariables || {};
    this.idSequence = 0;
    times(this.players.length, player => {
      const playerMat = this.doc.addSpace(`#player-mat-${player}`, 'area', { player, class: 'player-mat' });
      if (this.setupPlayerMat) this.setupPlayerMat(playerMat);
    });
    if (this.setupBoard) this.setupBoard(this.board);
    this.currentPlayer = 1;
    console.log('I: start()', history.length);
    this.lastReplaySequence = history.length > 1 ? history[history.length - 1][1] : -1;
    this.replay(history.slice(1)); // ignore 'start'

    this.phase = 'ready';
    console.log('I: ready');
    this.emit('ready');
    await this.play();
    this.updatePlayers(); // final game state with no actions allowed
  }

  playerMat(player = this.currentPlayer) {
    if (!player) throw Error('playerMat called without a player or a current player');
    return this.doc.find(`#player-mat[player="${player}"]`);
  }

  // add player to game
  addPlayer(userId, username) {
    if (this.players.find(p => p[0] === userId)) return;
    if (this.phase !== 'setup') throw Error('not able to add players while playing');
    if (this.players.length === this.maxPlayers) throw Error('game already full');
    this.players.push([userId, username]);
  }

  getPlayers() {
    return this.players;
  }

  // send all players state along with allowed actions
  updatePlayers() {
    if (this.sequence <= this.lastReplaySequence) return; // dont need to update unless at latest
    console.log('I: updatePlayers', this.players);
    times(this.players.length, player => {
      this.emit('update', {
        type: 'state',
        userId: this.players[player - 1][0],
        payload: this.getPlayerView(player),
      });
    });
  }

  // send a player specific allowed actions
  updatePlayer(player, allowedActions = null) {
    if (this.sequence <= this.lastReplaySequence) return; // dont need to update unless at latest
    const payload = this.getPlayerView(player);
    if (allowedActions) {
      payload.allowedActions = allowedActions;
      payload.allowedMoveElements = null;
      payload.allowedDrags = {};
    }
    this.emit('update', {
      type: 'state',
      userId: this.players[player - 1][0],
      payload,
    });
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
    this.hiddenElements.push([selector, attrs]);
  }

  shownVariables() {
    const a = this.hiddenKeys.reduce((vars, key) => {
      const { [key]: _, ...rest } = vars;
      return rest;
    }, this.variables);
    return a;
  }

  getState() {
    return {
      variables: { ...this.variables },
      players: [...this.players],
      currentPlayer: this.currentPlayer,
      phase: this.phase,
      doc: this.doc.node.innerHTML,
    };
  }

  setState(state) {
    if (state) {
      this.variables = state.variables;
      this.players = state.players;
      this.currentPlayer = state.currentPlayer;
      this.phase = state.phase;
      this.doc.node.innerHTML = state.doc;
      this.board = this.doc.board();
      this.pile = this.doc.pile();
    }
    return true;
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

  getPlayerView(player) {
    const playerView = this.doc.clone();
    const { currentPlayer } = this;
    this.currentPlayer = player;

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

    const allowedDrags = this.currentActions.reduce((drags, action) => {
      if (this.actions[action].drag) {
        drags[action] = {
          pieces: this.serialize(this.doc.findAll(this.actions[action].drag)),
          spaces: this.serialize(this.doc.findAll(this.actions[action].onto)),
        };
      }
      return drags;
    }, {});
    this.currentPlayer = currentPlayer;

    return {
      variables: this.shownVariables(),
      phase: this.phase,
      players: this.players,
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
    this.afterMoves.push([pieceSelector, fn]);
  }

  // wait for an action from list of actions from current player
  async currentPlayerPlay(actions) {
    return this.playerPlay(actions, this.currentPlayer);
  }

  // wait for an action from list of actions from any player
  async anyPlayerPlay(actions) {
    return this.playerPlay(actions);
  }

  async playerPlay(actions, player) {
    this.currentActions = actions instanceof Array ? actions : [actions];
    this.currentPlayer = player;
    return this.waitForAction();
  }

  // runs provided async block for each player, starting with the current
  async playersInTurn(fn) {
    await asyncTimes(this.players.length, async turn => {
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

  prompt(promptMessage) {
    this.promptMessage = promptMessage;
  }

  // test list of actions for validity and options, returns object of name:{prompt, choices?}
  choicesFromActions(player) {
    if (this.currentPlayer !== undefined && player !== this.currentPlayer) return {};
    return this.currentActions.reduce((choices, action) => {
      const { key } = this.builtinActions[action] || this.actions[action];
      try {
        const prompt = this.testAction(action, player);
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
    const { currentPlayer } = this;
    this.currentPlayer = player;
    try {
      return this.runAction(action, [], 0, true);
    } finally {
      this.currentPlayer = currentPlayer;
    }
  }

  // function that tries to run an action and delegates to the various main types of actions to determine outcome, returns string prompt
  runAction(actionIdentifier, args = [], argIndex = 0, test = false) {
    if (this.builtinActions[actionIdentifier]) {
      return this.builtinActions[actionIdentifier](...args);
    }

    let actionName;
    let action = actionIdentifier;

    if (typeof actionIdentifier === 'string' && this.actions[actionIdentifier]) {
      actionName = actionIdentifier;
      action = this.actions[actionIdentifier];
    } else {
      actionName = action.prompt;
    }

    if (!action.prompt) {
      throw Error(`${actionName} is missing 'prompt'`);
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
      if (action.action) {
        throw Error(`${actionName} may not have both 'next' and 'action'`);
      }
      nextAction = () => this.runAction(action.next, args, argIndex + 1);
    }

    let namedArgs;
    if (!test) namedArgs = this.namedElements(args, []);
    let nextPrompt;
    if (action.drag) {
      if (!action.onto) {
        throw Error(`${actionName} has a 'drag' but no 'onto'`);
      }
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
      if (action.max === undefined || action.min === undefined) {
        throw Error(`${actionName} needs both 'min' and 'max'`);
      }
      nextPrompt = this.chooseAction(range(action.min, action.max), prompt, nextAction, argIndex)(...args);
    } else if (nextAction) {
      nextAction(...args);
    }
    if (!test) {
      namedArgs = this.namedElements(args, namedArgs);
      const logEntry = this.logEntry(action, ...namedArgs);
      if (logEntry) this.log(logEntry);
    }
    return nextPrompt || prompt;
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

  replay(actions) {
    actions.forEach(action => setImmediate(
      () => this.emit('action', false, ...action),
    ));
  }

  receiveAction(userId, sequence, action, ...args) {
    if (this.phase === 'replay') return;
    console.log(`received action (${userId}, ${sequence}, ${action}, ${args})`);
    if (this.listenerCount('action') === 0) {
      console.error(`${this.userId}: no listener`);
      throw Error('No listener');
    }
    this.emit('action', true, this.players.findIndex(p => p[0] === userId) + 1, sequence, action, ...args);
  }

  updateUser(userId) {
    this.updatePlayer(this.players.findIndex(p => p[0] === userId) + 1);
  }

  // core function to listen for actions
  // returns a promise that resolves when receiving one of currentActions from currentPlayer
  // runs the action upon resolving. if action is partial, it sends a follow-up question
  async waitForAction() {
    this.updatePlayers();
    return new Promise((resolve, reject) => {
      if (this.listenerCount('action') > 1) {
        reject(new Error('Game play has gotten ahead of itself. You are probably missing an `await` in the play function'));
      }
      this.on('action', (realtime, player, sequence, action, ...args) => {
        console.log(`I: got action (${player}, ${action}, ${args})`);
        const deserializedArgs = this.deserialize(args);
        if (action === 'moveElement') {
          // moveElement is a special case that doesn't count as a full action but we need to register it and just keep listening
          const { currentPlayer } = this;
          this.currentPlayer = player;
          try {
            this.moveElement(...deserializedArgs);
            if (realtime) this.registerAction(player, ['moveElement', ...args]);
            this.sequence++;
          } catch (e) {
            console.error('unable to register move action', e);
          } finally {
            this.currentPlayer = currentPlayer;
            this.updatePlayers();
            // cant update becuase state is unchanged and will be ignored
          }
        } else {
          console.log('I try resolve with', action, `${this.currentPlayer}===${player}`, this.sequence, sequence);
          if (this.sequence !== sequence) {
            if (sequence <= this.lastReplaySequence) {
              reject(new Error('Unable to replay history with this game version'));
            }
            console.log('Out of sequence - trying anyways', this.sequence, sequence);
          }
          if (this.currentPlayer !== undefined && player !== this.currentPlayer) {
            return console.error(`Waiting for ${this.currentPlayer} and rejected action from ${player}.`);
          }
          if (!this.actions[action] && !this.builtinActions[action]) {
            return console.error(`No such action ${action}`);
          }
          if (!this.alwaysAllowedPlays.concat(this.currentActions).includes(action)) {
            return console.error(`${action} not allowed yet. Only ${this.alwaysAllowedPlays.concat(this.currentActions).join(', ')}`);
          }
          const { currentPlayer } = this;
          this.currentPlayer = player;
          try {
            this.runAction(action, deserializedArgs);
          } catch (e) {
            if (e instanceof IncompleteActionError) {
              console.log('got IncompleteActionError', e);
              this.updatePlayer(player, { [action]: { args, choices: e.choices, prompt: e.prompt } });
              return null;
            }
            if (e instanceof InvalidChoiceError) {
              console.log(e); // TODO send something
            } else {
              console.log(e);
              throw e; // TODO should this throw? who catches? inconsistent with moveElement above. need to figure this out
            }
          } finally {
            this.currentPlayer = currentPlayer;
          }
          console.log(`action succeeded registerAction(${player}, ${sequence}, ${action}, ${args})`);
          try {
            if (realtime) this.registerAction(player, [action, ...args]);
            this.sequence++;
            this.removeAllListeners('action');
            resolve([action, ...deserializedArgs]);
          } catch (e) {
            console.error('unable to register action', e);
          }
        }
        return null;
      });
    });
  }

  log(message) {
    this.logs[this.sequence] = message;
    this.emit('log', new Date(), this.sequence, message);
  }

  logEntry(action, ...args) {
    if (action.drag) args = args.slice(0, 2);
    return Object.entries(this.players).reduce((entry, [player, [userId]]) => {
      if (action.log) {
        entry[userId] = action.log.replace(/\$(\d+)/g, sub => {
          if (sub[1] !== '0') {
            const namedArg = args[parseInt(sub[1], 10) - 1];
            if (namedArg && namedArg[player]) return namedArg[player].shown || namedArg[player].hidden;
            return namedArg;
          }
          return this.currentPlayerName();
        });
      } else {
        entry[userId] = `${this.currentPlayerName()} : ${action.prompt} ${args.map(a => (a instanceof Array && a[player] ? a[player].shown || a[player].hidden : a)).join(' ')}`.trim();
      }
      return entry;
    }, {});
  }

  // takes [arg, arg...] and returns [ [ {hidden: argname}, {showm: argname},... ], [ {hidden: argname}, {showm: argname},... ],... ]
  // namedElements[el][player]
  namedElements(elements, previousNames) {
    return Object.entries(elements).map(([i, el]) => {
      if (!(el instanceof GameElement)) return el;
      return times(this.players.length, fromPlayer => {
        if (previousNames[i] && previousNames[i][fromPlayer - 1].shown) return previousNames[i][fromPlayer - 1];
        const { currentPlayer } = this;
        this.currentPlayer = fromPlayer;
        const hidden = !!this.hiddenElements.find(([selector]) => el.matches(selector));
        this.currentPlayer = currentPlayer;
        const name = el.name(fromPlayer, hidden);
        return { [el.id && !hidden ? 'shown' : 'hidden']: name };
      });
    });
  }

  setCurrentPlayer(player) {
    if (player > this.players.length || player < 1) {
      throw new Error(`No such player ${player}`);
    }
    this.currentPlayer = player;
  }

  currentPlayerName() {
    return this.players[this.currentPlayer - 1][1];
  }

  endTurn() {
    this.currentPlayer = (this.currentPlayer % this.players.length) + 1;
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
