import React, { Component } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {
  throttle,
  gameDom,
  elByChoice,
  parentEl,
  parentChoice,
  zoneChoice,
  isEl,
  choiceAtPoint,
  zoneInfoForPoint,
  xmlToNode,
  choiceByEl,
  isFlipped,
  xmlNodeByChoice,
  choiceForXmlNode,
  currentGridPosition,
  deserialize,
} from './utils';
import Counter from './Counter';
import Die from './Die';
import Spinner from './Spinner';
import './style.scss';

const DRAG_TOLERANCE = 1;
const PING_INTERVAL = 7500;
const IDLE_WAIT = 10000;
const IS_MOBILE_PORTRAIT = false; // !!(window.matchMedia("(orientation: portrait)").matches && window.TouchEvent);
let SIDEBAR_WIDTH = 320;
let mouse = {};
let actionId = 1;
let boardXml;

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      action: null, // currently selected action
      args: [], // current action args
      prompt: null, // current prompt
      choices: null, // current choices (array, "text" or {min, max})
      data: {}, // complete server state
      changes: {}, // set of changes to get to current state
      input: '',
      filter: '', // user input to filter available choices
      chatMessage: '', // user input to chat box
      chatId: 0,
      locks: {}, // locks from server
      positions: {}, // xy positions from server (i.e. other players)
      actions: null, // currently possible actions in menu {action: {choice, prompt},...}
      dragging: null, // data on the current drag {key, x/y start point, zone starting zone}
      dragOver: null, // key being dragged over
      zoomPiece: null, // the zoomed piece
      help: false, // show help content
      playerStatus: {[props.userId]: new Date()}, // timestamps of last ping from each player
      logs: {},
      replies: {} // action callbacks { id: { time, callback }, ... }
    };
    this.componentCleanup = this.componentCleanup.bind(this);
    this.components = {
      counter: Counter,
      die: Die,
    };
  }

  componentCleanup() {
    if (this.webSocket) {
      this.webSocket.close();
      this.webSocket = null;
    }
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup);
    this.webSocket = new ReconnectingWebSocket((location.protocol == 'http:' ? 'ws://' : 'wss://') + document.location.host + '/sessions/' + this.props.session);
    this.webSocket.onopen = () => this.setState({connected: true});
    this.webSocket.onclose = () => this.setState({connected: false});
    this.webSocket.onmessage = e => {
      const { type, payload } = JSON.parse(e.data);
      console.log("Received", type, payload);
      switch(type) {
        case "state":
          const changes = {};
          if (payload) {
            if (payload.sequence > this.state.data.sequence) {
              payload.changes.forEach(([oldId, newId]) => {
                let oldEl = elByChoice(oldId);
                if (!oldEl) {
                  const oldNode = xmlNodeByChoice(boardXml, oldId);
                  if (oldNode && oldNode.parentNode) oldEl = elByChoice(choiceForXmlNode(oldNode.parentNode));
                }
                if (oldEl) {
                  const { x, y } = oldEl.getBoundingClientRect();
                  changes[newId] = {x, y};
                }
              });
            }
            boardXml = xmlToNode(payload.doc);
            this.setState(state => ({
              data: payload,
              changes,
              logs: Object.keys(state.logs).reduce((logs, sequence) => {
                if (payload.sequence <= parseInt(sequence, 10)) delete logs[sequence];
                return logs;
              }, state.logs),
            }));
            if (this.state.zoomPiece) {
              let zoomPiece = this.state.zoomPiece;
              const zoomEl = xmlNodeByChoice(boardXml, zoomPiece);
              if (!zoomEl || zoomEl.id != this.state.zoomId) { // piece went away, remove actions that may no longer apply
                const newEl = gameDom.getElementById(this.state.zoomId);
                if (newEl) {
                  zoomPiece = choiceByEl(newEl);
                  this.setState({ zoomPiece });
                }
              }
              this.setState({actions: this.actionsFor(zoomPiece)});
            }
            document.getElementsByTagName('body')[0].dataset.players = this.state.data.players && this.state.data.players.length;
          }
          break;
        case "updateLocks":
          this.setState({locks: payload});
          break;
        case "updateElement":
          if (payload) {
            let {key, x, y, start, end, endFlip} = payload;
            if (start) {
              const startZone = elByChoice(start);
              const endZone = elByChoice(end);
              const el = elByChoice(key);
              if (startZone && endZone && el) {
                const startRect = startZone.getBoundingClientRect();
                const endRect = endZone.getBoundingClientRect();
                const parentRect = elByChoice(parentEl(el)).getBoundingClientRect();
                const keyRect = el.getBoundingClientRect();
                const startFlip = isFlipped(startZone);
                if (startFlip) {
                  x -= endRect.right - startRect.right;
                  y -= endRect.bottom - startRect.bottom;
                } else {
                  x += endRect.left - startRect.left;
                  y += endRect.top - startRect.top;
                }

                if (endFlip ^ (startFlip ^ isFlipped(endZone))) { // endzones were flipped respective to each other
                  if (startFlip) {
                    x = parentRect.right * 2 - keyRect.width - endRect.right - x - endRect.left;
                    y = parentRect.bottom * 2 - keyRect.height - endRect.bottom - y - endRect.top;
                  } else {
                    x = - parentRect.left * 2 - keyRect.width + endRect.right - x + endRect.left;
                    y = - parentRect.top * 2 - keyRect.height + endRect.bottom - y + endRect.top;
                  }
                }
              }
            }
            this.updatePosition(key, x, y);
          }
          break;
        case "active":
          this.setState(state => ({playerStatus: Object.assign({}, state.playerStatus, {[payload]: new Date()})}));
          break;
        case 'error':
        case 'reload':
          location.reload();
          break;
        case 'log':
          if (!payload.message) break;
          this.setState(
            state => ({logs: Object.assign({}, state.logs, { [payload.sequence]: {timestamp: payload.timestamp, message: payload.message }})}),
            this.scrollLogs
          );
          break;
        case 'response':
          if (this.state.replies[payload.id]) {
            const { callback } = this.state.replies[payload.id];
            this.setState(state => {
              delete state.replies[payload.id];
              return { replies: state.replies };
            });
            callback(payload.response);
          }
          break;
        case 'chat':
          {
            this.setState(state => ({
              logs: Object.assign({}, state.logs, {
                [`chat-${payload.id}`]: {
                  message: payload.message,
                  timestamp: new Date(payload.createdAt),
                }
              })
            }), this.scrollLogs);
          }
          break;
        default:
          console.log("UNHANDLED MESSAGE", type, payload);
      }
    };
    document.addEventListener('touchmove', e => {
      let el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      if (!this.state.touchMoving) this.setState({ touchMoving: true });
      if (el && this.state.dragging) {
        while (el.classList && !el.classList.contains("space") && el.parentNode) el = el.parentNode;
        this.setState({dragOver: choiceByEl(el)});
      }
    });
    document.addEventListener('touchend', () => {
      this.setState({ touchMoving: false });
    });
    document.addEventListener('mousemove', e => {
      mouse = {x: e.clientX, y: e.clientY};
    });
    document.addEventListener('keydown', e => {
      if (e.key == "z") {
        const zoomKey = choiceAtPoint(mouse.x, mouse.y, el => el.matches('.piece:not(.component)'));
        zoomKey && this.handleClick(zoomKey, e);
      }
      if (e.key == "Escape") this.cancel();
    });
    document.addEventListener('keyup', e => {
      if (this.state.choices) {
        if (e.key === 'Enter') {
          const choices = this.state.choices.filter(choice => !isEl(choice) && String(choice).toLowerCase().includes(this.state.filter.toLowerCase()));
          if (choices.length === 1) {
            this.gameAction(this.state.action, ...this.state.args, choices[0]);
          }
        }
      } else {
        let choice = this.state.zoomPiece || (mouse.x != undefined && choiceAtPoint(mouse.x, mouse.y));
        if (choice) {
          const action = Object.entries(this.state.actions || this.actionsFor(choice)).find(([_, a]) => a.key && a.key.toLowerCase() == e.key);
          if (action) this.gameAction(action[0], ...this.state.args, action[1].choice);
        }
      }
    });

    if (IS_MOBILE_PORTRAIT) {
      const resize = e => {
        const vp = e ? e.target : window.visualViewport;
        const style = document.querySelector('#messages').style;
        const scale = .5 / vp.scale;
        style.transform = `scale(${scale})`;
        style.bottom = `${window.innerHeight - vp.height - vp.offsetTop}px`;
        style.left = `${vp.offsetLeft}px`;
      };
      window.visualViewport.addEventListener('resize', resize);
      window.visualViewport.addEventListener('scroll', resize);
      SIDEBAR_WIDTH = window.screen.width;
      resize();
    } else {
      window.addEventListener('resize', () => {
        const playArea = document.getElementById('play-area');
        const scaledPlayArea = document.getElementById('scaled-play-area');
        console.log(playArea.offsetHeight, scaledPlayArea.offsetHeight);
        if (playArea) this.setState({ playAreaScale: Math.min(
          (playArea.offsetWidth - 20) / scaledPlayArea.offsetWidth,
          playArea.offsetHeight / scaledPlayArea.offsetHeight
        )});
      });
    }
    this.send('refresh');
    setInterval(() => this.send('ping'), PING_INTERVAL);
  }

  componentDidUpdate() {
    if (!this.state.playAreaScale) window.dispatchEvent(new Event('resize'));
    if (Object.keys(this.state.changes).length) {
      Object.entries(this.state.changes).forEach(([id, {x: oldX, y: oldY}]) => {
        const el = elByChoice(id);
        if (el && el.parentNode && el.parentNode.style) {
          el.parentNode.classList.add('no-transition');
          const {x, y} = el.getBoundingClientRect();
          const style = el.parentNode.style;
          const oldCss = style.cssText;
          let [_, tx, ty] = [0, 0, 0];
          const transform = oldCss.match(/translate\((-?[\d.]+)[^-.\d]*(-?[\d.]+)/);
          if (transform) [_, tx, ty] = transform;
          const flipped = el.matches('.flipped *, .flipped');
          style.cssText = `transform: translate(${(flipped ? -1 : 1) * (oldX - x) + parseInt(tx, 10)}px, ${(flipped ? -1 : 1) * (oldY - y) + parseInt(ty, 10)}px); display: block`;
          setTimeout(() => {
            el.parentNode.classList.remove('no-transition');
            style.cssText = oldCss;
          }, 0);
        }
      });
      this.setState({ changes: {} });
    }
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  send(action, payload) {
    payload = payload || {};
    this.webSocket.send(JSON.stringify({type: action, payload}));
  }

  gameAction(action, ...args) {
    const start = Date.now();
    console.log('gameAction', action, ...args);
    this.send(
      'action', {
        id: actionId,
        sequence: this.state.data.sequence,
        action: [action, ...args.map(a => /\$\w+\(.*\)/.test(a) ? a : JSON.stringify(a))]
      },
    );
    let zoomPiece = this.state.zoomPiece;
    this.waitForReply(actionId, action, reply => {
      if (reply.type === 'ok') {
        const end = Date.now();
        console.log('gameAction', action, args, reply.start - start, reply.end - start, reply.reply - start, end - start);
        if (zoomPiece === this.state.zoomPiece) this.setState({ zoomPiece: null });
        this.setState({action: null, args: [], choices: null, prompt: null, actions: null, filter: '' });
      } else if (reply.type === 'incomplete') {
        this.setState({ action, args, prompt: reply.prompt, choices: deserialize(reply.choices), zoomPiece: null, filter: '' });
      } else if (reply.type === 'error') {
        this.setState({action: null, args: [], choices: null, prompt: null, actions: null, filter: '' });
        console.error(reply);
      }
    });
    actionId++;
    this.setState({ action, args });
  }

  waitForReply(id, action, callback) {
    this.setState(state => ({
      replies: Object.assign({}, state.replies, {[id]: { time: Date.now(), action, callback }})
    }));
  }

  reset() {
    this.send('reset');
    window.location.reload();
  }

  get(variable) {
    return this.state.data.variables[variable];
  }

  player() {
    return this.state.data.players && this.state.data.players.findIndex(p => p.userId == this.props.userId) + 1;
  }

  setPieceAt(choice, attributes) {
    const el = xmlNodeByChoice(boardXml, choice);
    if (!el) return;
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    this.setState(state => ({data: Object.assign({}, state.data, {doc: boardXml.outerHTML})}));
  }

  setVariable(key, value) {
    this.setState(state => ({data: Object.assign({}, state.data, {variables: Object.assign({}, state.data.variables, {[key]: value})})}));
  }

  updatePosition(key, x, y) {
      this.setState(state => ({positions: Object.assign({}, state.positions, {[key]: x !== undefined ? {x, y} : undefined })}));
  }

  dragging(key, x, y, event, moveAnchor) {
    if (!this.state.dragging) {
      this.send('requestLock', {key});
      this.setState({dragging: {key, x, y, zone: zoneChoice(key), moveAnchor}, dragOver: parentChoice(key)});
      // set piece to uncontrolled
      this.updatePosition(key);
    }
    const absX = event.touches ? event.touches[0].clientX : event.clientX;
    const absY = event.touches ? event.touches[0].clientY : event.clientY;
    const zone = zoneInfoForPoint(absX, absY);
    const dragData = {key, x, y};
    // crossing zones so add the zone translation
    if (zone && zone.el != this.state.dragging.zone) {
      const startZone = this.state.dragging.zone;
      const endZone = zone.el;
      dragData.start = choiceByEl(startZone);
      dragData.end = choiceByEl(endZone);
      dragData.endFlip = isFlipped(startZone) ^ isFlipped(endZone);
      if (isFlipped(startZone)) {
        dragData.x -= (startZone.getBoundingClientRect().right - endZone.getBoundingClientRect().right) / this.state.playAreaScale;
        dragData.y -= (startZone.getBoundingClientRect().bottom - endZone.getBoundingClientRect().bottom) / this.state.playAreaScale;
      } else {
        dragData.x += (startZone.getBoundingClientRect().x - endZone.getBoundingClientRect().x) / this.state.playAreaScale;
        dragData.y += (startZone.getBoundingClientRect().y - endZone.getBoundingClientRect().y) / this.state.playAreaScale;
      }
    }
    throttle(() => this.send('drag', dragData));
  }

  stopDrag(choice, x, y, event) {
    const {dragging, dragOver} = this.state;
    this.setState({dragging: null, dragOver: null});
    if (dragging && dragging.key === choice && Math.abs(dragging.x - x) + Math.abs(dragging.y - y) > DRAG_TOLERANCE) {
      const dragAction = this.allowedDragSpaces(choice)[dragOver];
      const parent = elByChoice(dragOver);
      const el = elByChoice(choice);
      const ontoXY = dragOver && parent.getBoundingClientRect();
      const elXY = el.getBoundingClientRect();
      if (dragAction) {
        if (['splay', 'grid'].includes(parent.getAttribute('layout'))) {
          const splay = parent.getAttribute('layout') === 'splay';
          this.gameAction(dragAction, choice, dragOver, {
            [splay ? 'pos' : 'cell']: currentGridPosition(el, parent, elXY.x, elXY.y, this.state.playAreaScale, splay, isFlipped(parent))
          });
        } else {
          const translation = isFlipped(parent) ?
                              {x: ontoXY.right - elXY.right, y: ontoXY.bottom - elXY.bottom} :
                              {x: elXY.x - ontoXY.x, y: elXY.y - ontoXY.y};
          translation.x /= this.state.playAreaScale;
          translation.y /= this.state.playAreaScale;
          this.gameAction(dragAction, choice, dragOver, translation);
        }
        // optimistically update the location to avoid flicker
        this.setPieceAt(choice, {x, y, moved: true});
        this.setState({ zoomPiece: null });
      } else if (dragOver === parentChoice(choice) && this.isAllowedMove(xmlNodeByChoice(boardXml, choice))) {
        if (['splay', 'grid'].includes(parent.getAttribute('layout'))) {
          const splay = parent.getAttribute('layout') === 'splay';
          this.gameAction('moveElement', choice, {
            [splay ? 'pos' : 'cell']: currentGridPosition(el, parent, elXY.x, elXY.y, this.state.playAreaScale, splay, isFlipped(parent))
          });
        } else {
          this.gameAction('moveElement', choice, {x, y});
        }
        // optimistically update the location to avoid flicker
        this.setPieceAt(choice, {x, y, moved: true});
        this.setState({ zoomPiece: null });
      } else {
        // invalid drag - put it back
        this.setPieceAt(choice, {x: dragging.x, y: dragging.y});
        this.send('drag', {key: choice});
      }
      this.send('releaseLock', {key: choice});
      event.stopPropagation();
    } else {
      if (window.TouchEvent && event instanceof window.TouchEvent) {
        this.handleClick(choice, event);
      }
    }
  }

  handleClick(choice, event) {
    if (this.state.choices && this.state.choices instanceof Array && this.state.choices.includes(choice)) {
      this.gameAction(this.state.action, ...this.state.args, choice);
      event.stopPropagation();
    } else {
      if (this.state.prompt) {
        this.setState({action: null, args: [], prompt: null, choices: null});
      }
      let zooming = false;
      if (isEl(choice) && elByChoice(choice).classList.contains('piece') && !elByChoice(choice).classList.contains('component')) {
        this.zoomOnPiece(elByChoice(choice));
        event.stopPropagation();
        zooming = true;
      }

      const actions = this.actionsFor(choice);
      this.setState({dragging: null});
      if (Object.keys(actions).length) {
        this.setState({actions});
        event.stopPropagation();
      } else if (!zooming && Object.keys(this.state.replies).length === 0) {
        this.cancel();
      }
    }
  }

  cancel() {
    this.setState({action: null, args: [], actions: null, zoomPiece: null, choices: null, prompt: null, help: false});
  }

  zoomOnPiece(element) {
    this.setState({
      zoomPiece: choiceByEl(element),
      zoomId: element.id,
      zoomOriginalSize: {
        height: element.offsetHeight,
        width: element.offsetWidth
      }
    });
  }

  // return available actions association to this element {action: {choice, prompt},...}
  actionsFor(choice) {
    if (!this.state.data.allowedActions) return [];
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt, key}]) => {
      let anotherChoice = choice;
      while (anotherChoice) {
        if (choices && choices.includes(anotherChoice)) {
          actions[action] = {choice: anotherChoice, prompt, key};
        }
        anotherChoice = parentChoice(anotherChoice);
      }
      return actions;
    }, {});
  }

  // actions that have no element to click. returns { action: prompt,... }
  nonBoardActions() {
    if (!this.state.data.allowedActions) return [];
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt}]) => {
      if (!choices || choices.find(choice => !isEl(choice))) {
        actions[action] = prompt;
      }
      return actions;
    }, {});
  }

  isAllowedMove(node) {
    return this.state.data.allowedMove && node.matches(this.state.data.allowedMove);
  }

  isAllowedDrag(key) {
    return Object.values(this.state.data.allowedDrags).some(drag => drag.pieces.includes(key));
  }

  allowedDragSpaces(key) {
    return Object.entries(this.state.data.allowedDrags).reduce((dragSpaces, [action, {pieces, spaces}]) => {
      if (pieces.includes(key)) {
        spaces.forEach(space => dragSpaces[space] = action);
      }
      return dragSpaces;
    }, {});
  }

  isValidDropSpace(key) {
    if (!this.state.dragging || !this.state.dragging.key) return false;
    if (this.allowedDragSpaces(this.state.dragging.key)[key]) return true;
    return this.state.dragging.moveAnchor === key;
  }

  bindMethods(...methods) {
    return methods.reduce((list, method) => {list[method] = this[method].bind(this); return list}, {});
  }

  scrollLogs() {
    const logUI = document.querySelector('#log ul');
    if (logUI) logUI.scrollTop = logUI.scrollHeight;
  }

  chat(event) {
    this.send('chat', {message: this.state.chatMessage});
    this.setState({ chatMessage: '' });
    event.preventDefault();
  }

  renderBoard(board) {
    return (
      <div id="game-dom">
        {[...board.querySelectorAll('.player-mat:not(.mine)')].map(
          mat => this.renderGameElement(mat, mat.getAttribute('player-after-me') != '3')
        )}
        {this.renderGameElement(board.querySelector('#board'))}
        {this.renderGameElement(board.querySelector(`.player-mat.mine`))}
      </div>
    );
  }

  renderGameElement(node, flipped, parentFlipped, frozen) {
    if (!node || !node.attributes) return null;
    const attributes = Array.from(node.attributes).
                             filter(attr => attr.name !== 'class' && attr.name !== 'id' && attr.name !== 'uuid').
                             reduce((attrs, attr) => Object.assign(attrs, { [attr.name.toLowerCase()]: !attr.value || isNaN(attr.value) ? attr.value : +attr.value }), {});

    const type = node.nodeName.toLowerCase();
    const key = choiceForXmlNode(node);
    let label;
    if (attributes.label !== undefined) {
      label = unescape(attributes.label);
      delete attributes.label;
    }

    const props = {
      key,
      "data-key": key,
      "data-parent": choiceForXmlNode(node.parentNode),
      ...attributes,
      className: classNames(type, node.className, { piece: type !== 'space' }),
    };
    if (node.id) props.id = node.id;

    const externallyControlled = this.state.locks[key] && this.state.locks[key] !== this.props.userId;
    let position, wrappedStyle = {};
    const gridItem = ['splay', 'grid'].includes(node.parentNode.getAttribute('layout'));

    if (!frozen) {
      props.onClick = e => this.handleClick(key, e);
      props.onContextMenu = e => {
        e.preventDefault();
        this.handleClick(key, e);
      };
      props.className = classNames(props.className, {
        flipped,
        hilited: (
          (this.state.dragging && key == this.state.dragOver && (
            this.allowedDragSpaces(this.state.dragging.key)[key] ||
            this.state.dragOver == parentChoice(this.state.dragging.key))
          ) ||
          (this.state.choices instanceof Array && this.state.choices.includes(key))
        )
      });
      if (type === 'space') {
        if (this.state.dragging) props.onMouseEnter = () => this.isValidDropSpace(key) && this.setState({dragOver: key});
        if (this.state.dragging && this.state.dragOver === key) {
          props.onMouseLeave = () => this.setState({
            dragOver: choiceAtPoint(mouse.x, mouse.y, el => this.isValidDropSpace(choiceByEl(el)) && choiceByEl(el) !== this.state.dragOver)
          });
        }
      }
      if (externallyControlled && this.state.positions[key]) {
        position = this.state.positions[key];
      } else if (node.parentNode.getAttribute('layout') === 'stack' && !attributes.moved) {
        position = {x: 0, y: 0};
      } else {
        const x = attributes.x;
        const y = attributes.y;
        if (!position && !isNaN(x) && !isNaN(y) && !isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
          position = {x, y};
        } else if (node.parentNode.nodeName === 'space') {
          position = {x: 0, y: 0};
        }
      }
      ['left', 'right', 'top', 'bottom'].forEach(p => {
        if (props[p] != undefined) {
          wrappedStyle[p] = props[p];
          delete props[p];
        }
      });
    }

    if (['splay', 'grid'].includes(node.getAttribute('layout'))) {
      let { columns } = props;
      if (node.getAttribute('layout') === 'splay') {
        columns = Math.max(columns, Math.ceil(node.childElementCount / (props.rows || 1)));
      }
      props.style = {
        gridTemplateColumns: `repeat(${(columns || 1) - 1}, 1fr) ${props.minwidth ? props.minwidth + 'px' : '1fr'}`,
        gridTemplateRows: `repeat(${(props.rows || 1) - 1}, 1fr) ${props.minheight ? props.minheight + 'px' : '1fr'}`,
        gap: `${props.gutter || 0}px`,
    };
  }

    let contents;
    if (node.getAttribute('layout') === 'stack' && node.childElementCount) {
      contents = Array.from(node.children).slice(-2).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
    } else {
      contents = Array.from(node.children).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
    }
    if (node.classList.contains('player-mat')) {
      const player = attributes.player && this.state.data.players[attributes.player - 1];
      if (player) contents.push(
        <div key="nametag"
          className={classNames("nametag", {active: this.activePlayer(player.userId)})}>
          {player.name}
        </div>
      );
    }
    if (this.components[type]) {
      props.className += ' component';
      contents = React.createElement(
        this.components[type],
        {...props, display: this.props.counterDisplays[props.display] || (v=>v), ...this.bindMethods('gameAction')},
        contents
      );
    }
    if (this.props.pieces[type]) {
      contents = React.createElement(this.props.pieces[type], {...props}, frozen || contents);
    }

    if (this.state.dragging && this.state.dragging.key == key) {
      wrappedStyle.pointerEvents = "none";
    }

    const draggable = !frozen && (this.isAllowedMove(node) || this.isAllowedDrag(key)) && (this.state.zoomPiece == key || !IS_MOBILE_PORTRAIT);

    if (position && (position.x != undefined && position.x != 0 || position.y == undefined && position.y != 0) && !frozen && !draggable) {
      wrappedStyle.transform = `translate(${position.x}px, ${position.y}px)`;
    }

    if (this.state.changes[key]) wrappedStyle.display = 'hidden'; // temporarily hide while animation starts

    if (node.parentNode.getAttribute('layout') === 'grid' && attributes.cell !== undefined) {
      wrappedStyle.gridArea = `${Math.floor(attributes.cell / (node.parentNode.getAttribute('columns') || 1)) + 1} / ${attributes.cell % (node.parentNode.getAttribute('columns') || 1) + 1}`;
      wrappedStyle.transition = 'none';
    }

    if (node.id) contents = <>
      {contents}
      {label && <label>{label}</label>}
    </>;

    contents = <div {...props}>{contents}</div>;
    if (position && type !== 'space' || externallyControlled || gridItem || props.moved || Object.keys(wrappedStyle).length) {
      contents = (
        <div
          key={key}
          className={classNames({
            'positioned-piece': type !== 'space' && !frozen,
            "external-dragging": externallyControlled || props.moved,
          })}
          style={wrappedStyle}
        >
          {contents}
        </div>
      );
    }

    if (draggable) {
      props.onTouchEnd = e => this.handleClick(key, e);
      return (
        <Draggable
          disabled={externallyControlled}
          onDrag={(e, data) => this.dragging(key, data.x, data.y, e, !this.state.dragging && choiceForXmlNode(node.parentNode))}
          onStop={(e, data) => this.stopDrag(key, data.x, data.y, e)}
          key={key}
          position={position || {x:0, y:0}}
          scale={(parentFlipped ? -1 : 1) * this.state.playAreaScale}
        >
          {contents}
        </Draggable>
      );
    } else {
      return contents;
    }
  }

  render() {
    const textChoices = this.state.choices instanceof Array && this.state.choices.filter(choice => !isEl(choice));
    const nonBoardActions = this.nonBoardActions();

    let messagesPane = 'hidden', zoomScale, actions = this.state.actions;
    const zoomXmlNode = this.state.zoomPiece && boardXml && xmlNodeByChoice(boardXml, this.state.zoomPiece);

    if (!IS_MOBILE_PORTRAIT || (!this.state.dragging && !this.state.touchMoving)) {
      if (this.state.help) {
        messagesPane = 'help';
      } else if (this.state.choices) {
        messagesPane = 'choices';
      } else if (actions && Object.keys(actions).length || zoomXmlNode) {
        messagesPane = 'actions';
        if (zoomXmlNode) {
          zoomScale = SIDEBAR_WIDTH / this.state.zoomOriginalSize.width * (this.state.bigZoom ? 2 : 1);
        }
      } else if (this.state.data) {
        if (this.state.data.phase == 'setup') {
          messagesPane = 'setup';
        } else {
          messagesPane = 'standard';
        }
      }
    }

    const showKeybind = message => {
      let key = message.match(/\s*\((\w)\)$/);
      if (key) {
        message = message.replace(key[0], '');
        key = key[1].toUpperCase();
      }
      return <span><span className="keybind">{key}</span>{message}</span>;
    };

    return (
      <>
        <div id="play-area">
          <div id="scaled-play-area" style={{ transform: `translate(-50%, -50%) scale(${this.state.playAreaScale})` }}>
            {this.props.background}

            {this.state.data.phase === 'ready' && boardXml && this.state.playAreaScale && this.renderBoard(boardXml)}
          </div>
        </div>
        <div
          id="messages"
          className={classNames(messagesPane, {"big-zoom": this.state.bigZoom})}
          style={IS_MOBILE_PORTRAIT ? {width: 2 * SIDEBAR_WIDTH}: {}}
        > {/* why is this 2 and not devicePixelRatio ?? */}
          <div>{Object.keys(this.state.replies).length ? <span id="spinner"><Spinner/> connected</span> : (this.selfActivePlayer() ? "🟢 connected" : "🔴 not connected")}</div>
          <div className="prompt">{this.state.prompt || this.state.data.prompt}</div>
          <div id="choices">
            {messagesPane == 'choices' &&
             <div>
               {textChoices.length > 0 && <input id="choiceFilter" placeholder="Filter" autoFocus={!IS_MOBILE_PORTRAIT} onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/>}
               {textChoices && (
                 <div>
                   {Array.from(new Set(textChoices.filter(choice => String(choice).toLowerCase().includes(this.state.filter.toLowerCase())))).sort().map(choice => (
                     <button key={choice} onClick={() => this.gameAction(this.state.action, ...this.state.args, choice)}>{choice}</button>
                   ))}
                 </div>
               )}
             </div>
            }

            {messagesPane == 'actions' &&
             <div id="actionContainer">
               {zoomXmlNode &&
                <div
                  id="zoomPiece"
                  onClick={() => this.setState({ bigZoom: IS_MOBILE_PORTRAIT && !this.state.bigZoom })}
                  style={{width: SIDEBAR_WIDTH, height: zoomScale * this.state.zoomOriginalSize.height}}
                >
                  <div className="scaler" style={{width: this.state.zoomOriginalSize.width, height: this.state.zoomOriginalSize.height, transform: `scale(${zoomScale})`}}>
                    {this.renderGameElement(zoomXmlNode, false, false, true)}
                  </div>
                </div>
               }
               {!this.state.bigZoom &&
                <div id="actions" style={IS_MOBILE_PORTRAIT ? {width: SIDEBAR_WIDTH - 30} : {}}>
                  {actions && Object.entries(actions).map(([a, {choice, prompt}]) => (
                    <button key={a} onClick={e => {this.gameAction(a, ...this.state.args, choice); e.stopPropagation()}}>{showKeybind(prompt)}</button>
                  ))}
                </div>
               }
             </div>
            }

            {messagesPane == 'setup' &&
             <>
               <div className="prompt">
                 Send the URL to other players. Click &apos;Start&apos; when all players are present.<br/><br/>
                 Players: {this.state.data.players.map(p => p.name).join(', ')}
               </div>
               <button onClick={() => this.send('start')}>Start</button>
             </>
            }

            {messagesPane == 'standard' &&
             <div id="actions">
               <button className="undo" onClick={() => this.send('undo')}>Undo</button>
               <button className="reset" onClick={() => confirm("Reset and lose all game history? This cannot be undone") && this.reset()}>Reset</button>
               {nonBoardActions && Object.entries(nonBoardActions).map(([action, prompt]) => (
                 <button key={action} onClick={() => this.gameAction(action)}>{showKeybind(prompt)}</button>
               ))}
               <button className="fab help" onClick={() => this.setState({help: true})}>?</button>
             </div>
            }

            {messagesPane == 'help' &&
             <span>
               <h1>How to play</h1>
               <ul>
                 <li>Click on {IS_MOBILE_PORTRAIT || 'or hold Z over '}an item to see what actions can be taken.</li>
                 <li>Most items can be dragged. {IS_MOBILE_PORTRAIT && 'Touch an item to bring up the action menu, then drag' || 'Drag items to see what moves are possible'}.</li>
                 <li>Join us on <a href="https://discord.gg/hkvp9uPA" target="_new">Discord</a>! Give us your feedback and suggestions.</li>
               </ul>

             </span>
            }
            {messagesPane == 'standard' || messagesPane == 'setup' || <button className="fab cancel" onClick={() => this.cancel()}>✕</button>}
          </div>
          {!this.state.bigZoom &&
           <>
             <div key="log" id="log">
               <ul>
                 {Object.entries(this.state.logs)
                        .sort((a, b) => a[1].timestamp === b[1].timestamp ? (parseInt(a[0], 10) > parseInt(b[0], 10) ? 1 : -1) : (a[1].timestamp > b[1].timestamp ? 1 : -1))
                        .map(([k, {message}]) => <li key={k} dangerouslySetInnerHTML={{__html: message}}/>)
                 }
               </ul>
             </div>
             <div key="chat" id="chat">
               <form onSubmit={e => this.chat(e)}>
                 <label>💬</label>
                 <input placeholder="Send message" value={this.state.chatMessage} onKeyUp={e => e.stopPropagation()} onChange={e => this.setState({chatMessage: e.target.value})} />
               </form>
             </div>
           </>
          }
        </div>
      </>
    );
  }

  activePlayer(userId) {
    return this.state.connected && (new Date() - this.state.playerStatus[userId] < IDLE_WAIT);
  }

  selfActivePlayer() {
    return this.activePlayer(this.props.userId);
  }
}
