import { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import { testApi } from '../services/api'

function Home () {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await testApi()
        setUsers(response)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Hero />
      <div>
        {isLoading && <p>Loading users...</p>}
        {error && <p>Error: {error.message}</p>}
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>

    </>

  )
}

export default Home
