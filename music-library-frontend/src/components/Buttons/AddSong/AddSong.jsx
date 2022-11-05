import React, { useState } from 'react';
import './AddSong.css';


const AddSong = (props) => {

    const [songName, setSongName] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault();

        let newSong = {
            title: songName,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: 0
        };

        setSongName('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');

        console.log(newSong);
        props.addSong(newSong);
    }
    
    return ( 
        <form onSubmit={handleSubmit} className='form'>
            <h2>Add A Song</h2>
            <div  className='form-group-row'>
                <label className='col-sm-2 col-form-label'>Song Name</label>
                <div className='col-sm-10'>
                    <input type='text' placeholder='Song Name' className='form-control' value={songName} onChange={(event) => setSongName(event.target.value)}></input>
                </div>
            </div>

            <div  className='form-group-row'>
                <label>Artist</label>
                <div className='col-sm-10'>
                    <input type='text' value={artist} placeholder='Artist' className='form-control' onChange={(event) => setArtist(event.target.value)}></input>
                </div>
            </div>

            <div  className='form-group-row'>
                <label>Album</label>
                <div className='col-sm-10'>
                    <input type='text' value={album} placeholder='Album' className='form-control' onChange={(event) => setAlbum(event.target.value)}></input>
                </div>
            </div>

            <div  className='form-group-row'>
                <label>Release Date</label>
                <div className='col-sm-10'>
                    <input type='date' value={releaseDate} className='form-control' onChange={(event) => setReleaseDate(event.target.value)}></input>
                </div>
            </div>

            <div  className='form-group-row'>
                <label>Genre</label>
                <div className='col-sm-10'>
                    <input type='text' value={genre} placeholder='Genre' className='form-control' onChange={(event) => setGenre(event.target.value)}></input>
                </div>
            </div>


            <button type='submit' className='submit-button'>Add a Song</button>
        </form>
     );
}
 
export default AddSong;