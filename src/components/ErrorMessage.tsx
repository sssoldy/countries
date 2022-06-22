import * as React from 'react'
import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import { PrimaryButton } from './styled/PrimaryButton'
import { SerializedError } from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchCountries } from '../app/slices/countriesSlice'

interface ErrorMessageProps {
  error: SerializedError
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  const dispatch = useAppDispatch()

  const onTryAgainClicked = () => {
    dispatch(fetchCountries())
  }

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Alert
        variant="outlined"
        severity="error"
        sx={{ width: '100%', maxWidth: '480px', mb: '16px' }}
      >
        <AlertTitle>Error</AlertTitle>
        <Typography>
          Code: <strong>{error.code}</strong>
        </Typography>
        <Typography>
          Message: <strong>{error.message}</strong>
        </Typography>
      </Alert>
      <PrimaryButton size="large" onClick={onTryAgainClicked}>
        Try Again
      </PrimaryButton>
    </Box>
  )
}

export default ErrorMessage
