import { isEmail, useForm, UseFormReturnType } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { login } from 'shared/api/rest/routes'
import { useLoginStore } from '../store'

export interface FormValues {
  email: string
  password: string
}

export const useLoginForm = (): [
  UseFormReturnType<FormValues>,
  (values: ReturnType<(values: FormValues) => FormValues>) => void
] => {
  const { setUser } = useLoginStore()
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Неверная почта'),
      password: (val) =>
        val.length < 8 ? 'Пароль должен состоять не менее из 8 символов' : null,
    },
  })

  const onSubmit = (values: FormValues) => {
    const { email, password } = values
    login(email, password)
      .then(({ data }) => {
        localStorage.setItem('token', data.accessToken)
        setUser(data.user)
        navigate('/home')
      })
      .catch(() => {
        form.setFieldError('email', 'Неверный логин или пароль')
      })
  }

  return [form, onSubmit]
}
