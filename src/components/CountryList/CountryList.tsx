import * as React from 'react'
import { Container, Grid } from '@mui/material'
import CountryItem from './CountryItem'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectCountriesError,
  selectCountriesIds,
  selectCountriesStatus,
} from '../../app/slices/countriesSlice'

const CountryList: React.FC = () => {
  const countriesIds = useAppSelector(selectCountriesIds)
  const status = useAppSelector(selectCountriesStatus)
  const error = useAppSelector(selectCountriesError)

  if (!countriesIds) return null

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 5, lg: 6, xl: 9.5 }}
        alignItems={{ xs: 'center', sm: 'stretch' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {countriesIds.map(id => (
          <CountryItem key={id} countryId={id} />
        ))}
      </Grid>
    </Container>
  )
}

export default CountryList
