import * as React from 'react'
import { Theme } from '@mui/material'
import { SearchFilterField } from '../styled/SearchFilterField'
import { THEME_MODE_PALETTE_MAP } from '../../theme/palette'

// prettier-ignore
const style = (theme: Theme) => ({
  width: { xs: '100%', sm: '70%', md: '480px' },
  backgroundImage: `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23${THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary.slice(1)}" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '28px 16px',

  '& .MuiInputLabel-root': {
    top: '3px',
    left: '60px',
    fontSize: '0.875rem',
  },

  '& .MuiInputBase-root': {
    pl: '60px',
    '& .MuiOutlinedInput-notchedOutline': {
      pl: '60px',
    },
  },
})

const CountryFilter: React.FC = () => {
  return (
    <SearchFilterField
      id="search-country"
      label="Search for a country…"
      sx={style}
    />
  )
}

export default CountryFilter
