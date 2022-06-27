import * as React from 'react'
import { Box, Fab, Fade, Theme, useScrollTrigger } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { THEME_MODE_PALETTE_MAP } from '../theme/palette'

const style = (theme: Theme) => ({
  color: 'inherit',
  backgroundColor:
    THEME_MODE_PALETTE_MAP[theme.palette.mode].backgroundElements,

  '&:hover': {
    backgroundColor: THEME_MODE_PALETTE_MAP[theme.palette.mode].background,
  },
})

const ScrollToTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="Scroll back to top" sx={style}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  )
}

export default ScrollToTop
