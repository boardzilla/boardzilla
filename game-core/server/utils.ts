import type GameElement from './element';

// usage times(max, n => ...) from 1 to max
export const times = (n: number, fn: (n: number) => any) => Array.from(Array(n)).map((_, i) => fn(i + 1));
export const range = (min: number, max: number, step = 1) => times(Math.floor((max - min) / step) + 1, i => (i - 1) * step + min);
export const asyncTimes = async (n: number, fn: (n: number) => Promise<any>) => { for (let i = 0; i < n; i++) await fn(i); };

export const isSpaceNode = (node: Node) => node && node.nodeName === 'space';
export const isPieceNode = (node: Node) => node && !isSpaceNode(node);
export const sumBy = (items: GameElement[], fn: string | ((e: GameElement) => number)) => (
  items.reduce((total, c) => (
    total + (typeof fn === 'function' ? fn(c) : c.getNumber(fn))
  ), 0)
);

export const elementClasses = new Map();

