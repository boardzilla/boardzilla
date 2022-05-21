import React from 'react';
import { render } from 'game-core-client';
import { times } from 'game-core-client/utils.js';
import Counter from 'game-core-client/components/Counter.js';
import Die from 'game-core-client/components/Die.js';
import './style.scss';

const HealthCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="images/heart.png"/>)}/>;
const AttackCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="images/sword.png"/>)}/>;
const CoinCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} style={{top: 5 * (1 - i)}} src="images/penny.png"/>)}/>;

render({
  background: <div className="table"/>,
  pieces: {
    card: props => (
      <div>
        <img src={`images/cards/${props.id ? props.front : props.back}`} />
        {props.children}
      </div>
    )
  },
  components: {
    HealthCounter,
    AttackCounter,
    CoinCounter,
    Die,
  },
});
