import { Component } from "react";


class Song extends Component {
    render() {
        const { songTitle, songArtist } = this.props;
        
        return(
            <div className="songContainer">
                <img src=""/>
                <div className="songAttributes">
                    <h4 className="songTitle">{songTitle}</h4>
                    <p className="songArtist">{songArtist}</p>
                </div>
                <p className="songInfoDots">...</p>
            </div>
        )
    }
}

export default Song;