let throttled = false;

export const throttle = fn => {
  if (throttled) return;
  fn.call();
  setTimeout(() => throttled = false, 20);
  throttled = true;
};

export const gameDom = () => document.querySelector('#game');

export const elByChoice = c => gameDom().querySelector(`[data-key="${c}"]`);

export const choiceByEl = el => el && el.dataset && el.dataset.key;

export const parentEl = el => el && el.dataset && el.dataset.parent;

export const parentChoice = c => parentEl(elByChoice(c));

export const zoneChoice = c => nearestChoiceByEl(elByChoice(c), el => el.parentNode.id == 'game');

export const isEl = choice => choice && (choice.slice(0, 6) == '$uuid(' || choice.slice(0, 4) == '$el(');

export const choiceAtPoint = (x, y, condition) => choiceByEl(elAtPoint(x, y, condition));

export const elAtPoint = (x, y, condition) => nearestChoiceByEl(document.elementFromPoint(x, y), condition);

export const nearestChoiceByEl = (el, condition) => {
  if (!el || !el.parentNode) return;
  return choiceByEl(el) && (!condition || condition(el)) ? el : nearestChoiceByEl(el.parentNode, condition);
};

export const zoneInfoForPoint = (x, y) => {
  const el = elAtPoint(x, y, el => el.parentNode.id == 'game');
  if (el) return { el, x: x - el.getBoundingClientRect().x, y: y - el.getBoundingClientRect().y };
};

export const xmlToNode = xml => new DOMParser().parseFromString(xml, 'text/xml').firstChild;

export const choiceForXmlNode = node => {
  if (node.attributes.uuid) return `$uuid(${node.attributes.uuid.value})`;
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
  const query = `game > ${choice.slice(4,-1).split('-').map((index) => `*:nth-child(${index})`).join(' > ')}`;
  return doc.querySelector(query.replace(/#(\d)/g, '#\\3$1 '));
};
