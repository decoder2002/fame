import React from "react";
import "./rightbar.css";
import ads from "../Images/ads.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightcontainer">
        <div className="adsContainer">
          <div>
            <img src={`${image1}`} className="adsimg" alt="" />
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "10px", marginTop: 0 }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
          </div>
        </div>
        <div className="adsContainer">
          <div>
            <img src={`${image2}`} className="adsimg" alt="" />
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "10px", marginTop: 0 }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
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
                cursor:"pointer"
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
                cursor:"pointer"
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
                cursor:"pointer"
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
                cursor:"pointer"
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
                cursor:"pointer"
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
              <img src={`${image6}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>vanshika</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Liked by vanshika
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor:"pointer"
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
              <img src={`${ads}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>Parv</p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  Liked by Parv
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor:"pointer"
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
