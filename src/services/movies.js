import axios from 'axios'

import { BASE_URL } from '../constants/index'

export const getAllMoives = async () => {
  return await axios.get(`${BASE_URL}data/movies`)
}
