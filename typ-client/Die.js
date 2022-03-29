import React, {useState} from 'react';

export default ({id, get, faces, gameAction}) => {
  const [override, setOverride] = useState();

  const roll = () => {
    const rolling = setInterval(() => setOverride(Math.floor(Math.random() * faces + 1)), 50);
    setTimeout(() => {clearInterval(rolling); setOverride(null)}, 1000);
      gameAction('rollDie', `"${id}"`);
    };

  return <button onClick={roll} onTouchEnd={roll}>{override || get(id)}</button>
};
