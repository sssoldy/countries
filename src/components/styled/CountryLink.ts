import { Link, styled } from '@mui/material'
import { THEME_MODE_PALETTE_MAP } from '../../theme/palette'

export const CountryLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  padding: '2px 28px',
  borderRadius: '2px',
  boxShadow: theme.shadows[2],
  textTransform: 'capitalize',
  backgroundColor:
    THEME_MODE_PALETTE_MAP[theme.palette.mode].backgroundElements,
})) as typeof Link
