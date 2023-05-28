import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line boundaries/element-types
import LoadingPage from 'pages/loading'
import { useUserStore } from 'entities/user'
import { refresh } from 'shared/api/rest'
import { IUser } from 'shared/types'

interface IProtectedRoute {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { setUser } = useUserStore()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('token')
      navigate('/')
      setUser({} as IUser)
    } else if (!loading) {
      refresh()
        .then(({ data }) => {
          localStorage.setItem('token', data.accessToken)
          setUser(data.user)
        })
        .catch(() => {
          localStorage.removeItem('token')
          navigate('/')
        })
        .finally(() => setLoading(true))
    }
  }, [token, loading, navigate, setLoading])

  if (loading) return children

  return <LoadingPage />
}

export default ProtectedRoute
