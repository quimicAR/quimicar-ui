import * as SC from './header.styles'
import { FiSun, FiMoon } from 'react-icons/fi'
import Search from '../../components/Search/search.component'
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
  const { toggle, isDarkMode } = useDarkMode()

  const toggleTheme = () => toggle()
  return (
    <SC.Header isDark={isDarkMode}>
      <SC.Box>
        <SC.Box
          margin="0px 5rem 0px 0px"
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >
          <SC.Logo
            src={isDarkMode ? iconOptions.light : iconOptions.dark}
            alt="Imagem de um átomo"
          ></SC.Logo>
          <SC.Title>{title}</SC.Title>
        </SC.Box>
        <Search />
      </SC.Box>

      <SC.Box>
        <SC.IconButton onClick={() => toggleTheme()}>
          {isDarkMode ? (
            <FiSun color="var(--color-light)" fontSize="1.5em" />
          ) : (
            <FiMoon color="var(--color-dark)" fontSize="1.5em" />
          )}
        </SC.IconButton>
      </SC.Box>
    </SC.Header>
  )
}

export default Header
