import { CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

export const LoadingIcon = styled(CircularProgress)(({ theme }) => ({
  '& ': {
    right: '20px',
  },
}))

LoadingIcon.defaultProps = {
  color: 'inherit',
  size: 20,
}
