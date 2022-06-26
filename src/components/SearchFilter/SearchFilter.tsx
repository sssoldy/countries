import * as React from 'react'
import { Box, Stack } from '@mui/material'
import CountryFilter from './CountryFilter'
import RegionFilter from './RegionFilter'

const SearchFilter: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mb: '48px' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
      >
        <CountryFilter />
        <RegionFilter />
      </Stack>
    </Box>
  )
}

export default SearchFilter
