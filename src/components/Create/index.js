import { Typography, OutlinedInput, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Image } from 'cloudinary-react'

import { createMovie, uploadImages } from '../../services/movies'
import { error, success } from '../../utils/notifications/index'
import { AuthContext } from '../../contexts/AuthContext'
import { AppContainer } from '../Common/AppContainer'
import { FileDrop } from '../Common/FileDrop/index'

export const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [isTitleIncorrect, setIsTitleIncorrect] = useState(false)
  const [description, setDescription] = useState('')
  const [isDescriptionIncorrect, setIsDescriptionIncorrect] = useState(false)
  const [plot, setPlot] = useState('')
  const [actors, setActors] = useState('')
  const navigate = useNavigate()
  const [img, setImageUrl] = useState('')
  const [fileUploadingFlag, setFileUploadingFlag] = useState(false)

  const { user } = useContext(AuthContext)

  const titleCheck = () => {
    if (title.length >= 30) {
      setIsTitleIncorrect(true)
      return
    } else {
      setIsTitleIncorrect(false)
    }
  }

  const descriptionCheck = () => {
    if (description.length < 50) {
      setIsDescriptionIncorrect(true)
      return
    } else {
      setIsDescriptionIncorrect(false)
    }
  }

  const onAddMovieHandler = async () => {
    if (isTitleIncorrect === false && isDescriptionIncorrect === false) {
      try {
        const result = await createMovie(user.accessToken, {
          title,
          description,
          img,
        })
        success('You have successfully added a movie!')
        navigate(`/details/${result.data._id}`)
      } catch (err) {
        error('To add movie you have to log in!')
      }
    }
  }

  const onFileDrop = async (acceptedFiles) => {
    setFileUploadingFlag(true)
    await uploadImages(acceptedFiles[0], setImageUrl)
    setFileUploadingFlag(false)
  }

  return (
    <>
      <AppContainer
        sx={{
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '72px',
          paddingTop: '72px',
          flexFlow: 'row',
          gap: '20px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography fontSize="28px">Add Movie</Typography>

          <Box>
            <Typography mb={1}>Title</Typography>
            <OutlinedInput
              value={title}
              onBlur={titleCheck}
              placeholder="Add movie name here"
              sx={{ width: '300px', height: '44px' }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          {isTitleIncorrect && (
            <Typography variant="body2" sx={{ color: 'red' }}>
              Name must be at most 30 characters long{' '}
            </Typography>
          )}

          <Box>
            <Typography mb={1}>Description</Typography>
            <OutlinedInput
              value={description}
              onBlur={descriptionCheck}
              placeholder="Add movie name description"
              sx={{ width: '300px', height: '44px' }}
              onChange={(e) => setDescription(e.target.value)}
            />
            {isDescriptionIncorrect && (
              <Typography variant="body2" sx={{ color: 'red' }}>
                Description must be at least 50 characters long
              </Typography>
            )}
          </Box>
          <Box>
            <Typography mb={1}>Plot</Typography>
            <OutlinedInput
              placeholder="Add movie name plot"
              value={plot}
              sx={{ width: '300px', height: '44px' }}
              onChange={(e) => setPlot(e.target.value)}
            />
          </Box>
          <Box>
            <Typography mb={1}>Actors</Typography>
            <OutlinedInput
              placeholder="Add movie name actors"
              value={actors}
              sx={{ width: '300px', height: '44px' }}
              onChange={(e) => setActors(e.target.value)}
            />
          </Box>
          <Button
            sx={{
              height: '44px',
              fontSize: '14px',
              marginTop: '20px',
              color: 'white',
              backgroundColor: '#1065E6',
              width: '300px',
            }}
            variant="contained"
            onClick={onAddMovieHandler}
          >
            Add movie
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '300px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {img ? (
            <Image
              width="300px"
              height="300px"
              style={{ borderRadius: '12px', marginTop: '32px' }}
              cloudName="dxtxp3sb8"
              publicId={img && img}
            />
          ) : (
            <FileDrop
              caption="Upload Movie Image"
              onFileDrop={onFileDrop}
              fileUploadingFlag={fileUploadingFlag}
            />
          )}
        </Box>
      </AppContainer>
    </>
  )
}
