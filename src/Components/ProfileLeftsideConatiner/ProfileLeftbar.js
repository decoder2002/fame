import React from 'react'
import "./profileleftbar.css"
// import image from "../Images/Profile.png"
import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
import image6 from "../Images/image6.jpg"
export default function ProfileLeftbar() {
  return (
    <div className='ProfileLeftbar'>
      <div className='NotificationsContainer'>
              <img src={`${image6}`} className='ProfilepageCover' alt=''/>
            <div style={{display:'flex',alignItems:'center',marginTop:-30}}>
                 <img src={`${image5}`} className='Profilepageimage' alt=''/>
                 <div>
                      <p style={{marginLeft:6,marginTop:29,color:"black",textAlign:'start'}}>Sagar</p>
                      <p style={{marginLeft:6,marginTop:-18,color:"black",textAlign:'start',fontSize:11}}>Software Developer</p>
                </div>
            </div>

{/* Prfile View */}
            <div style={{display:'flex',justifyContent:'space-between'}}>
                 <p style={{color:"black" , marginLeft:13 , fontSize:"14px"}}>Profile Views</p>
                 <p style={{color:"black" , marginLeft:20 , fontSize:"12px",marginTop:3}}>456789</p>
            </div>
            <hr style={{marginTop:-10,color:"black"}}/>
            
{/* Friends */}
            <div style={{display:'flex',justifyContent:'space-between',marginTop:-10}}>
                 <p style={{color:"black" , marginLeft:13 , fontSize:"14px"}}>Friends</p>
                 <p style={{color:"black" , marginLeft:20 , fontSize:"12px",marginTop:3}}>4565</p>
            </div>
            <hr style={{marginTop:-10 ,color:"black"}}/>

{/* Users */}
            <div style={{marginTop:-10}}>
                 <h5 style={{color:"black" , marginLeft:20, marginRight:11 ,marginTop:21,textAlign:"start"}}><strong>User Bio</strong></h5>
                 <p style={{color:"black" , marginLeft:20 , fontSize:"12px",marginTop:-3,textAlign:'start'}}>Being a gentle person , is the best habit of good person.</p>
            </div>
            <div>
               <button style={{width:"100%",paddingTop:4,paddingBottom:4,border:"none",backgroundColor:"grey",color:'white'}}>Edit Bio</button>
            </div>
      </div>


      <div className='NotificationsContainer'>
         <p>Your Friends</p>
         <div style={{display:'flex',justifyContent:'space-between'}}>
                <p style={{marginLeft:10}}>Friends</p>
                <p style={{color:"#aaa",marginRight:10}}>See All</p>
         </div>

         <div style={{display:'flex',flexWrap:'wrap',marginLeft:5}}>
               <div style={{marginLeft:4}}>
                  <img src={`${image1}`} className='friendimage' alt=''/>
                  <p>Rishita</p>
               </div>
               <div style={{marginLeft:4}}>
                  <img src={`${image5}`} className='friendimage' alt=''/>
                  <p>Aman</p>
               </div>
               <div style={{marginLeft:4}}>
                  <img src={`${image2}`} className='friendimage' alt=''/>
                  <p>Nishtha</p>
               </div>
               <div style={{marginLeft:4}}>
                  <img src={`${image6}`} className='friendimage' alt=''/>
                  <p>Parv</p>
               </div>
               <div style={{marginLeft:4}}>
                  <img src={`${image3}`} className='friendimage' alt=''/>
                  <p>Adharv</p>
               </div>
               <div style={{marginLeft:4}}>
                  <img src={`${image4}`} className='friendimage' alt=''/>
                  <p>Om</p>
               </div>
         </div>
      </div>
    </div>
  )
}
