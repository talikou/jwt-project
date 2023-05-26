import { Paper, PasswordInput, TextInput, Button } from 'shared/ui'
import { useLoginForm } from './lib'

export const Login = () => {
  const [form, onSubmit] = useLoginForm()

  return (
    <Paper
      p={30}
      radius={10}
      component="form"
      onSubmit={form.onSubmit((values) => onSubmit(values))}
      sx={{
        gap: '20px',
        width: '400px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TextInput {...form.getInputProps('email')} />
      <PasswordInput {...form.getInputProps('password')} />

      <Button type="submit" w="85px" sx={{ alignSelf: 'center' }}>
        Войти
      </Button>
    </Paper>
  )
}
