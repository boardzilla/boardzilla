import React from 'react'
import { Page, render } from 'typ-client';
import style from './style.scss';

class TicTacToePage extends Page {
  constructor(props) {
    super(props);
    this.components = { card }
  }
}

const card = props => (
  <div {...props}><img src={"images/" + (props.id || 'loot-back') + ".png"} /></div>
);

render(TicTacToePage);
