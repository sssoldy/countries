import * as React from 'react'
import { Stack, Typography } from '@mui/material'
import BorderCountries from '../BorderCountries/BorderCountries'
import Description from '../styled/Description'
import {
  selectCountry,
  selectCountryStatus,
} from '../../app/slices/countrySlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import CountryDetailsFallback from './CountryDetailsFallback'

const CountryDetails: React.FC = () => {
  const country = useAppSelector(selectCountry)
  const { isLoading } = useAppSelector(selectCountryStatus)

  if (isLoading) return <CountryDetailsFallback />
  if (!country) return null

  const population = country.population.toLocaleString()
  const currencies = country.currencies?.map(c => c.name).join(', ')
  const languages = country.languages.map(l => l.name).join(', ')
  const topLevelDomain = country.topLevelDomain.join(', ')

  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: '10px', mb: { xs: '16px', sm: '24px' } }}
      >
        {country.name}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ flexWrap: 'wrap', mb: { xs: '30px', md: '64px' } }}
      >
        <Stack spacing={1} sx={{ py: 0.5, mr: 2 }}>
          <Description term="Native Name" details={country.nativeName} />
          <Description term="Population" details={population} />
          <Description term="Region" details={country.region} />
          <Description term="Sub Region" details={country.subregion} />
          <Description term="Capital" details={country.capital} />
        </Stack>
        <Stack spacing={1} sx={{ py: 0.5 }}>
          <Description term="Top Level Domain" details={topLevelDomain} />
          <Description term="Currencies" details={currencies} />
          <Description term="Languages" details={languages} />
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        <Description
          term="Border Countries"
          sx={{ display: 'inline-flex', alignItems: 'center', mr: '15px' }}
        />
        <BorderCountries />
      </Stack>
    </>
  )
}

export default CountryDetails
