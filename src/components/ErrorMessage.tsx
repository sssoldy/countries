import * as React from 'react'
import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import { SerializedError } from '@reduxjs/toolkit'

interface ErrorMessageProps {
  error: SerializedError
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
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
    </Box>
  )
}

export default ErrorMessage
