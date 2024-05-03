import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<Auth />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Router
