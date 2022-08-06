import axios from 'axios'
import { BASE_URL } from '../constants'

export const login = async (data) => {
  return await axios.post(`${BASE_URL}users/login`, data)
}

export const register = async (data) => {
  return await axios.post(`${BASE_URL}users/register`, data)
}

export const getMyRecords = async (token) => {
  return await axios.get(`${BASE_URL}users/me`, {
    headers: { 'X-Authorization': token },
  })
}
