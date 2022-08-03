import axios from 'axios'

import { BASE_URL } from '../constants/index'

export const getAllMoives = async () => {
  return await axios.get(`${BASE_URL}data/movies`)
}

export const getMovieById = () => {
  return axios.get(
    `${BASE_URL}data/movies/a9bae6d8-793e-46c4-a9db-deb9e3484909`,
  )
}
