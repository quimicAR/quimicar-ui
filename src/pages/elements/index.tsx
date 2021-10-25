import { Input } from 'components'
import Modal from 'components/Modal/modal.component'
import useDarkMode from 'hooks/use-dark-theme'
import { Base, List } from 'layouts'
import { IElement } from 'models/element'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import { getAllElements } from 'services/elements/get-all'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await getAllElements()
  return { props: { data } }
}

const headers = [
  {
    id: 'number',
    title: 'Atomic Number'
  },
  {
    id: 'symbol',
    title: 'Symbol'
  },
  {
    id: 'name',
    title: 'Name'
  },
  {
    id: 'atomic_mass',
    title: 'Atomic Mass'
  },
  {
    id: 'actions',
    title: 'Actions'
  }
]

const Elements: NextPage<{ data: IElement[] }> = ({ data }) => {
  const { isDarkMode } = useDarkMode()
  const [elements, setElements] = useState<IElement[]>(data)
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleSearchElements = async () => {
    let result
    if (search.length > 0)
      result = elements.filter((element) => element.name === search)
    else result = data
    setElements(result)
  }

  return (
    <>
      <Base>
        <List
          title="Elements"
          headers={headers}
          onChangeSearch={(search) => setSearch(search)}
          handleSearch={handleSearchElements}
          handleCreate={() => setOpenModal(true)}
          rows={elements.map((element) => ({
            ...element,
            actions: () => (
              <div className="flex gap-4 justify-end">
                <FiEdit2
                  className={`${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                />

                <FiTrash
                  className={`${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                />
              </div>
            )
          }))}
        />
      </Base>

      {openModal && (
        <Modal
          handleCancel={() => setOpenModal(false)}
          handleSave={() => setOpenModal(!openModal)}
          title="Create element"
        >
          <div className="flex flex-col gap-2 w-full">
            <Input
              className="w-full"
              placeholder="Name"
              type="text"
              onChange={(event) => console.log(event.target.value)}
            />
          </div>
        </Modal>
      )}
    </>
  )
}

export default Elements
