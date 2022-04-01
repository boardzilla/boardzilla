import React, {useState} from 'react';

export default ({id, display, value, gameAction}) => {
  const [override, setOverride] = useState();
  const set = n => {
    n += value;
    setOverride(n); // very optimistic update. can't detect if any error yet
    gameAction('setCounter', `"${id}"`, n);
  };
  return (
    <div>
      <button onClick={e => {set(-1); e.stopPropagation()}} onTouchEnd={() => set(-1)}>-</button>
      {display(override || value)}
      <button onClick={e => {set(1); e.stopPropagation()}} onTouchEnd={() => set(1)}>+</button>
    </div>
  );
}
