import { NextPage } from 'next'
import { Button, Input, Text } from '../../../components'
import useDarkMode from '../../../hooks/use-dark-theme'
import { FiAtSign, FiLock, FiUser } from 'react-icons/fi'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { createUser } from '../../../services/users/create'

interface FormData {
  firstname: string
  lastname: string
  email: string
  password: string
  passwordConfirm: string
}

const Register: NextPage = () => {
  const { isDarkMode } = useDarkMode()
  const schema = yup.object({
    firstname: yup
      .string()
      .min(2, 'Minimun of 2 characters!')
      .required('Please your first name is required!'),
    lastname: yup
      .string()
      .min(2, 'Minimun of 2 characters!')
      .required('Please your last name is required!'),
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
    createUser({
      fullName: `${formValues.firstname} ${formValues.lastname}`,
      email: formValues.email,
      password: formValues.password,
      enabled: true
    })
      .then((response) => {
        if (response.status === 201) {
          reset()
          Swal.fire('Success!', 'Account was created!', 'success')
          router.push('/admin')
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to create user! <br> ${error}`, 'error')
      })
  }

  return (
    <div className="container rounded p-8 items-center sm:w-8/12 md:w-8/12 lg:w-4/12">
      <div className="flex flex-col gap-2 text-center ">
        <div className="mb-8">
          <Text size="xlg">Sign-up</Text>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 mt-6">
          <Input
            placeholder="First name *"
            type="text"
            error={formState.errors.firstname}
            icon={
              <FiUser
                color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
                fontSize="1.3em"
              />
            }
            {...register('firstname')}
          />

          <Input
            placeholder="Last name *"
            type="text"
            error={formState.errors.lastname}
            icon={
              <FiUser
                color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
                fontSize="1.3em"
              />
            }
            {...register('lastname')}
          />
        </div>
        <Input
          placeholder="E-mail *"
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
          placeholder="Password *"
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
        <Input
          placeholder="Confirm password *"
          type="password"
          error={formState.errors.passwordConfirm}
          icon={
            <FiLock
              color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
              fontSize="1.3em"
            />
          }
          {...register('passwordConfirm')}
        />
        <Button
          label="Register"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleOnSubmit)}
        />
        <Link href="/login">
          <Button label="Back" isLink />
        </Link>
      </div>
    </div>
  )
}

export default Register
