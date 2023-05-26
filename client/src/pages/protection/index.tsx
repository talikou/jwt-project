import { ReactNode, useEffect, useState } from 'react'
import LoadingPage from 'pages/loading'
import { useNavigate } from 'react-router-dom'

interface IProtectedRoute {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const [loading, setLoading] = useState<boolean>(false)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  if (!loading) return children

  return <LoadingPage />
}

export default ProtectedRoute
