import axios from 'axios'

import { BASE_URL } from '../constants/index'

export const getAllMoives = async () => {
  return await axios.get(`${BASE_URL}data/movies?sortBy=_createdOn%20desc`)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}data/movies/${id}`)
}

export const createMovie = (token, data) => {
  return axios.post(`${BASE_URL}data/movies`, data, {
    headers: { 'X-Authorization': token },
  })
}

export const updateMovie = async (id, data, token) => {
  return axios.put(`${BASE_URL}data/movies/${id}`, data, {
    headers: { 'X-Authorization': token },
  })
}

export const deleteMovie = async (id, token) => {
  return axios.delete(`${BASE_URL}data/movies/${id}`, {
    headers: { 'X-Authorization': token },
  })
}

export const uploadImages = async (image, setImageUrl) => {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', 'nkvljsem')

  const result = await axios.post(
    'https://api.cloudinary.com/v1_1/dxtxp3sb8/image/upload',
    formData,
  )
  setImageUrl(result.data.url)
}

export const getLikes = async () => {
  return await axios.get(`${BASE_URL}data/likes`)
}

export const likes = async (data, token) => {
  return await axios.post(`${BASE_URL}data/likes`, data, {
    headers: { 'X-Authorization': token },
  })
}

export const dislike = async (id, token) => {
  return await axios.delete(`${BASE_URL}data/likes/${id}`, {
    headers: { 'X-Authorization': token },
  })
}
