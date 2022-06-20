import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'
import { ThemeMode } from '../types/theme'

export const getMuiTheme = (themeMode: ThemeMode) => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    palette: {
      mode: themeMode,
    },
    typography: {
      fontFamily: "'Nunito Sans', sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 300;
            src: local(''),
              url('../fonts/nunito-sans-v12-latin-300.woff2') format('woff2'),
              url('../fonts/nunito-sans-v12-latin-300.woff') format('woff');
          }

          @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 400;
            src: local(''),
                 url('../fonts/nunito-sans-v12-latin-regular.woff2') format('woff2'),
                 url('../fonts/nunito-sans-v12-latin-regular.woff') format('woff');
          }

          @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 600;
            src: local(''),
              url('../fonts/nunito-sans-v12-latin-600.woff2') format('woff2'),
              url('../fonts/nunito-sans-v12-latin-600.woff') format('woff');
          }

          @font-face {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 800;
            src: local(''),
              url('../fonts/nunito-sans-v12-latin-800.woff2') format('woff2'),
              url('../fonts/nunito-sans-v12-latin-800.woff') format('woff');
          }
        `,
      },
    },
  })

  theme = createTheme(theme, {
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'xl',
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            paddingLeft: '16px',
            paddingRight: '16px',
            [theme.breakpoints.up('md')]: {
              paddingLeft: '80px',
              paddingRight: '80px',
            },
          },
        },
      },
    },
  } as Theme)

  theme = responsiveFontSizes(theme)

  return theme
}
