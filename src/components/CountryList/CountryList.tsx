import * as React from 'react'
import { Container, Grid } from '@mui/material'
import CountryItem from './CountryItem'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
  selectCountriesError,
  selectCountriesStatus,
  selectFilteredCountriesIdsSlice,
} from '../../app/slices/countriesSlice'
import CountryListFallback from './CountryListFallback'
import ErrorMessage from '../ErrorMessage'
import InfoMessage from '../InfoMessage'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
  offsetFilterChanged,
  selectOffsetFilter,
} from '../../app/slices/filterSlice'
import { useObserver } from '../../hooks/useObserver'

const CountryList: React.FC = () => {
  const { countriesIdsSlice, countriesIdsTotal } = useAppSelector(
    selectFilteredCountriesIdsSlice,
  )
  const { isLoading, isSuccess } = useAppSelector(selectCountriesStatus)
  const error = useAppSelector(selectCountriesError)
  const offset = useAppSelector(selectOffsetFilter)

  const hasIds = Boolean(countriesIdsSlice.length)
  const hasMoreIds = !Boolean(countriesIdsSlice.length % offset)
  const isLimit = countriesIdsSlice.length === countriesIdsTotal
  const canLoad = hasIds && hasMoreIds && !isLimit

  const dispatch = useAppDispatch()
  const scrollRef = React.useRef<HTMLDivElement | null>(null)
  useObserver(scrollRef, hasIds, canLoad, () => dispatch(offsetFilterChanged()))

  return (
    <Container>
      {error && <ErrorMessage error={error} />}
      {!hasIds && isSuccess && <InfoMessage message="Nothing found" />}
      <Grid
        container
        spacing={{ xs: 5, lg: 6, xl: 9.5 }}
        alignItems={{ xs: 'center', sm: 'stretch' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        {isLoading && <CountryListFallback />}
        {hasIds &&
          countriesIdsSlice.map(id => <CountryItem key={id} countryId={id} />)}
        <div
          ref={scrollRef}
          style={{ width: '100%', height: '20px', backgroundColor: 'red' }}
        />
      </Grid>
    </Container>
  )
}

export default CountryList
