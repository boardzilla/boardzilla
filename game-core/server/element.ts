import uuid from 'uuid-random';
import type Space from './space';
import type Piece from './piece';
import type {ElementLookup, ElementAttributes, ElementClass, Context, Attribute} from './types.d';

import { times, escape } from './utils';

// TODO reserved attributes? class, className, id, style  & special attributes: player, layout, component, x,y,top,left,right,bottom...?
export default class GameElement {
  id: string;
  elementType: 'none' | 'piece-type' | 'space-type' = 'none';

  player?: number;
  uuid?: string;
  x?: number;
  y?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  columns?: number;
  rows?: number;
  layout?: string;
  zoom?: number;
  minWidth?: number;
  minHeight?: number;

  static serializable: string[] = [
    'player',
    'uuid',
    'x',
    'y',
    'left',
    'right',
    'top',
    'bottom',
    'columns',
    'rows',
    'layout',
    'zoom',
    'minWidth',
    'minHeight',
  ];

  constructor(
    public ctx: Context,
    protected attrs: Record<string, Attribute> = {}
  ) {
    Object.assign(ctx.node, { gameElement: this });
    this.id = ctx.node.id;
  }

  static ctx: Context;

  protected assignUUID() {
    this.uuid = uuid();
  }

  private enhanceQuery(q: string) {
    return q.replace(/\.mine/g, `[player="${this.ctx.game.currentPlayerPosition}"]`).
      replace(/\$me/g, `"${this.ctx.game.currentPlayerPosition}"`);
//      .replace(/=(['"]?)([^\]'"]+)\1/g, (_m, _, a) => `="${escape(a)}"`); // please no
  }

  // human readable name of this element from the perspective of player
  descriptiveName(player: number, hidden: boolean) {
    if (!hidden) return this.attrs.name || this.id;
    const noun = this.constructor.name;
    let pronoun = '';
    if (this.matches('.mine *')) {
      pronoun = this.ctx.game.currentPlayerPosition === player ? 'my' : 'their';
    } else {
      pronoun = 'a';
    }
    return `${pronoun} ${noun}`;
  }

  findNode(q = '*') {
    return this.ctx.node.querySelector(this.enhanceQuery(q)) as ElementLookup;
  }

  findNodes(q = '*') {
    return Array.from(this.ctx.node.querySelectorAll(this.enhanceQuery(q))) as ElementLookup[];
  }

  empty() {
    return this.ctx.node.children.length === 0;
  }

  count(q: string) {
    return this.findNodes(q).length;
  }

  contains(q: string) {
    return !!this.findNode(q);
  }

  find<T extends GameElement>(className: { new (...a: any[]): T }, q = '*') {
    const node = this.findNode(q);
    if (!node) throw Error(`Could not find element '${q}'`);
    if (!(node.gameElement instanceof className)) throw Error(`query '${q}' returned a ${node.gameElement.constructor.name} instead of a ${className.name}.`)
    return node.gameElement;
  }

  findAll<T extends GameElement>(className: { new (...a: any[]): T }, q = '*'): T[] {
    return Array.from(this.findNodes(q))
      .filter(node => node.gameElement instanceof className)
      .map(node => node.gameElement) as T[];
  }

  static find<T extends GameElement>(this: ElementClass<T>, q: string): T {
    return this.ctx.document.find(this, q);
  }

  static findAll<T extends GameElement>(this: ElementClass<T>, q: string): T[] {
    return this.ctx.document.findAll(this, q);
  }

  static highest<T extends GameElement>(this: ElementClass<T>, q: string, fn: ((e: GameElement) => number) | string): T {
    return this.ctx.document.highest(q, fn) as T;
  }

  static lowest<T extends GameElement>(this: ElementClass<T>, q: string, fn: ((e: GameElement) => number) | string): T {
    return this.ctx.document.lowest(q, fn) as T;
  }

  static max(q: string, fn: ((e: GameElement) => number) | string): number {
    const val = typeof fn === 'function' ? fn : (el: GameElement) => el.attrs.fn;
    return Math.max(...this.forEach(q, val) as number[]);
  }

