import React, {useState} from 'react';

export default ({id, display, value, min, max, gameAction}) => {
  const [override, setOverride] = useState();
  const set = n => {
    let newValue = Math.max(min, (override === undefined ? value : override) + n);
    if (max > 0 && newValue > max) newValue = max;
    setOverride(newValue); // very optimistic update. can't detect if any error yet
    gameAction('setCounter', `"${id}"`, newValue);
  };
  return (
    <div>
      <button onClick={e => {set(-1); e.stopPropagation()}} onTouchEnd={() => set(-1)}>-</button>
      {display(override === undefined ? value : override)}
      <button onClick={e => {set(1); e.stopPropagation()}} onTouchEnd={() => set(1)}>+</button>
    </div>
  );
}
