import React, {useState} from 'react';

export default function Counter({id, display, value, min, max, moves, gameAction}) {
  const [override, setOverride] = useState();
  const [moves2, setMoves2] = useState(moves);

  const set = n => {
    let newValue = Math.max(min, (moves2 > moves ? override : value) + n);
    if (max > 0 && newValue > max) newValue = max;
    setOverride(newValue); // very optimistic update. can't detect if any error yet
    setMoves2(Math.max(moves, moves2) + 1);
    gameAction('setCounter', `"${id}"`, newValue);
  };

  return (
    <div>
      <button onClick={e => {set(-1); e.stopPropagation()}}>-</button>
      {display(moves2 > moves ? override : value)}
      <button onClick={e => {set(1); e.stopPropagation()}}>+</button>
    </div>
  );
}
