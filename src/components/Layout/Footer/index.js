// import { Box, Typography } from '@mui/material'

import { AppContainer } from '../../Common/AppContainer'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export const Footer = () => {
  return (
    <AppContainer sx={{ maxWidth: '1600' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </AppContainer>

    // <Box
    //   sx={{
    //     mb: 5,
    //     color: 'black',
    //     position: 'static',
    //   }}
    // >
    //   <AppContainer
    //     maxWidth={'lg'}
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //     }}
    //   >
    //     <Typography fontSize="12px">2022 Copyright opn.mint</Typography>
    //     <Box sx={{ display: 'flex', gap: 3 }}>
    //       <Typography fontSize="12px">Terms of service</Typography>
    //       <Typography fontSize="12px">Privacy Policy</Typography>
    //     </Box>
    //   </AppContainer>
    // </Box>
  )
}
