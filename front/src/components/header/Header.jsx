import '../header/Header.css'
function Header() {
    return (
        <header className="main">
          

            <a href="/">
                <img src="" alt="logo" />
            </a>
            <nav>
                
                <a href="/annonces">Annonces</a>
                <a href="/favori">Favori</a>
                <a href="/blog">Blog</a>
                <a href="/about">Qui sommes nous</a>
                <a href="/messages">Messagerie</a>
                <a href="/authentication">
                    <button>
                        Profil
                    </button>
                </a>

            </nav>

            
            
        </header>
    );
}

export default Header;