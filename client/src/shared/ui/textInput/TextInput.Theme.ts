import { ThemeComponent } from '../../config/ThemeComponent'

export const TextInputTheme: ThemeComponent = {
  styles: (theme) => ({
    input: {
      width: '100%',
      height: '42px',
      border: `1px solid ${theme.colors.gray[4]}`,
      borderRadius: '8px',
      background: theme.colors.gray[2],
      ':focus': {
        background: theme.colors.gray[3],
      },
    },
  }),
}
