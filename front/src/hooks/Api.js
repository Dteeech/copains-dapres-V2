import { useEffect, useState } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

const useFetch = (endpoint) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const branch = process.env.CI_BRANCH || process.env.GIT_BRANCH || 'develop'
  if (branch === 'develop') {
    dotenv.config({ path: '.env.develop' })
  } else if (branch === 'main') {
    dotenv.config({ path: '.env.main' })
  } else {
    dotenv.config() // Charger le fichier .env par défaut
  }
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(process.env.REACT_APP_URL + endpoint)
        console.log(response)
        setResponse(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setIsLoading(false)
      }
    }
    getData()
  }, [endpoint])

  return { response, error, isLoading }
}

export {
  useFetch
}
