import axios from 'axios'
import { AuthResponse } from 'shared/types'

export const refresh = () => {
  return axios.get<AuthResponse>('/api/refresh', { withCredentials: true })
}

const $api = axios.create({
  withCredentials: true,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await refresh()
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {
        console.log('Не авторизован')
      }
    }
    throw error
  }
)

export default $api
