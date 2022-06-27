import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import { useThemeMode } from './contexts/ThemeModeContext'
import Header from './layouts/Header'
import Main from './layouts/Main'
import Country from './pages/Country'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CssBaseline from '@mui/material/CssBaseline'

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
          <Route path="country/:code" element={<Country />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
