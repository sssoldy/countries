import { ThemeMode } from '../types/theme'

export const palette = {
  white: '#FFFFFF',
  woodsmoke: '#111517',

  ebonyClay: {
    '400': '#2B3844',
    '500': '#202C36',
  },

  seashell: {
    '400': '#FFFFFF',
    '500': '#F1F1F1',
  },
}

export const THEME_MODE_PALETTE_MAP = {
  [ThemeMode.light]: {
    text: palette.woodsmoke,
    backgroundElements: palette.seashell[400],
    background: palette.seashell[500],
  },
  [ThemeMode.dark]: {
    text: palette.white,
    backgroundElements: palette.ebonyClay[400],
    background: palette.ebonyClay[500],
  },
}
