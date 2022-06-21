import { Box, Stack } from '@mui/material'
import { Container } from '@mui/system'
import * as React from 'react'
import CountryFilter from './CountryFilter'
import RegionFilter from './RegionFilter'

const SearchFilter: React.FC = () => {
  return (
    <Container>
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
