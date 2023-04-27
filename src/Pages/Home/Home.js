import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Leftbar from '../../Components/Leftsidecontainer/Leftbar'
import Rightbar from '../../Components/Rightsidecontainer/Rightbar'
import "./Home.css"
import Mainpost from '../../Components/Mainpostcontainer/Mainpost'
export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='ComponentContainer'>
         <Leftbar/>
         <Mainpost/>
         <Rightbar/>
      </div>
    </div>
  )
}
