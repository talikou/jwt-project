import { ThemeComponent } from '../../config/ThemeComponent'

export const PasswordInputTheme: ThemeComponent = {
  styles: (theme) => ({
    input: {
      width: '100%',

      height: '42px',
      border: `1px solid ${theme.colors.gray[4]}`,
      borderRadius: '8px',
      background: theme.colors.gray[0],
      ':focus': {
        background: theme.colors.gray[1],
      },
    },
    innerInput: {
      height: '100%',
      width: '100%',
      border: 'none',
    },
  }),
}
