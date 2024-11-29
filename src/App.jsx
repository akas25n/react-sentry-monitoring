import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as Sentry from "@sentry/react";

let release = `react-sentry-monitoring@1.0.0`

Sentry.init({
  dsn: "https://51d5cdfdcfcdd9effea58e7b8292ca44@o4508324719165440.ingest.de.sentry.io/4508360413282384",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  release: release,
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions for performance monitoring
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Sentry</h1>
      <button onClick={() => {throw new Error("This is fourth error!");}}>Break the world</button>
      <button onClick={() => {throw new Error("This is fifth error!");}}>Break the world 2nd Time</button>
    </>
  )
}

export default Sentry.withProfiler(App);
