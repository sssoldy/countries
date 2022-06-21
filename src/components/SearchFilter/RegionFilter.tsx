import * as React from 'react'
import { MenuItem } from '@mui/material'
import { SearchFilterField } from '../styled/SearchFilterField'

interface RegionFilterProps {}

const RegionFilter: React.FC<RegionFilterProps> = () => {
  const [region, setRegion] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value)
  }

  return (
    <SearchFilterField
      select
      SelectProps={{
        MenuProps: {
          sx: { top: '6px' },
          PaperProps: { elevation: 1, sx: { borderRadius: '5px' } },
        },
      }}
      id="search-select-region"
      label="Filter by Region"
      value={region}
      onChange={handleChange}
      sx={{ width: { xs: '100%', sm: '30%', md: '200px' } }}
    >
      {regions.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SearchFilterField>
  )
}

const regions = [
  { value: '', label: 'None' },
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

export default RegionFilter
