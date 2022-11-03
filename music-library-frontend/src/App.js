import React, { useState, useEffect } from 'react';
import Logo from "./components/Logo/Logo";
import "./App.css";
import axios from 'axios';


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

  // function addNewSong(song) {
    
  //   let tempSongs = [...songs, song];
    
  //   setSongs(tempSongs)

  // }

  return (
    <div>
      <Logo />
    </div>
  );
}

export default App;
