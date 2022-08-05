import { Box, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'

import { getMovieById } from '../../services/movies'
import { AppContainer } from '../Common/AppContainer'
import { DeleteMoiveModal } from './DeleteModal/index'

export const Details = () => {
  const [movie, setMovie] = useState()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById()
      setMovie(data.data)
    })()
  }, [])

  const onDeleteHandler = () => {
    setIsDeleteModalOpen(true)
  }
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
              <Box sx={{ marginTop: '240px' }}>
                <Button
                  variant="contained"
                  sx={{ color: 'white', backgroundColor: '#1065E6' }}
                >
                  Edit
                </Button>
                <Button sx={{ color: 'red' }} onClick={onDeleteHandler}>
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
      <DeleteMoiveModal
        movie={movie}
        isOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
      />
    </AppContainer>
  )
}
