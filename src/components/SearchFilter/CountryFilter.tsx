import * as React from 'react'
import { SearchFilterField } from '../styled/SearchFilterField'

interface CountryFilterProps {}

const CountryFilter: React.FC<CountryFilterProps> = () => {
  return (
    <SearchFilterField
      id="search-search-country"
      color="secondary"
      label="Search for a country…"
      sx={{ width: { xs: '100%', sm: '70%', md: '480px' } }}
    />
  )
}

export default CountryFilter
