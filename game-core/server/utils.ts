import type GameElement from './element';

// usage times(max, n => ...) from 1 to max
export const times = (n: number, fn: (n: number) => any) => Array.from(Array(n)).map((_, i) => fn(i + 1));
export const range = (min: number, max: number, step = 1) => times(Math.floor((max - min) / step) + 1, i => (i - 1) * step + min);
export const asyncTimes = async (n: number, fn: (n: number) => Promise<any>) => { for (let i = 0; i < n; i++) await fn(i); };

export const sumBy = (items: GameElement[], fn: string | ((e: GameElement) => number)) => (
  items.reduce((total, e) => (
    total + (typeof fn === 'function' ? fn(e) : e.get(fn) as number)
  ), 0)
);

export const escape = (s: string) => s.replace(/[<>&'"]/g, c => `&${({ '<': 'lt', '>': 'gt', '&': 'amp', '\'': 'apos', '"': 'quot' })[c]};`);
