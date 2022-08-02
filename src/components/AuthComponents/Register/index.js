import { Box, Typography, OutlinedInput, Button } from '@mui/material'

import { AppContainer } from '../../Common/AppContainer'

export const Register = () => {
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
          borderRadius: '12px',
          boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.12);',
          marginTop: '100px',
          padding: '24px',
        }}
      >
        <Box>
          <Typography fontSize="28px" fontWeight="400px" mb={2}>
            Register
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
          <OutlinedInput
            placeholder="Add email"
            sx={{ width: '300px', height: '44px' }}
          />

          <OutlinedInput
            placeholder="Add password"
            sx={{ width: '300px', height: '44px' }}
          />

          <OutlinedInput
            placeholder="Repeat password"
            sx={{ width: '300px', height: '44px' }}
          />
        </Box>
        <Button
          variant={'contained'}
          sx={{
            height: '44px',
            fontSize: '14px',
            marginTop: '20px',
            color: 'white',
            backgroundColor: '#1065E6',
            width: '100px',
          }}
        >
          Register
        </Button>
      </Box>
    </AppContainer>
  )
}
