import React, { useState } from 'react';

const MusicTable = (props) => {

        const [searchTerm, setSearchTerm] = useState("");
        
        return (
            <div>
                <div>
                    <input type='text' placeholder='Search...'  onChange={(event) => {setSearchTerm(event.target.value)}}/>
                </div>
                <table>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                    </tr>
                    
                    {props.entries.filter((song) => {
                        if (searchTerm == "") {
                            return song;
                        } else if (song.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return song;
                        } else if (song.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return song;
                        } else if (song.album.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return song;
                        } else if (song.release_date.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return song;
                        } else if (song.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return song;
                        } 
                        
                    }).map((song) => {
                        return(
                            <tr>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.likes}</td>
                            </tr>
                        )
                    })}
                </table>
            
            </div>
    
        )
        
}

export default MusicTable;
