import * as React from 'react'
import { createContext, useState, useEffect, PropsWithChildren } from 'react'
import { getMuiTheme } from '../theme/getMuiTheme'
import { ThemeMode } from '../types/theme'

const THEME_MODE_LOCAL_KEY = 'themeMode'
const PREF_DARK_MEDIA = '(prefers-color-scheme: dark)'
const POSSIBLE_THEME_MODES = Object.values(ThemeMode)

const stringIsThemeMode = (maybeTM: string | null): maybeTM is ThemeMode =>
  POSSIBLE_THEME_MODES.includes(maybeTM as ThemeMode)

const THEME_MODE_SWITCH: Record<ThemeMode, ThemeMode> = {
  [ThemeMode.light]: ThemeMode.dark,
  [ThemeMode.dark]: ThemeMode.light,
}

interface Context {
  themeMode?: ThemeMode
  toggleThemeMode: VoidFunction
}

export const ThemeModeContext = createContext<Context>({
  themeMode: undefined,
  toggleThemeMode: () => undefined,
})
ThemeModeContext.displayName = 'ThemeModeContext'

export const ThemeModeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>()

  const toggleThemeMode = () =>
    themeMode && setThemeMode(THEME_MODE_SWITCH[themeMode])

  useEffect(() => {
    if (themeMode) {
      localStorage.setItem(THEME_MODE_LOCAL_KEY, themeMode)
    } else {
      const localThemeMode = localStorage.getItem(THEME_MODE_LOCAL_KEY)
      const defaultThemeMode =
        (stringIsThemeMode(localThemeMode) ? localThemeMode : null) ??
        (window.matchMedia(PREF_DARK_MEDIA).matches
          ? ThemeMode.dark
          : ThemeMode.light)
      setThemeMode(defaultThemeMode)
    }
  }, [themeMode])

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => {
  const { themeMode } = React.useContext(ThemeModeContext)
  const theme = React.useMemo(
    () => themeMode && getMuiTheme(themeMode),
    [themeMode],
  )
  return theme
}
