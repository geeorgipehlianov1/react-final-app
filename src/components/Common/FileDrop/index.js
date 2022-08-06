import { Box, Typography, CircularProgress } from '@mui/material'
import { useDropzone } from 'react-dropzone'

export const FileDrop = ({
  acceptFileType,
  onFileDrop,
  caption,
  fileUploadingFlag,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptFileType,
    onDrop: onFileDrop,
  })

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        border: '2px dashed #BFC2C9',
        boxSizing: 'border-box',
        borderRadius: '6px',
        height: '100%',
        width: '300px',
        gap: 2,
        cursor: 'pointer',
        marginTop: '20px',
      }}
    >
      <input {...getInputProps()} />
      {fileUploadingFlag === true ? (
        <CircularProgress size={'24px'} />
      ) : (
        <img src="./plus.png" width="23px" height="23px" alt="Add" />
      )}
      <Typography variant="body2" color="#343840">
        {caption}
      </Typography>
    </Box>
  )
}
