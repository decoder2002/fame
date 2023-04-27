import React from "react";
import "./profilerightbar.css";
import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
// import image from "../Images/image7.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";

export default function ProfileRightbar() {
  return (
    <div className="profilerightbar">
      <div className="profilerightcontainer">
        <h3 style={{ marginTop: 5, marginBottom: 15 }}>Friend Request</h3>
        <div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer' }}>
            <img src={`${image6}`} className="Friendsimage" alt="" />
            <p style={{ textAlign: 'start', marginLeft: '10px' }}>Parv wants to make your friends </p>
          </div>
        </div>
        <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Delete</button>
        </div>    
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer' }}>
            <img src={`${image1}`} className="Friendsimage" alt="" />
            <p style={{ textAlign: 'start', marginLeft: '10px' }}>saumya wants to make your friends </p>
          </div>
          <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Delete</button>
        </div> 
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer' }}>
            <img src={`${image3}`} className="Friendsimage" alt="" />
            <p style={{ textAlign: 'start', marginLeft: '10px' }}>Shreya wants to make your friends </p>
          </div>
          <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Delete</button>
        </div> 
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer' }}>
            <img src={`${image4}`} className="Friendsimage" alt="" />
            <p style={{ textAlign: 'start', marginLeft: '10px' }}>Sakshi wants to make your friends </p>
          </div>
          <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Delete</button>
        </div> 
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer' }}>
            <img src={`${ads}`} className="Friendsimage" alt="" />
            <p style={{ textAlign: 'start', marginLeft: '10px' }}>sarita wants to make your friends </p>
          </div>
          <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Accept</button>
            <button style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:0,border:"none",backgroundColor:"black",color:'white',borderRadius:10}}>Delete</button>
        </div> 
        </div>

      </div>






      <div className="rightcontainer2">
        <h5
          style={{ textAlign: "start", marginLeft: "20px", marginTop: "10px" }}
        >
          Suggested for you
        </h5>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image4}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Sagar</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Suggested for you
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>




        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image1}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Rishita
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by rishita
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image2}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Aman</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Liked by Aman
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image3}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Nishtha</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by nishtha
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>



        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image5}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Aryan</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Followed by Aryan
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}
