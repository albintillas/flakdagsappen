import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import { useState } from 'react'
import postImg2 from '..//images/test2.png';
// In Progress, Joel

function PostText({ profilePicture, username }) {
    const [textString, setTextString] = useState('')
    var charactersLeft = 60 - textString.length
    var buttonColor = "#E5E6EA"
    var textColor = "#BEC1C5"
    if(charactersLeft < 60) {
        buttonColor = "#4877CD"
        textColor = "#F9F3F3"
    }

    /*Temporär lösning*/
    username = "Namn Namnsson"
    profilePicture = postImg2
    /*Temporär lösning*/

    function changeInput(event) {
        setTextString(event.target.value)

    }
    return (
        <div class="MakePost">
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "6vw"}}>Skriv Inlägg</a>
            <button type='submit' style={{
                position: "absolute",
                top: "1vh",
                right: "3vw",
                height: "10vw",
                width: "35vw",
                fontSize: "5vw",
                backgroundColor: buttonColor,
                borderRadius: "5%",
                color: textColor,
                border: "none"
            }}>
                PUBLICERA
            </button>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black" }} />
            <div className='userInfo' style={{ margin: "2vh 0 2vh 0" }}>
                <img src={profilePicture} alt='pfp'
                    style={{ height: "15vw", width: "15vw", objectFit: "cover", borderRadius: "50%" }} />
                <a style={{ fontWeight: "bold" }}>{username}</a>
            </div>
            <div className='contentOfPage' style={{ textAlign: "center" }}>
                <textarea rows='4' placeholder='Vad gör du just nu?' onChange={changeInput} maxLength="60" style={{
                    width: "90%",
                    marginTop: "4vh",
                    fontSize: "6vw",
                    margin: "auto",
                    border: "none",
                    outline: "none"
                }} />
                <br/>
                <a style={{ width: "100%" }}>{charactersLeft} characters left to write</a>
            </div>
        </div>
    )
}

export default PostText;