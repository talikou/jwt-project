import { LoginPaper } from 'widgets/login-paper'
import { Registration } from 'widgets/registration'
import { Center } from 'shared/ui'

const RegistrationPage = () => {
  return (
    <Center w={400} sx={{ flexDirection: 'column', gap: '20px' }}>
      <Registration />
      <LoginPaper />
    </Center>
  )
}

export default RegistrationPage
