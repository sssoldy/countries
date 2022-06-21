import * as React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { CountryLink } from '../components/styled/CountryLink'
import Description from '../components/styled/Description'

interface CountryProps {}

const Country: React.FC<CountryProps> = () => {
  const borderCountries = (
    <Box component="span">
      <CountryLink
        href={`/country/FRA`}
        component={Button}
        sx={{ margin: '5px 10px 5px 0' }}
      >
        France
      </CountryLink>
      <CountryLink
        href={`/country/GER`}
        component={Button}
        sx={{ margin: '5px 10px 5px 0' }}
      >
        Germany
      </CountryLink>
      <CountryLink
        href={`/country/NET`}
        component={Button}
        sx={{ margin: '5px 10px 5px 0' }}
      >
        Netherlands
      </CountryLink>
    </Box>
  )

  return (
    <Container>
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
            height: 'auto',
            objectFit: 'cover',
          }}
          alt="Peru"
          src="https://flagcdn.com/pe.svg"
        />
        <Box
          sx={{
            width: { xs: '100%', sm: '560px' },
          }}
        >
          <Typography variant="h2" sx={{ mb: { xs: '16px', sm: '24px' } }}>
            Peru
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
              <Description term="Native Name" details="België" />
              <Description term="Population" details="11,319,511" />
              <Description term="Region" details="Europe" />
              <Description term="Sub Region" details="Western Europe" />
              <Description term="Capital" details="Brussels" />
            </Stack>
            <Stack spacing={1} sx={{ marginBottom: { xs: '32px' } }}>
              <Description term="Top Level Domain" details=".be" />
              <Description term="Currencies" details="Euro" />
              <Description term="Languages" details="Dutch, French, German" />
            </Stack>
            <Description term="Border Countries" details={borderCountries} />
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Country
