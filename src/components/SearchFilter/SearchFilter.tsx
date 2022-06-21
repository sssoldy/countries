import * as React from 'react'
import { Box, Stack, Container } from '@mui/material'
import CountryFilter from './CountryFilter'
import RegionFilter from './RegionFilter'

const SearchFilter: React.FC = () => {
  return (
    <Container sx={{ mb: '48px' }}>
      <Box component="form" noValidate autoComplete="off">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
        >
          <CountryFilter />
          <RegionFilter />
        </Stack>
      </Box>
    </Container>
  )
}

export default SearchFilter
