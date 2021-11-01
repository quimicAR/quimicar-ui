import * as SC from './header.styles'
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi'
import useDarkMode from '../../hooks/use-dark-theme'
import { useRouter } from 'next/router'
import { Text } from '../../components'
import { AuthContext } from '../../contexts/auth-context'
import { useContext } from 'react'
import { destroyCookie } from 'nookies'

interface HeaderProps {
  title?: string
  showTitle?: boolean
}

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const Header: React.FC<HeaderProps> = ({ title, showTitle = true }) => {
  const router = useRouter()
  const { isAuthenticated, isAdmin, user } = useContext(AuthContext)

  const { toggleTheme, isDarkMode } = useDarkMode()

  const handleLogout = () => {
    destroyCookie(null, 'quimicar.token')
    router.reload()
    router.push('/login')
  }

  return (
    <SC.Header
      style={{ gridArea: 'header' }}
      className={isDarkMode ? 'bg-gray-900' : 'bg-opacity-100'}
    >
      <div>
        {showTitle && (
          <div className="cursor-pointer flex" onClick={() => router.push('/')}>
            <img
              className="w-6 h-6 animate-spin-slow mr-3 transition duration-300"
              src={isDarkMode ? iconOptions.light : iconOptions.dark}
              alt="Imagem de um átomo"
            />
            <Text size="lg">{title}</Text>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <SC.IconButton onClick={() => toggleTheme()}>
          {isDarkMode ? (
            <FiSun color="var(--color-light)" fontSize="1.2em" />
          ) : (
            <FiMoon color="var(--color-dark)" fontSize="1.2em" />
          )}
        </SC.IconButton>

        {!isAuthenticated && (
          <div className="flex gap-4 items-center">
            <SC.IconButton onClick={() => router.push('/login')}>
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-100 font-bold' : 'text-gray-900'
                }`}
              >
                Sign In
              </p>
            </SC.IconButton>
            <SC.IconButton
              className="bg-primary rounded w-20 max-h-9"
              onClick={() => router.push('/register')}
            >
              <p
                className={`text-sm font-medium  ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-100'
                }`}
              >
                Sign Up
              </p>
            </SC.IconButton>
          </div>
        )}
        {isAuthenticated && user && (
          <div className="ml-6 flex gap-2">
            <div className="flex-col">
              <div
                className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-100 font-bold' : 'text-gray-900'
                }`}
              >
                {user.fullName}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? 'text-gray-100 font-light' : 'text-gray-800'
                }`}
              >
                {user.email}
              </div>
            </div>
            <div className="h-10 w-10 bg-gray-200 rounded-full shadow-sm">
              <p className="text-center h-full flex items-center justify-center text-lg">
                {user.fullName.split(' ')[0].charAt(0).toUpperCase()}
              </p>
            </div>
            {!isAdmin && (
              <SC.IconButton onClick={() => handleLogout()}>
                {isDarkMode ? (
                  <FiLogOut color="var(--color-light)" fontSize="1.2em" />
                ) : (
                  <FiLogOut color="var(--color-dark)" fontSize="1.2em" />
                )}
              </SC.IconButton>
            )}
          </div>
        )}
      </div>
    </SC.Header>
  )
}

export default Header
