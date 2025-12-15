const Song = (props) => {
    const { songTitle, songArtist } = props;

    return (
        <div className="songContainer">
            <img src={props.imgSrc} alt={songTitle} />
            <div className="songAttributes">
                <h4 className="songTitle">{songTitle}</h4>
                <p className="songArtist">{songArtist}</p>
            </div>
            <p className="songInfoDots">...</p>
        </div>
    )
}

export default Song;