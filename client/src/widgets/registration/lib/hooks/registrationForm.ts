import { isEmail, useForm, UseFormReturnType } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from 'entities/user'
import { registration } from 'shared/api/rest/routes'

export interface FormValues {
  email: string
  password: string
}

export const useRegistrationForm = (): [
  UseFormReturnType<FormValues>,
  (values: ReturnType<(values: FormValues) => FormValues>) => void
] => {
  const { setUser } = useUserStore()
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
    registration(email, password)
      .then(({ data }) => {
        localStorage.setItem('token', data.accessToken)
        setUser(data.user)
        navigate('/home')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return [form, onSubmit]
}
