import axios from 'axios'
import { BASE_URL } from '../constants'

export const login = async (data) => {
  return await axios.post(`${BASE_URL}users/login`, data)
}

export const register = async (data) => {
  return await axios.post(`${BASE_URL}users/register`, data)
}

export const logout = async (token) => {
  localStorage.removeItem('token')
  return await fetch(`${BASE_URL}users/logout`, {
    method: 'GET',
    headers: { 'X-Authorization': token },
  })
}

export const getMyRecords = async (token) => {
  return await axios.get(`${BASE_URL}users/me`, {
    headers: { 'X-Authorization': token },
  })
}
