import axios from 'axios'
const BASE_URL = 'http://localhost:8080'

export const post = (url, params, config = {}) => {
  return axios.post(`${BASE_URL}${url}`, params, config)
}

export const get = (url, config = {}) => {
  return axios.get(`${BASE_URL}${url}`, config)
}
