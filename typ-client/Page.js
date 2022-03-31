import React, { Component } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {
  throttle,
  elementByKey,
  parentKey,
  zoneForKey,
  choiceHasKey,
  keyFromChoice,
  choiceFromKey,
  elForPoint,
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

const DRAG_TOLERANCE = 1

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      ctxpos: null, // position of ctx menu
      dragging: null, // data on the current drag {key, x/y start point, zone starting zone}
      zoomed: false, // holding the zoom key
    };
    this.components = {
      counter: Counter,
      die: Die,
    };
    if (props.components) {
      this.components = {...this.components, ...props.components};
    }
  }

  componentDidMount() {
    this.webSocket=new ReconnectingWebSocket((location.protocol == 'http:' ? 'ws://' : 'wss://') + document.location.host + '/sessions/' + this.props.session);

    this.webSocket.onmessage = e => {
      const res = JSON.parse(e.data);
      console.log("Received", res);
      switch(res.type) {
        case "state":
          if (res.payload) {
            this.setState({data: res.payload});
            if (Object.entries(res.payload.allowedActions).length == 1) {
              const [action, details] = Object.entries(res.payload.allowedActions)[0];
              this.setState({action, args: details.args, prompt: details.prompt, choices: details.choices});
            }
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
      }
    }
    document.addEventListener('touchmove', e => {
      let el = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
      if (el && this.state.dragging) {
        while (!el.classList.contains("space") && el.parentNode) el = el.parentNode;
        this.setState({dragOver: keyFromEl(el)})
      }
    });
    document.addEventListener('mousemove', e => this.setState({mouse: {x: e.clientX, y: e.clientY}}));
    document.addEventListener('keydown', e => e.key == "z" && this.setState({'zoomed': true}));
    document.addEventListener('keyup', e => {
      const el = elForPoint(this.state.mouse.x, this.state.mouse.y)
      if (el) {
        const key = choiceFromKey(el);
        const action = Object.entries(this.actionsFor(key)).find(([_, a]) => a.key == e.key);
        if (action) return this.gameAction(action[0], key);
      }
      if (e.key == "z") this.setState({'zoomed': false});
    });
    /* window.visualViewport.addEventListener('resize', console.log);
     * window.visualViewport.addEventListener('scroll', console.log);
     * document.addEventListener('wheel', console.log); */
    this.send('refresh');
  }

  send(action, payload) {
    payload = payload || {};
    this.webSocket.send(JSON.stringify({type: action, payload}));
  }

  gameAction(action, ...args) {
    console.log('gameAction', action, ...args);
    this.send(
      'action', {
        sequence: this.state.data.sequence,
        action: [action, ...args]
      },
    );
    this.setState({actions: null, action: null, args: [], prompt: null, choices: null, filter: ''});
  }

  get(variable) {
    return this.state.data.variables[variable];
  }

  player() {
    return this.state.data.players && this.state.data.players.indexOf(this.props.userId) + 1;
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
      this.setState({dragging: {key, x, y, zone: zoneForKey(key)}})
      // set piece to uncontrolled
      this.updatePosition(key)
    }
    const absX = event.touches ? event.touches[0].clientX : event.clientX;
    const absY = event.touches ? event.touches[0].clientY : event.clientY;
    const zone = zoneForPoint(absX, absY);
    const dragData = {key, x, y};
    // crossing zones so add the zone translation
    if (zone && keyFromEl(zone.el) != this.state.dragging.zone) {
      const startZone = elementByKey(this.state.dragging.zone)
      const endZone = zone.el
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
    this.setState({dragging: null, dragOver: false});
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
      } else if (!dragOver || dragOver === parentKey(key)) {
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
    }
  }

  handleClick(choice, {x, y}, event) {
    const actions = this.actionsFor(choice);
    console.log(actions, choice)
    this.setState({dragging: null});
    if (Object.keys(actions).length == 1) {
      this.gameAction(Object.keys(actions)[0], ...this.state.args, choice);
      event.stopPropagation();
    } else if (Object.keys(actions).length > 1) {
      this.setState({actions, ctxpos: {x, y}});
      event.stopPropagation();
    } else {
      this.setState({actions: null, ctxpos: null});
    }
  }

  // return available actions association to this element {action: {choice, prompt},...}
  actionsFor(choice) {
    if (!this.state.data.allowedActions) return []
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt, key}]) => {
      let node = choice;
      while (keyFromChoice(node)) {
        if (choices && choices.includes(node)) {
          actions[action] = {choice: node, prompt, key};
        }
        node = choiceFromKey(parentKey(keyFromChoice(node)));
      }
      return actions;
    }, {})
  }

  // actions that have no element to click. returns { action: prompt,... }
  nonBoardActions() {
    if (!this.state.data.allowedActions) return []
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt}]) => {
      if (!choices || choices.includes(choice => !choiceHasKey(choice))) {
        actions[action] = prompt;
      }
      return actions;
    }, {})
  }

  isAllowedMove(node) {
    return this.state.data.allowedMove && node.matches(this.state.data.allowedMove);
  }

  isAllowedDrag(key) {
    return Object.values(this.state.data.allowedDrags).some(drag => drag.pieces.includes(choiceFromKey(key)))
  }

  allowedDragSpaces(key) {
    return Object.entries(this.state.data.allowedDrags).reduce((dragSpaces, [action, {pieces, spaces}]) => {
      if (pieces.includes(choiceFromKey(key))) {
        spaces.forEach(space => dragSpaces[keyFromChoice(space)] = action)
      }
      return dragSpaces;
    }, {});
  }

  bindMethods(...methods) {
    return methods.reduce((list, method) => {list[method] = this[method].bind(this); return list}, {})
  }

  renderBoard(board) {
    return <div id="game">
      {[...board.querySelectorAll(`#player-mat:not(.mine)`)].map(mat => this.renderGameElement(mat, mat.getAttribute('player') < 4))}
      {this.renderGameElement(board.querySelector('#board'))}
      {this.renderGameElement(board.querySelector(`#player-mat.mine`))}
    </div>
  }

  renderGameElement(node, flipped, parentFlipped, frozen) {
    if (!node || !node.attributes) return;
    const attributes = Array.from(node.attributes).
                             filter(attr => attr.name !== 'class' && attr.name !== 'id').
                             reduce((attrs, attr) => Object.assign(attrs, { [attr.name]: isNaN(attr.value) ? attr.value : +attr.value }), {});

    const type = node.nodeName.toLowerCase();
    const key = branch(node).join('-')

    const props = {
      key,
      "data-key": key,
      ...attributes,
      className: classNames(type, node.className),
    };
    if (node.id) props.id = node.id;

    if (!frozen) {
      props.onClick = e => this.handleClick(choiceFromKey(key), {x: e.pageX, y: e.pageY}, e);
      props.onContextMenu = e => {
        e.preventDefault();
        this.handleClick(choiceFromKey(key), {x: e.pageX, y: e.pageY}, e)
      };
      props.className = classNames(type, node.className, {
        flipped,
        "hilited": (
          (this.state.dragging && key==this.state.dragOver && this.allowedDragSpaces(this.state.dragging.key)[key]) ||
          (this.state.choices instanceof Array && this.state.choices.includes(choiceFromKey(key)))
        )
      });

      if (node.classList.contains('space') && this.state.dragging) {
        props.onMouseEnter=() => this.setState({dragOver: key});
        props.onMouseLeave=() => this.setState({dragOver: parentKey(key)});
      }
      if (node.classList.contains('piece')) {
        props.onMouseEnter=() => this.setState({mouseOver: key});
        props.onMouseLeave=() => this.setState({mouseOver: null}); // TODO parent if is also piece
      }
    }

    let contents;
    if (!node.classList.contains('piece') || node.childNodes.length) {
      if (node.nodeName == 'deck' && node.childNodes.length) {
        contents = Array.from(node.childNodes).slice(-2).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
      } else {
        contents = Array.from(node.childNodes).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
      }
    }
    if (this.components[type]) {
      contents = React.createElement(
        this.components[type],
        {...props, display: this.props.counterDisplays[props.display] || (v=>v), ...this.bindMethods('gameAction', 'get', 'setVariable')},
        contents
      );
    }
    contents = contents || node.id;

    const externallyControlled = this.state.locks[key] && this.state.locks[key] !== this.props.userId;
    let position;
    if (externallyControlled) {
      position = this.state.positions[key];
    }
    if (node.parentNode.nodeName != 'deck' || attributes.moved) {
      const x = attributes.x;
      const y = attributes.y;
      if (!position && !isNaN(x) && !isNaN(y) && !isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        position = {x, y};
      }
    }

    if (!frozen && (this.isAllowedMove(node) || this.isAllowedDrag(key))) {
      props.onTouchEnd = e => this.handleClick(choiceFromKey(key), {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY}, e)
      return (
        <Draggable
          disabled={externallyControlled}
          onDrag={(e, data) => this.dragging(key, data.x, data.y, e)}
          onStop={(e, data) => this.stopDrag(key, data.x, data.y, e)}
          key={key}
          position={position || {x:0, y:0}}
          scale={parentFlipped ? -1 : 1}
        >
          <div
            className={classNames({"external-dragging": !!this.state.positions[key]})}
            style={this.state.dragging ? {pointerEvents: "none"} : ""}
          > {/* wrapper for draggable */}
            <div {...props}>{contents}</div>
          </div>
        </Draggable>
      );
    } else if (position && !frozen) {
      return (
        <div key={key} style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
          <div {...props}>{contents}</div>
        </div>
      );
    } else {
      return <div {...props}>{contents}</div>;
    }
  }

  render() {
    const choice = this.state.args.slice(-1)[0];
    const textChoices = this.state.choices instanceof Array &&
                        this.state.choices.filter(choice => !choiceHasKey(choice) && choice.toLowerCase().includes(this.state.filter.toLowerCase()));
    const nonBoardActions = this.nonBoardActions()
    return (
      <div data-players={this.state.data.players && this.state.data.players.length}>
      {this.state.prompt && <div id="messages">
        <div id="prompt">
        {this.state.prompt}
        {textChoices.length > 0 && <input id="choiceFilter" placeholder="Filter" autoFocus onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/>}
        </div>
        {textChoices && <div>
         {Array.from(new Set(textChoices)).sort().map(choice => (
           <button key={choice} onClick={() => this.gameAction(this.state.action, ...this.state.args, choice)}>{JSON.parse(choice)}</button>
         ))}
        </div>}
        <button onClick={() => {this.setState({action: null, args: [], prompt: null, choices: null}); this.send('update')}}>Cancel</button>
      </div>}

      {!this.state.prompt && <div id="messages">
        <button onClick={() => this.send('undo')}>Undo</button>
        <button onClick={() => confirm("Reset and lose all game history? This cannot be undone") && this.send('reset')}>Reset</button>
        {nonBoardActions && Object.entries(nonBoardActions).map(([action, prompt]) => (
          <button key={action} onClick={() => this.gameAction(action)}>{prompt}</button>
        ))}
      </div>}

      {this.props.background}
      {this.state.data.phase === 'ready' && this.state.data.doc && this.renderBoard(xmlToNode(this.state.data.doc))}

      {this.state.actions && this.state.ctxpos &&
       <ul
         id="context-menu"
         style={{top: this.state.ctxpos.y, left: this.state.ctxpos.x}}
         onMouseEnter={() => choiceHasKey(choice) && this.setPieceAt(keyFromChoice(choice), {'data-ctx-hover': true})}
         onMouseLeave={() => {this.setState({actions: null, args:[]}); choiceHasKey(choice) && this.setPieceAt(keyFromChoice(choice), {'data-ctx-hover': false})}}
       >
         {Object.entries(this.state.actions).map(([a, {choice, prompt}]) => (
           <li key={a} onClick={e => {this.gameAction(a, ...this.state.args, choice); e.stopPropagation()}}>{prompt}</li>
         ))}
       </ul>
      }
      {this.state.zoomed && this.state.mouseOver && <div id="zoomPiece">
        {this.renderGameElement(pieceAt(xmlToNode(this.state.data.doc), this.state.mouseOver), false, false, true)}
      </div>}
    </div>
    )
  }
}
