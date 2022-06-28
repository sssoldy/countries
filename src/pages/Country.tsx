import * as React from 'react'
import { Box, Stack, Container } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { PrimaryButton } from '../components/styled/PrimaryButton'
import { useParams } from 'react-router-dom'
import {
  countryReset,
  fetchSingleCountry,
  selectCountryError,
} from '../app/slices/countrySlice'
import { useAppDispatch } from '../hooks/useAppDispatch'
import CountryDetails from '../components/CountryDetails/CountryDetails'
import CountryFlag from '../components/CountryFlag'
import { useAppSelector } from '../hooks/useAppSelector'
import ErrorMessage from '../components/ErrorMessage'
import { LinkBehavior } from '../components/LinkBehavior'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Country: React.FC = () => {
  useScrollToTop()

  const { code } = useParams()
  const error = useAppSelector(selectCountryError)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!code) return undefined
    const promise = dispatch(fetchSingleCountry(code))
    return () => {
      promise.abort()
      dispatch(countryReset())
    }
  }, [code, dispatch])

  if (error) return <ErrorMessage error={error} />

  return (
    <Container sx={{ py: { xs: '40px', sm: '80px' } }}>
      <PrimaryButton
        href="/"
        component={LinkBehavior}
        size="large"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mb: { xs: '64px', sm: '80px' } }}
      >
        Back
      </PrimaryButton>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 5, lg: 8 }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '560px',
            flexShrink: '1',
          }}
        >
          <CountryFlag />
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            flexShrink: '2',
          }}
        >
          <CountryDetails />
        </Box>
      </Stack>
    </Container>
  )
}

export default Country
