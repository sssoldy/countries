import { styled, TextField } from '@mui/material'
import { palette, THEME_MODE_PALETTE_MAP } from '../../theme/palette'

export const SearchFilterField = styled(TextField)(
  ({
    theme: {
      palette: { mode },
    },
  }) => ({
    backgroundColor: THEME_MODE_PALETTE_MAP[mode].backgroundElements,
    borderRadius: '5px',

    '& .MuiInputLabel-root': {
      '&:not(.Mui-disabled)': {
        color: THEME_MODE_PALETTE_MAP[mode].inputPrimary,
      },

      '&.Mui-focused': {
        color: THEME_MODE_PALETTE_MAP[mode].inputPrimary,
      },
    },

    '& .MuiInputBase-root': {
      borderRadius: 'inherit',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.transparent,
      },

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: THEME_MODE_PALETTE_MAP[mode].inputPrimary,
      },

      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.transparent,
      },

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: THEME_MODE_PALETTE_MAP[mode].inputPrimary,
      },
    },
  }),
)
