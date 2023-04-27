import React from 'react'
import "./Navbar.css"
import searchIcon from"../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className='mainNavbar'>
        
        <div className='LogoContainer'>
            <p style={{marginTop:'15px'}}>
                Social
            </p>
        </div>    
        <div>
            <div className='searchInputContainer'>
                <img src={`${searchIcon}`} className='searchIcon'alt=""/>
                <input type="text"className='searchInput' placeholder="Search" name=""id=""/>
            </div>
        </div>
        <div className='IconsContainer'> 
            <img src={`${Notifications}`} className='Icons' alt=""/>
            <img src={`${Message}`}className='Icons' alt=""/>
            <Link to={"/profile/1234567890"}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src={`${Profileimage}`} className='ProfileImage'alt=""/>
                    <p style={{marginLeft:'5px',marginTop:'15px'}}>Sagar</p>
                </div>
            </Link>
        </div>
    </div>
  )
}