  static min(q: string, fn: ((e: GameElement) => number) | string): number {
    const val = typeof fn === 'function' ? fn : (el: GameElement) => el.attrs.fn;
    return Math.min(...this.forEach(q, val) as number[]);
  }

  static forEach<T extends GameElement, F>(this: ElementClass<T>, q: string, fn: (e: T) => F): F[] {
    return this.ctx.document.findAll(this, q).map(fn);
  }

  owner(): number | undefined {
    return this.player || this.parent()?.player;
  }

  parent() {
    if (!this.ctx.node.parentNode) return;
    return (this.ctx.node.parentNode as ElementLookup).gameElement;
  }

  matches(q: string) {
    return this.ctx.node.matches(this.enhanceQuery(q));
  }

  hasParent(el: GameElement) {
    let { node } = this.ctx;
    while (node.parentNode) {
      node = node.parentNode as ElementLookup;
      if (node === el.ctx.node) return true;
    }
    return false;
  }

  // return full path to element, e.g. "2-1-3"
  branch() {
    const branches = [];
    let { node } = this.ctx;
    while (node.parentNode?.parentNode) {
      branches.unshift(Array.prototype.indexOf.call(node.parentNode.childNodes, node) + 1); // eslint-disable-line @typescript-eslint/restrict-plus-operands
      ['a'].indexOf('b') + 1;
      node = node.parentNode as ElementLookup;
    }
    return `$el(${branches.join('-')})`;
  }

  boardNode() {
    return this.ctx.document.ctx.node.children[0] as ElementLookup;
  }

  board(): Space {
    return this.boardNode().gameElement as Space;
  }

  pileNode() {
    return this.ctx.document.ctx.node.children[1] as ElementLookup;
  }

  pile(): Space {
    return this.pileNode().gameElement as Space;
  }

  addFromPile(pieces: string, num?: number): Piece[] {
    return this.move(this.pile().findAll(GameElement, pieces) as Piece[], this, num);
  }

  clearIntoPile(pieces: string, num?: number): Piece[] {
    return this.move(pieces, this.pile(), num);
  }

  destroy() {
    this.ctx.node.parentNode?.removeChild(this.ctx.node);
  }

  destroyContents(pieces: string) {
    this.findAll(GameElement, pieces).forEach(p => p.destroy());
  }

  create<T extends GameElement>(className: ElementClass<T>, id: string, attrs?: ElementAttributes<T>): T {
    const node: ElementLookup = this.ctx.document.xmlDoc.createElement(className.name) as any;
    if (id[0] !== '#') throw Error(`id ${id} must start with #`);
    node.id = id.slice(1);
    this.ctx.node.appendChild(node);

    const ctx = { ...this.ctx, node };
    const el = new className(ctx, attrs || {});
    node.className = el.elementType + (attrs?.className ? ` ${attrs.className}` : '');

    let allAttrs: string[] = [];
    let thisClass = className;

    do {
      if (thisClass.serializable) allAttrs = Array.from(new Set([ ...allAttrs, ...thisClass.serializable ]));
      thisClass = Object.getPrototypeOf(thisClass);
    } while (thisClass.name === 'GameElement' || thisClass.prototype instanceof GameElement);

    for (const attr of allAttrs) {
      el.setAttribute(
        attr,
        !attrs || !(attr in attrs) ?
          // @ts-ignore
          el[attr] : attrs[attr]
      );
      Object.defineProperty(el, attr, {
        get: function() { return this.attrs[attr]; },
        set: v => {el.setAttribute(attr, v)},
      })
    }

    if (el.elementType === 'piece-type' && this.layout !== 'stack') el.assignUUID();
    return el;
  }

  createMany<T extends GameElement>(className: ElementClass<T>, num: number, id: string, attrs: ElementAttributes<T>): T[] {
    return times(num, () => this.create(className, id, attrs));
  }

  set(attrs: Record<string, Attribute>) {
    // @ts-ignore
    Object.entries(attrs).forEach(([attr, value]) => this[attr] = value);
  }

  get(attr: string) {
    return this.attrs[attr];
  }

