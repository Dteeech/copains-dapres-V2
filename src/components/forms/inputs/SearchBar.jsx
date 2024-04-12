import { useInputChange } from '../../../hooks/HandleChange'
import Input from './Input'

/**
 * va prendre en entrée des colocations à chercher
 * fetch get
 * @returns React-component
 */
function SearchBar () {
  const [inputValues, handleChange] = useInputChange()

  return (

    <div className='searchBar-container'>
      <Input
        placeholder='Colocation pour 4 personnes'
        label='search'
        name='searchbar'
        value={inputValues.searchBar || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
