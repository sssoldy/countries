import {
  createTheme,
  responsiveFontSizes,
  Theme,
  LinkProps as MuiLinkProps,
} from '@mui/material'
import { ThemeMode } from '../types/theme'
import { LinkBehavior } from './LinkBehavior'
import { THEME_MODE_PALETTE_MAP } from './palette'

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
      text: {
        primary: THEME_MODE_PALETTE_MAP[themeMode].text,
      },
      background: {
        default: THEME_MODE_PALETTE_MAP[themeMode].background,
        paper: THEME_MODE_PALETTE_MAP[themeMode].backgroundElements,
      },
    },
    typography: {
      fontFamily: "'Nunito Sans', sans-serif",
      h2: {
        fontSize: '2rem',
        fontWeight: 800,
        letterSpacing: '-0.05rem',
      },
      h3: {
        fontWeight: 800,
        fontSize: '1.125rem',
        letterSpacing: '0.0313rem',
      },
      h6: {
        fontWeight: 800,
        fontSize: '1.5rem',
        letterSpacing: '-0.0375rem',
      },
    },
    mixins: {
      toolbar: {
        minHeight: '80px',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            // Disable lighter surface
            // https://mui.com/material-ui/react-paper/#elevation
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: 'inherit',
        },
      },
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as MuiLinkProps, // https://github.com/mui/material-ui/issues/29942
        styleOverrides: {
          root: {
            textDecoration: 'none',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'inherit',
            textTransform: 'capitalize',
          },
        },
      },
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
    shadows: [
      ...theme.shadows.map((shadow, i) => {
        if (i === 1) return '0px 2px 4px rgba(0, 0, 0, 0.0562443)'
        if (i === 2) return '0px 0px 4px 1px rgba(0, 0, 0, 0.104931)'
        return shadow
      }),
    ],
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
