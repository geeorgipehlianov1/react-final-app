import { Typography, OutlinedInput, Box, Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Image } from 'cloudinary-react'

import { getMovieById, updateMovie, uploadImages } from '../../services/movies'
import { AuthContext } from '../../contexts/AuthContext'
import { error, success } from '../../utils/notifications'
import { AppContainer } from '../Common/AppContainer'
import { FileDrop } from '../Common/FileDrop/index'

export const EditBook = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [movieImg, setMovieImg] = useState('')
  const [plot, setPlot] = useState('')
  const [actors, setActors] = useState('')
  const [changeImage, setChangeImage] = useState(false)
  const [img, setImageUrl] = useState('')
  const [fileUploadingFlag, setFileUploadingFlag] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useContext(AuthContext)

  const [isTitleIncorrect, setIsTitleIncorrect] = useState(false)
  const [isDescriptionIncorrect, setIsDescriptionIncorrect] = useState(false)
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

  useEffect(() => {
    ;(async () => {
      const data = await getMovieById(id)
      setTitle(data.data.title)
      setDescription(data.data.description)
      setMovieImg(data.data.img)
    })()
  }, [id])

  console.log(movieImg)
  const onSubmitHandler = async () => {
    if (isTitleIncorrect === false && isDescriptionIncorrect === false) {
      try {
        await updateMovie(id, { title, description, img }, user.accessToken)
        success('You have successfully edited the movie!')
        navigate(`/details/${id}`)
      } catch (err) {
        console.log(err)
        error('To edit movie you need to be its author!')
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
          gap: '12px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography fontSize="28px">Edit Movie</Typography>

          <Box>
            <Typography mb={1}>Title</Typography>
            <OutlinedInput
              value={title}
              onBlur={titleCheck}
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
              value={plot}
              placeholder="Action..."
              sx={{ width: '300px', height: '44px' }}
              onChange={(e) => setPlot(e.target.value)}
            />
          </Box>
          <Box>
            <Typography mb={1}>Actors</Typography>
            <OutlinedInput
              value={actors}
              placeholder="Tom Cruise.."
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
            onClick={onSubmitHandler}
          >
            Submit changes
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} mt={5}>
          {changeImage ? (
            <>
              {img ? (
                <Image
                  width="300px"
                  height="300px"
                  style={{ borderRadius: '12px', marginTop: '32px' }}
                  cloudName="dxtxp3sb8"
                  publicId={img && img}
                />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '300px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileDrop
                    caption="Upload Movie Image"
                    onFileDrop={onFileDrop}
                    fileUploadingFlag={fileUploadingFlag}
                  />
                </Box>
              )}
            </>
          ) : (
            <>
              <Image
                width="300px"
                height="300px"
                style={{ borderRadius: '12px', marginTop: '32px' }}
                cloudName="dxtxp3sb8"
                publicId={movieImg && movieImg}
              />
              <Button onClick={() => setChangeImage(true)}>
                Change Movie Image
              </Button>
            </>
          )}
        </Box>
      </AppContainer>
    </>
  )
}
