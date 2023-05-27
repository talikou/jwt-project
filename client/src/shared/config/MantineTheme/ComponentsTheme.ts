import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'
import { PaperTheme } from '../../ui/paper'
import { PasswordInputTheme } from '../../ui/passwordInput'
import { TextInputTheme } from '../../ui/textInput'

export const ThemedComponents: MantineThemeComponents = {
  TextInput: TextInputTheme,
  PasswordInput: PasswordInputTheme,
  Paper: PaperTheme,
}
