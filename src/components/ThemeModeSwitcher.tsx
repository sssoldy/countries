import * as React from 'react'
import { Button, Typography } from '@mui/material'
import { ThemeModeContext } from '../contexts/ThemeModeContext'
import { ThemeMode } from '../types/theme'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const ThemeModeSwitcher: React.FC = () => {
  const { themeMode, toggleThemeMode } = React.useContext(ThemeModeContext)
  const isDarkMode = themeMode === ThemeMode.dark

  return (
    <Button
      color="inherit"
      startIcon={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={toggleThemeMode}
    >
      <Typography sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </Typography>
    </Button>
  )
}

export default ThemeModeSwitcher
