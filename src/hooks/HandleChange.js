// useInputChange hook
import { useState } from 'react'

const useInputChange = () => {
  const [inputValues, setInputValues] = useState({})

  const handleChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }))
  }

  return {
    inputValues,
    handleChange
  }
}

export { useInputChange }
