import React, { useState } from 'react';

const MusicTable = (props) => {
    return ( 
        <div>
            <table>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
                
                {props.entries.map((song) => {
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
     );
}
 
export default MusicTable;





