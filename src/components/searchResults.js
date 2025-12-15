import Song from "./song";

const SearchResults = (props) => {
    return (
        <section className="searchResults">
            <h2 className="searchResultsTitle">Search Results</h2>
            {props.songs.map((song, index) => (
                <>
                    <Song
                        key={index}
                        songTitle={song.songTitle}
                        songArtist={song.songArtist}
                        imgSrc={song.imgSrc}
                    />
                    <button>Add to library</button>
                </>
            ))}
        </section>
    )
}

export default SearchResults;