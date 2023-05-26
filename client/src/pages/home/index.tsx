import { useLoginStore } from 'widgets/login'
import { Center, Text } from 'shared/ui'

const HomePage = () => {
  const { user } = useLoginStore()
  return (
    <Center>
      <Text fz={20} fw={500}>
        Welcome {user.email} with {user.id} id
      </Text>
    </Center>
  )
}

export default HomePage
