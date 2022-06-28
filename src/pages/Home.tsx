import * as React from 'react'
import { Container } from '@mui/material'
import { fetchAllCountries } from '../app/slices/countriesSlice'
import CountryList from '../components/CountryList/CountryList'
import SearchFilter from '../components/SearchFilter/SearchFilter'
import { useAppDispatch } from '../hooks/useAppDispatch'
import ScrollToTop from '../components/ScrollToTop'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Home: React.FC = () => {
  useScrollToTop()

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const promise = dispatch(fetchAllCountries())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <Container sx={{ py: { xs: '24px', sm: '48px' } }}>
      <SearchFilter />
      <CountryList />
      <ScrollToTop />
    </Container>
  )
}

export default Home
