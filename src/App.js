import './App.css';
import Header from './components/header';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Song songTitle= "Romance" songArtist="Hiroshi Suzuki"/>
      <Song songTitle= "Siempre Hay Esperanza" songArtist= "Sade"/>
      <Song songTitle= "London Beach" songArtist= "Veeko Morlet"/>
    </div>
  );
}

export default App;
