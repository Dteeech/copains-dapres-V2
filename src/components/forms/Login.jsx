import { useState } from 'react'
import Input from './inputs/Input'
import Button from './buttons/Button'
import { loginApi } from '../../services/api'

function login() {
    const [formData, setFormData] = useState({
        firstname: 'John',
        lastname: 'Doe',
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
        const credentials = formData
        console.log('formulaire envoyé')
        loginApi(credentials)
    }

    return (
        <div className='container flex flex-col justify-center align-center bg-white w-1/4 h-auto p-4 rounded-lg' >
            <h1 className='text-primary-500 text-center'>S'inscrire</h1>
            <form onSubmit={handleSubmit} className='container justify-center align-center grid gap-4'>

                <Input type='text' name='firstname' value={formData.firstname} onChange={handleChange} PlaceHolder='Prénom' />
                <Input type='text' name='lastname' value={formData.lastname} onChange={handleChange} PlaceHolder='Nom' />
                <Input type='text' name='email' value={formData.email} onChange={handleChange} PlaceHolder='Email' />
                <Input type='password' name='password' value={formData.password} onChange={handleChange} PlaceHolder='Mot de passe' />
                <Button children="S'inscrire" />

            </form>

        </div>
    )
}

export default login
