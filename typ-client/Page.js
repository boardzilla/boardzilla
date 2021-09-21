import React, { Component } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import ReconnectingWebSocket from 'reconnecting-websocket';
let throttled = false;
import style from './style.scss';

const DRAG_TOLERANCE = 2

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      input: '',
      locks: {},
      positions: {},
    };
    this.components = {};
  }

  componentDidMount() {
    this.webSocket=new ReconnectingWebSocket('ws://' + document.location.host + '/sessions/' + this.props.session);

    this.webSocket.onopen = () => {
      this.refreshInterval = setInterval(() => {
        console.log('interval refresh');
        this.send('refresh');
      }, 5000);
    };
    this.webSocket.onclose = () => {
      console.log('onclose')
      clearInterval(this.refreshInterval);
    }
    this.webSocket.onmessage = e => {
      const res = JSON.parse(e.data);
      console.log("Received", res);
      switch(res.type) {
        case "state":
          if (res.payload) this.setState({data: res.payload});
          break;
        case "updateLocks":
          this.setState({locks: res.payload});
          break;
        case "updateElement":
          this.setState(state => Object.assign({}, state, {positions: Object.assign({}, state.positions, {[res.payload.key]: {x: res.payload.x, y: res.payload.y}})}))
          break;
      }
    }
    console.log('initial refresh');
    this.send('refresh');
  }

  send(action, payload) {
    payload = payload || {}
    this.webSocket.send(JSON.stringify({type: action, payload}));
  }

  gameAction(action, key) {
    console.log('gameAction', action, key);
    this.setState({actions: null, choice: null})
    this.send(
      'action', {
        sequence: this.state.data.sequence,
        action: [action, key]
      },
    );
  }

  xmlToNode(xml) {
    return new DOMParser().parseFromString(xml, 'text/xml').firstChild
  }

  branch(node) {
    const branch = [];
    while (node.parentNode && node.parentNode.parentNode) {
      branch.unshift(Array.from(node.parentNode.childNodes).indexOf(node) + 1);
      node = node.parentNode;
    }
    return branch;
  }

  setPieceAt(key, attributes) {
    this.setState(state => {
      const xml = this.xmlToNode(this.state.data.board);
      const el = xml.querySelector(
        key.split('-').reduce((path, index) => `${path} > *:nth-child(${index})`, 'board')
      );
      for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
      }
      return Object.assign({}, state, {data: Object.assign({}, state.data, {board: xml.outerHTML})})
    })
  }

  throttle(fn) {
    if (throttled) return;
    fn.call();
    setTimeout(() => throttled = false, 20);
    throttled = true;
  }

  startDrag(key, x, y) {
    this.send('requestLock', {key});
    this.setState({dragging: {key, x, y}});
    // set piece to uncontrolled
    this.setState(state => Object.assign({}, state, {positions: Object.assign({}, state.positions, {[key]: undefined})}))
  }

  dragging(key, x, y) {
    this.throttle(() => this.send('drag', {key, x, y}));
  }

  stopDrag(key, x, y, event) {
    this.send('releaseLock', {key});
    if (this.state.dragging && this.state.dragging.key === key && Math.abs(this.state.dragging.x - x) + Math.abs(this.state.dragging.y - y) > DRAG_TOLERANCE) {
      this.send('action', {
        sequence: this.state.data.sequence,
        action: ['moveElement', `$el(${key})`, x, y]
      });
      // optimistically update the location to avoid flicker
      this.setPieceAt(key, {x, y});
    } else {
      const pos = event.changedTouches && event.changedTouches[0] || event // handle mouse touch coords
      this.handleClick(`$el(${key})`, {x:pos.clientX, y:pos.clientY})
    }
    this.setState({dragging: null});
  }

  handleClick(choice, {x, y}) {
    const actions = this.actionsFor(choice);
    console.log('actions', choice, actions, {x,y})
    if (actions.length == 1) {
      this.gameAction(actions[0], choice)
    } else if (actions.length > 1) {
      this.setState({choice, actions, ctxpos: {x, y}})
    }
  }

  // return available actions association to this element (TODO does this need to go up through parent chain?)
  actionsFor(choice) {
    if (!this.state.data.allowedActions) return []
    return Object.entries(this.state.data.allowedActions).reduce((actions, [action, choices]) => {
      if (choices.length > 1 && choices[choices.length - 1] instanceof Array) {
        choices = choices[choices.length - 1] // composite choice
      }
      if (choices.includes(choice)) {
        actions.push(action)
      }
      return actions;
    }, [])
  }
  
  renderGameElement(node) {
    const attributes = Array.from(node.attributes).
                             filter(attr => attr.name !== 'class' && attr.name !== 'id').
                             reduce((attrs, attr) => Object.assign(attrs, { [attr.name]: isNaN(attr.value) ? attr.value : +attr.value }), {});

    const type = node.nodeName.toLowerCase();
    const ElementClass = this.components[type] || 'div';
    const key = this.branch(node).join('-')

    const props = {
      key,
      ...attributes,
      onContextMenu: e => {
        e.preventDefault();
        this.handleClick(`$el(${key})`, {x: e.clientX, y: e.clientY})
      },
      className: classNames(type, node.className, { mine: attributes.player === this.props.player }),
    };
    if (node.id) props.id = node.id

    const contents = node.className === 'piece' ? node.id : Array.from(node.childNodes).map(child => this.renderGameElement(child));

    if (this.state.data.allowedMove && node.matches(this.state.data.allowedMove)) {
      let position = this.state.positions[key];
      const x = attributes.x;
      const y = attributes.y;
      if (!position && !isNaN(x) && !isNaN(y) && !isNaN(parseFloat(x)) && !isNaN(parseFloat(y))) {
        position = {x, y};
      }
      return (
        <Draggable
          disabled={this.state.locks[key] && this.state.locks[key] !== this.props.player}
          onStart={(e, data) => this.startDrag(key, data.x, data.y)}
          onDrag={(e, data) => this.dragging(key, data.x, data.y)}
          onStop={(e, data) => this.stopDrag(key, data.x, data.y, e)}
          key={key}
          position={position}
        >
          <div> {/* wrapper for draggable */}
            <ElementClass {...props}>{contents}</ElementClass>
          </div>
        </Draggable>
      );
    } else {
      return <ElementClass {...props} onClick={e => {this.handleClick(`$el(${key})`, {x:e.clientX, y:e.clientY}); return e.stopPropagation()}}>{contents}</ElementClass>
    }
  }

  render() {
    return (
      <div>
        {this.state.data.phase === 'playing' && this.state.data.board &&
          this.renderGameElement(this.xmlToNode(this.state.data.board))
        }

        {this.state.actions && this.state.ctxpos &&
          <ul id="context-menu" style={{top: this.state.ctxpos.y, left: this.state.ctxpos.x}}>
            {this.state.actions.map(a => <li key={a} onClick={() => this.gameAction(a, this.state.choice)}>{a}</li>)}
          </ul>
        }
      </div>
    )
  }
}
