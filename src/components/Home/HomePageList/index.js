import { Box, Typography } from '@mui/material'

export const HomePageList = ({ movie }) => {
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
          maxWidth: '300px',
        }}
      >
        <Box sx={{ maxWidth: '300px' }}>
          <Typography mb={0.5}>{movie.title}</Typography>
          <img src={movie.img} alt="Movie" width="300px" height="300px" />
        </Box>
      </Box>
    </>
  )
}
