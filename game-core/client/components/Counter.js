import React, {useState} from 'react';

export default function Counter({value, min, max, moves, action, steps, display}) {
  const [override, setOverride] = useState();
  const [moves2, setMoves2] = useState(moves);

  const set = n => {
    let newValue = Math.max(min, (moves2 > moves ? override : value) + n);
    if (max > 0 && newValue > max) newValue = max;
    setOverride(newValue); // very optimistic update. can't detect if any error yet
    setMoves2(Math.max(moves, moves2) + 1);
    action('set', newValue);
  };

  display = display || (v => v);

  return (
    <div>
      {steps.filter(s => s < 0).map(step => (
        <button key={step} onClick={e => {set(step); e.stopPropagation()}}>-{step < -1 && ` ${-step}`}</button>
      ))}
      {display(moves2 > moves ? override : value)}
      {steps.filter(s => s > 0).map(step => (
        <button key={step} onClick={e => {set(step); e.stopPropagation()}}>+{step > 1 && ` ${step}`}</button>
      ))}
    </div>
  );
}
