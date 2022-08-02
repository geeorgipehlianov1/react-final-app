import { Box, Typography, OutlinedInput, Button } from '@mui/material'

import { AppContainer } from '../../Common/AppContainer'

export const Login = () => {
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '1px solid blue',
          borderRadius: '12px',
          marginTop: '100px',
          padding: '24px',
        }}
      >
        <Box>
          <Typography fontSize="28px" fontWeight="400px" mb={2}>
            Login
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'ceter',
            justifyContent: 'center',
          }}
        >
          <Box>
            <OutlinedInput placeholder="Add email" fullWidth />
          </Box>
          <Box>
            <OutlinedInput placeholder="Add password" fullWidth />
          </Box>
        </Box>
        <Button
          variant={'contained'}
          sx={{
            height: '44px',
            fontSize: '14px',
            marginTop: '16px',
            color: 'white',
            backgroundColor: 'light-blue',
            width: '100px',
          }}
        >
          Login
        </Button>
      </Box>
    </AppContainer>
  )
}
