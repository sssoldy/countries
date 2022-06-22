import * as React from 'react'
import CountryItemFallback from './CountryItemFallback'

const CountryListFallback: React.FC = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <CountryItemFallback key={i} />
      ))}
    </>
  )
}

export default CountryListFallback
