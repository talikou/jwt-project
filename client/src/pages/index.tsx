import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'pages/layout'

const LoginPage = lazy(() => import('./login'))
const HomePage = lazy(() => import('./home'))

export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}