  private setAttributes(attrs: Record<string, Attribute>) {
    Object.entries(attrs).forEach(([k, v]) => {
      if (!(k in this.attrs)) throw Error(`Attribute '${attrs}' does not exist on ${this.constructor.name}`);
      this.setAttribute(k, v);
    });
  }

  private setAttribute(attr: string, value: Attribute) {
    if (value === undefined || value === null || value === false) {
      this.ctx.node.removeAttribute(attr);
    } else {
      value = typeof value === 'object' ? JSON.stringify(value) : value;
      this.ctx.node.setAttribute(attr, escape(String(value)));
    }
    this.attrs[attr] = value;
  }

  // move pieces to a space, at end of list (on top). use num to limit the number moved. use position to control child placement (same as slice)
  move(pieces: string | Piece[], to: string | GameElement, num?: number, position = 0): Piece[] {
    const space = typeof to === 'string' ? this.ctx.document.find(GameElement, to) : to;
    let movables = typeof pieces === 'string' ? this.findAll(GameElement, pieces) as Piece[]: pieces;
    if (num !== undefined) {
      if (num <= 0) return [];
      movables = movables.slice(-num);
    }
    if (!movables.length) return [];

    if (position < 0) {
      position = -1 - position;
    } else {
      position = space.ctx.node.childElementCount - position;
    }
    position = Math.min(Math.max(position, 0), space.ctx.node.childElementCount);

    let outOfSplay: GameElement | false = false;
    for (const piece of movables) {
      piece.setAttributes({
        x: undefined,
        y: undefined,
      });
      if (!outOfSplay && piece.parent()?.layout === 'splay') outOfSplay = piece.parent()!;
      const previousId = piece.serialize();
      if (!piece.hasParent(space) && space.layout !== 'stack') {
        piece.assignUUID();
      } else {
        piece.uuid = undefined;
      }
      space.ctx.node.insertBefore(piece.ctx.node, space.ctx.node.children[position]);
      if (space.layout === 'grid' && piece.attrs.cell === undefined) {
        piece.cell = space.findOpenCell();
      }
      this.ctx.game.changeset.push([previousId, piece.serialize()]);
    }
    this.ctx.game.processAfterMoves(movables);
    if (space.layout === 'splay') {
      for (const child of space.ctx.node.children) {
        const nextId = (<ElementLookup>child).gameElement.serialize();
        if (!this.ctx.game.changeset.find(cs => cs[1] === nextId)) this.ctx.game.changeset.push([nextId, nextId]);
      }
    }
    if (outOfSplay !== false && outOfSplay.ctx.node !== space.ctx.node) {
      for (const child of outOfSplay.ctx.node.children) {
        const nextId = (<ElementLookup>child).gameElement.serialize();
        if (!this.ctx.game.changeset.find(cs => cs[1] === nextId)) this.ctx.game.changeset.push([nextId, nextId]);
      }
    }
    return movables;
  }

  // move pieces to a space, at start of list (on bottom). use num to limit the number moved
  moveToBottom(pieces: string | Piece[], to: string | GameElement, num?: number) {
    this.move(pieces, to, num, -1);
  }

  private findOpenCell() {
    const cells = (this.columns || 1) * (this.rows || 1);
    let cell = 0;
    while (this.contains(`[cell="${cell}"]`)) cell += 1;
    return cell >= cells ? 0 : cell;
  }

  static sort(set: GameElement[], fn: ((e: GameElement) => number | string) | string) {
    const val = typeof fn === 'function' ? fn : (el: GameElement) => el.attrs.fn;
    const comp = (a: GameElement, b: GameElement) => {
      const aVal = val(a) || '';
      const bVal = val(b) || '';
      return (aVal > bVal ? 1 : (aVal < bVal ? -1 : 0));
    };
    return set.sort(comp);
  }

  // return string representation, e.g. "$el(2-1-3)"
  serialize() {
    if (this.uuid) return `$uuid(${this.uuid})`;
    return this.branch();
  }

  toString() {
    return `${this.constructor.name}#${this.id}`;
  }
}
