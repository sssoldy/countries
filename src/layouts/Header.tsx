import * as React from 'react'
import { AppBar, Container, Link, Toolbar } from '@mui/material'
import ThemeModeSwitcher from '../components/ThemeModeSwitcher'

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={1} sx={{ mb: '48px' }}>
      <Container>
        <Toolbar disableGutters>
          <Link href="/" variant="h6" color="inherit" sx={{ mr: 'auto' }}>
            Where in the world?
          </Link>
          <ThemeModeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
