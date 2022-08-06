import { Typography, OutlinedInput, Box, Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getMovieById, updateMovie } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'

export const EditBook = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [plot, setPlot] = useState('')
  const [actors, setActors] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById(id)
      setTitle(data.data.title)
      setDescription(data.data.description)
    })()
  }, [id])

  const onSubmitHandler = async () => {
    try {
      const token = localStorage.getItem('token')
      console.log(token)
      updateMovie(id, { title, description }, token)
      navigate(`/details/${id}`)
    } catch (err) {
      console.log(err)
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
        gap: '12px',
      }}
    >
      <Typography fontSize="28px">Edit Movie</Typography>

      <Box>
        <Typography mb={1}>Title</Typography>
        <OutlinedInput
          value={title}
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box>
        <Typography mb={1}>Description</Typography>

        <OutlinedInput
          value={description}
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box>
        <Typography mb={1}>Plot</Typography>
        <OutlinedInput
          value={plot}
          placeholder="Action..."
          sx={{ width: '300px', height: '44px' }}
          onChange={(e) => setPlot(e.target.value)}
        />
      </Box>
      <Box>
        <Typography mb={1}>Actors</Typography>
        <OutlinedInput
          value={actors}
          placeholder="Tom Cruise.."
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
        onClick={onSubmitHandler}
      >
        Submit changes
      </Button>
    </AppContainer>
  )
}
