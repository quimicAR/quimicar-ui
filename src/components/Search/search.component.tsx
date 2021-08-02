import * as SC from './search.styles'
import { FiSearch } from 'react-icons/fi'
import { useTheme } from '../../hooks/use-theme'
import { useState } from 'react'

interface SearchProps {
  placeholder?: string
  value?: string
}
const Search: React.FC<SearchProps> = ({
  placeholder = 'Search for elements...',
  value = ''
}) => {
  const { theme } = useTheme()
  const [searchState, setSearchState] = useState<string>(value)

  return (
    <SC.SearchContainer themeProp={theme}>
      <SC.Search
        placeholder={placeholder}
        value={searchState}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(event: any) => setSearchState(event?.target.value)}
      />
      <FiSearch
        color={theme === 'light' ? '#040415' : '#f1ebdd'}
        fontSize="2em"
      />
    </SC.SearchContainer>
  )
}

export default Search
