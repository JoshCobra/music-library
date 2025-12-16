import Song from "../Song/song";
import './searchResults.css';

const SearchResults = (props) => {
    return (
        <section className="searchResults">
            <h2 className="searchResultsTitle">Search Results</h2>
            {props.songs.map((song, index) => (
                <Song
                    key={index}
                    songTitle={song.songTitle}
                    songArtist={song.songArtist}
                    imgSrc={song.imgSrc}
                    buttonText="+"
                    onButtonClick={() => props.onAddSong(song)}
                />
            ))}
        </section>
    )
}

export default SearchResults;