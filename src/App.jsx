import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://51d5cdfdcfcdd9effea58e7b8292ca44@o4508324719165440.ingest.de.sentry.io/4508360413282384",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Sentry</h1>
      <button onClick={() => {throw new Error("This is the first error!");}}>Break the world</button>
    </>
  )
}

export default App
