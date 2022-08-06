import { Typography, OutlinedInput, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { AppContainer } from '../Common/AppContainer'
import { createMovie } from '../../services/movies'

export const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [plot, setPlot] = useState('')
  const [actors, setActors] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const onAddMovieHandler = async () => {
    const result = await createMovie(token, { title, description })
    console.log(result)
    navigate(`/details/${result.data._id}`)
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
      <Typography fontSize="28px">Add Movie</Typography>

      <Box>
        <Typography mb={1}>Title</Typography>
        <OutlinedInput
          value={title}
          placeholder="Add movie name here"
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box>
        <Typography mb={1}>Description</Typography>
        <OutlinedInput
          value={description}
          placeholder="Add movie name description"
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box>
        <Typography mb={1}>Plot</Typography>
        <OutlinedInput
          placeholder="Add movie name plot"
          value={plot}
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setPlot(e.target.value)}
        />
      </Box>
      <Box>
        <Typography mb={1}>Actors</Typography>
        <OutlinedInput
          placeholder="Add movie name actors"
          value={actors}
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setActors(e.target.value)}
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
        onClick={onAddMovieHandler}
      >
        Add movie
      </Button>
    </AppContainer>
  )
}
