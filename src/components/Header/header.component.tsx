import { useTheme } from '../../hooks/use-theme'
import * as SC from './header.styles'
import { FiSun, FiMoon, FiSearch } from 'react-icons/fi'
import Search from 'components/Search/search.component'

interface HeaderProps {
  title?: string
}

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')
  return (
    <SC.Header theme={theme}>
      <SC.Box>
        <SC.Logo
          src={theme === 'light' ? iconOptions.dark : iconOptions.light}
          alt="Imagem de um átomo"
        ></SC.Logo>
        <SC.Title theme={theme}>{title}</SC.Title>
        <Search placeholder="Search..." />
      </SC.Box>

      <SC.Box>
        <SC.IconButton onClick={() => toggleTheme()}>
          {theme === 'light' ? (
            <FiMoon color="#181f27" fontSize="1.5em" />
          ) : (
            <FiSun color="#f1ebdd" fontSize="1.5em" />
          )}
        </SC.IconButton>
      </SC.Box>
    </SC.Header>
  )
}

export default Header
