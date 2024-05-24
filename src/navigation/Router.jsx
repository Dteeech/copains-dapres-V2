import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Annonces from '../pages/Annonces'


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<Auth />} />
        <Route path='/annonces' element={<Annonces />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Router
