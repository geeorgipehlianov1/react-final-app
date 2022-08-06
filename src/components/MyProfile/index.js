import { Box, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'

import { getAllMoives } from '../../services/movies'
import { getMyRecords } from '../../services/auth'
import { AppContainer } from '../Common/AppContainer'

import { MovieBox } from '../Catalog/MovieBox'

export const MyProfile = () => {
  const [movies, setMovies] = useState()
  const [records, setRecords] = useState()

  useEffect(() => {
    const token = localStorage.getItem('token')
    ;(async () => {
      const data = await getAllMoives()
      const myRecords = await getMyRecords(token)
      setMovies(data.data)
      setRecords(myRecords)
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
      <Typography fontSize="28px">Your personal Movie List</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '100%',
        }}
      >
        {movies &&
          movies.map((movie) => <MovieBox key={movie._id} movie={movie} />)}
      </Box>
    </AppContainer>
  )
}
