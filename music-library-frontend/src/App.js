import React, { useState, useEffect } from 'react';
import Logo from "./components/Logo/Logo";
// import "./App.css";
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/Buttons/AddSong/AddSong';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  async function addSong(data) {
    const response = await axios.post('http://127.0.0.1:8000/music/', data);
    console.log(response.data);
    // setSongs(getAllSongs())

    let tempSongs = [...songs, data];
    setSongs(tempSongs);
  }

  async function likeSong(id, data) {
    console.log(data)
    const response = await axios.patch(`http://127.0.0.1:8000/music/${id}/`, { likes : data } )
    console.log(response.data);
  
  }


  // function addNewSong(song) {
    
  //   let tempSongs = [...songs, song];
    
  //   setSongs(tempSongs)

  // }

  return (
    <div>
      <Logo />
      <AddSong addSong={addSong} />
      <MusicTable entries={songs} getAllSongs={getAllSongs}  likeSong={likeSong}/>
      {/* <SearchBar entries={songs} /> */}
    </div>
  );
}
  
export default App;
