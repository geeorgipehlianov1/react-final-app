import axios from 'axios'
import { BASE_URL } from '../constants'

export const login = async (data) => {
  return await axios.post(`${BASE_URL}users/login`, data)
}

export const register = async (data) => {
  return await axios.post(`${BASE_URL}users/register`, data)
}

export const Logout = async () => {
  return await axios.get(`${BASE_URL}users/logout`)
}
