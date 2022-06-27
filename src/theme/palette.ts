import { ThemeMode } from '../types/theme'

export const palette = {
  white: 'rgb(255, 255, 255)',
  woodsmoke: 'rgb(17, 21, 23)',
  transparent: 'rgba(255, 255, 255, 0)',
  gray: 'rgb(132, 132, 132)',
  whiteOpacity: 'rgba(255, 255, 255, 0.08)',
  blackOpacity: 'rgba(0, 0, 0, 0.04)',

  ebonyClay: {
    '400': 'rgb(43, 56, 68)',
    '500': 'rgb(32, 44, 54)',
  },

  seashell: {
    '400': 'rgb(255, 255, 255)',
    '500': 'rgb(241, 241, 241)',
  },
}

export const THEME_MODE_PALETTE_MAP = {
  [ThemeMode.light]: {
    text: palette.woodsmoke,
    inputPrimary: palette.gray,
    hover: palette.blackOpacity,
    backgroundElements: palette.seashell[400],
    background: palette.seashell[500],
  },
  [ThemeMode.dark]: {
    text: palette.white,
    inputPrimary: palette.white,
    hover: palette.whiteOpacity,
    backgroundElements: palette.ebonyClay[400],
    background: palette.ebonyClay[500],
  },
}
