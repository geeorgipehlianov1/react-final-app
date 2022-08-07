import { Box, Typography, OutlinedInput, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

import { AuthContext } from '../../../contexts/AuthContext'
import { AppContainer } from '../../Common/AppContainer'
import { error } from '../../../utils/notifications'
import { register } from '../../../services/auth'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repass, setRepass] = useState('')
  const [isEmailWrong, setIsEmailWrong] = useState(false)
  const [isPasswordWrong, setIsPasswordWrong] = useState(false)
  const [isRepassWrong, setIsRepassWrong] = useState(false)
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const passwordCheck = () => {
    if (password.length < 6) {
      setIsPasswordWrong(true)
      return
    } else {
      setIsPasswordWrong(false)
    }
  }

  const rePassCheck = () => {
    if (repass.length < 6) {
      setIsRepassWrong(true)
      return
    } else {
      setIsRepassWrong(false)
    }
  }

  const emailCheck = () => {
    const pattern = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/g
    if (!email.match(pattern)) {
      setIsEmailWrong(true)
      return
    } else {
      setIsEmailWrong(false)
    }
  }

  const onRegisterHandler = async () => {
    if (
      isEmailWrong === false &&
      isPasswordWrong === false &&
      isRepassWrong === false
    ) {
      try {
        if (password !== repass) {
          error('Passwords dont match')
        } else {
          const data = await register({ email, password })
          userLogin(data.data)
          navigate('/catalog')
        }
      } catch (err) {
        error(err.response.data.message)
      }
    }
  }

  return (
    <>
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
              onBlur={emailCheck}
              sx={{ width: '300px', height: '44px' }}
            />
            {isEmailWrong && (
              <Typography sx={{ color: 'red' }}>
                Valid email pattern: name@abv.bg
              </Typography>
            )}

            <OutlinedInput
              placeholder="Add password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={passwordCheck}
              type="password"
              sx={{ width: '300px', height: '44px' }}
            />
            {isPasswordWrong && (
              <Typography sx={{ color: 'red' }}>
                Password must be at least 6 characters long
              </Typography>
            )}

            <OutlinedInput
              placeholder="Repeat password"
              onChange={(e) => setRepass(e.target.value)}
              onBlur={rePassCheck}
              type="password"
              sx={{ width: '300px', height: '44px' }}
            />
            {isRepassWrong && (
              <Typography sx={{ color: 'red' }}>
                Password must be at least 6 characters long
              </Typography>
            )}
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
    </>
  )
}
