import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProfileLeftbar from '../../Components/ProfileLeftsideConatiner/ProfileLeftbar'
import ProfileRightbar from '../../Components/ProfileRightsideContainer/ProfileRightbar'
import "./profile.css"

import ProfileMainpost from '../../Components/ProfileMainpostcontainer/ProfileMainpost'
export default function Profile() {
  return (
    <div className='ProfileContainer'>
      <Navbar/>
      <div className='subProfileContainer'>
          <ProfileLeftbar/>
          <ProfileMainpost/>
          <ProfileRightbar/> 
      </div>
    </div>
  )
}
