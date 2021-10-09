import { NextPage } from 'next'
import { Grid } from '@material-ui/core'
import { Button, Input, Layout, Text } from 'components'
import useDarkMode from 'hooks/use-dark-theme'
import { FiLock, FiAtSign } from 'react-icons/fi'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import api from 'services'
import Swal from 'sweetalert2'

interface FormData {
  email: string
  password: string
}

const Login: NextPage = () => {
  const { isDarkMode } = useDarkMode()
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

  const router = useRouter()

  const handleLoginClick: SubmitHandler<FormData> = ({ email, password }) => {
    console.log('LOGIN -->', { email, password })
    api
      .post('/login', {
        email,
        password
      })
      .then((response) => {
        console.log('RESPONSE -->', response)
        reset()
        if (response.status === 200) {
          router.push('/')
          Swal.fire('Success!', 'Logged in!', 'success')
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to login! <br> ${error}`, 'error')
      })
  }

  return (
    <Layout>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="mb-16"
      >
        <Grid item>
          <Text size="xlg">Login</Text>
        </Grid>
      </Grid>
      <Grid container direction="column" alignContent="center" spacing={1}>
        <Grid item>
          <Input
            placeholder="E-mail"
            type="email"
            error={formState.errors.email}
            icon={
              <FiAtSign
                color={isDarkMode ? 'var(--color-gray)' : 'var(--color-dark)'}
                fontSize="1.3em"
              />
            }
            {...register('email')}
          />
        </Grid>
        <Grid item>
          <Input
            placeholder="Password "
            type="password"
            error={formState.errors.password}
            icon={
              <FiLock
                color={isDarkMode ? 'var(--color-gray)' : 'var(--color-dark)'}
                fontSize="1.3em"
              />
            }
            {...register('password')}
          />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Login
