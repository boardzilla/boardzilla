import React from 'react';
import { render } from 'game-core-client';
import { times } from 'game-core-client/utils.js';
import Counter from 'game-core-client/components/Counter.js';
import './style.scss';
import images from './images.json';

for (const imageSrc of images) {
  const i = new Image();
  i.src = imageSrc;
}

const HealthCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="images/heart.png"/>)}/>;
const AttackCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="images/sword.png"/>)}/>;
const CoinCounter = props => <Counter {...props} display={n => (
  <span className="coins">
    {times(n, i => <img key={i} style={{top: 5 * (1 - i)}} src="images/penny.png"/>)}
    {n}
  </span>
)}/>;

render({
  background: <div className="table"/>,
  pieces: {
    card: props => (
      <div>
        <img srcset={`images/cards/${props.id ? props.front : props.back} 1x`} src={`images/cards/${props.frontlow || props.back}`} />
        {props.children}
      </div>
    )
  },
  components: {
    HealthCounter,
    AttackCounter,
    CoinCounter,
  },
});
