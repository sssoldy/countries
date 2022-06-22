import { Button, styled } from '@mui/material'
import { THEME_MODE_PALETTE_MAP } from '../../theme/palette'

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: '2px 28px',
  borderRadius: '2px',
  boxShadow: theme.shadows[2],
  backgroundColor:
    THEME_MODE_PALETTE_MAP[theme.palette.mode].backgroundElements,

  '&.MuiButton-sizeLarge': {
    padding: '7px 38px',
  },
})) as typeof Button
