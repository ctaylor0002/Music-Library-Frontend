import React, { useState } from 'react';
import LikeButton from '../Buttons/LikeButton/LikeButton';
import './MusicTable.css'
import ModalPopUp from '../ModalPopUp/ModalPopUp';

const MusicTable = (props) => {

        const [searchTerm, setSearchTerm] = useState("");
        const [openModal, setOpenModal] = useState(false);
        const [sendSong, setsendSong] = useState([]);
        
        function openModalPopUp(song) {
            console.log(song);
            if (openModal === false) {
                setsendSong(song);
                setOpenModal(true);
            } else {
                setOpenModal(false);
            }
         }
        
        return (
            <div className='library'>
                <div>
                    <input type='text' placeholder='Search...'  onChange={(event) => {setSearchTerm(event.target.value)}}/>
                </div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>Song</th>
                            <th scope='col'>Artist</th>
                            <th scope='col'>Album</th>
                            <th scope='col'>Release Date</th>
                            <th scope='col'>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.entries.filter((song) => {
                        if (searchTerm ==="") {
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
                            <tr onClick={() => {openModalPopUp(song)}}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.likes}</td>
                                <td><LikeButton id={song.id} getAllSongs={props.getAllSongs} likeSong={props.likeSong} /></td>
                                
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {openModal && <ModalPopUp closeModal={setOpenModal} songValue={sendSong} getAllSongs={props.getAllSongs} />}
            </div>
    
        )
        
}

export default MusicTable;
