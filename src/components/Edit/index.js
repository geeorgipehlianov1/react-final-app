import { Typography, OutlinedInput, Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getMovieById } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'

export const EditBook = () => {
  const [movie, setMovie] = useState()
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById(id)
      setMovie(data.data)
    })()
  }, [id])

  const onSubmitHandler = () => {
    navigate(`/details/${id}`)
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
        gap: '12px',
      }}
    >
      <Typography fontSize="28px">Edit Movie</Typography>

      <Box>
        <Typography mb={1}>Title</Typography>
        <OutlinedInput
          value={movie && movie.title}
          sx={{ width: '300px', height: '44px' }}
        />
      </Box>

      <Box>
        <Typography mb={1}>Description</Typography>

        <OutlinedInput
          value={movie && movie.description}
          sx={{ width: '300px', height: '44px' }}
        />
      </Box>
      <Box>
        <Typography mb={1}>Plot</Typography>
        <OutlinedInput
          placeholder="Action..."
          sx={{ width: '300px', height: '44px' }}
        />
      </Box>
      <Box>
        <Typography mb={1}>Actors</Typography>
        <OutlinedInput
          placeholder="Tom Cruise.."
          sx={{ width: '300px', height: '44px' }}
        />
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
        onClick={onSubmitHandler}
      >
        Submit changes
      </Button>
    </AppContainer>
  )
}
