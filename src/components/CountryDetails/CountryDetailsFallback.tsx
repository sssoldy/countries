import * as React from 'react'
import { Skeleton, Stack } from '@mui/material'

const CountryDetailsFallback: React.FC = () => {
  return (
    <>
      <Skeleton
        component="h2"
        sx={{ maxWidth: '300px', pt: '10px', mb: { xs: '16px', sm: '24px' } }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ flexWrap: 'wrap', mb: { xs: '30px', md: '64px' } }}
      >
        <Stack spacing={1} sx={{ py: 0.5, mr: 2 }}>
          <Skeleton width="220px" />
          <Skeleton width="220px" />
          <Skeleton width="220px" />
          <Skeleton width="220px" />
          <Skeleton width="220px" />
        </Stack>
        <Stack spacing={1} sx={{ py: 0.5 }}>
          <Skeleton width="220px" />
          <Skeleton width="220px" />
          <Skeleton width="220px" />
        </Stack>
      </Stack>
      <Stack>
        <Skeleton sx={{ width: '140px', height: '38px', mr: '15px' }} />
      </Stack>
    </>
  )
}

export default CountryDetailsFallback
