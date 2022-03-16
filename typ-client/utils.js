let throttled = false;

export const throttle = fn => {
  if (throttled) return;
  fn.call();
  setTimeout(() => throttled = false, 20);
  throttled = true;
};

export const elementByKey = key => document.querySelector(`#game *[data-key="${key}"]`);

export const parentKey = key => key.slice(0,-2);

export const zoneForKey = key => key.split('-').slice(0,2).join('-');

export const zoneForEl = el => {
  while(el.parentNode && el.parentNode.id != "game") el = el.parentNode;
  return el.parentNode ? el : null;
};

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

export const keyFromEl = el => el.getAttribute('data-key');

export const isFlipped = el => el.matches('.flipped, .flipped *');
