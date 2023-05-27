import compose from 'compose-function'
import { withErrorBoundary } from './withErrorBoundary'
import { withMantineProvider } from './withMantineProvider'
import { withRouter } from './withRouter'

export const withHocs = compose(
  withMantineProvider,
  withRouter,
  withErrorBoundary
)
