import { NextPage } from 'next'
import { Button, Input, Text } from 'components'
import useDarkMode from 'hooks/use-dark-theme'
import { FiLock, FiAtSign } from 'react-icons/fi'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import api from 'services'
import Swal from 'sweetalert2'
import { Base } from 'layouts'

interface FormData {
  email: string
  password: string
}

const Login: NextPage = () => {
  const { isDarkMode } = useDarkMode()
  const router = useRouter()

  const schema = yup.object({
    email: yup
      .string()
      .email('Please, insert a valid e-mail!')
      .required('Please, provide a e-mail!'),
    password: yup
      .string()
      .min(4, 'Minimum of 4 characters!')
      .required('Please, password is a required field!')
  })

  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleLoginClick: SubmitHandler<FormData> = ({ email, password }) => {
    api
      .post('/login', {
        email,
        password
      })
      .then((response) => {
        const { data, status } = response
        reset()
        if (status === 201) {
          router.push('/')
          Swal.fire('Success!', 'Logged in!', 'success')
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to login! <br> ${error}`, 'error')
      })
  }

  return (
    <Base>
      <div className="container rounded p-8 items-center sm:w-6/12 md:w-6/12 lg:w-4/12 flex xl:w-3/12 flex-col gap-2 text-center">
        <div className="mb-8">
          <Text size="xlg">Sign-in</Text>
        </div>
        <Input
          placeholder="E-mail"
          type="email"
          error={formState.errors.email}
          icon={
            <FiAtSign
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
            />
          }
          {...register('email')}
        />
        <Input
          placeholder="Password "
          type="password"
          error={formState.errors.password}
          icon={
            <FiLock
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
            />
          }
          {...register('password')}
        />
        <Button
          label="Login"
          onClick={handleSubmit(handleLoginClick)}
          disabled={!formState.isValid}
        />
        <Button
          label="Create account"
          isLink
          onClick={() => router.push('/register')}
        />
      </div>
    </Base>
  )
}

export default Login
