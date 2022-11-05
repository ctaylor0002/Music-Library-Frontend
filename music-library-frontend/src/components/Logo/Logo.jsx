import React from 'react';
import ListenInLogo from "../../assets/ListenIn.png";
import "./Logo.css";



const Logo = (props) => {
    return ( 
        <div className='Logo'>
            <h1>Listen</h1>
            <img src={ListenInLogo} alt='ListenIn Logo' />
            <h1>In</h1>
        </div>
     );
}
 
export default Logo;