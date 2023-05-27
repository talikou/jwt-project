import { useNavigate } from 'react-router-dom'
import { useUserStore } from 'entities/user'
import { logout } from 'shared/api/rest/routes'
import { IUser } from 'shared/types'
import { Button } from 'shared/ui'

export const LogoutButton = () => {
  const { setUser } = useUserStore()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
      .then(() => {
        localStorage.removeItem('token')
        setUser({} as IUser)
        navigate('/')
      })
      .catch((e) => console.log(e))
  }

  return <Button onClick={logoutHandler}>Выйти</Button>
}
