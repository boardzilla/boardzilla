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
    hp: n => '♥'.repeat(n)
  },
});


// polar-star -> booster
// anima sola -> the revenant
