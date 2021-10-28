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
import useDarkMode from 'hooks/use-dark-theme'
import { destroyCookie } from 'nookies'
import { Text } from 'components'
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
      className={`sidebar-animation flex gap-4 items-center  h-12 w-full px-4 cursor-pointer  hover:bg-primary transition-all duration-300 ease-linear group ${
        isDarkMode ? 'bg-gray-900 ' : 'bg-gray-100'
      } ${hideLabel ? 'justify-center' : 'justify-start'}`}
    >
      {icon}
      {hideLabel ? (
        <span className="ml-5 z-20 sidebar-tooltip  group-hover:scale-100">
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
      className={`sidebar-animation flex flex-col items justify-center text-white shadow-md bg-gray-100 cursor-pointer
      ${isOpen ? 'w-60' : 'w-16'}
       ${isDarkMode ? 'bg-gray-900' : 'bg-opacity-100'} `}
    >
      <div
        className={`bg-primary flex h-14 w-full items-center px-4 justify-start  ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100 bg-opacity-30 '
        } group`}
        onClick={() => router.push('/')}
      >
        <img
          className="atom-icon group-hover:rotate-180 w-7 h-7 mr-4"
          src={isDarkMode ? iconOptions.light : iconOptions.dark}
          alt="Imagem de um átomo"
        />
        {isOpen && (
          <Text size="lg" weight="bold">
            quimicAR
          </Text>
        )}
      </div>

      <div
        className={`absolute z-10 sidebar-animation ${
          isOpen ? 'left-56' : 'left-12'
        } top-10 w-8 h-8 rounded-full flex items justify-center bg-gray-800 shadow-md hover:bg-primary`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
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
            href="/logout"
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
