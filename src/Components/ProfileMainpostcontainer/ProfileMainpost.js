import React from 'react'
import "./profilemainpost.css"
import ContentPost from "../ContentPostContainer/Contentpost"
import Post from "../PostContainer/Post"
import Coverimage from "../Images/image5.jpg"
export default function ProfileMainpost() {
  return (
    <div className='ProfilemainPostConatainer'>
     <div>
          <img src={`${Coverimage}`} className='profileCoverimage' alt=''/>
          <h5 style={{marginTop:-30,color:"white",textAlign:'start',marginLeft:"33px"}}>Your Profile</h5>
     </div>

        <ContentPost/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
