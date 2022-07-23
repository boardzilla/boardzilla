import React from 'react';
import { render } from 'game-core-client';
import { times } from 'game-core-client/utils.js';
import Counter from 'game-core-client/components/Counter.js';
import assets from './assets.json';
import './style.scss';

const HealthCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src={assets['heart.png']}/>)}/>;
const AttackCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src={assets['sword.png']}/>)}/>;
const CoinCounter = props => <Counter {...props} display={n => (
  <span className="coins">
    {times(n, i => <img key={i} style={{top: 5 * (1 - i)}} src={assets['penny.png']}/>)}
    {n}
  </span>
)}/>;

render({
  background: <div className="table"/>,
  pieces: {
    Card: props => (
      <>
        <img src={assets[`cards/${props.id ? props.front : props.back}`]} />
        {props.children}
      </>
    )
  },
  components: {
    HealthCounter,
    AttackCounter,
    CoinCounter,
  },
});
