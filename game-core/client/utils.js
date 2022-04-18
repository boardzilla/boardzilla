let throttled = false;

export const throttle = fn => {
  if (throttled) return;
  fn.call();
  setTimeout(() => throttled = false, 20);
  throttled = true;
};

export const elementByKey = key => document.querySelector(`#game *[data-key="${key}"]`);

export const parentKey = key => key.split('-').slice(0, -1).join('-');

export const zoneKey = key => key.split('-').slice(0, 2).join('-');

export const choiceHasKey = choice => choice && choice.slice(0, 4) == '$el(';

export const keyFromChoice = choice => choice.slice(4, -1);

export const choiceFromKey = key => `$el(${key})`;

export const keyAtPoint = (x, y, condition) => keyFromEl(elAtPoint(x, y, condition));

export const elAtPoint = (x, y, condition) => findFirstEl(document.elementFromPoint(x, y), condition);

export const findFirstEl = (el, condition) => {
  if (!el || !el.parentNode) return;
  return el.dataset.key && (!condition || condition(el)) ? el : findFirstEl(el.parentNode, condition);
};

export const keyFromEl = el => (el && el.dataset ? el.dataset.key : (el));

export const zoneForPoint = (x, y) => {
  const el = elAtPoint(x, y, el => el.parentNode.id == 'game');
  if (el) return { el, x: x - el.getBoundingClientRect().x, y: y - el.getBoundingClientRect().y };
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

export const isFlipped = el => el.matches('.flipped, .flipped *');

export const pieceAt = (doc, key) => {
  const query = key[0] == '#' ? `game ${key}` : `game > ${key.split('-').map((index) => `*:nth-child(${index})`).join(' > ')}`;
  return doc.querySelector(query.replace(/#(\d)/g, '#\\3$1 '));
};
