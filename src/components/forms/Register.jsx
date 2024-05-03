import { useState } from 'react'
import './Register.css'
import Input from './inputs/Input'
import Button from './buttons/Button'
import { registerApi } from '../../services/api'


function Register() {


  const [formData, setFormData] = useState({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.fr',
    password: 'testestest123456'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      
        const credentials = formData
        registerApi(credentials)
      
      console.log('formulaire envoyé')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container flex flex-col justify-center align-center bg-white w-1/4 h-auto p-4 rounded-lg' >
      <h1 className='text-primary-500 text-center'>S'inscrire</h1>
      <form onSubmit={handleSubmit} className='container justify-center align-center grid gap-4'>

        <Input type='text' name='first_name' value={formData.first_name} onChange={handleChange} PlaceHolder='Prénom' />
        <Input type='text' name='last_name' value={formData.last_name} onChange={handleChange} PlaceHolder='Nom' />
        <Input type='text' name='email' value={formData.email} onChange={handleChange} PlaceHolder='Email' />
        <Input type='password' name='password' value={formData.password} onChange={handleChange} PlaceHolder='Mot de passe' />
        <Button children="S'inscrire" type="submit" />


      </form>

    </div>
  )
}

export default Register
