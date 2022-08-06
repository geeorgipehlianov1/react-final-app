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
