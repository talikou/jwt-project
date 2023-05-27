import { Button, Paper, PasswordInput, TextInput } from 'shared/ui'
import { useRegistrationForm } from './lib'

export const Registration = () => {
  const [form, onSubmit] = useRegistrationForm()

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
      <Button
        type="submit"
        w="200px"
        sx={(theme) => ({
          alignSelf: 'center',
          background: theme.colors.green[5],
          '&:hover': {
            background: theme.colors.green[6],
          },
        })}
      >
        Зарегистрироваться
      </Button>
    </Paper>
  )
}
