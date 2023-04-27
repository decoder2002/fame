import React, { useState } from 'react'
import "./post.css"
import ProfileImage from "../Images/Profile.png"
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import ShareIcon from "../Images/share.png"
import Moreoption from "../Images/more.png"
import anotherlikeicon from "../Images/setLike.png"
export default function Post() {

    const [Like, setLike] = useState(LikeIcon);
    const [Count, setCount] = useState(10);
    const [Comments, setComments] = useState([]);
    const [commentwriting, setcommentwriting] = useState('');
    const [show, setshow] = useState(false);

    const handleLike = () => {
        if (Like === LikeIcon) {
            setLike(anotherlikeicon);
            setCount(Count + 1);
        } else {
            setLike(LikeIcon);
            setCount(Count - 1);
        }
    }

    const handleComment = () => {
        addComment();
    }

    const handleshow = () =>{
        if(show === false){
            setshow(true);
        }else{
            setshow(false);
        }
    }

    const addComment = () => {
        const comment = {
            "id": "123547680ub",
            "username": "Sagar",
            "title": `${commentwriting}`
        }
        setComments(Comments.concat(comment));
    }

    console.log(Comments);

    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>

                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`${ProfileImage}`} className='PostImage' alt='' />
                        <div>
                            <p style={{ marginLeft: '5px', marginTop: "10px", textAlign: "start" }}>Sagar</p>
                            <p style={{ fontSize: "11px", textAlign: "start", marginLeft: "5px", marginTop: "-13px", color: "#aaa" }}>Following By Sagar</p>
                        </div>
                        <img src={`${Moreoption}`} className='moreicons' alt='' />
                    </div>
                    <p style={{ textAlign: 'start', width: "96%", marginLeft: 10, marginTop: 0 }}>Lorean paris </p>
                    <img src={`${ProfileImage}`} className='PostImages' alt='' />

                    <div style={{ marginTop: "10px", display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: "10px" }}>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <img src={`${Like}`} className='iconsforPost' onClick={handleLike} alt='' />
                                <p style={{ marginLeft: "6px", marginBottom: 0 }}>{Count} Likes</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20, cursor: 'pointer' }}>
                                <img src={`${CommentIcon}`} className='iconsforPost' onClick={handleshow} alt='' />
                                <p style={{ marginLeft: "6px", marginBottom: 0 }}>10k Comments</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 180, cursor: 'pointer' }}>
                                <img src={`${ShareIcon}`} className='iconsforPost' alt='' />
                                <p style={{ marginLeft: "6px", marginBottom: 0 }}>Share</p>
                            </div>
                        </div>

                    </div>

              
                   {show === true ?
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                            <img src={`${ProfileImage}`} className="PostImage" alt="" />
                            {/* <p style={{marginLeft:"6px" , marginBottom:4}}>Sagar</p> */}
                            <input type="text" className='commentinput' placeholder='write your thoughts' onChange={(e) => setcommentwriting(e.target.value)} />
                            <button className='addCommentbtn' onClick={handleComment}>Comments</button>
                        </div>

                        {Comments.map((item) => (
                            <div style={{ display: 'flex', alignItems: 'center' , border:'2px solid black' , marginTop:"10px"}}>
                                <div style={{display:'flex'}}>
                                        <img src={`${ProfileImage}`} className="PostImage" alt="" />
                                        <p style={{marginLeft:"6px", marginTop:10 ,fontSize:20}}>{item.username} </p>
                                 </div>
                                                                
                                <p style={{ marginLeft: "20px" , marginTop:20 , backgroundColor:"lightgrey"}}>{item.title}</p>
                                <p style={{ marginLeft: "20px" , marginTop:20 , color:"#aaa" , fontSize:11}}>Reply</p>
                            </div>
                        ))}


                    </div>:''
              
                   }

                </div>

            </div>
        </div>
    )
}
