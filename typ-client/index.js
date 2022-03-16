import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

export const render = ({pieces, counters}) => ReactDOM.render(
  <Page
    userId={window.userId}
    session={document.location.search.match(/[\?+]session=(\d+)/)[1]}
    components={pieces}
    counterDisplays={counters}
  />,
  document.getElementById('container')
)
