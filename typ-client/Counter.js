import React from 'react';

export default ({id, get, display, gameAction}) => {
  const set = n => gameAction('setCounter', `"${id}"`, get(id) + n);
  return (
    <div>
      <button onClick={() => set(-1)} onTouchEnd={() => set(-1)}>-</button>
      {display(get(id))}
      <button onClick={() => set(1)} onTouchEnd={() => set(1)}>+</button>
    </div>
  );
}
