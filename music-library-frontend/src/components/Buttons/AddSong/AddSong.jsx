import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>Song Name</label>
            <input type='text' value={songName} onChange={(event) => setSongName(event.target.value)}></input>

            
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}></input>

            
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}></input>

            
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}></input>

            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}></input>


            <button type='submit'>Add a Song</button>
        </form>
     );
}
 
export default AddSong;