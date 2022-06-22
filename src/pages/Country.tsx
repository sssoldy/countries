import * as React from 'react'
import { Box, Stack, Typography, Container } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { PrimaryButton } from '../components/styled/PrimaryButton'
import Description from '../components/styled/Description'

const Country: React.FC = () => {
  const borderCountries = (
    <Box component="span">
      <PrimaryButton href={`/country/FRA`} sx={{ margin: '5px 10px 5px 0' }}>
        France
      </PrimaryButton>
      <PrimaryButton href={`/country/GER`} sx={{ margin: '5px 10px 5px 0' }}>
        Germany
      </PrimaryButton>
      <PrimaryButton href={`/country/NET`} sx={{ margin: '5px 10px 5px 0' }}>
        Netherlands
      </PrimaryButton>
    </Box>
  )

  return (
    <Container sx={{ pt: { xs: '16px', sm: '32px' } }}>
      <PrimaryButton
        href="/"
        size="large"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mb: { xs: '64px', sm: '80px' } }}
      >
        Back
      </PrimaryButton>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        spacing={{ xs: 5, lg: 8 }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: '10px',
            width: { xs: '100%', md: '65%' },
            maxWidth: '560px',
            height: { xs: 'auto', lg: '400px' },
            objectFit: 'cover',
          }}
          alt="Peru"
          src="https://flagcdn.com/pe.svg"
        />
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            pt: '10px',
          }}
        >
          <Typography variant="h2" sx={{ mb: { xs: '16px', sm: '26px' } }}>
            Belgium
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ flexWrap: 'wrap' }}
          >
            <Stack
              spacing={1}
              sx={{
                margin: {
                  xs: '0 32px 32px 0',
                  md: '0 0 32px 0',
                  lg: '0 32px 32px 0',
                },
              }}
            >
              <Description
                sx={{ fontSize: '1rem' }}
                term="Native Name"
                details="België"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Population"
                details="11,319,511"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Region"
                details="Europe"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Sub Region"
                details="Western Europe"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Capital"
                details="Brussels"
              />
            </Stack>
            <Stack spacing={1} sx={{ mb: { xs: '32px', sm: '0' } }}>
              <Description
                sx={{ fontSize: '1rem' }}
                term="Top Level Domain"
                details=".be"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Currencies"
                details="Euro"
              />
              <Description
                sx={{ fontSize: '1rem' }}
                term="Languages"
                details="Dutch, French, German"
              />
            </Stack>
            <Description
              sx={{ fontSize: '1rem', mt: { md: '36px' } }}
              term="Border Countries"
              details={borderCountries}
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Country
