import { RouterLink } from 'shared/lib'
import { Button, Center, Text } from 'shared/ui'

const ReactErrorPage = () => (
  <Center h="100%" w="100%" sx={{ flexDirection: 'column', gap: '24px' }}>
    <Text color="blue.5" fw={600} fz={30}>
      Что-то пошло не так...
    </Text>
    <Button component={RouterLink} to="/" reloadDocument>
      Назад
    </Button>
  </Center>
)

export default ReactErrorPage
