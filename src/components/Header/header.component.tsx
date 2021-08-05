import * as SC from './header.styles'
import { FiSun, FiMoon } from 'react-icons/fi'
import Search from '../../components/Search/search.component'
import useDarkMode from 'hooks/use-dark-theme'

interface HeaderProps {
  title?: string
}

const iconOptions = {
  light: '/img/atom-light.svg',
  dark: '/img/atom-dark.svg'
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { toggle, isDarkMode } = useDarkMode()

  const toggleTheme = () => toggle()
  return (
    <SC.Header>
      <SC.Box>
        <SC.Box margin="0px 5em 0px 0px">
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
            <FiSun color="#f1ebdd" fontSize="1.5em" />
          ) : (
            <FiMoon color="#181f27" fontSize="1.5em" />
          )}
        </SC.IconButton>
      </SC.Box>
    </SC.Header>
  )
}

export default Header
