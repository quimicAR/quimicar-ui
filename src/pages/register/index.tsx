import { NextPage } from 'next'
import { Grid } from '@material-ui/core'
import { Button, Input, Layout, Text } from 'components'
import useDarkMode from 'hooks/use-dark-theme'
import { FiAtSign, FiLock } from 'react-icons/fi'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from 'services'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

interface FormData {
  email: string
  password: string
  passwordConfirm: string
}

const Register: NextPage = () => {
  const { isDarkMode } = useDarkMode()
  const schema = yup.object({
    email: yup
      .string()
      .email('Please, insert a valid e-mail!')
      .required('Please, provide a e-mail!'),
    password: yup
      .string()
      .min(4, 'Minimum of 4 characters!')
      .required('Please, password is a required field!'),
    passwordConfirm: yup
      .string()
      .min(4, 'Minimum of 4 characters!')
      .oneOf([yup.ref('password'), null], 'Passwords must match!')
      .required('Please, the password confirmation is a required field!')
  })
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  const handleOnSubmit: SubmitHandler<FormData> = (formValues) => {
    api
      .post('/register', {
        email: formValues.email,
        password: formValues.password,
        enabled: true
      })
      .then((response) => {
        if (response.status === 201) {
          reset()
          Swal.fire('Success!', 'Account was created!', 'success')
          router.push('/login')
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to create user! <br> ${error}`, 'error')
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
          <Text size="xlg">Register</Text>
        </Grid>
      </Grid>
      <Grid container direction="column" alignContent="center" spacing={1}>
        <Grid item>
          <Input
            placeholder="E-mail *"
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
            placeholder="Password *"
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
          <Input
            placeholder="Confirm password *"
            type="password"
            error={formState.errors.passwordConfirm}
            icon={
              <FiLock
                color={isDarkMode ? 'var(--color-gray)' : 'var(--color-dark)'}
                fontSize="1.3em"
              />
            }
            {...register('passwordConfirm')}
          />
        </Grid>
        <Grid item>
          <Button
            label="Register"
            disabled={!formState.isValid}
            onClick={handleSubmit(handleOnSubmit)}
          />
          <Link href="/login">
            <Button label="Back" isLink />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Register
