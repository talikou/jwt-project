import { MantineProvider } from '@mantine/styles'
import { OurMantineTheme } from 'shared/config'

export const withMantineProvider = (component: () => JSX.Element) => () =>
  (
    <MantineProvider
      withCSSVariables
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          body: {
            maxWidth: '100vw',
            minHeight: '100vh',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
          },
          '#root': {
            display: 'flex',
            width: '100%',
            height: '100%',
            position: 'relative',
          },
          '::-webkit-scrollbar': {
            width: '14px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#DEE2E6',
            borderRadius: '999px',
            border: '4px solid rgba(0, 0, 0, 0)',
            backgroundClip: 'padding-box',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#D0EBFF',
            border: '4px solid rgba(0, 0, 0, 0)',
            backgroundClip: 'padding-box',
          },
        }),
        ...OurMantineTheme,
      }}
    >
      {component()}
    </MantineProvider>
  )
