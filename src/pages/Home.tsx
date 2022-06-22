import * as React from 'react'
import { fetchCountries } from '../app/slices/countriesSlice'
import CountryList from '../components/CountryList/CountryList'
import SearchFilter from '../components/SearchFilter/SearchFilter'
import { useAppDispatch } from '../hooks/useAppDispatch'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const promise = dispatch(fetchCountries())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <>
      <SearchFilter />
      <CountryList />
    </>
  )
}

export default Home
