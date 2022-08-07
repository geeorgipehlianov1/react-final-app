import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { AppContainer } from '../Common/AppContainer'

export const About = () => {
  return (
    <AppContainer
      sx={{
        maxWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '72px',
        paddingTop: '72px',
        flexFlow: 'column',
      }}
    >
      <Typography variant="h4">Few words about us</Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          borderRadius: '12px',
          marginTop: '20px',
          padding: '24px',
          boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.12);',
        }}
      >
        <Typography sx={{ textAlign: 'center', color: '#989CA6' }}>
          Movie list is web application where you can add movies that impressed
          you. You can use this web application for mupltiple things like - you
          can store movies and check them later when you want to watch something
          after a long day or in a lazy Sunday afternoon after crazy Saturday
          nigth. Also you can share those movies with others which means that
          you aslo have accsess to see other librarys and choose from them. We
          hope that you will find our application usefull and we will be gald to
          see you around. If you want to get started just click on the link for
          Register or if you are already our member just click the Login link.
          Have an amazing experience with us.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mt={2}
        >
          <Link
            style={{ textDecoration: 'none', color: '#1065E6' }}
            to="/register"
          >
            Register
          </Link>
          <Link
            style={{ textDecoration: 'none', color: '#1065E6' }}
            to="/login"
          >
            Login
          </Link>
        </Box>
      </Box>
    </AppContainer>
  )
}
