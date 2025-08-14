import { Component } from "react";

class Song extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songTitle: "Romance",
            songArtist: "Hiroshi Suzuki",
        }
    }
    
    render() {
        return(
            <div className="songContainer">
                <img src=""/>
                <div className="songAttributes">
                    <h4 className="songTitle"> {this.state.songTitle} </h4>
                    <p className="songArtist"> {this.state.songArtist} </p>
                </div>
                <p className="songInfoDots">...</p>
            </div>
        )
    }
}

export default Song;