import React from 'react';
import { render } from 'game-core-client';
import { times } from 'game-core-client/utils.js';
import Counter from 'game-core-client/components/Counter.js';
import './style.scss';

const HealthCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="/a/isaac-four-souls/17447ccbcd76b617ac1e42d8f11ae052a5e237671815af188fee7d23c6c7c731-heart.png"/>)}/>;
const AttackCounter = props => <Counter {...props} display={n => times(n, i => <img key={i} src="/a/isaac-four-souls/a83c0d555f62a9d187ec5383e8488ca1dea727b6d63a3f998c0f93449e559618-sword.png"/>)}/>;
const CoinCounter = props => <Counter {...props} display={n => (
  <span className="coins">
    {times(n, i => <img key={i} style={{top: 5 * (1 - i)}} src="/a/isaac-four-souls/46440fdd3f043eb3c31e629bb4927df40ec63621230409b10115e8b8df29b74b-penny.png"/>)}
    {n}
  </span>
)}/>;

render({
  background: <div className="table"/>,
  pieces: {
    card: props => (
      <>
        <img src={`/a/isaac-four-souls/${props.id ? props.front : props.back}`} />
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
