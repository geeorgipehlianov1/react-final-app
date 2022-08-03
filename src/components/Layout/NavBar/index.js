import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { AppContainer } from '../../Common/AppContainer'

export const NavBar = () => {
  return (
    <AppContainer sx={{ maxWidth: '1400px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movie list
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
            <Button color="inherit">Add Book</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">My profile</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </AppContainer>
  )
}
