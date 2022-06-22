import * as React from 'react'
import { Container, Grid } from '@mui/material'
import CountryItem from './CountryItem'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectCountriesError,
  selectCountriesStatus,
  selectFilteredCountriesIds,
} from '../../app/slices/countriesSlice'
import CountryListFallback from './CountryListFallback'
import ErrorMessage from '../ErrorMessage'
import InfoMessage from '../InfoMessage'

const CountryList: React.FC = () => {
  const countriesIds = useAppSelector(selectFilteredCountriesIds)
  const { isLoading, isSuccess } = useAppSelector(selectCountriesStatus)
  const error = useAppSelector(selectCountriesError)
  const isIds = Boolean(countriesIds.length)

  return (
    <Container>
      {error && <ErrorMessage error={error} />}
      {!isIds && isSuccess && <InfoMessage message="Nothing found" />}
      <Grid
        container
        spacing={{ xs: 5, lg: 6, xl: 9.5 }}
        alignItems={{ xs: 'center', sm: 'stretch' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {isLoading && <CountryListFallback />}
        {isIds &&
          countriesIds.map(id => <CountryItem key={id} countryId={id} />)}
      </Grid>
    </Container>
  )
}

export default CountryList
