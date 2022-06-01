import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import React from 'react'
import ReactDOM from 'react-dom'
import Page from './Page'

Sentry.init({
  dsn: "https://c149a1d2a5464aae80d74fddcb7f1f1a@o1206738.ingest.sentry.io/6340273",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

export const render = ({pieces, components, background, debug}) => {
  ReactDOM.render(
    <Page
      userId={window.userId}
      session={window.sessionId}
      pieces={pieces}
      components={components}
      background={background}
      debug={debug}
    />,
    document.getElementById('container')
  )
};
