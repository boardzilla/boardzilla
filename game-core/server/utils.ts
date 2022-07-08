// usage times(max, n => ...) from 1 to max
export const times = (n, fn) => Array.from(Array(n)).map((_, i) => fn(i + 1));
export const range = (min, max, step = 1) => times(Math.floor((max - min) / step) + 1, i => (i - 1) * step + min);
export const asyncTimes = async (n, fn) => { for (let i = 0; i < n; i++) await fn(i); };

export const isSpaceNode = node => node && node.nodeName === 'space';
export const isPieceNode = node => node && !isSpaceNode(node);
export const sumBy = (items, fn) => items.reduce((total, c) => total + (typeof fn === 'function' ? fn(c) : c.get(fn)), 0);

export const elementClasses = new Map();
