import { AxiosResponse } from 'axios'
import { AuthResponse, IUser } from 'shared/types'
import $api from './index'

export function login(
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> {
  return $api.post('/api/login', { email, password })
}

export function registration(
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> {
  return $api.post('/registration', { email, password })
}

export function logout(): Promise<void> {
  return $api.post('/logout')
}

export function fetchUsers(): Promise<AxiosResponse<IUser[]>> {
  return $api.get('/users')
}
