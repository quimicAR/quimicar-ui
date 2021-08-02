import * as SC from './search.styles'
import { FiSearch } from 'react-icons/fi'
import { useTheme } from 'hooks/use-theme'

interface SearchProps {
  placeholder?: string
}
const Search: React.FC<SearchProps> = ({ placeholder }) => {
  const { theme } = useTheme()
  return (
    <SC.Search
      theme={theme}
      placeholder={placeholder}
      endAdornment={
        <FiSearch
          color={theme === 'light' ? '#040415' : '#f1ebdd'}
          fontSize="1.5em"
        />
      }
    />
  )
}

export default Search
