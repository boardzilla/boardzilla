let throttled = false;

export const throttle = fn => {
  if (throttled) return;
  fn.call();
  setTimeout(() => throttled = false, 20);
  throttled = true;
};

export const elementByKey = key => document.querySelector(`#game *[data-key="${key}"]`);

export const parentKey = key => key.split('-').slice(0, -1).join('-');

export const zoneForKey = key => key.split('-').slice(0, 2).join('-');

export const choiceHasKey = choice => choice && choice.slice(0,4) == '$el(';

export const keyFromChoice = choice => choice.slice(4,-1);

export const choiceFromKey = key => `$el(${key})`;

export const zoneForEl = el => {
  while(el.parentNode && el.parentNode.id != "game") el = el.parentNode;
  return el.parentNode ? el : null;
};

export const elForPoint = (x, y) => keyFromEl(document.elementFromPoint(x, y));

export const zoneForPoint = (x, y) => {
  let el = zoneForEl(document.elementFromPoint(x, y));
  if (el) return {el, x: x - el.getBoundingClientRect().x, y: y - el.getBoundingClientRect().y};
};

export const xmlToNode = xml => new DOMParser().parseFromString(xml, 'text/xml').firstChild;

export const branch = node => {
  const branch = [];
  while (node.parentNode && node.parentNode.parentNode) {
    branch.unshift(Array.from(node.parentNode.childNodes).indexOf(node) + 1);
    node = node.parentNode;
  }
  return branch;
};

export const keyFromEl = el => el && (el.dataset.key || el.parentNode && keyFromEl(el.parentNode));

export const isFlipped = el => el.matches('.flipped, .flipped *');

export const pieceAt = (doc, key) => doc.querySelector('game > ' + key.split('-').map(index => `*:nth-child(${index})`).join(' > '));
