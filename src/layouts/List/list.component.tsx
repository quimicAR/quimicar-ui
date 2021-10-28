/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import useDarkMode from 'hooks/use-dark-theme'
import { useEffect } from 'react'
import { Button, Input } from 'components'
import { FiAlertOctagon, FiPlus, FiSearch } from 'react-icons/fi'

interface ListProps {
  title: string
  headers: Array<{
    id: string
    title: string
  }>
  rows: any[]
  onChangeSearch: (search: string) => void
  handleSearch: () => void
  handleCreate: () => void
}

const List: React.FC<ListProps> = ({
  title,
  headers,
  rows,
  onChangeSearch,
  handleSearch,
  handleCreate
}) => {
  const { isDarkMode } = useDarkMode()

  const iconColor = isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'

  return (
    <div className="flex flex-col w-11/12 h-full items-centers">
      {/* HEADER / BREADCRUMB */}
      <div className="w-full h-20 mb-4">
        <h4 className="flex gap-2 items-center text-gray-600 text-sm mb-4">
          <Link href="/">Home</Link> {'>'}
          <span className="text-blue-500 ">{title}</span>
        </h4>
        <h1
          className={`${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          } text-left text-3xl`}
        >
          {title}
        </h1>
      </div>
      {/* SEARCH */}
      <div className="flex gap-4 w-6/12 mb-6 mt-2">
        <Input
          onChange={(event) => onChangeSearch(event.target.value)}
          placeholder="Search..."
          type="text"
          icon={<FiSearch color={iconColor} />}
        />
        <Button
          className="self-center h-full w-24"
          label="Apply"
          color={iconColor}
          onClick={handleSearch}
        />
      </div>
      {/* CREATE BUTTON */}
      <div className="flex w-full items-center justify-between mb-6">
        <p className="text-gray-500 text-sm">{rows.length} results</p>

        <Button
          className="h-full w-24"
          label="Create"
          color={iconColor}
          icon={<FiPlus className="text-gray-100" />}
          onClick={handleCreate}
        />
      </div>
      {/* MAIN CONTAINER */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow rounded sm:rounded-lg">
              <table
                className={`min-w-full divide-y divide-gray-200  ${
                  isDarkMode ? 'bg-gray-800 bg-opacity-20' : ''
                }`}
              >
                <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-100 '}>
                  <tr className="rounded">
                    {headers?.map((header) => (
                      <th
                        key={header.id}
                        scope="col"
                        className={`table-head ${
                          header.id === 'actions' ? 'text-right' : 'text-left'
                        } ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
                      >
                        {header.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 ">
                  {rows.length > 0 ? (
                    rows.map((row: any, rowId: number) => (
                      <tr key={row.id}>
                        {headers.map((th, thId) => (
                          <td
                            key={thId}
                            className="table-data text-sm text-gray-500"
                          >
                            {typeof rows[rowId][th.id] === 'function'
                              ? rows[rowId][th.id]()
                              : rows[rowId][th.id]}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <td colSpan={headers.length}>
                      <div className="flex gap-4 w-full h-28 text-gray-400 items-center justify-center">
                        <FiAlertOctagon />
                        No results found
                      </div>
                    </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
