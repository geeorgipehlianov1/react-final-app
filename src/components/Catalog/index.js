import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { getAllMoives } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'
import { MovieBox } from './BookBox/index'

export const Catalog = () => {
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
        height: '44px',
        fontSize: '14px',
        marginTop: '20px',
        maxWidth: '1200px',
      }}
    >
      <Typography fontSize="28px">Full movie list</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '100%',
        }}
      >
        {movies && movies.map((movie) => <MovieBox movie={movie} />)}
      </Box>
    </AppContainer>
  )
}
