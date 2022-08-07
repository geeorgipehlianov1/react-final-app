// import { Box, Typography } from '@mui/material'

import { AppContainer } from '../../Common/AppContainer'
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Footer = () => {
  return (
    <Box
      sx={{
        mb: 5,
        color: 'black',
        position: 'absolute',
        left: '0',
        bottom: '0',
        right: '0',
      }}
    >
      <AppContainer
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontSize="12px">2022 Copyright Movie List</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography fontSize="12px">Contacts: movies@gmal.com</Typography>
          <Typography fontSize="12px">Privacy Policy</Typography>
        </Box>
      </AppContainer>
    </Box>
  )
}
