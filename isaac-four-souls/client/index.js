import React from 'react'
import { render } from 'typ-client';
import './style.scss';

render({
  pieces: {
    card: props => (
      <img src={`images/${props.type}/${props.id || 'back'}.png`} />
    ),
  },
  counters: {
    hp: n => '♥'.repeat(n),
    coin: n => <span className="coins">{
      Array.from(Array(n)).map((_, i) => <img key={i} src="images/penny.png" className="penny" style={{top: (i*-4)+"px"}}/>)
    }{n}</span>
  },
});


// polar-star -> booster
// anima sola -> the revenant
