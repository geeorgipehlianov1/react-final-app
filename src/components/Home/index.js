import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { AppContainer } from '../Common/AppContainer'
import { getAllMoives } from '../../services/movies'

export const HomePage = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    ;(async () => {
      const data = await getAllMoives()
      setMovies(data.data)
    })()
  }, [])

  return (
    <AppContainer
      sx={{
        maxWidth: '1400',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {movies &&
          movies.map((movie) => (
            <>
              <Typography>{movie.title}</Typography>
              <img
                src={movie.img}
                alt="MoiveImage"
                style={{ width: '300px', height: '400px' }}
              />
            </>
          ))}
      </Box>
    </AppContainer>
  )
}
