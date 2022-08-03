import { Box, Typography } from '@mui/material'

import { AppContainer } from '../../Common/AppContainer'

export const Footer = () => {
  return (
    <Box
      sx={{
        mb: 5,
        color: 'black',
      }}
    >
      <AppContainer
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontSize="12px">2022 Copyright opn.mint</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography fontSize="12px">Terms of service</Typography>
          <Typography fontSize="12px">Privacy Policy</Typography>
        </Box>
      </AppContainer>
    </Box>
  )
}
