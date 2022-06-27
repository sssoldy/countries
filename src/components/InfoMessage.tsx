import * as React from 'react'
import { Box, Alert, AlertTitle, Typography } from '@mui/material'

interface InfoMessageProps {
  message: string
}

const InfoMessage: React.FC<InfoMessageProps> = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: '40px',
      }}
    >
      <Alert
        variant="outlined"
        severity="info"
        sx={{ width: '100%', maxWidth: '480px' }}
      >
        <AlertTitle>Info</AlertTitle>
        <Typography>{message}</Typography>
      </Alert>
    </Box>
  )
}

export default InfoMessage
