import { ErrorBoundary } from 'react-error-boundary'
import ReactErrorPage from 'pages/react-error'

export const withErrorBoundary = (component: () => JSX.Element) => () =>
  <ErrorBoundary fallback={<ReactErrorPage />}>{component()}</ErrorBoundary>
