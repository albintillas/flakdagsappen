import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import UploadImage from '../components/UploadImage';
// In Progress, Joel

function PostImg() {
    return (
        <div class="MakePost">
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "6vw" }}>Ta Foto</a>
            <button type='submit' style={{
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
            <UploadImage/>
        </div>
    )
}

export default PostImg;