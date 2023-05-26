import { Flex } from 'shared/ui'

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => (
  <Flex
    id="container"
    w="100%"
    h="100%"
    justify="center"
    sx={() => ({ flexGrow: 1 })}
  >
    {children}
  </Flex>
)





