import React from 'react';

export default ({id, get, display, gameAction, setVariable}) => {
  const set = n => {
    n += get(id);
    setVariable(id, n);
    gameAction('setCounter', `"${id}"`, n);
  };
  return (
    <div>
      <button onClick={e => {set(-1); e.stopPropagation()}} onTouchEnd={() => set(-1)}>-</button>
      {display(get(id))}
      <button onClick={e => {set(1); e.stopPropagation()}} onTouchEnd={() => set(1)}>+</button>
    </div>
  );
}
