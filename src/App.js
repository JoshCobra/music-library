import { Component } from 'react';
import './App.css';
import Header from './components/header';
import Song from './components/song';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/> 
        <Song songTitle= "Romance" songArtist="Hiroshi Suzuki" imgSrc="https://i.scdn.co/image/ab67616d0000b273de1acb1009d8ddbeccb2889a" />
        <Song songTitle= "Siempre Hay Esperanza" songArtist= "Sade" imgSrc="https://i.scdn.co/image/ab67616d0000b2738d6c05fb48d5834d425128bf" />
        <Song songTitle= "London Beach" songArtist= "Veeko Morlet" imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/3d/ba/443dba81-e16e-9a03-8795-027d435e990b/859793818282_cover.jpg/1200x630bb.jpg" />
      </div>
    );
  }

  componentDidMount() {
  console.log("App Fully Loaded")
  }

}

export default App;
