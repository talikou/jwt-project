import axios from 'axios'
import { AuthResponse } from 'shared/types'

export const refresh = (token: string) => {
  return axios.post<AuthResponse>(
    '/api/refresh',
    { refresh: token },
    { withCredentials: true }
  )
}

const $api = axios.create({
  withCredentials: true,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default $api
