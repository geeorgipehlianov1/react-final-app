import { Box, Typography, Button } from '@mui/material'

import { ModalComponent } from '../../Common/Modal'

export const DeleteMoiveModal = ({ isOpen, closeModal, movie }) => {
  const onConfirmHandler = async () => {
    closeModal()
  }

  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal} afterOpen={null}>
      <Box
        sx={{
          maxWidth: '300px',
          position: 'relative',
          margin: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography mb={1.5} sx={{ fontSize: '18px', color: '#181B21' }}>
            Delete Movie
          </Typography>
          <Typography variant="body2" mb={4} sx={{ color: '#343840' }}>
            Are you sure you want to delete {movie && movie.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              width: '232px',
            }}
          >
            <Button
              variant={'outlined'}
              fullWidth
              sx={{
                height: '36px',
                border: '1px solid #BFC2C9',
                color: '#343840',
                fontWeight: '400',
              }}
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              variant={'contained'}
              fullWidth
              sx={{ height: '36px', fontWeight: '400' }}
              onClick={onConfirmHandler}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </ModalComponent>
  )
}
