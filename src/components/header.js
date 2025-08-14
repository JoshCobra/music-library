import { Component } from "react";

class Header extends Component {

    render() {
        return( 
            <header>
                <h1 className="mainTitle">Music Library </h1>
                <nav>
                    <a href="">Playlists</a>
                    <a href="">Library</a>
                </nav>
            </header>
        )
    };
}

export default Header;