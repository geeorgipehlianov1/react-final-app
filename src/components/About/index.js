import { Typography } from '@mui/material'

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
      <Typography>About page</Typography>
    </AppContainer>
  )
}
