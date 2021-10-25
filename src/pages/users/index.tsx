import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { Input } from 'components'
import Modal from 'components/Modal/modal.component'
import useDarkMode from 'hooks/use-dark-theme'
import { Base, List } from 'layouts'
import { IUser } from 'models/user'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser
} from 'services/users'
import Swal from 'sweetalert2'
import * as yup from 'yup'

export const getStaticProps: GetStaticProps = async () => {
  const usersProps = await getAllUsers({})

  return { props: { usersProps: usersProps.data } }
}

const headers = [
  {
    id: 'fullName',
    title: 'Name'
  },
  {
    id: 'email',
    title: 'E-mail'
  },
  {
    id: 'role',
    title: 'Role'
  },
  {
    id: 'enabled',
    title: 'Status'
  },
  {
    id: 'actions',
    title: 'Actions'
  }
]
interface FormData {
  fullName: string
  email: string
  password: string
  passwordConfirm: string
  role: string
  enabled: boolean
}

const Users: NextPage<{ usersProps: IUser[] }> = ({ usersProps }) => {
  const { isDarkMode } = useDarkMode()
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [users, setUsers] = useState<IUser[]>(usersProps)
  const [modalType, setModalType] = useState<'edit' | 'new'>()
  const [userId, setUserId] = useState('')

  const schema = yup.object({
    fullName: yup
      .string()
      .min(5, 'Minimun of 5 characters!')
      .required('Your full name is required!'),
    email: yup
      .string()
      .email('Please, insert a valid e-mail!')
      .required('Please, provide your e-mail!'),
    password: yup
      .string()
      .min(4, 'Minimum of 4 characters!')
      .required('Please, password is required!'),
    passwordConfirm: yup
      .string()
      .min(4, 'Minimum of 4 characters!')
      .oneOf([yup.ref('password'), null], 'Passwords must match!')
      .required('Please, the password confirmation is required!')
  })

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<FormData>({
      mode: 'onChange',
      resolver: yupResolver(schema)
    })

  const handleSearchUsers = async () => {
    let result
    if (search.length > 0) {
      result = await getAllUsers({ email: search, role: search })
    } else result = await getAllUsers({})

    setUsers(result.data)
  }

  const handleSave: SubmitHandler<FormData> = ({
    email,
    enabled,
    fullName,
    role,
    password
  }) => {
    switch (modalType) {
      case 'new':
        createUser({
          fullName,
          email,
          enabled,
          role,
          password
        })
          .then((response) => {
            if (response.status === 201) {
              Swal.fire('Success!', 'Account was created!', 'success')
              setOpenModal(!openModal)
              reset()
              handleSearchUsers()
            }
          })
          .catch((error: AxiosError) => {
            Swal.fire(
              'Error',
              `Error to create user! <br> ${error.message}`,
              'error'
            )
          })
        break
      case 'edit':
        updateUser({
          id: userId,
          fullName,
          email,
          enabled,
          role,
          password
        })
          .then((response) => {
            if (response.status === 201) {
              Swal.fire('Success!', 'Account was created!', 'success')
              setOpenModal(!openModal)
              reset()
              handleSearchUsers()
            }
          })
          .catch((error: AxiosError) => {
            Swal.fire(
              'Error',
              `Error to edit user! <br> ${error.message}`,
              'error'
            )
          })
        break
      default:
        break
    }
  }

  const handleDelete = (id: string) =>
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser({ id })
          .then((response) => {
            if (response.status === 200) {
              reset()
              Swal.fire('Success!', 'User deleted!', 'success')
              handleSearchUsers()
            }
          })
          .catch((error) => {
            Swal.fire(
              'Error',
              `Error to delete this user! <br> ${error}`,
              'error'
            )
          })
      }
    })

  const handleEdit = (id: string) => {
    setUserId(id)
    getUserById({ id })
      .then((response) => {
        if (response.status === 200) {
          setOpenModal(true)

          const { email, enabled, fullName, password, role } = response.data

          setValue('email', email)
          setValue('enabled', enabled)
          setValue('fullName', fullName)
          setValue('password', password)
          setValue('passwordConfirm', password)
          setValue('role', role.name)
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to update this user! <br> ${error}`, 'error')
      })
  }

  return (
    <>
      <Base>
        <List
          title="Users"
          headers={headers}
          onChangeSearch={(search) => setSearch(search)}
          handleSearch={handleSearchUsers}
          handleCreate={() => {
            setModalType('new')
            setOpenModal(true)
          }}
          rows={users.map((user) => ({
            ...user,
            enabled: () => (
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.enabled
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {user.enabled ? 'Active' : 'Disabled'}
              </span>
            ),
            role: () => user.role.name,
            actions: () => (
              <div className="flex gap-4  justify-end">
                <button
                  onClick={() => {
                    setModalType('edit')
                    handleEdit(user.id)
                  }}
                >
                  <FiEdit2
                    className={`${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                  />
                </button>

                <button onClick={() => handleDelete(user.id)}>
                  <FiTrash
                    className={`${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                  />
                </button>
              </div>
            )
          }))}
        />
      </Base>

      {openModal && (
        <Modal
          buttonCancel={{
            handleCancel: () => {
              reset()
              setOpenModal(false)
            }
          }}
          buttonSave={{
            handleSave: handleSubmit(handleSave)
          }}
          title="Create user"
        >
          <div className="flex flex-col gap-5">
            <Input
              placeholder="Full name"
              type="text"
              label="Name"
              error={formState.errors.fullName}
              {...register('fullName')}
            />

            <Input
              placeholder="E-mail"
              type="text"
              label="E-mail"
              error={formState.errors.email}
              {...register('email')}
            />
            <Input
              label="Password"
              placeholder="Password *"
              type="password"
              error={formState.errors.password}
              {...register('password')}
            />
            <Input
              label="Password confirm"
              placeholder="Confirm password *"
              type="password"
              error={formState.errors.passwordConfirm}
              {...register('passwordConfirm')}
            />
            <Input
              placeholder="Roles"
              type="select"
              label="Role"
              options={[
                {
                  id: '666b96ba-b747-4659-bf58-513c21b8d250',
                  name: 'ROLE_USER'
                },
                {
                  id: '8f26a4df-a42d-44fe-af0a-c25810eb8eea',
                  name: 'ROLE_ADMIN'
                }
              ]}
              {...register('role')}
            />
            <Input type="checkbox" label="Enabled" {...register('enabled')} />
          </div>
        </Modal>
      )}
    </>
  )
}

export default Users
