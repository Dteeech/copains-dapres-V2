import './Footer.css'

function Footer () {
  return (
    <footer className=' w-full text-white h-30 text-start absolute left-0 flex gap-10 bg-primary-500 py-6 px-10'>
      <div className=' container flex flex-col  align-top w-1/4'>
        <h3 className='border-b-2 text-2xl py-4 border-white'>Liens</h3>
        <nav className=' flex flex-col mt-4'>
          <a href='/accueil'>accueil</a>
          <a href='/annonces'>Annonce</a>
          <a href='/favoris'>Favoris</a>
          <a href='/blog'>Blog</a>
          <a href='/about'>Qui sommes-nous ?</a>
          <a href='/notifications'>Notifications</a>
          <a href='/messagerie'>Messagerie</a>
          <a href='/profil'>Profil</a>

        </nav>
      </div>
      <div className='flex flex-col w-1/4 h-max'>
        <h3 className='border-b-2 text-2xl py-4 border-white '>Informations légales</h3>
        <nav className=' flex flex-col mt-4'>
          <a href='/cookies'>Cookies</a>
          <a href='/policie'>Politique de confidentialité</a>
          <a href='/conditions-generales'>Conditions générales</a>

        </nav>
      </div>
      <div className='flex flex-col w-1/4 h-max'>
        <h3 className='border-b-2 text-2xl py-4 border-white'>Besoin d'informations</h3>
        <nav className=' flex flex-col mt-4 h-max'>
          <a href='/faq'>FAQ</a>
          <a href='/plan-site'>Plan du site</a>
          <a href='/contact'>Contact</a>

        </nav>
      </div>
      <div className='flex flex-col w-1/4'>
        <h3 className='border-b-2 text-2xl py-4 border-white'>Retrouvez-nous sur</h3>
        <nav className=' flex flex-col mt-4'>
          <a href='/faq'>FAQ</a>
          <a href='/plan-site'>Plan du site</a>
          <a href='/contact'>Contact</a>

        </nav>
      </div>
    </footer>
  )
}

export default Footer
