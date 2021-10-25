import { useRouter } from 'next/router'
import { IconType } from 'react-icons'
import { FiLock, FiUsers } from 'react-icons/fi'
import { GiAtom } from 'react-icons/gi'
import * as SC from './sidebar.styles'
import Link from 'next/link'
import { Url } from 'url'
import useDarkMode from 'hooks/use-dark-theme'

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const SidebarButton: React.FC<{
  icon: IconType | JSX.Element
  label: string
  href: string
  isDarkMode: boolean
}> = ({ icon, label, href, isDarkMode }) => (
  <Link href={href}>
    <div
      className={`sidebar-button ${
        isDarkMode ? 'bg-gray-800 bg-opacity-20' : 'bg-gray-100'
      } group`}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{label}</span>
    </div>
  </Link>
)

const Sidebar = () => {
  const router = useRouter()
  const { isDarkMode } = useDarkMode()
  const iconColor = isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'
  return (
    <SC.Sidebar
      className={`fixed top-0 left-0 h-screen w-16 m-0 flex flex-col ${
        isDarkMode ? 'bg-gray-900' : 'bg-opacity-100'
      } text-white shadow-md`}
    >
      <div
        className={`flex h-14 ${
          isDarkMode ? 'bg-secondary' : 'bg-gray-100 bg-opacity-30'
        } items-center justify-center`}
      >
        <div
          className="cursor-pointer flex hover:rotate-180 transform-gpu transition-all duration-1000 "
          onClick={() => router.push('/')}
        >
          <img
            className="w-8 h-8"
            src={isDarkMode ? iconOptions.light : iconOptions.dark}
            alt="Imagem de um átomo"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <SidebarButton
          icon={<FiUsers color={iconColor} fontSize="1.2em" />}
          label="Users"
          href="/users"
          isDarkMode={isDarkMode}
        />
        <SidebarButton
          icon={<FiLock color={iconColor} fontSize="1.2em" />}
          label="Roles"
          href="/roles"
          isDarkMode={isDarkMode}
        />
        <SidebarButton
          icon={<GiAtom color={iconColor} fontSize="1.2em" />}
          label="Elements"
          href="/elements"
          isDarkMode={isDarkMode}
        />
      </div>
    </SC.Sidebar>
  )
}

export default Sidebar
