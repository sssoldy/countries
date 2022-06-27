import * as React from 'react'
import { Button } from '@mui/material'
import { ThemeModeContext } from '../contexts/ThemeModeContext'
import { ThemeMode } from '../types/theme'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const ThemeModeSwitcher: React.FC = () => {
  const { themeMode, toggleThemeMode } = React.useContext(ThemeModeContext)
  const isDarkMode = themeMode === ThemeMode.dark

  return (
    <Button
      startIcon={isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      sx={{
        px: 0,
        fontWeight: 600,
        fontSize: '1rem',
        '& .MuiButton-startIcon': { ml: 0 },
      }}
      onClick={toggleThemeMode}
    >
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </Button>
  )
}

export default ThemeModeSwitcher
