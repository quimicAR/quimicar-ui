/* eslint-disable @typescript-eslint/no-explicit-any */
import useDarkMode from '../../hooks/use-dark-theme'
import { List } from 'layouts'
import { IElement } from '../../models/element'
import { GetServerSideProps, NextPage } from 'next'
import router from 'next/router'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import getAPIClient from '../../services/auth/api-ssr'
import { deleteElement } from '../../services/elements/delete'
import Swal from 'sweetalert2'
import { headers } from './initial-state'

const Elements: NextPage<{ data: IElement[] }> = ({ data }) => {
  const { isDarkMode } = useDarkMode()
  const [elements, setElements] = useState<IElement[]>(data)
  const [search, setSearch] = useState('')

  const handleSearchElements = async () => {
    let result
    if (search.length > 0)
      result = elements.filter((element) => element.name === search)
    else result = data
    setElements(result)
  }

  const handleDelete = (atomicNumber: number) =>
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteElement({ atomicNumber })
          .then((response) => {
            if (response.status === 200) {
              Swal.fire('Success!', 'Element deleted!', 'success')
              handleSearchElements()
            }
          })
          .catch((error: any) => {
            Swal.fire(
              'Error',
              `Error to delete this element! <br> ${error.response.data.message}`,
              'error'
            )
          })
      }
    })

  return (
    <List
      title="Elements"
      headers={headers}
      onChangeSearch={(search) => setSearch(search)}
      handleSearch={handleSearchElements}
      handleCreate={() => router.push('/elements/create')}
      rows={elements.map((element) => ({
        ...element,
        atomic_mass: () => element.atomic_mass.toFixed(5),
        enabled: () => (
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              element.enabled
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {element.enabled ? 'Active' : 'Disabled'}
          </span>
        ),
        actions: () => (
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => router.push(`/elements/update/${element.number}`)}
            >
              <FiEdit2
                className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
              />
            </button>

            <button onClick={() => handleDelete(element.number)}>
              <FiTrash
                className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
              />
            </button>
          </div>
        )
      }))}
    />
  )
}

export default Elements

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)

  const { 'quimicar.token': token } = parseCookies(ctx)

  const response = await apiClient.get('/elements')

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
