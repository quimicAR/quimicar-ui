import { Button, Text } from '../../components'
import useDarkMode from '../../hooks/use-dark-theme'
import { IconType } from 'react-icons'

interface ModalProps {
  title: string
  icon?: IconType | JSX.Element
  buttonCancel: {
    label?: string
    handleCancel: () => void
    disabled?: boolean
  }
  buttonSave: {
    label?: string
    handleSave: () => void
    disabled?: boolean
  }
}

const Modal: React.FC<ModalProps> = ({
  title,
  icon,
  children,
  buttonCancel,
  buttonSave
}) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
        >
          <div
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}
          >
            <div className="sm:flex sm:items-start">
              {icon && (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  {icon}
                </div>
              )}
              <div className="mt-3 w-full">
                <div className="text-left mb-6">
                  <Text size="lg" weight="bold">
                    {title}
                  </Text>
                </div>

                <div className="mt-2 w-full">{children}</div>
              </div>
            </div>
          </div>

          <div
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
            } px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}
          >
            <Button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-blue-600  sm:ml-3 sm:w-auto sm:text-sm"
              label="Save"
              disabled={buttonSave.disabled}
              onClick={buttonSave.handleSave}
            />
            <Button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              label="Cancel"
              disabled={buttonCancel.disabled}
              onClick={buttonCancel.handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
