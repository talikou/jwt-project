import { Login } from 'widgets/login'
import { RegistrationPaper } from 'widgets/registration-paper'
import { Center } from 'shared/ui'

const LoginPage = () => (
  <Center w={400} sx={{ flexDirection: 'column', gap: '20px' }}>
    <Login />
    <RegistrationPaper />
  </Center>
)

export default LoginPage
