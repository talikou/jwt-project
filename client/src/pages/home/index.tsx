import { LogoutButton } from 'features/logout-button'
import { useUserStore } from 'entities/user'
import { useAllUsersStore } from 'entities/users'
import { fetchUsers } from 'shared/api/rest/routes'
import { IUser } from 'shared/types'
import { Button, Center, Flex, List, Stack, Text } from 'shared/ui'

const HomePage = () => {
  const { user } = useUserStore()
  const { allUsers, setAllUsers } = useAllUsersStore()

  const getAllUsersHandler = () => {
    fetchUsers()
      .then(({ data }) => setAllUsers(data))
      .catch(() => setAllUsers([] as IUser[]))
  }

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
      <Button onClick={getAllUsersHandler}>Получить пользователей</Button>
      <List>
        {allUsers.map((person) => (
          <List.Item key={person.email}>{person.email}</List.Item>
        ))}
      </List>
    </Stack>
  )
}

export default HomePage
