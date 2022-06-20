import { CssBaseline, ThemeProvider } from '@mui/material'
import * as React from 'react'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import { useThemeMode } from './contexts/ThemeModeContext'
import Header from './layouts/Header'
import Main from './layouts/Main'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  const themeMode = useThemeMode()

  if (!themeMode) {
    return null
  }

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App