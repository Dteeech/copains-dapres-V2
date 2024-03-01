import './Footer.css'

function Footer () {
  return (
    <footer className='main'>
      <div className='col'>
        <h2>Liens</h2>
        <nav>
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
      <div className='col'>
        <nav>
          <h2>Informations légales</h2>
          <a href='/cookies'>Cookies</a>
          <a href='/policie'>Politique de confidentialité</a>
          <a href='/conditions-generales'>Conditions générales</a>

        </nav>
      </div>
      <div className='col'>
        <h2>Besoin d'informations</h2>
        <nav>
          <a href='/faq'>FAQ</a>
          <a href='/plan-site'>Plan du site</a>
          <a href='/contact'>Contact</a>

        </nav>
      </div>
    </footer>
  )
}

export default Footer
