import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AppContainer } from '../Common/AppContainer'
import { HomePageList } from './HomePageList/index'
import { getAllMoives } from '../../services/movies'

export const HomePage = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    ;(async () => {
      const data = await getAllMoives()
      const updatedArray = data.data.slice(-3)
      setMovies(updatedArray)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContainer
      sx={{
        height: '44px',
        fontSize: '14px',
        marginTop: '20px',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h4">Hello to Movie List</Typography>
        <Typography
          sx={{ textAlign: 'center', maxWidth: '500px', color: '#989CA6' }}
        >
          Here are ours top three movies in the website. If you want to see more
          movies and there details you can{' '}
          <Link style={{ textDecoration: 'none' }} to="/login">
            Login
          </Link>{' '}
          into your profile or just simply{' '}
          <Link style={{ textDecoration: 'none' }} to="/register">
            Register
          </Link>
          , only email is required.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          maxWidth: '1200px',
        }}
      >
        {movies &&
          movies.map((movie) => <HomePageList key={movie._id} movie={movie} />)}
      </Box>
    </AppContainer>
  )
}
