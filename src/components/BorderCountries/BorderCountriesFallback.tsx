import * as React from 'react'
import { Button, Skeleton } from '@mui/material'

interface BorderCountriesFallbackProps {
  length: number
}

const BorderCountriesFallback: React.FC<BorderCountriesFallbackProps> = ({
  length,
}) => {
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          component={Button}
          sx={{
            display: 'inline-flex',
            margin: '5px 10px 5px 0',
            padding: '2px 60px',
            borderRadius: '2px',
          }}
        >
          &nbsp;
        </Skeleton>
      ))}
    </>
  )
}

export default BorderCountriesFallback
