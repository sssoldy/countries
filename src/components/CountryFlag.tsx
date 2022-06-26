import * as React from 'react'
import { Box, Skeleton } from '@mui/material'
import { selectCountry, selectCountryStatus } from '../app/slices/countrySlice'
import { useAppSelector } from '../hooks/useAppSelector'

const style = {
  display: 'block',
  width: '100%',
  height: { xs: 'auto', md: '400px' },
  borderRadius: '10px',
  objectFit: 'cover',
}

const fallbackStyle = {
  height: 0,
  pt: {
    xs: '65.3%' /* 280:183 (560x366) Aspect Ratio (divide 183 by 560 = 0.653) */,
    md: '400px',
  },
}

const CountryFlag: React.FC = () => {
  const country = useAppSelector(selectCountry)
  const { isLoading } = useAppSelector(selectCountryStatus)

  if (isLoading)
    return (
      <Skeleton variant="rectangular" sx={{ ...style, ...fallbackStyle }} />
    )

  if (!country) return null

  return (
    <Box component="img" sx={style} alt={country.name} src={country.flag} />
  )
}

export default CountryFlag
