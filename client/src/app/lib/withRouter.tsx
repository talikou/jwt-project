import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingPage from 'pages/loading'

export const withRouter = (component: () => JSX.Element) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>{component()}</Suspense>
    </BrowserRouter>
  )
