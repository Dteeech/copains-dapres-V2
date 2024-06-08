import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Annonces from '../pages/Annonces'
import Team from '../pages/Team'
import HouseShareInstance from '../pages/HouseShareInstance'


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<Auth />} />
        <Route path='/annonces' element={<Annonces />} />
        <Route path='/about' element={<Team />} />
        <Route path='/annonces/colocation/:id' element={<HouseShareInstance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
