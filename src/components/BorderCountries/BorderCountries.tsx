import * as React from 'react'
import {
  fetchBorderCountries,
  selectBorderCountries,
  selectBorderCountriesIds,
} from '../../app/slices/countrySlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import { PrimaryButton } from '../styled/PrimaryButton'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import BorderCountriesFallback from './BorderCountriesFallback'
import { ResponseStatus } from '../../types/api'
import { SerializedError } from '@reduxjs/toolkit'
import ErrorMessage from '../ErrorMessage'
import { Typography } from '@mui/material'

const BorderCountries: React.FC = () => {
  const borderCountires = useAppSelector(selectBorderCountries)
  const borderCounrtiesIds = useAppSelector(selectBorderCountriesIds)

  const [status, setStatus] = React.useState<ResponseStatus>('idle')
  const [error, setError] = React.useState<SerializedError | null>(null)

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!borderCounrtiesIds) return undefined
    ;(async () => {
      try {
        setError(null)
        setStatus('loading')
        await dispatch(fetchBorderCountries(borderCounrtiesIds)).unwrap()
        setStatus('successed')
      } catch (error) {
        setStatus('failed')
        setError(error as SerializedError)
      }
    })()
  }, [borderCounrtiesIds, dispatch])

  if (error) return <ErrorMessage error={error} />

  if (status === 'loading' && borderCounrtiesIds)
    return <BorderCountriesFallback length={borderCounrtiesIds.length} />

  if (!borderCounrtiesIds)
    return <Typography>has no border countries</Typography>

  return (
    <>
      {borderCountires &&
        borderCountires.map(c => (
          <PrimaryButton
            key={c.alpha3Code}
            href={`/country/${c.alpha3Code}`}
            sx={{ margin: '5px 10px 5px 0' }}
          >
            {c.name}
          </PrimaryButton>
        ))}
    </>
  )
}

export default BorderCountries
