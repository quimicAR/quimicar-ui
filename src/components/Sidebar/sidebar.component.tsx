import { useRouter } from 'next/router'
import {
  FiLock,
  FiUsers,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'
import * as SC from './sidebar.styles'
import useDarkMode from '../../hooks/use-dark-theme'
import { destroyCookie } from 'nookies'
import { Text } from '../../components'
import { useState } from 'react'
import SidebarButton from './SidebarButton/sidebar-button.component'

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const Sidebar = () => {
  const router = useRouter()
  const { isDarkMode } = useDarkMode()
  const iconColor = isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    destroyCookie(null, 'quimicar.token')
    router.reload()
    router.push('/')
  }

  return (
    <SC.Sidebar
      className={`sidebar-animation flex flex-col items justify-center text-white shadow-md  cursor-pointer
      ${isOpen ? 'w-60' : 'w-18'}
      ${isDarkMode && 'bg-gray-900'} `}
    >
      {/* LOGO */}
      <div
        className={`group flex h-14 w-full items-center px-6 justify-start overflow-hidden`}
        onClick={() => router.push('/')}
      >
        <img
          className="atom-icon group-hover:rotate-180 w-6 h-6 mr-4"
          src={isDarkMode ? iconOptions.light : iconOptions.dark}
          alt="Imagem de um átomo"
          width="24px"
          height="24px"
        />
        {isOpen && <Text size="lg">quimicAR</Text>}
      </div>

      {/* OPEN SIDEBAR */}
      <div
        className={`absolute z-10 sidebar-animation ${
          isOpen ? 'left-56' : 'left-14'
        } top-10 w-8 h-8 rounded-full flex items justify-center bg-gray-800 shadow-md hover:bg-primary`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiChevronLeft className="group-hover:text-white" />
          ) : (
            <FiChevronRight className="group-hover:text-white" />
          )}
        </button>
      </div>

      <div className="flex flex-col h-full justify-between mt-4 ">
        <div className="flex flex-col items-start">
          <SidebarButton
            icon={<GiAtom color={iconColor} fontSize="1.2em" />}
            label="Elements"
            href="/admin/elements"
            isDarkMode={isDarkMode}
            hideLabel={!isOpen}
          />
        </div>
        <div className="mb-4">
          <SidebarButton
            icon={<FiLogOut color={iconColor} fontSize="1.2em" />}
            label="Logout"
            href="/"
            isDarkMode={isDarkMode}
            onClick={handleLogout}
            hideLabel={!isOpen}
          />
        </div>
      </div>
    </SC.Sidebar>
  )
}

export default Sidebar
