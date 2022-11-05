import React, { useState } from 'react';
import axios from 'axios';
import LikeButtonImg from "../../../assets/Thumbs-Up.png"
import LikedButtonImg from "../../../assets/Thumbs-Up-Selected.png"

const LikeButton = (props) => {

    const [likeValue, setLikeValue] = useState(0);
    const [likeImage, setLikeImage] = useState(LikeButtonImg);

   

    function likeButtonCall() {
        console.log(props)
        if (likeValue == 0) {
            //setLikeValue(1);
            //setLikeImage(LikedButtonImg);
            props.likeSong(props.id, 1);
            props.getAllSongs();

        //}  else if (likeValue == 1) {
            // setLikeValue(0);
            // //setLikeImage(LikeButtonImg);
            // likeSong(props.id, -1);
        }
    }

    return ( 
        <img src={likeImage}  onClick={likeButtonCall}/>
     );
}
 
export default LikeButton;