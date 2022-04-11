import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

export const render = ({pieces, counters, background}) => ReactDOM.render(
  <Page
    userId={window.userId}
    session={document.location.href.match(/play\/(\d+)\//)[1]}
    pieces={pieces}
    counterDisplays={counters}
    background={background}
  />,
  document.getElementById('container')
)
