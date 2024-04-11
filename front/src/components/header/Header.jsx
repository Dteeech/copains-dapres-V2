import '../header/Header.css'
import logo from '../../assets/images/logo.svg'
import annoncePicto from '../../assets/images/icons/annonce.svg'
import blogPicto from '../../assets/images/icons/blog.svg'
import favoriPicto from '../../assets/images/icons/favori.svg'
import messageriePicto from '../../assets/images/icons/messagerie.svg'
import notificationsPicto from '../../assets/images/icons/notifications.svg'
import profilPicto from '../../assets/images/icons/profil.svg'
import quiPicto from '../../assets/images/icons/qui.svg'

function Header () {
  return (
    <header className=' w-full fixed top-0 left-0 flex align-middle justify-between bg-secondary_bg shadow-2xl px-6'>
      <a href='/' className='logo h-auto'>
        <img src={logo} alt='logo' width='200' height='auto' />
      </a>
      <nav className='text-primary-500 flex items-center justify-center'>
        <a href='/annonces'>
          <div className='flex items-center flex-col mx-4'> <img src={annoncePicto} alt='' />
            Annonces
          </div>
        </a>
        <a href='/favori'>
          <div className='flex items-center flex-col mx-4'> <img src={favoriPicto} alt='' />
            Favori
          </div>
        </a>
        <a href='/blog'>
          <div className='flex items-center flex-col mx-4'> <img src={quiPicto} alt='' />
            Blog
          </div>
        </a>
        <a href='/about'>
          <div className='flex items-center flex-col mx-4'> <img src={blogPicto} alt='' />
            Qui sommes nous
          </div>
        </a>
        <a href='/notifications'>
          <div className='flex items-center flex-col mx-4'> <img src={notificationsPicto} alt='' />
            Notifications
          </div>
        </a>
        <a href='/messages'>
          <div className='flex items-center flex-col mx-4'> <img src={messageriePicto} alt='' />
            Messagerie
          </div>
        </a>
        <a href='/authentication'>
          <div className='flex items-center flex-col mx-4'> <img src={profilPicto} alt='' />
            Profil
          </div>
        </a>
      </nav>
    </header>
  )
}

export default Header
