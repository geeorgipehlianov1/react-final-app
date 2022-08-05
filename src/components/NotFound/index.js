import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { AppContainer } from '../Common/AppContainer'

export const NotFound = () => {
  return (
    <AppContainer
      sx={{
        maxWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
      }}
    >
      <Box>
        <img src="./404.png" alt="NotFond" width="800px" />
      </Box>
      <Button variant="contained" sx={{ backgroundColor: '#1065E6' }}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
          Go to Home Page
        </Link>
      </Button>
    </AppContainer>
  )
}
