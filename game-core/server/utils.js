const { customAlphabet } = require('nanoid/non-secure');

// usage times(max, n => ...) from 1 to max
const times = (n, fn) => Array.from(Array(n)).map((_, i) => fn(i + 1));
const range = (min, max) => times(max - min + 1, i => i + min - 1);
const asyncTimes = async (n, fn) => { for (let i = 0; i < n; i++) await fn(i); };

const isSpaceNode = node => node && node.nodeName === 'space';
const isPieceNode = node => node && !isSpaceNode(node);

const elementClasses = {};

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

module.exports = { times, range, asyncTimes, isSpaceNode, isPieceNode, elementClasses, nanoid };
