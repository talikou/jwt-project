import { RouterLink } from 'shared/lib'
import { Button, Paper, Text } from 'shared/ui'

export const LoginPaper = () => {
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
      <Text>Есть аккаунт?</Text>
      <Button
        component={RouterLink}
        to="/"
        sx={{
          alignSelf: 'center',
        }}
      >
        Войти
      </Button>
    </Paper>
  )
}
