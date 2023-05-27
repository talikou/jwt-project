import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'pages/layout'
import ProtectedRoute from 'pages/protection'

const LoginPage = lazy(() => import('./login'))
const RegistrationPage = lazy(() => import('./registration'))
const HomePage = lazy(() => import('./home'))

export default function Routing() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  )
}
