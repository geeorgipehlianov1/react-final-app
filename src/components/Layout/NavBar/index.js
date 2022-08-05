import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'

import { AppContainer } from '../../Common/AppContainer'
export const NavBar = () => {
  return (
    <AppContainer sx={{ maxWidth: '1400px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/"
              style={{
                flexGrow: 1,
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '24px',
              }}
            >
              Movie List
            </Link>
            <Link
              to="/login"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              Register
            </Link>

            <Link
              to="/create"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              Add Movie
            </Link>

            <Link
              to="/about"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              About
            </Link>

            <Link
              to="/my-profile"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              My profile
            </Link>
            <Link
              to="/catalog"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
              }}
              color="inherit"
            >
              Catalog
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </AppContainer>
  )
}
