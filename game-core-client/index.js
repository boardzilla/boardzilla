import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

export const render = ({pieces, counters, background}) => {
  return ReactDOM.render(
    <Page
      userId={window.userId}
      session={document.location.href.match(/play\/(\d+)\//)[1]}
      components={pieces}
      counterDisplays={counters}
      background={background}
    />,
    document.getElementById('container')
  )
}
