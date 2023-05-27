import { LogoutButton } from 'features/logout-button'
import { useUserStore } from 'entities/user'
import { Center, Flex, Stack, Text } from 'shared/ui'

const HomePage = () => {
  const { user } = useUserStore()
  return (
    <Stack w="100%" sx={{ gap: '30px' }}>
      <Flex justify="flex-end">
        <LogoutButton />
      </Flex>
      <Center>
        <Text fz={20} fw={500}>
          Welcome {user.email} with id {user.id}
        </Text>
      </Center>
    </Stack>
  )
}

export default HomePage
