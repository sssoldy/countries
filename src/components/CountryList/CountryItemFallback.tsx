import { Box, Grid, Skeleton, Stack } from '@mui/material'
import * as React from 'react'
import { THEME_MODE_PALETTE_MAP } from '../../theme/palette'

const CountryItemFallback: React.FC = () => {
  return (
    <Grid item sm={6} md={4} lg={3}>
      <Box
        sx={{
          width: { xs: '264px', sm: '100%' },
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <Skeleton variant="rectangular" height={160} />
        <Box
          sx={theme => ({
            padding: '20px 24px 35px 24px',
            backgroundColor:
              THEME_MODE_PALETTE_MAP[theme.palette.mode].backgroundElements,
          })}
        >
          <Skeleton variant="text" component="h3" sx={{ mb: '12px' }} />
          <Stack spacing={0.5}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Stack>
        </Box>
      </Box>
    </Grid>
  )
}

export default CountryItemFallback
