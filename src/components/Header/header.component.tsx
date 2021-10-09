import * as SC from './header.styles'
import { FiSun, FiMoon, FiUser } from 'react-icons/fi'
import useDarkMode from '../../hooks/use-dark-theme'
import { useRouter } from 'next/router'
interface HeaderProps {
  title?: string
}

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter()
  const { toggleTheme, isDarkMode } = useDarkMode()

  return (
    <SC.Header isDark={isDarkMode}>
      <SC.Box>
        <SC.Box onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <SC.Logo
            src={isDarkMode ? iconOptions.light : iconOptions.dark}
            alt="Imagem de um átomo"
          ></SC.Logo>
          <SC.Title>{title}</SC.Title>
        </SC.Box>
      </SC.Box>

      <SC.Box>
        <SC.IconButton onClick={() => toggleTheme()}>
          {isDarkMode ? (
            <FiSun color="var(--color-light)" fontSize="1.5em" />
          ) : (
            <FiMoon color="var(--color-dark)" fontSize="1.5em" />
          )}
        </SC.IconButton>
        <SC.IconButton onClick={() => router.push('/login')}>
          {isDarkMode ? (
            <FiUser color="var(--color-light)" fontSize="1.5em" />
          ) : (
            <FiUser color="var(--color-dark)" fontSize="1.5em" />
          )}
        </SC.IconButton>
      </SC.Box>
    </SC.Header>
  )
}

export default Header
