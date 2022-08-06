import { useEffect, useState, useContext } from 'react'
import { Box, Typography } from '@mui/material'
// import { Link } from 'react-router-dom'

import { AppContainer } from '../Common/AppContainer'
import { AuthContext } from '../../contexts/AuthContext'
import { getAllMoives } from '../../services/movies'

import { MovieBox } from '../Catalog/MovieBox'

export const MyProfile = () => {
  const [myMovies, setMyMovies] = useState()

  const { user } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      const data = await getAllMoives()
      const myMovieList = data.data.filter(
        (movie) => movie._ownerId === user._id,
      )
      setMyMovies(myMovieList)
    })()
  }, [user._id])

  return (
    <AppContainer
      sx={{
        height: '44px',
        fontSize: '14px',
        marginTop: '20px',
        maxWidth: '1200px',
      }}
    >
      {myMovies.length !== 0 ? (
        <>
          <Typography fontSize="28px">Hello {user.email}</Typography>
          <Typography fontSize="20px">
            Here is your personal Movie List
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              width: '100%',
            }}
          >
            {myMovies &&
              myMovies.map((movie) => (
                <MovieBox key={movie._id} movie={movie} />
              ))}
          </Box>
        </>
      ) : (
        <>
          <Typography fontSize="28px">Hello {user.email}</Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '12px',
              marginTop: '100px',
              padding: '24px',
              boxShadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.12);',
            }}
          >
            <Typography>
              We are sorry but you still don't have any added movies yet!
            </Typography>
            {/* <Link to="/cataolg">Here</Link> */}
          </Box>
        </>
      )}
    </AppContainer>
  )
}
