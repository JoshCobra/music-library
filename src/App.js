import './App.css';
import Header from './components/header';
import Song from './components/song';
import SearchResults from './components/searchResults';
import Library from './components/library';
import { useState } from 'react';
import { useEffect } from 'react';

const songsData = [
  {
    songTitle: "Romance",
    songArtist: "Hiroshi Suzuki",
    imgSrc: "https://i.scdn.co/image/ab67616d0000b273de1acb1009d8ddbeccb2889a"
  },
  {
    songTitle: "Siempre Hay Esperanza",
    songArtist: "Sade",
    imgSrc: "https://i.scdn.co/image/ab67616d0000b2738d6c05fb48d5834d425128bf"
  },
  {
    songTitle: "London Beach",
    songArtist: "Veeko Morlet",
    imgSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/3d/ba/443dba81-e16e-9a03-8795-027d435e990b/859793818282_cover.jpg/1200x630bb.jpg"
  }
];


const App = () => {
  const [searchResults, setSearchResults] = useState(songsData);
  const [library, setLibrary] = useState([]);

  const addSongToLibrary = (song) => {
    const alreadyExists = library.find((s) => s.songTitle === song.songTitle && s.songArtist === song.songArtist);

    if (alreadyExists) {
      alert(`The song "${song.songTitle}" is already in your library!`);
    } else {
      setLibrary([...library, song]);
    }
  }

  useEffect(() => {
    console.log("Library updated:", library);
  }, [library]);

  return (
    <div className="App">
      <Header />
      <SearchResults songs={searchResults} onAddSong={addSongToLibrary} />
      <Library library={library} />
    </div>
  );
}

export default App;
