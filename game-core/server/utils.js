const { customAlphabet } = require('nanoid/non-secure');

// usage times(max, n => ...) from 1 to max
const times = (n, fn) => Array.from(Array(n)).map((_, i) => fn(i + 1));
const range = (min, max, step = 1) => times(Math.floor((max - min) / step) + 1, i => (i - 1) * step + min);
const asyncTimes = async (n, fn) => { for (let i = 0; i < n; i++) await fn(i); };

const isSpaceNode = node => node && node.nodeName === 'space';
const isPieceNode = node => node && !isSpaceNode(node);
const sumBy = (items, fn) => items.reduce((total, c) => total + (typeof fn === 'function' ? fn(c) : c.get(fn)), 0);

const elementClasses = {};

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

module.exports = { times, range, asyncTimes, isSpaceNode, isPieceNode, sumBy, elementClasses, nanoid };
