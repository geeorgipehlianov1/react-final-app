import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'

import { AppContainer } from '../../Common/AppContainer'
export const NavBar = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsUserAuthenticated(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage])

  return (
    <AppContainer sx={{ maxWidth: '1600px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <>
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
            </>
            {isUserAuthenticated ? (
              <>
                <>
                  <Link
                    to="/catalog"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: '16px',
                      marginRight: '8px',
                    }}
                    color="inherit"
                  >
                    Catalog
                  </Link>
                  <Link
                    to="/create"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: '16px',
                      marginRight: '8px',
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
                      marginRight: '8px',
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
                      marginRight: '8px',
                    }}
                  >
                    My profile
                  </Link>
                </>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '16px',
                    marginRight: '8px',
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
                    marginRight: '8px',
                  }}
                >
                  Register
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </AppContainer>
  )
}
