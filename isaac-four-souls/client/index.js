import React from 'react'
import { render } from 'game-core-client';
import './style.scss';

render({
  background: <div className="table"/>,
  pieces: {
    card: props => <div>
      <img src={`images/cards/${props.id ? props.front : props.back}`} />
      {props.children}
    </div>,
  },
  counters: {
    hp: n => Array.from(Array(n)).map((_, i) => <img key={i} src="images/heart.png"/>),
    attack: n => Array.from(Array(n)).map((_, i) => <img key={i} src="images/sword.png"/>),
    coin: n => <span className="coins">{
      Array.from(Array(n)).map((_, i) => <img key={i} src="images/penny.png" className="penny" style={{top: (i*-5)+"px"}}/>)
    }{n}</span>
  },
});

// polar-star -> booster
// anima sola -> the revenant
