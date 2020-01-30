import axios from 'axios'

const api = axios.create({
  baseURL: 'https://findevs-backend.herokuapp.com'
})

export default api