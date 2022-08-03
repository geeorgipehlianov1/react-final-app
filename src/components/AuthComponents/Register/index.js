import { Box, Typography, OutlinedInput, Button } from '@mui/material'
import { useState } from 'react'

import { AppContainer } from '../../Common/AppContainer'
import { error } from '../../../utils/notifications'
import { register } from '../../../services/auth'

export const Register = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repass, setRepass] = useState()

  const onRegisterHandler = async () => {
    try {
      if (password !== repass) {
        alert('Password dont match')
      } else {
        const data = await register({ email, password })
        console.log(data.data)
      }
    } catch (err) {
      error({ title: 'A user with the same email already exists!' })
    }
  }

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
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '300px', height: '44px' }}
          />

          <OutlinedInput
            placeholder="Add password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            sx={{ width: '300px', height: '44px' }}
          />

          <OutlinedInput
            placeholder="Repeat password"
            onChange={(e) => setRepass(e.target.value)}
            type="password"
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
          onClick={onRegisterHandler}
        >
          Register
        </Button>
      </Box>
    </AppContainer>
  )
}
