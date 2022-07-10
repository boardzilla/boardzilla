import uuid from 'uuid-random';
import type GameDocument from './document';
import type GameInterface from './interface';
import type Space from './space';
import type Piece from './piece';
import type {ElementLookup} from './types.d';

import { times, isPieceNode, elementClasses } from './utils';

export default class GameElement {
  node: ElementLookup;
  document: GameDocument;
  game: GameInterface;
  id: string;
  type: string;

  constructor({ node, game, document }: { node: Element, game: GameInterface, document?: GameDocument }, attrs?: Record<string, any>) {
    this.node = Object.assign(node, { gameElement: this });
    if (document) this.document = document;
    this.game = game;
    this.id = node.id; // TODO reserved id's? game, board...
    this.type = node.nodeName.toLowerCase();
    if (attrs) this.set(attrs);
  }

  assignUUID() {
    this.set({ uuid: uuid() });
  }

  enhanceQuery(q: string) {
    return q.replace(/\.mine/g, `[player="${this.game.currentPlayerPosition}"]`)
      .replace(/=(['"]?)([^\]'"]+)\1/g, (_m, _, a) => `="${escape(a)}"`);
  }

  /**
   * is attribute on this element
   */
  has(name: string):boolean {
    return this.node.getAttribute(name) !== null;
  }

  /**
   * get string attribute on this element
   */
  get(name: string):string {
    const attr = this.node.getAttribute(name);
    // if (!attr) return undefined;
    if (attr === null) throw Error(`No attribute '${name}' found on ${this.node}`);
    return unescape(attr);
  }

  /**
   * get numerical attribute on this element
   */
  getNumber(name: string):number {
    return Number(this.get(name));
  }

  getObject(name: string):object {
    return JSON.parse(this.get(name));
  }

  /**
   * set attributes on this element
   * set({ attr1: newValue, attr2: newValue,... })
   * set(attr1, newValue)
   */
  set(name: (string | Record<string, any>), value?: any) { /* eslint-disable-line @typescript-eslint/no-explicit-any */
    if (typeof name === 'object') {
      Object.entries(name).forEach(([n, v]) => this.set(n, v));
    } else {
      if (value === undefined) {
        this.set(name, true);
      } else {
        value = typeof value === 'object' ? JSON.stringify(value) : value;
        this.node.setAttribute(name, escape(value)); // TODO reserved attributes? class, className, id, style  & special attributes: player, layout, component, x,y,top,left,right,bottom...?
      }
    }
  }

  unset(...names: string[]) {
    names.forEach(name => this.node.removeAttribute(name));
  }

  toggle(name: string) {
    this.set(name, !this.get(name));
  }

  increment(name: string, value: number) {
    this.set(name, this.get(name) + value);
  }

  // human readable name of this element from the perspective of player
  name(player: number, hidden: boolean) {
    const noun = this.id && !hidden ? this.get('name') || this.id : this.type;
    let pronoun = '';
    if (!this.id || hidden) {
      if (this.matches('.mine *')) {
        pronoun = this.game.currentPlayerPosition === player ? 'my' : 'their';
      } else {
        pronoun = 'a';
      }
    }
    return `${pronoun} ${noun}`.trim();
  }

  findNode(q = '*') {
    if (q === null) return null;
    return this.node.querySelector(this.enhanceQuery(q)) as ElementLookup;
  }

  findNodes(q = '*') {
    if (q === null) return [];
    return Array.from(this.node.querySelectorAll(this.enhanceQuery(q))) as ElementLookup[];
  }

  empty(q: string) {
    const el = this.find(q);
    return !el || el.node.children.length === 0;
  }

  count(q: string) {
    return this.findNodes(q).length;
  }

  contains(q: string) {
    return !!this.findNode(q);
  }

  find(q: string | GameElement) {
    if (q instanceof GameElement) return q;
    const node = this.findNode(q);
    if (!node) throw Error(`Could not find element '${q}'`);
    return node.gameElement;
  }

  findAll(q: string | GameElement | GameElement[]) {
    if (q instanceof GameElement) return [q];
    if (q instanceof Array) return q;
    return Array.from(this.findNodes(q)).map(node => node.gameElement);
  }

  piece(q: string | Piece): Piece | undefined {
    if (q instanceof GameElement) return q;
    const p = this.pieces(q)[0];
    return p;
  }

  pieces(q: string | Piece[]): Piece[] {
    if (q instanceof Array) return q;
    return this.findAll(q).filter(el => isPieceNode(el.node)) as Piece[];
  }

  player(): number | null {
    return this.getNumber('player') || (this.node.parentNode && this.parent().player());
  }

  parent() {
    return (this.node?.parentNode as ElementLookup)?.gameElement;
  }

  matches(q: string) {
    return this.node.matches(this.enhanceQuery(q));
  }

  hasParent(el: GameElement) {
    let { node } = this;
    while (node.parentNode) {
      node = node.parentNode as ElementLookup;
      if (node === el.node) return true;
    }
    return false;
  }

  // return full path to element, e.g. "2-1-3"
  branch() {
    const branches = [];
    let { node } = this;
    while (node.parentNode && node.parentNode.parentNode) {
      branches.unshift(Array.prototype.indexOf.call(node.parentNode.childNodes, node) + 1);
      node = node.parentNode as ElementLookup;
    }
    return `$el(${branches.join('-')})`;
  }

  boardNode() {
    return this.document.node.children[0] as ElementLookup;
  }

  board(): Space {
    return this.boardNode().gameElement! as Space;
  }

  pileNode() {
    return this.document.node.children[1] as ElementLookup;
  }

  pile(): Space {
    return this.pileNode().gameElement! as Space;
  }

  place(pieces: string | GameElement[], to: string | GameElement) {
    return this.pile().move(pieces, to);
  }

  add(pieces: string | GameElement[], num?: number) {
    return this.move(this.pile().pieces(pieces), this, num);
  }

  clear(pieces: string | GameElement[], num?: number) {
    return this.move(pieces, this.pile(), num);
  }

  destroy() {
    if (this.node.parentNode) this.node.parentNode.removeChild(this.node);
  }

  destroyContents(pieces: string | GameElement | GameElement[]) {
    this.findAll(pieces).forEach(p => p.destroy());
  }

  addPiece(name: string, type: string, attrs: Record<string, any>) {
    return this.addGameElement(elementClasses.get('Piece'), name, type, 'piece', attrs);
  }

  addPieces(num: number, name: string, type: string, attrs: Record<string, any>) {
    return times(num, () => this.addPiece(name, type, attrs));
  }

  addInteractivePiece(pieceClass: typeof GameElement, attrs: Record<string, any> = {}) {
    if (!pieceClass || !pieceClass.name) throw Error(`No interactive piece class found: ${pieceClass}`);
    const name = pieceClass.name.toLowerCase();
    return this.addGameElement(pieceClass, `#${this.game.registerId(name)}`, name, 'interactive-piece', attrs);
  }

  addGameElement(elementClass: typeof GameElement, id: string, type: string, className: string, attrs: Record<string, any> = {}) {
    console.log(attrs, elementClass, elementClasses);
    const el = this.document.xmlDoc.createElement(type);
    if (id[0] !== '#') throw Error(`id ${id} must start with #`);
    el.id = id.slice(1);
    el.setAttribute('class', `${attrs.class || ''} ${className}`.trim());
    delete attrs.class;
    this.node.appendChild(el);
    const gameElement = new elementClass({ node: el, game: this.game, document: this.document }, attrs);
    if (isPieceNode(el) && this.get('layout') !== 'stack') gameElement.assignUUID();
    return gameElement;
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces: string | GameElement[], to: string | GameElement, num?: number, position = 0) {
    const space = this.document.find(to);
    if (!space) throw new Error(`No space found "${to}"`);
    let movables = this.pieces(pieces);
    if (num === 0) return [];
    if (num !== undefined) movables = movables.slice(-num);
    if (!movables.length) return [];
    if (position < 0) {
      position = -1 - position;
    } else {
      position = space.node.childElementCount - position;
    }
    position = Math.min(Math.max(position, 0), space.node.childElementCount);
    let outOfSplay: GameElement | false = false;
    for (const piece of movables) {
      piece.unset('x', 'y', 'left', 'top', 'right', 'bottom');
      if (!outOfSplay && piece.parent().get('layout') === 'splay') outOfSplay = piece.parent();
      const previousId = piece.serialize();
      if (isPieceNode(piece.node) && !piece.hasParent(space) && space.get('layout') !== 'stack') piece.assignUUID();
      space.node.insertBefore(piece.node, space.node.children[position]);
      if (space.get('layout') === 'grid' && piece.get('cell') === undefined) {
        piece.set({ cell: space.findOpenCell() });
      }
      this.game.changeset.push([previousId, piece.serialize()]);
    }
    this.game.processAfterMoves(movables);
    if (space.get('layout') === 'splay') {
      for (const child of space.node.children) {
        const nextId = (<ElementLookup>child).gameElement.serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      }
    }
    if (outOfSplay !== false && outOfSplay.node !== space.node) {
      for (const child of outOfSplay.node.children) {
        const nextId = (<ElementLookup>child).gameElement.serialize();
        if (!this.game.changeset.find(cs => cs[1] === nextId)) this.game.changeset.push([nextId, nextId]);
      }
    }
    return movables;
  }

  // move pieces to a space, at start of list (on bottom). use num to limit the number moved
  moveToBottom(pieces: string | GameElement[], to: string | GameElement, num?: number) {
    this.move(pieces, to, num, -1);
  }

  moveToTop() {
    if (this.node.parentNode) this.node.parentNode.appendChild(this.node);
  }

  findOpenCell() {
    const cells = (this.getNumber('columns') || 1) * (this.getNumber('rows') || 1);
    let cell = 0;
    while (this.contains(`[cell="${cell}"]`)) cell += 1;
    return cell >= cells ? 0 : cell;
  }

  // return string representation, e.g. "$el(2-1-3)"
  serialize() {
    if (this.get('uuid')) return `$uuid(${this.get('uuid')})`;
    return this.branch();
  }

  toString() {
    return `${this.type}#${this.id}`;
  }
}
