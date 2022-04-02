import React, {useState} from 'react';

export default ({id, number, rolls, faces, gameAction}) => {
  const [override, setOverride] = useState();
  const [rolls2, setRolls2] = useState(rolls);

  const roll = () => {
    const rolling = setInterval(() => setOverride(Math.floor(Math.random() * faces + 1)), 100);
    setTimeout(() => {clearInterval(rolling); setOverride(null)}, 1000);
    gameAction('rollDie', `"${id}"`);
  };

  const rollD6 = () => {
    gameAction('rollDie', `"${id}"`);
    setRolls2(rolls + 1)
  };

  const spin = Math.max(rolls2, rolls) % 2 ? 'up' : 'down';

  if (faces == 6) {
    return (
      <ol className="d6" data-spin={spin} onClick={rollD6} onTouchEnd={rollD6}>
      {[1,2,3,4,5,6].map(n => (
        <li key={n} className="die-face" data-face={n}>
        {Array.from(Array(n)).map(f => <span key={f} className="dot"/>)}
        </li>
      ))}
      </ol>
    );
  }

  return <button onClick={roll} onTouchEnd={roll} style={override && {transform: `rotate(${Math.random() * 360}deg)`}} >{override || number}</button>
};
