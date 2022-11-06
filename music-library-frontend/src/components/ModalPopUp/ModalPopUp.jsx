import React, { useState } from 'react';
import "./ModalPopUp.css";
import axios from 'axios';

const ModalPopUp = (props) => {

    const [songName, setSongName] = useState(props.songValue.title)
    const [artist, setArtist] = useState(props.songValue.artist)
    const [album, setAlbum] = useState(props.songValue.album)
    const [releaseDate, setReleaseDate] = useState(props.songValue.release_date)
    const [genre, setGenre] = useState(props.songValue.genre)
    
    

    function handleSubmit(event) {
        event.preventDefault();
        console.log(releaseDate)
        updateSong(props.songValue.id, {title: songName, artist: artist, album: album, release_date: releaseDate, genre: genre, likes: props.songValue.likes})
        
    }

    async function updateSong(id, data) {
        console.log(data.releaseDate)
        const response = await axios.put(`http://127.0.0.1:8000/music/${id}/`, data)
        console.log(response.data);
        props.closeModal(false)
        props.getAllSongs();
        //props.getAllSongs();
      
    }

    return ( 
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='title-close-btn'>
                    <button onClick={() => props.closeModal(false)}> X </button>
                </div>
                <form onSubmit={handleSubmit}>

                <div className='title'>
                    <h1 className='header'>Please enter information into the fields below to update the song. If there is nothing to update, leave the field blank</h1>
                </div>
                <div className='body'>
                   
                    <div className='row'>
                        <div className='col'>
                            <label style={{color: 'black'}}>Artist</label>
                            <input type='text' placeholder={props.songValue.artist} className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}></input>
                        </div>
                        <div className='col'>
                            <label style={{color: 'black'}}>Genre</label>
                            <input type='text' placeholder={props.songValue.genre} className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} ></input>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label style={{color: 'black'}}>Album</label>
                            <input type='text' placeholder={props.songValue.album} className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}></input>
                        </div>
                    
                        <div className='col'>
                            <label style={{color: 'black'}}>Release Date</label>
                            <input type='date' className='form-control' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>
                        </div>
                    </div>
                </div>
                    
                <div className='row'>                
                    <div className='col'>
                        <label style={{color: 'black'}}>Song Name</label>
                        <input type='text' placeholder={props.songValue.title} className='form-control' value={songName} onChange={(event) => setSongName(event.target.value)}></input>
                    </div>
                </div>
                
                <div className='footer'>
                    <button type='submit'>Update Song</button>
                </div>
                </form>
                    <button type='submit'>Delete Song</button>
                
            </div>
        </div>
       
     );
    }
 
export default ModalPopUp;


