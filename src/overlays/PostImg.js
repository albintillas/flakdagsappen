import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import UploadImage from '../components/UploadImage';
import { useNavigate } from 'react-router-dom';
// In Progress, Joel

function PostImg() {
    const navigate = useNavigate();

    function makePost(event) {
        // Insert kod för ett inlägg
        navigate("/feed")
    }

    return (
        <div class="MakePost">
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "6vw", position: "absolute", top: "1vh", marginLeft: "1vw" }}>Ta Foto</a>
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
            <UploadImage />
        </div>
    )
}

export default PostImg;