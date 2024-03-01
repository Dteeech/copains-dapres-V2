import '../header/Header.css'
import logo from '../../../public/images/Logoipsum.svg'
function Header () {
  return (
    <header className='main'>

      <a href='/' className='logo'>
        <img src={logo} alt='logo' />
      </a>
      <nav>

        <a href='/annonces'>Annonces</a>
        <a href='/favori'>Favori</a>
        <a href='/blog'>Blog</a>
        <a href='/about'>Qui sommes nous</a>
        <a href='/notifications'>Notifications</a>
        <a href='/messages'>Messagerie</a>
        <a href='/authentication'>
          <button>
            Profil
          </button>
        </a>

      </nav>

    </header>
  )
}

export default Header
