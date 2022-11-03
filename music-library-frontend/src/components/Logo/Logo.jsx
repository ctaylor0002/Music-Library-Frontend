import React from 'react';
import ListenInLogo from "../../assets/ListenIn.png";
// import "./NavBar.css"



const Logo = (props) => {
    return ( 
        <div className='Logo'>
            <h1>Listen</h1>
            <img src={ListenInLogo} alt='ListenIn Logo' style={{width:'40px'}}/>
            <h1>In</h1>
        </div>
     );
}
 
export default Logo;