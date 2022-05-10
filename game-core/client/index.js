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

export const render = ({pieces, counters, background}) => {
  ReactDOM.render(
    <Page
      spectator={window.spectator}
      userId={window.userId}
      session={document.location.href.match(/play\/(\d+)\//)[1]}
      pieces={pieces}
      counterDisplays={counters}
      background={background}
    />,
    document.getElementById('container')
  )
};
