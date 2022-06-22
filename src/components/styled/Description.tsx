import * as React from 'react'
import { styled, Typography, TypographyProps } from '@mui/material'

interface TypographyWrapperProps extends TypographyProps {
  term: string
  details: JSX.Element | string | number
}

const TypographyWrapper: React.FC<TypographyWrapperProps> = ({
  term,
  details,
  ...rest
}) => {
  return (
    <Typography {...rest}>
      <strong>{term}: </strong>
      {details}
    </Typography>
  )
}

const Description = styled(TypographyWrapper)(({ details }) => ({
  '& strong': {
    fontWeight: 600,
  },

  ...(React.isValidElement(details) && {
    '& strong': {
      fontWeight: 600,
      marginRight: '10px',
    },
  }),
}))

export default Description
