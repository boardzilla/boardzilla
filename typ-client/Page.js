import React, { Component } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {throttle, elementByKey, parentKey, zoneForKey, zoneForPoint, xmlToNode, branch, keyFromEl, isFlipped} from './utils';
import Counter from './Counter';
import './style.scss';

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
      positions: {}, // xy positions from server
      actions: null, // currently possible actions in menu
      ctxpos: null, // position of ctx menu
      dragging: null, // data on the current drag {key, x/y start point, zone starting zone}
    };
    this.components = {
      counter: Counter,
    };
    if (props.components) {
      this.components = {...this.components, ...props.components};
    }
    this.counterDisplays = props.counterDisplays;
  }

  componentDidMount() {
    this.webSocket=new ReconnectingWebSocket('ws://' + document.location.host + '/sessions/' + this.props.session);

    this.webSocket.onopen = () => {
      this.refreshInterval = setInterval(() => {
        this.send('refresh');
      }, 3000);
    };
    this.webSocket.onclose = () => {
      clearInterval(this.refreshInterval);
    }
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
            } else {
              this.setState({action: null, args: [], prompt: null, choices: null});
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
      const el = document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
      if (el && this.state.dragging) {
        this.setState({dragOver: el.getAttribute('data-key')})
      }
    });
    this.send('refresh');
  }

  send(action, payload) {
    payload = payload || {}
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
    this.setState(state => {
      for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
      }
      return ({data: Object.assign({}, state.data, {doc: xml.outerHTML})});
    })
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
    const absX = event.clientX;
    const absY = event.clientY;
    const zone = zoneForPoint(absX, absY);
    const dragData = {key, x, y};
    // crossing zones so add the zone translation
    if (zone && zone.el.getAttribute('data-key') != this.state.dragging.zone) {
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
    this.send('releaseLock', {key});
    const {dragging, dragOver} = this.state;
    this.setState({dragging: null, dragOver: false});
    if (dragging && dragging.key === key) {
      const dragAction = this.allowedDragSpaces(key)[dragOver];
      if (dragAction) {
        const ontoXY = elementByKey(dragOver).getBoundingClientRect();
        const elXY = elementByKey(key).getBoundingClientRect();
        const translation = isFlipped(elementByKey(dragOver)) ?
                            {x: ontoXY.right - elXY.right, y: ontoXY.bottom - elXY.bottom} :
                            {x: elXY.x - ontoXY.x, y: elXY.y - ontoXY.y};
        this.gameAction(dragAction, `$el(${key})`, `$el(${dragOver})`, translation.x, translation.y);
        // optimistically update the location to avoid flicker
        this.setPieceAt(key, {x, y});
      } else if (!dragOver || dragOver === parentKey(key)) {
        this.gameAction('moveElement', `$el(${key})`, x, y);
        // optimistically update the location to avoid flicker
        this.setPieceAt(key, {x, y});
      } else {
        // invalid drag - put it back
        this.setPieceAt(key, {x: dragging.x, y: dragging.y});
      }
    }
  }

  handleClick(choice, {x, y}, event) {
    const actions = this.actionsFor(choice);
    console.log('actions', actions, {x,y})
    if (Object.keys(actions).length == 1) {
      this.gameAction(Object.keys(actions)[0], ...this.state.args, choice)
      event.stopPropagation()
    } else if (Object.keys(actions).length > 1) {
      this.setState({actions, ctxpos: {x, y}})
      event.stopPropagation()
    }
  }

  // return available actions association to this element (TODO does this need to go up through parent chain?)
  actionsFor(choice) {
    if (!this.state.data.allowedActions) return []
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt}]) => {
      let node = choice;
      while (node.length > 4) {
        if (choices && choices.includes(node)) {
          actions[action] = {choice: node, prompt}
        }
        node = node.slice(0, -3) + ')'
      }
      return actions;
    }, [])
  }

  // actions that have no element to click. returns { action: prompt,... }
  nonBoardActions() {
    if (!this.state.data.allowedActions) return []
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, {choices, prompt}]) => {
      if (!choices || choices.includes(choice => choice.slice(0,4) != '$el(')) {
        actions[action] = prompt
      }
      return actions;
    }, [])
  }

  isAllowedMove(node) {
    return this.state.data.allowedMove && node.matches(this.state.data.allowedMove);
  }

  isAllowedDrag(key) {
    return Object.values(this.state.data.allowedDrags).some(drag => drag.pieces.includes(`$el(${key})`))
  }

  allowedDragSpaces(key) {
    return Object.entries(this.state.data.allowedDrags).reduce((dragSpaces, [action, {pieces, spaces}]) => {
      if (pieces.includes(`$el(${key})`)) {
        spaces.forEach(space => dragSpaces[space.slice(4, -1)] = action)
      }
      return dragSpaces;
    }, {});
  }

  bindMethods(...methods) {
    return methods.reduce((list, method) => {list[method] = this[method].bind(this); return list}, {})
  }

  renderBoard(board) {
    return <div id="game">
      {this.renderGameElement(board.querySelector(`#player-mat:not([player="${this.player()}"])`), true)} {/* TODO assumed 2 player */}
      {this.renderGameElement(board.querySelector('#board'))}
      {this.renderGameElement(board.querySelector(`#player-mat[player="${this.player()}"]`))}
    </div>
  }

  renderGameElement(node, flipped, parentFlipped) {
    const attributes = Array.from(node.attributes).
                             filter(attr => attr.name !== 'class' && attr.name !== 'id').
                             reduce((attrs, attr) => Object.assign(attrs, { [attr.name]: isNaN(attr.value) ? attr.value : +attr.value }), {});

    const type = node.nodeName.toLowerCase();
    const key = branch(node).join('-')

    const props = {
      key,
      "data-key": key,
      ...attributes,
      onClick: e => {
        this.handleClick(`$el(${key})`, {x: e.pageX, y: e.pageY}, e);
      },
      onContextMenu: e => {
        e.preventDefault();
        this.handleClick(`$el(${key})`, {x: e.pageX, y: e.pageY}, e)
      },
      className: classNames(type, node.className, {
        flipped,
        "hilited": (
          (this.state.dragging && key==this.state.dragOver && this.allowedDragSpaces(this.state.dragging.key)[key]) ||
          (this.state.choices instanceof Array && this.state.choices.includes(`$el(${key})`))
        )
      }),
    };
    if (node.id) props.id = node.id;

    if (node.className == 'space' && this.state.dragging) {
      props.onMouseEnter=() => this.setState({dragOver: key});
      props.onMouseLeave=() => this.setState({dragOver: parentKey(key)});
    }

    let contents = node.id;
    if (this.components[type]) {
      contents = React.createElement(this.components[type], {...props, display: this.counterDisplays[props.display] || (v=>v), ...this.bindMethods('gameAction', 'get')});
    } else if (node.className !== 'piece' || node.childNodes.length) {
      if (node.nodeName == 'deck' && node.childNodes.length) {
        contents = Array.from(node.childNodes).slice(-2).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
      } else {
        contents = Array.from(node.childNodes).map(child => this.renderGameElement(child, false, flipped || parentFlipped));
      }
    }

    if (this.isAllowedMove(node) || this.isAllowedDrag(key)) {
      let position = this.state.positions[key];
      const x = attributes.x;
      const y = attributes.y;
      if (!position && !isNaN(x) && !isNaN(y) && !isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        position = {x, y};
      }
      return (
        <Draggable
          disabled={this.state.locks[key] && this.state.locks[key] !== this.props.userId}
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
    } else {
      return <div {...props}>{contents}</div>
    }
  }

  render() {
    const choice = this.state.args.slice(-1)
    const textChoices = this.state.choices instanceof Array &&
                        this.state.choices.filter(choice => choice.slice(0,4) != '$el(' && choice.toLowerCase().includes(this.state.filter.toLowerCase()));
    const nonBoardActions = this.nonBoardActions()
    return (
      <div>
      {this.state.prompt && <div id="messages">
        <div id="prompt">{this.state.prompt} <input placeholder="Filter" onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/></div>
        {textChoices && <div>
          {textChoices.map(choice => (
            <button key={choice} onClick={() => this.gameAction(this.state.action, ...this.state.args, choice)}>{JSON.parse(choice)}</button>
          ))}
        </div>}
        <button onClick={() => this.send('update')}>Cancel</button>
      </div>}

      {nonBoardActions && !this.state.prompt && <div id="messages">
        {Object.entries(nonBoardActions).map(([action, prompt]) => (
          <button key={action} onClick={() => this.gameAction(action)}>{prompt}</button>
        ))}
      </div>}

      {this.state.data.phase === 'playing' && this.state.data.doc && this.renderBoard(xmlToNode(this.state.data.doc))}

      {this.state.actions && this.state.ctxpos &&
       <ul
         id="context-menu"
         style={{top: this.state.ctxpos.y, left: this.state.ctxpos.x}}
         onMouseEnter={() => choice.slice(0,4) == '$el(' && this.setPieceAt(choice.slice(4,-1), {'data-ctx-hover': true})}
         onMouseLeave={() => {this.setState({actions: null, args:[]}); choice.slice(0,4) == '$el(' && this.setPieceAt(choice.slice(4,-1), {'data-ctx-hover': false})}}
       >
         {Object.entries(this.state.actions).map(([a, {choice, prompt}]) => (
           <li key={a} onClick={e => {this.gameAction(a, ...this.state.args, choice); e.stopPropagation()}}>{prompt}</li>
         ))}
       </ul>
      }
    </div>
    )
  }
}
