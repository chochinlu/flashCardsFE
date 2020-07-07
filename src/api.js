import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

export function login({ username, password }) {
  return instance.post('login', { username, password })
}

export function getAllCards() {
  return instance.get('flash_card')
}