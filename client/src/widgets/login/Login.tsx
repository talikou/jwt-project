import { Paper, PasswordInput, TextInput, Button } from 'shared/ui'
import { useLoginForm } from './lib'

export const Login = () => {
  const [form, onSubmit] = useLoginForm()

  return (
    <Paper
      w="100%"
      p={30}
      radius={10}
      component="form"
      onSubmit={form.onSubmit((values) => onSubmit(values))}
      sx={{
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TextInput label="Логин" {...form.getInputProps('email')} />
      <PasswordInput label="Пароль" {...form.getInputProps('password')} />

      <Button type="submit" w="85px" sx={{ alignSelf: 'center' }}>
        Войти
      </Button>
    </Paper>
  )
}
