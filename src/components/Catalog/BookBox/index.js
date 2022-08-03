import { Box, Typography } from '@mui/material'

export const MovieBox = ({ movie }) => {
  return (
    <>
      <Box>
        <Typography>{movie.title}</Typography>
        <img src={movie.img} alt="Movie" width="200px" height="200px" />
      </Box>
    </>
  )
}
