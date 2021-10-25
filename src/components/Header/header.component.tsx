import * as SC from './header.styles'
import { FiSun, FiMoon, FiUser } from 'react-icons/fi'
import useDarkMode from '../../hooks/use-dark-theme'
import { useRouter } from 'next/router'
import { Text } from 'components'

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
  const { toggleTheme, isDarkMode } = useDarkMode()
  const iconColor = isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'

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
      <div className="flex">
        <SC.IconButton onClick={() => toggleTheme()}>
          {isDarkMode ? (
            <FiSun color="var(--color-light)" fontSize="1.2em" />
          ) : (
            <FiMoon color="var(--color-dark)" fontSize="1.2em" />
          )}
        </SC.IconButton>
        <SC.IconButton onClick={() => router.push('/login')}>
          <FiUser color={iconColor} fontSize="1.2em" />
        </SC.IconButton>
      </div>
    </SC.Header>
  )
}

export default Header
