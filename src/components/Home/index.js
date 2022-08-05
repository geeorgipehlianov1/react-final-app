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
        height: '44px',
        fontSize: '14px',
        marginTop: '20px',
        maxWidth: '1200px',
      }}
    >
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
                    width="300px"
                    height="300px"
                  />
                </Box>
              </Box>
            </>
          ))}
      </Box>
    </AppContainer>
  )
}
