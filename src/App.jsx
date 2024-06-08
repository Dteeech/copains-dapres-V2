import './App.css'
import Router from './navigation/Router'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { AuthProvider } from './context/Context'


function App () {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
