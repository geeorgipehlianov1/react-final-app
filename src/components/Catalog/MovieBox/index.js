import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const MovieBox = ({ movie }) => {
  return (
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
          <img src={movie.img} alt="Movie" width="200px" height="200px" />
          <Link
            to={`/details/${movie._id}`}
            style={{
              textDecoration: 'none',
              fontSize: '16px',
              color: '#1065E6',
            }}
          >
            See more details
          </Link>
        </Box>
        <Box>
          <Typography mt={3}>{movie.description.slice(0, 80)}...</Typography>
        </Box>
      </Box>
    </>
  )
}
