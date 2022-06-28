import { Theme } from '@mui/material'
import { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ThemeMode } from '../types/theme'
import { LinkBehavior } from '../components/LinkBehavior'
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
      fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
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
      body2: {
        fontSize: '0.875rem',
        fontWeight: 300,
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
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'inherit',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: THEME_MODE_PALETTE_MAP[themeMode].hover,
            },
            '&.Mui-focusVisible': {
              outline: '-webkit-focus-ring-color auto 1px',
            },
          },
        },
      },
      MuiSkeleton: {
        defaultProps: {
          animation: 'wave',
        },
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
