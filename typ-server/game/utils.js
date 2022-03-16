// usage times(max, n => ...) from 1 to max
const times = (n, fn) => Array.from(Array(n)).map((_, i) => fn(i + 1));
const range = (min, max) => times(max - min + 1, i=>i + min - 1)

module.exports = { times, range };
