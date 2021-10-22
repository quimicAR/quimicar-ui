import * as SC from './header.styles'
import { FiSun, FiMoon, FiUser } from 'react-icons/fi'
import useDarkMode from '../../hooks/use-dark-theme'
import { useRouter } from 'next/router'
import { Text } from 'components'

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
      <div className="cursor-pointer flex" onClick={() => router.push('/')}>
        <SC.Logo
          src={isDarkMode ? iconOptions.light : iconOptions.dark}
          alt="Imagem de um átomo"
        ></SC.Logo>
        <Text size="lg">{title}</Text>
      </div>
      <div className="flex">
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
      </div>
    </SC.Header>
  )
}

export default Header
