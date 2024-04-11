import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://isaac-marshall.mds-nantes.yt/api',
  timeout: 10000,
  header: {
    'Contenuset-type': 'application/json',
    Accept: 'application/json'
  }
})

const testApi = async () => {
  const response = await axiosInstance.get('/users')
  return response?.data
}

export { testApi }
