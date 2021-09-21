const Immutable = require('immutable');

function fromJSOrdered(js) {
  if (typeof js !== 'object' || js === null) { return js; }
  return Array.isArray(js) ?
         Immutable.Seq(js).map(fromJSOrdered).toList() :
         Immutable.Seq(js).map(fromJSOrdered).toOrderedMap();
}

const times = n => Array.from(Array(n)).map((_, i) => i);

function serialize(value) {
  if (value && value.serialize) {
    return value.serialize();
  }
  return `literal(${JSON.stringify(value)})`;
}

function deserialize(value, ctx = {}) {
  if (value instanceof Array) return value.map(v => deserialize(v, ctx));
  const match = value.match(/^(\w*)\((.*)\)$/);
  if (!match) throw Error(`deserialize(${value}) failed`);
  const [className, json] = match.slice(1);
  const args = JSON.parse(json);
  return ctx[className] ? ctx[className](args) : args;
}

module.exports = {
  fromJSOrdered,
  times,
  serialize,
  deserialize,
}
