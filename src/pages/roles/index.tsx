import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { Input } from 'components'
import Modal from 'components/Modal/modal.component'
import useDarkMode from 'hooks/use-dark-theme'
import { List } from 'layouts'
import { IRole } from 'models/role'
import { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import getAPIClient from 'services/auth/api-ssr'
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole
} from 'services/roles'
import Swal from 'sweetalert2'
import * as yup from 'yup'

const headers = [
  {
    id: 'name',
    title: 'Name'
  },
  {
    id: 'actions',
    title: 'Actions'
  }
]
interface FormData {
  name: string
}

const Roles: NextPage<{ data: IRole[] }> = ({ data }) => {
  const { isDarkMode } = useDarkMode()
  const [roles, setRoles] = useState<IRole[]>(data)
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState<'edit' | 'new'>()
  const [roleId, setRoleId] = useState('')

  const schema = yup.object({
    name: yup
      .string()
      .min(5, 'Minimun of 5 characters!')
      .required('Role name is required!')
  })

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<FormData>({
      mode: 'onChange',
      resolver: yupResolver(schema)
    })

  const handleSearchRoles = async () => {
    let result
    if (search.length > 0) result = roles.filter((role) => role.name === search)
    else {
      const { data } = await getAllRoles()
      result = data
    }
    setRoles(result)
  }

  const handleEdit = (id: string) => {
    getRoleById({ id })
      .then((response) => {
        if (response.status === 200) {
          const { name, role_id } = response.data
          setRoleId(role_id)
          setValue('name', name)
          setOpenModal(!openModal)
        }
      })
      .catch((error) => {
        Swal.fire('Error', `Error to update this role! <br> ${error}`, 'error')
      })
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
        deleteRole({ id })
          .then((response) => {
            if (response.status === 201) {
              reset()
              Swal.fire('Success!', 'Role deleted!', 'success')
              handleSearchRoles()
            }
          })
          .catch((error: AxiosError) => {
            Swal.fire(
              'Error',
              `Error to delete this Role! <br> ${error.message}`,
              'error'
            )
          })
      }
    })

  const handleSave: SubmitHandler<FormData> = ({ name }) => {
    switch (modalType) {
      case 'new':
        createRole({ name })
          .then((response) => {
            if (response.status === 201) {
              Swal.fire('Success!', 'Role was created!', 'success')
              setOpenModal(!openModal)
              reset()
              handleSearchRoles()
            }
          })
          .catch((error) => {
            Swal.fire('Error', `Error to create role! <br> ${error}`, 'error')
          })
        break
      case 'edit':
        updateRole({ id: roleId, name })
          .then((response) => {
            if (response.status === 201) {
              Swal.fire('Success!', 'Role was updated!', 'success')
              setOpenModal(!openModal)
              reset()
              handleSearchRoles()
            }
          })
          .catch((error) => {
            Swal.fire('Error', `Error to update role! <br> ${error}`, 'error')
          })
    }
  }
  return (
    <>
      <List
        title="Roles"
        headers={headers}
        onChangeSearch={(search) => setSearch(search)}
        handleSearch={handleSearchRoles}
        handleCreate={() => {
          setModalType('new')
          setOpenModal(true)
        }}
        rows={roles.map((role) => ({
          ...role,
          actions: () => (
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => {
                  setModalType('edit')
                  handleEdit(role.role_id)
                }}
              >
                <FiEdit2
                  className={`${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                />
              </button>
              <button onClick={() => handleDelete(role.role_id)}>
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
          title="Create role"
        >
          <div className="flex flex-col gap-2 w-full">
            <Input
              className="w-full"
              placeholder="Name"
              type="text"
              error={formState.errors.name}
              {...register('name')}
            />
          </div>
        </Modal>
      )}
    </>
  )
}

export default Roles

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const { 'quimicar.token': token } = parseCookies(ctx)

  const response = await apiClient.get('/roles')

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  if (!response.data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data: response.data }
  }
}
