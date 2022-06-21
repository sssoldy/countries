import * as React from 'react'
import CountryList from '../components/CountryList/CountryList'
import SearchFilter from '../components/SearchFilter/SearchFilter'

const Home: React.FC = () => {
  return (
    <>
      <SearchFilter />
      <CountryList />
    </>
  )
}

export default Home
