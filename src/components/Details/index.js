import { Box, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'

import { getMovieById } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'

export const Details = () => {
  const [movie, setMovie] = useState()

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById()
      setMovie(data.data)
    })()
  }, [])

  return (
    <AppContainer
      sx={{
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '50px',
        paddingTop: '72px',
        flexFlow: 'column',
        gap: '12px',
      }}
    >
      {movie && (
        <>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Box>
              <img src={movie.img} alt="movie" width="300px" height="400px" />
            </Box>
            <Box>
              <Typography>{movie.title}</Typography>
              <Typography>{movie.description}</Typography>
              <Button variant="contained">Edit</Button>
              <Button>Delete</Button>
            </Box>
          </Box>
        </>
      )}
    </AppContainer>
  )
}
