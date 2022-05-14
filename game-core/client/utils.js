let throttled = false;

export const throttle = fn => {
  if (throttled) return;
  fn.call();
  setTimeout(() => throttled = false, 20);
  throttled = true;
};

export const gameDom = () => document.querySelector('#game-dom');

export const elByChoice = c => gameDom().querySelector(`[data-key="${c}"]`);

export const choiceByEl = el => el && el.dataset && el.dataset.key;

export const parentEl = el => el && el.dataset && el.dataset.parent;

export const parentChoice = c => parentEl(elByChoice(c));

export const zoneChoice = c => nearestChoiceByEl(elByChoice(c), el => el.parentNode.id == 'game-dom');

export const isEl = choice => choice && choice.slice && (choice.slice(0, 6) == '$uuid(' || choice.slice(0, 4) == '$el(');

export const choiceAtPoint = (x, y, condition) => choiceByEl(elAtPoint(x, y, condition));

export const elAtPoint = (x, y, condition) => nearestChoiceByEl(document.elementFromPoint(x, y), condition);

export const nearestChoiceByEl = (el, condition) => {
  if (!el || !el.parentNode) return;
  return choiceByEl(el) && (!condition || condition(el)) ? el : nearestChoiceByEl(el.parentNode, condition);
};

export const zoneInfoForPoint = (x, y) => {
  const el = elAtPoint(x, y, el => el.parentNode.id == 'game-dom');
  if (el) return { el, x: x - el.getBoundingClientRect().x, y: y - el.getBoundingClientRect().y };
};

export const xmlToNode = xml => new DOMParser().parseFromString(xml, 'text/xml').firstChild;

export const choiceForXmlNode = node => {
  if (node.classList.contains('player-mat')) return `$p(${node.getAttribute('player')})`;
  if (node.getAttribute('uuid')) return `$uuid(${node.getAttribute('uuid')})`;
  const branch = [];
  while (node.parentNode && node.parentNode.parentNode) {
    branch.unshift(Array.from(node.parentNode.childNodes).indexOf(node) + 1);
    node = node.parentNode;
  }
  return branch.length ? `$el(${branch.join('-')})` : null;
};

export const isFlipped = el => el.matches('.flipped, .flipped *');

export const xmlNodeByChoice = (doc, choice) => {
  if (choice.slice(0, 6) === '$uuid(') return doc.querySelector(`[uuid="${choice.slice(6, -1)}"]`);
  if (choice.slice(0, 3) === '$p(') return doc.querySelector(`.player-mat[player="${choice.slice(3, -1)}"]`);
  const query = `game > ${choice.slice(4,-1).split('-').map((index) => `*:nth-child(${index})`).join(' > ')}`;
  return doc.querySelector(query.replace(/#(\d)/g, '#\\3$1 '));
};

export const currentGridPosition = (el, parent, x, y, scale, interColumn=false, flipped=false) => {
  const tc = window.getComputedStyle(parent).gridTemplateColumns.split(' ');
  const tr = window.getComputedStyle(parent).gridTemplateRows.split(' ');
  let { left, top } = parent.getBoundingClientRect();
  const width = parseFloat(tc[0].slice(0, -2), 10) * scale;
  const height = parseFloat(tr[0].slice(0, -2), 10) * scale;
  if (flipped) {
    left -= width - parseFloat(tc[tc.length - 1].slice(0, -2), 10) * scale
    top -= height - parseFloat(tr[tr.length - 1].slice(0, -2), 10) * scale
  }
  const columns = tc.length;
  const rows = tr.length;
  let col = Math.min(Math.max(Math[interColumn ? 'ceil' : 'round']((x - left) / width), 0), columns - (interColumn ? 0 : 1));
  if ((parent.getAttribute('direction') === 'rtl') ^ flipped) col = columns - col - (interColumn ? 0 : 1);
  let row = Math.min(Math.max(Math.round((y - top) / height), 0), rows - 1);
  if (flipped) row = rows - row - 1;
  return col + row * columns;
}

export const deserialize = value => {
  if (value instanceof Array) return value.map(deserialize);
  if (value && value.slice && (value.slice(0, 4) === '$el(' || value.slice(0, 6) === '$uuid(' || value.slice(0, 3) === '$p(')) {
    return value;
  }
  return JSON.parse(value);
};
