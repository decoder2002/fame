import React from 'react'
import "./mainpost.css"
import ContentPost from "../ContentPostContainer/Contentpost"
import Post from "../PostContainer/Post"
export default function Mainpost() {
  return (
    <div className='mainPostConatainer'>
        <ContentPost/>
        <Post/>
        <Post/>
    </div>
  )
}
