import React from 'react';

export default ({id, get, display, gameAction}) => (
  <div onClick={() => console.log('counter click')}>
    <button onClick={() => gameAction('setCounter', `"${id}"`, get(id) - 1)}>-</button>
    {display(get(id))}
    <button onClick={() => gameAction('setCounter', `"${id}"`, get(id) + 1)}>+</button>
  </div>
);
