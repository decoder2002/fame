import React from 'react'
import "./contentpost.css"
import profileimage from "../Images/Profile.png"
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"


export default function Contentpost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileimage}`} className='profileimage' alt='' />
          <input type='text' className='contentWritingpart' placeholder='write your thoughts...' />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <div>
            <img src={`${imageIcon}`} className='icons' alt='' /> 
            <img src={`${emojiIcon}`} className='icons' alt='' />
            <img src={`${VideoIcon}`} className='icons' alt='' />
          </div>
          <div >
             <button style={{ marginLeft: "350px",marginBottom:"10px " , paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom:6 , backgroundColor:"black",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"}}>Posts</button>
          </div>
        </div>



      </div>
    </div>
  )
}
