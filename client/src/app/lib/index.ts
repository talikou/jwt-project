import compose from 'compose-function'
import { withMantineProvider } from './withMantineProvider'
import { withRouter } from './withRouter'

export const withHocs = compose(withRouter, withMantineProvider)
