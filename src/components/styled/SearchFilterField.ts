import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { palette, THEME_MODE_PALETTE_MAP } from '../../theme/palette'

export const SearchFilterField = styled(TextField)(({ theme }) => ({
  backgroundColor:
    THEME_MODE_PALETTE_MAP[theme.palette.mode].backgroundElements,
  borderRadius: '5px',
  boxShadow: theme.shadows[1],

  '& .MuiInputLabel-root': {
    '&:not(.Mui-disabled)': {
      color: THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary,
    },

    '&.Mui-focused': {
      color: THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary,
    },
  },

  '& .MuiInputBase-root': {
    color: THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary,
    borderRadius: 'inherit',

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.transparent,
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary,
    },

    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.transparent,
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: THEME_MODE_PALETTE_MAP[theme.palette.mode].inputPrimary,
    },
  },
}))
