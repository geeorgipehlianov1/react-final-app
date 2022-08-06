import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useContext } from 'react'

import { AppContainer } from '../../Common/AppContainer'
import { AuthContext } from '../../../contexts/AuthContext'
import { BASE_URL } from '../../../constants/index'
export const NavBar = () => {
  const { user, userLogin } = useContext(AuthContext)
  console.log(user)

  const logoutHandler = async () => {
    userLogin({})
    return await fetch(`${BASE_URL}users/logout`, {
      method: 'GET',
      headers: { 'X-Authorization': user.accessToken },
    })
  }

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
            </>
            {user.accessToken ? (
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
                  <Link
                    to="/"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: '16px',
                      marginRight: '8px',
                    }}
                    onClick={logoutHandler}
                  >
                    Logout
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
