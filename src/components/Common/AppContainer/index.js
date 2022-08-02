import { Container } from '@mui/material'

export const AppContainer = ({ maxWidth = false, sx, ...restProps }) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        maxWidth: maxWidth ? 'initial' : 1500,
        ...sx,
      }}
      {...restProps}
    ></Container>
  )
}
