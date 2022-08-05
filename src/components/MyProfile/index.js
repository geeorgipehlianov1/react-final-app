import { Box, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'

import { getAllMoives } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'

export const MyProfile = () => {
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
      <Typography fontSize="28px">Your personal Movie List</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '100%',
        }}
      >
        {movies &&
          movies.map((movie) => (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '16px',
                  borderRadius: '12px',
                  marginTop: '20px',
                  padding: '24px',
                  boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.12);',
                  marginRight: '16px',
                }}
              >
                <Box>
                  <Typography mb={0.5}>{movie.title}</Typography>
                  <img
                    src={movie.img}
                    alt="Movie"
                    width="200px"
                    height="200px"
                  />
                  <Button>See more details</Button>
                </Box>
                <Box>
                  <Typography mt={3}>
                    {movie.description.slice(0, 80)}...
                  </Typography>
                </Box>
              </Box>
            </>
          ))}
      </Box>
    </AppContainer>
  )
}
