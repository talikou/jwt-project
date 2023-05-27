import { RouterLink } from 'shared/lib'
import { Button, Paper, Text } from 'shared/ui'

export const RegistrationPaper = () => {
  return (
    <Paper
      p={30}
      radius={10}
      w="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        gap: '20px',
      }}
    >
      <Text>Нет аккаунта?</Text>
      <Button
        component={RouterLink}
        to="/registration"
        sx={(theme) => ({
          alignSelf: 'center',
          background: theme.colors.green[5],
          '&:hover': {
            background: theme.colors.green[6],
          },
        })}
      >
        Регистрация
      </Button>
    </Paper>
  )
}
