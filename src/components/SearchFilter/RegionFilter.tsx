import * as React from 'react'
import { MenuItem } from '@mui/material'
import { SearchFilterField } from '../styled/SearchFilterField'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectCountriesStatus } from '../../app/slices/countriesSlice'
import { LoadingIcon } from '../styled/LoadingIcon'
import {
  regionFilterChanged,
  selectRegionFilter,
} from '../../app/slices/filterSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Region } from '../../types/country'

const selectProps = (isLoading: Boolean) => ({
  IconComponent: isLoading ? LoadingIcon : KeyboardArrowDownIcon,
  MenuProps: {
    sx: { top: '6px' },
    PaperProps: {
      elevation: 1,
      sx: {
        borderRadius: '5px',
        '& .MuiList-root .MuiMenuItem-root': {
          padding: '4px 23px ',
          fontSize: '0.875rem',
        },
      },
    },
  },
})

const filterFieldStyle = {
  width: { xs: '100%', sm: '30%', md: '200px' },
  '& .MuiInputLabel-root': {
    px: '10px',
    fontSize: '0.875rem',
    lineHeight: '23px',
  },
  '& .MuiSelect-outlined': {
    pl: '22px',
    fontSize: '0.875rem',
    lineHeight: '23px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    pl: '10px',
  },
  '& .MuiSvgIcon-root': {
    right: '12px',
  },
}

const regions: Array<{ value: Region; label: string }> = [
  { value: '', label: 'None' },
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Polar', label: 'Polar' },
]

const RegionFilter: React.FC = () => {
  const region = useAppSelector(selectRegionFilter)
  const { isLoading, isError } = useAppSelector(selectCountriesStatus)

  const dispatch = useAppDispatch()

  const onRegionChanged = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const r = e.target.value as Region
    dispatch(regionFilterChanged(r))
  }

  return (
    <SearchFilterField
      select
      SelectProps={selectProps(isLoading)}
      id="search-select-region"
      label="Filter by Region"
      disabled={isLoading || isError}
      value={region}
      onChange={onRegionChanged}
      sx={filterFieldStyle}
    >
      {regions.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SearchFilterField>
  )
}

export default RegionFilter
