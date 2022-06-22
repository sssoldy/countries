import { CircularProgress, styled } from '@mui/material'

export const LoadingIcon = styled(CircularProgress)(({ theme }) => ({
  '& ': {
    right: '20px',
  },
}))

LoadingIcon.defaultProps = {
  color: 'inherit',
  size: 20,
}
