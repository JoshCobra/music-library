import Song from "./song";

const SearchResults = (props) => {
    return (
        <section>
            <h2 className="searchResultsTitle">Search Results</h2>
            {props.songs.map((song, index) => (
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

export default SearchResults;