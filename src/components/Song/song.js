import './song.css';

const Song = (props) => {
    const { songTitle, songArtist } = props;

    return (
        <div className="songContainer">
            <img src={props.imgSrc} alt={songTitle} />
            <div className="songAttributes">
                <h4 className="songTitle">{songTitle}</h4>
                <p className="songArtist">{songArtist}</p>
            </div>
            <div className="songActions">
                {props.buttonText && <button onClick={props.onButtonClick}>{props.buttonText}</button>}
                <p className="songInfoDots">...</p>
            </div>
        </div>
    )
}

export default Song;