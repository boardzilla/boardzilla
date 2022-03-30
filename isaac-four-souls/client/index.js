import React from 'react'
import { render } from 'typ-client';
import './style.scss';

render({
  background: <div className="table"/>,
  pieces: {
    card: props => <div>
      <img src={`images/${props.type}/${props.id || 'back'}.png`} />
      {props.children}
    </div>,
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
