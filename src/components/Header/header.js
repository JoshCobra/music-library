import './header.css';

const Header = () => {
    return (
        <header>
            <h1 className="mainTitle">Music</h1>
            <nav>
                <a href="">Playlists</a>
                <a href="#library">Library</a>
            </nav>
        </header>
    );
};

export default Header;