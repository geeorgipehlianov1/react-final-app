import { useEffect, useState, useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useParams, Link } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

import { AuthContext } from '../../contexts/AuthContext'
import { DeleteMoiveModal } from './DeleteModal/index'
import { AppContainer } from '../Common/AppContainer'
import { getMovieById } from '../../services/movies'

export const Details = () => {
  const [movie, setMovie] = useState()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById(id)
      setMovie(data.data)
    })()
  }, [id])

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
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Box>
              <img
                src={movie.img && movie.img}
                alt="movie"
                width="300px"
                height="400px"
                style={{ borderRadius: '12px' }}
              />
            </Box>
            <Box>
              <Typography>{movie.title}</Typography>
              <Typography>{movie.description}</Typography>
              <Box sx={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                <ThumbUpIcon
                  onClick={() => console.log('yes')}
                  style={{ color: '#1065E6', cursor: 'pointer' }}
                />
                <ThumbDownIcon style={{ color: 'red', cursor: 'pointer' }} />
              </Box>

              {user._id === movie._ownerId && (
                <Box sx={{ marginTop: '200px' }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#1065E6' }}
                  >
                    <Link
                      to={`/edit/${id}`}
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button sx={{ color: 'red' }} onClick={onDeleteHandler}>
                    Delete
                  </Button>
                </Box>
              )}
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
