import * as SC from './search.styles'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import useDarkMode from '../../hooks/use-dark-theme'

interface SearchProps {
  placeholder?: string
  value?: string
}
const Search: React.FC<SearchProps> = ({
  placeholder = 'Search for elements...',
  value = ''
}) => {
  const { isDarkMode } = useDarkMode()
  const [searchState, setSearchState] = useState<string>(value)

  return (
    <SC.SearchContainer isDarkMode={isDarkMode}>
      <SC.Search
        placeholder={placeholder}
        value={searchState}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(event: any) => setSearchState(event?.target.value)}
      />
      <FiSearch
        color={isDarkMode ? 'var(--color-light)' : 'var(--color-dark)'}
        fontSize="1.3em"
      />
    </SC.SearchContainer>
  )
}

export default Search
