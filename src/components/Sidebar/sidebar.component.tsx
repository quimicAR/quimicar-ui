import { useRouter } from 'next/router'
import { IconType } from 'react-icons'
import {
  FiLock,
  FiUsers,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'
import * as SC from './sidebar.styles'
import Link from 'next/link'
import useDarkMode from '../../hooks/use-dark-theme'
import { destroyCookie } from 'nookies'
import { Text } from '../../components'
import { useState } from 'react'

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const SidebarButton: React.FC<{
  icon: IconType | JSX.Element
  label: string
  href: string
  onClick?: () => void
  hideLabel?: boolean
  isDarkMode: boolean
}> = ({ icon, label, href, isDarkMode, onClick, hideLabel }) => (
  <Link href={href}>
    <div
      onClick={onClick}
      className={`sidebar-animation flex gap-3 items-center h-12 w-full px-6 cursor-pointer  hover:bg-primary transition-all duration-300 ease-linear group justify-start ${
        isDarkMode && 'bg-gray-900'
      } `}
    >
      {icon}
      {hideLabel ? (
        <span
          className={`ml-5 z-20 sidebar-tooltip group-hover:scale-100  ${
            hideLabel && 'overflow-hidden'
          }`}
        >
          {label}
        </span>
      ) : (
        <Text>{label}</Text>
      )}
    </div>
  </Link>
)

const Sidebar = () => {
  const router = useRouter()
  const { isDarkMode } = useDarkMode()
  const iconColor = isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    destroyCookie(null, 'quimicar.token')
    router.reload()
    router.push('/login')
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
            icon={<FiUsers color={iconColor} fontSize="1.2em" />}
            label="Users"
            href="/users"
            isDarkMode={isDarkMode}
            hideLabel={!isOpen}
          />
          <SidebarButton
            icon={<FiLock color={iconColor} fontSize="1.2em" />}
            label="Roles"
            href="/roles"
            isDarkMode={isDarkMode}
            hideLabel={!isOpen}
          />
          <SidebarButton
            icon={<GiAtom color={iconColor} fontSize="1.2em" />}
            label="Elements"
            href="/elements"
            isDarkMode={isDarkMode}
            hideLabel={!isOpen}
          />
        </div>
        <div className="mb-4">
          <SidebarButton
            icon={<FiLogOut color={iconColor} fontSize="1.2em" />}
            label="Logout"
            href="/login"
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
