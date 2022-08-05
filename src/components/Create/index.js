import { Typography, OutlinedInput, Box, Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

import { AppContainer } from '../Common/AppContainer'

export const CreateBook = () => {
  //   const redirecter = useNavigate()
  //   const onAddMovieHandler = () => {}

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
        gap: '12px',
      }}
    >
      <Typography fontSize="28px">Add Movie</Typography>

      <Box>
        <Typography mb={1}>Title</Typography>
        <OutlinedInput sx={{ width: '300px', height: '44px' }} />
      </Box>

      <Box>
        <Typography mb={1}>Description</Typography>
        <OutlinedInput sx={{ width: '300px', height: '44px' }} />
      </Box>
      <Box>
        <Typography mb={1}>Plot</Typography>
        <OutlinedInput sx={{ width: '300px', height: '44px' }} />
      </Box>
      <Box>
        <Typography mb={1}>Actors</Typography>
        <OutlinedInput sx={{ width: '300px', height: '44px' }} />
      </Box>
      <Button
        sx={{
          height: '44px',
          fontSize: '14px',
          marginTop: '20px',
          color: 'white',
          backgroundColor: '#1065E6',
          width: '300px',
        }}
        variant="contained"
        // onClick={() => redirecter.push('/catalog')}
      >
        Add movie
      </Button>
    </AppContainer>
  )
}
