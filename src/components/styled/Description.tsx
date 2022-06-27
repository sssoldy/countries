import * as React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface TypographyWrapperProps extends TypographyProps {
  term: string
  details?: string | number
}

const TypographyWrapper: React.FC<TypographyWrapperProps> = ({
  term,
  details,
  ...rest
}) => {
  return (
    <Typography {...rest}>
      <strong>{term}: </strong>
      {details || null}
    </Typography>
  )
}

const Description = styled(TypographyWrapper)(({ details }) => ({
  '& strong': {
    fontWeight: 600,
  },
}))

export default Description
