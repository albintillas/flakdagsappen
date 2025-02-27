import React, { useState } from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import UploadImage from '../components/UploadImage';
import { useNavigate } from 'react-router-dom';
// In Progress, Joel

function PostImg() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState(0);
    function makePost() {
        // Insert kod för ett inlägg
        setUploadStatus(uploadStatus + 1);
    }

    return (
        <div className="MakePost" style={{ height: '100vh' }}>
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "5vw", position: "absolute", top: "3vh", color: "white" }}>Ta Foto</a>
            <button type='submit' onClick={makePost} style={{
                position: "absolute",
                top: "1vh",
                right: "3vw",
                height: "10vw",
                width: "35vw",
                fontSize: "5vw",
                backgroundColor: "#4877CD",
                borderRadius: "10%",
                color: "#F9F3F3"
            }}>
                PUBLICERA
            </button>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black" }} />
            <div style={{ textAlign: "center", marginTop: "2vh" }}>
                <UploadImage uploadNow={uploadStatus} isPost={true} />
                <br></br>
                <h1 style={{ color: "white" }}>Klicka på cirkeln</h1>
            </div>
        </div>
    )
}

export default PostImg;