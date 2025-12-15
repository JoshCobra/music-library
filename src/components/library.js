import Song from "./song"

const Library = (props) => {
    return (
        <section className="library">
            <h2 className="libraryTitle">Your Library</h2>
            {props.library.map((song, index) => (
                <Song
                    key={index}
                    songTitle={song.songTitle}
                    songArtist={song.songArtist}
                    imgSrc={song.imgSrc}
                />
            ))}
        </section>
    )

}

export default Library;