import React, { Component } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {
  throttle,
  elementByKey,
  parentKey,
  zoneKey,
  choiceHasKey,
  keyFromChoice,
  choiceFromKey,
  keyAtPoint,
  zoneForPoint,
  xmlToNode,
  branch,
  keyFromEl,
  isFlipped,
  pieceAt
} from './utils';
import Counter from './Counter';
import Die from './Die';
import './style.scss';

const DRAG_TOLERANCE = 1;
const PING_INTERVAL = 7500;
const IDLE_WAIT = 10000;
const IS_MOBILE_PORTRAIT = !!(window.matchMedia("(orientation: portrait)").matches && window.TouchEvent);
let SIDEBAR_WIDTH = 320;
let mouse = {};
let actionId = 1;

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
      input: '',
      filter: '', // user input to filter available choices
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
    this.components = {
      counter: Counter,
      die: Die,
    };
  }

  componentDidMount() {
    this.webSocket=new ReconnectingWebSocket((location.protocol == 'http:' ? 'ws://' : 'wss://') + document.location.host + '/sessions/' + this.props.session);
    this.webSocket.onopen = () => this.setState({connected: true});
    this.webSocket.onclose = () => this.setState({connected: false});
    this.webSocket.onmessage = e => {
      const res = JSON.parse(e.data);
      console.log("Received", res.type, res);
      switch(res.type) {
        case "state":
          if (res.payload) {
            this.setState(state => ({
              data: res.payload,
              logs: Object.keys(state.logs).reduce((logs, sequence) => {
                if (res.payload.sequence <= parseInt(sequence, 10)) delete logs[sequence];
                return logs;
              }, state.logs),
            }));
            if (this.state.zoomPiece) {
              this.setState({actions: this.actionsFor(choiceFromKey(this.state.zoomPiece))});
            }
            document.getElementsByTagName('body')[0].dataset.players = this.state.data.players && this.state.data.players.length;
          }
          break;
        case "updateLocks":
          this.setState({locks: res.payload});
          break;
        case "updateElement":
          if (res.payload) {
            let {key, x, y, start, end, endFlip} = res.payload;
            if (start) {
              const startZone = elementByKey(start);
              const endZone = elementByKey(end);
              const startRect = startZone.getBoundingClientRect();
              const endRect = endZone.getBoundingClientRect();
              const parentRect = elementByKey(parentKey(key)).getBoundingClientRect();
              const keyRect = elementByKey(key).getBoundingClientRect();
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
            this.updatePosition(key, x, y);
          }
          break;
        case "active":
          this.setState(state => ({playerStatus: Object.assign({}, state.playerStatus, {[res.payload]: new Date()})}));
          break;
        case 'error':
        case 'reload':
          location.reload();
          break;
        case 'log':
          this.setState(state => ({logs: Object.assign({}, state.logs, {[res.payload.sequence]: res.payload.message})}));
          {
            const logUI = document.querySelector('#log ul');
            if (logUI) logUI.scrollTop = logUI.scrollHeight;
          }
          break;
        case 'response':
          if (this.state.replies[res.payload.id]) {
            const { callback } = this.state.replies[res.payload.id];
            this.setState(state => {
              const { [res.payload.id]: _, ...replies } = state.replies;
              return { replies };
            });
            callback(res.payload.response);
            delete this.state.replies[res.payload.id];
          }
          break;
      }
    };
    document.addEventListener('touchmove', e => {
      let el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      if (!this.state.touchMoving) this.setState({ touchMoving: true });
      if (el && this.state.dragging) {
        while (el.classList && !el.classList.contains("space") && el.parentNode) el = el.parentNode;
        this.setState({dragOver: keyFromEl(el)});
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
        const zoomKey = keyAtPoint(mouse.x, mouse.y, el => el.matches('.piece:not(.component)'));
        zoomKey && this.handleClick(choiceFromKey(zoomKey), e);
      }
      if (e.key == "Escape") this.cancel();
    });
    document.addEventListener('keyup', e => {
      if (e.key == 'Enter' && this.state.choices) {
        const choices = this.state.choices.filter(choice => !choiceHasKey(choice) && choice.toLowerCase().includes(this.state.filter.toLowerCase()));
        if (choices.length == 1) {
          this.gameAction(this.state.action, ...this.state.args, choices[0]);
        }
      }
      let key = this.state.zoomPiece || (mouse.x != undefined && keyAtPoint(mouse.x, mouse.y));
      if (key) {
        if (key[0] == '#') {
          const el = document.querySelector(`#game ${key.replace(/#(\d)/g, '#\\3$1 ')}`);
          key = el && el.dataset && el.dataset.key;
        }
        const choice = choiceFromKey(key);
        const action = Object.entries(this.state.actions || this.actionsFor(choice)).find(([_, a]) => a.key && a.key.toLowerCase() == e.key);
        if (action) this.gameAction(action[0], ...this.state.args, action[1].choice);
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
    }

    this.send('refresh');
    setInterval(() => this.send('ping'), PING_INTERVAL);
  }

  send(action, payload) {
    payload = payload || {};
    this.webSocket.send(JSON.stringify({type: action, payload}));
  }

  gameAction(action, ...args) {
    console.log('gameAction', action, ...args);
    this.send(
      'action', {
        id: actionId,
        sequence: this.state.data.sequence,
        action: [action, ...args]
      },
    );
    this.waitForReply(actionId, action, reply => {
      if (reply.type === 'ok') {
        this.setState({ action: null, args: [], prompt: null, choices: null, zoomPiece: null });
      } else if (reply.type === 'incomplete') {
        this.setState({ action, args, prompt: reply.prompt, choices: reply.choices, zoomPiece: null });
      } else if (reply.type === 'error') {
        this.setState({ action: null, args: [], prompt: null, choices: null, zoomPiece: null });
        console.error(reply);
      }
    });
    actionId++;
    this.setState(state => ({action, args, actions: null, prompt: null, choices: null, filter: '', data: Object.assign({}, state.data, {allowedActions: undefined})}));
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
    return this.state.data.players && this.state.data.players.findIndex(p => p[0] == this.props.userId) + 1;
  }

  setPieceAt(key, attributes) {
    const xml = xmlToNode(this.state.data.doc);
    const el = xml.querySelector(
      key.split('-').reduce((path, index) => `${path} > *:nth-child(${index})`, 'game')
    );
    if (!el) return;
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    this.setState(state => ({data: Object.assign({}, state.data, {doc: xml.outerHTML})}));
  }

  setVariable(key, value) {
    this.setState(state => ({data: Object.assign({}, state.data, {variables: Object.assign({}, state.data.variables, {[key]: value})})}));
  }

  updatePosition(key, x, y) {
      this.setState(state => ({positions: Object.assign({}, state.positions, {[key]: x !== undefined ? {x, y} : undefined })}));
  }

  dragging(key, x, y, event) {
    if (!this.state.dragging) {
      this.send('requestLock', {key});
      this.setState({dragging: {key, x, y, zone: zoneKey(key)}, dragOver: parentKey(key)});
      // set piece to uncontrolled
      this.updatePosition(key);
    }
    const absX = event.touches ? event.touches[0].clientX : event.clientX;
    const absY = event.touches ? event.touches[0].clientY : event.clientY;
    const zone = zoneForPoint(absX, absY);
    const dragData = {key, x, y};
    // crossing zones so add the zone translation
    if (zone && keyFromEl(zone.el) != this.state.dragging.zone) {
      const startZone = elementByKey(this.state.dragging.zone);
      const endZone = zone.el;
      dragData.start = keyFromEl(startZone);
      dragData.end = keyFromEl(endZone);
      dragData.endFlip = isFlipped(startZone) ^ isFlipped(endZone);
      if (isFlipped(startZone)) {
        dragData.x -= startZone.getBoundingClientRect().right - endZone.getBoundingClientRect().right;
        dragData.y -= startZone.getBoundingClientRect().bottom - endZone.getBoundingClientRect().bottom;
      } else {
        dragData.x += startZone.getBoundingClientRect().x - endZone.getBoundingClientRect().x;
        dragData.y += startZone.getBoundingClientRect().y - endZone.getBoundingClientRect().y;
      }
    }
    throttle(() => this.send('drag', dragData));
  }

  stopDrag(key, x, y, event) {
    const {dragging, dragOver} = this.state;
    this.setState({dragging: null, dragOver: null});
    if (dragging && dragging.key === key && Math.abs(dragging.x - x) + Math.abs(dragging.y - y) > DRAG_TOLERANCE) {
      const dragAction = this.allowedDragSpaces(key)[dragOver];
      if (dragAction) {
        const ontoXY = elementByKey(dragOver).getBoundingClientRect();
        const elXY = elementByKey(key).getBoundingClientRect();
        const translation = isFlipped(elementByKey(dragOver)) ?
                            {x: ontoXY.right - elXY.right, y: ontoXY.bottom - elXY.bottom} :
                            {x: elXY.x - ontoXY.x, y: elXY.y - ontoXY.y};
        this.gameAction(dragAction, choiceFromKey(key), choiceFromKey(dragOver), translation.x, translation.y);
        // optimistically update the location to avoid flicker
        this.setPieceAt(key, {x, y, moved: true});
      } else if (dragOver === parentKey(key)) {
        this.gameAction('moveElement', choiceFromKey(key), x, y);
        // optimistically update the location to avoid flicker
        this.setPieceAt(key, {x, y});
      } else {
        // invalid drag - put it back
        this.setPieceAt(key, {x: dragging.x, y: dragging.y});
        this.send('drag', {key});
      }
      this.send('releaseLock', {key});
      event.stopPropagation();
    } else {
      if (window.TouchEvent && event instanceof window.TouchEvent) {
        this.handleClick(choiceFromKey(key), event);
      }
    }
  }

  handleClick(choice, event) {
    if (this.state.prompt) {
      this.setState({action: null, args: [], prompt: null, choices: null});
      //this.send('update');
    }
    let zooming = false;
    if (choiceHasKey(choice) && elementByKey(keyFromChoice(choice)).classList.contains('piece') && !elementByKey(keyFromChoice(choice)).classList.contains('component')) {
      this.zoomOnPiece(elementByKey(keyFromChoice(choice)));
      event.stopPropagation();
      zooming = true;
    }

    const actions = this.actionsFor(choice);
    this.setState({dragging: null});
    if (Object.keys(actions).length == 1) {
      this.gameAction(Object.keys(actions)[0], ...this.state.args, choice);
      event.stopPropagation();
    } else if (Object.keys(actions).length > 1) {
      this.setState({actions});
      event.stopPropagation();
    } else if (!zooming) {
      this.cancel();
    }
  }

  cancel() {
    //if (this.state.action) this.send('update'); // need to refetch state to get full actions
    this.setState({actions: null, action: null, zoomPiece: null, args: [], choices: null, help: false});
  }

  zoomOnPiece(element) {
    this.setState({zoomPiece: keyFromEl(element), zoomOriginalSize: {height: element.offsetHeight, width: element.offsetWidth}});
  }

  // return available actions association to this element {action: {choice, prompt},...}
  actionsFor(choice) {
    if (!this.state.data.allowedActions) return [];
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt, key}]) => {
      let node = choice;
      while (keyFromChoice(node)) {
        if (choices && choices.includes(node)) {
          actions[action] = {choice: node, prompt, key};
        }
        node = choiceFromKey(parentKey(keyFromChoice(node)));
      }
      return actions;
    }, {});
  }

  // actions that have no element to click. returns { action: prompt,... }
  nonBoardActions() {
    if (!this.state.data.allowedActions) return [];
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt}]) => {
      if (!choices || choices.find(choice => !choiceHasKey(choice))) {
        actions[action] = prompt;
      }
      return actions;
    }, {});
  }

  isAllowedMove(node) {
    return this.state.data.allowedMove && node.matches(this.state.data.allowedMove);
  }

  isAllowedDrag(key) {
    return Object.values(this.state.data.allowedDrags).some(drag => drag.pieces.includes(choiceFromKey(key)));
  }

  allowedDragSpaces(key) {
    return Object.entries(this.state.data.allowedDrags).reduce((dragSpaces, [action, {pieces, spaces}]) => {
      if (pieces.includes(choiceFromKey(key))) {
        spaces.forEach(space => dragSpaces[keyFromChoice(space)] = action);
      }
      return dragSpaces;
    }, {});
  }

  bindMethods(...methods) {
    return methods.reduce((list, method) => {list[method] = this[method].bind(this); return list}, {});
  }

  renderBoard(board) {
    let otherPlayers = 0;
    return (
      <div id="game">
        {[...new Set([
          ...board.querySelectorAll('.player-mat.mine ~ #player-mat'),
          ...board.querySelectorAll('.player-mat:not(.mine)')
        ])].map(
          mat => this.renderGameElement(mat, otherPlayers++<2)
        )}
        {this.renderGameElement(board.querySelector('#board'))}
        {this.renderGameElement(board.querySelector(`.player-mat.mine`))}
      </div>
    );
  }

  renderGameElement(node, flipped, parentFlipped, frozen) {
    if (!node || !node.attributes) return null;
    const attributes = Array.from(node.attributes).
                             filter(attr => attr.name !== 'class' && attr.name !== 'id').
                             reduce((attrs, attr) => Object.assign(attrs, { [attr.name.toLowerCase()]: !attr.value || isNaN(attr.value) ? attr.value : +attr.value }), {});

    const type = node.nodeName.toLowerCase();
    const key = branch(node).join('-');

    const props = {
      key,
      "data-key": key,
      ...attributes,
      className: classNames(type, node.className),
    };
    if (node.id) props.id = node.id;

    const externallyControlled = this.state.locks[key] && this.state.locks[key] !== this.props.userId;
    let position, wrappedStyle = {};

    if (!frozen) {
      props.onClick = e => this.handleClick(choiceFromKey(key), e);
      props.onContextMenu = e => {
        e.preventDefault();
        this.handleClick(choiceFromKey(key), e);
      };
      props.className = classNames(type, node.className, {
        flipped,
        "hilited": (
          (this.state.dragging && key==this.state.dragOver && (
            this.allowedDragSpaces(this.state.dragging.key)[key] ||
              this.state.dragOver==parentKey(this.state.dragging.key))
          ) ||
          (this.state.choices instanceof Array && this.state.choices.includes(choiceFromKey(key)))
        )
      });
      if (node.classList.contains('space')) {
        props.onMouseEnter = () => this.setState({dragOver: key});
        props.onMouseLeave = () => this.setState({dragOver: keyAtPoint(mouse.x, mouse.y, el => el.classList.contains('space'))});
      }
      if (externallyControlled && this.state.positions[key]) {
        position = this.state.positions[key];
      } else if (node.parentNode.nodeName == 'deck' && !attributes.moved) {
        position = {x: 0, y: 0};
      } else {
        const x = attributes.x;
        const y = attributes.y;
        if (!position && !isNaN(x) && !isNaN(y) && !isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
          position = {x, y};
        } else if (node.parentNode.classList.contains('space')) {
          position = {x: 0, y: 0};
        }
      }
      if (props.left != undefined) {
        wrappedStyle.left = props.left;
        delete props.left;
      }
      if (props.right != undefined) {
        wrappedStyle.right = props.right;
        delete props.right;
      }
      if (props.top != undefined) {
        wrappedStyle.top = props.top;
        delete props.top;
      }
      if (props.bottom != undefined) {
        wrappedStyle.bottom = props.bottom;
        delete props.bottom;
      }
    }

    let contents;
    if (node.nodeName == 'deck' && node.childNodes.length) {
      contents = Array.from(node.childNodes).slice(-2).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
    } else {
      contents = Array.from(node.childNodes).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
    }
    if (node.classList.contains('player-mat')) {
      const player = attributes.player && this.state.data.players[attributes.player - 1];
      if (player) contents.push(
        <div key="nametag"
          className={classNames("nametag", {active: this.activePlayer(player[0])})}>
          {player[1]}
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
    contents = contents || node.id;

    if (this.state.dragging && this.state.dragging.key == key) {
      wrappedStyle.pointerEvents = "none";
    }

    const draggable = !frozen && (this.isAllowedMove(node) || this.isAllowedDrag(key)) && (this.state.zoomPiece == key || !IS_MOBILE_PORTRAIT);

    if (position && (position.x != undefined && position.x != 0 || position.y == undefined && position.y != 0) && !frozen && !draggable) {
      wrappedStyle.transform = `translate(${position.x}px, ${position.y}px)`;
    }

    contents = <div {...props}>{contents}</div>;
    if (position) contents = (
      <div
        key={key}
        className={classNames({
          'positioned-piece': node.classList.contains('piece') && !frozen,
          "external-dragging": externallyControlled
        })}
        style={wrappedStyle}
      >
        {contents}
      </div>
    );

    if (draggable) {
      props.onTouchEnd = e => this.handleClick(choiceFromKey(key), e);
      return (
        <Draggable
          disabled={externallyControlled}
          onDrag={(e, data) => this.dragging(key, data.x, data.y, e)}
          onStop={(e, data) => this.stopDrag(key, data.x, data.y, e)}
          key={key}
          position={position || {x:0, y:0}}
          scale={parentFlipped ? -1 : 1}
        >
          {contents}
        </Draggable>
      );
    } else {
      return contents;
    }
  }

  render() {
    const textChoices = this.state.choices instanceof Array && this.state.choices.filter(choice => !choiceHasKey(choice));
    const nonBoardActions = this.nonBoardActions();
    const boardXml = this.state.data.doc && xmlToNode(this.state.data.doc);

    let messagesPane = 'hidden', zoomScale, zoomEl, actions = this.state.actions;
    if (!this.state.dragging && !this.state.touchMoving) {
      if (this.state.zoomPiece) {
        zoomEl = pieceAt(boardXml, this.state.zoomPiece);
        if (!zoomEl) { // piece went away, remove actions that may no longer apply
          actions = this.actionsFor(choiceFromKey(this.state.zoomKey));
        }
      }
      if (this.state.help) {
        messagesPane = 'help';
      } else if (this.state.choices) {
        messagesPane = 'choices';
      } else if (actions && actions.length || zoomEl) {
        messagesPane = 'actions';
        if (zoomEl) {
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
      <div id="layout">
        <div
          id="messages"
          className={classNames(messagesPane, {"big-zoom": this.state.bigZoom})}
          style={{width: IS_MOBILE_PORTRAIT ? 2 * SIDEBAR_WIDTH: 20 + SIDEBAR_WIDTH}}
        > {/* why is this 2 and not devicePixelRatio ?? */}
          <div>{Object.keys(this.state.replies).length ? '♻️ connected' : (this.selfActivePlayer() ? "🟢 connected" : "🔴 not connected")}</div>
          <div className="prompt">{this.state.prompt || this.state.data.prompt}</div>
          {messagesPane == 'choices' &&
           <div>
             {textChoices.length > 0 && <input id="choiceFilter" placeholder="Filter" autoFocus={!IS_MOBILE_PORTRAIT} onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/>}
             {textChoices && (
               <div>
                 {Array.from(new Set(textChoices.filter(choice => choice.toLowerCase().includes(this.state.filter.toLowerCase())))).sort().map(choice => (
                   <button key={choice} onClick={() => this.gameAction(this.state.action, ...this.state.args, choice)}>{JSON.parse(choice)}</button>
                 ))}
               </div>
             )}
           </div>
          }

          {messagesPane == 'actions' &&
           <div id="actionContainer">
             {zoomEl &&
              <div
                id="zoomPiece"
                onClick={() => this.setState({ bigZoom: IS_MOBILE_PORTRAIT && !this.state.bigZoom })}
                style={{width: SIDEBAR_WIDTH, height: zoomScale * this.state.zoomOriginalSize.height}}
              >
                <div className="scaler" style={{width: this.state.zoomOriginalSize.width, height: this.state.zoomOriginalSize.height, transform: `scale(${zoomScale})`}}>
                  {this.renderGameElement(zoomEl, false, false, true)}
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
               Players: {this.state.data.players.map(p => p[1]).join(', ')}
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
          {!this.state.bigZoom &&
           <div id="log">
             <a className="expander" onClick={() => this.setState({expandLogs: !this.state.expandLogs})}>{this.state.expandLogs ? '▼' : '▲'}</a>
             <ul>{Object.entries(this.state.logs).slice(this.state.expandLogs ? -100 : -2).map(([k, l]) => <li key={k}>{l}</li>)}</ul>
           </div>
          }
        </div>

        {this.props.background}

        {this.state.data.phase === 'ready' && this.state.data.doc && this.renderBoard(boardXml)}
      </div>
    );
  }

  activePlayer(userId) {
    return this.state.connected && (new Date() - this.state.playerStatus[userId] < IDLE_WAIT);
  }

  selfActivePlayer() {
    return this.activePlayer(this.props.userId);
  }
}
