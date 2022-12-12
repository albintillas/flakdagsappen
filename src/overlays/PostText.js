import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import { useState } from 'react'
import postImg2 from '..//images/test2.png';
import { useNavigate } from 'react-router-dom';
// In Progress, Joel

function PostText({ profilePicture }) {
    const navigate = useNavigate();
    const [textString, setTextString] = useState('')
    var textStringHasContent = textString.split(" ").join("").length > 0;
    var charactersLeft = 60 - textString.length

    var buttonColor = "#E5E6EA"
    var textColor = "#BEC1C5"
    if (textStringHasContent) {
        buttonColor = "#4877CD"
        textColor = "#F9F3F3"
    }

    /*Temporär lösning*/
    profilePicture = postImg2
    /*Temporär lösning*/

    function changeInput(event) {
        const text = event.target.value
        const updatedText = text.replace(/\s{10,}/g, '')
        event.target.value = updatedText
        setTextString(updatedText)

    }

    console.log("TextString has content: " + textStringHasContent)
    function makePost() {
        if (textStringHasContent) {
            // Insert kod för ett inlägg
            navigate("/feed")
        }
    }

    // Select the textarea and form elements
    const textarea = document.querySelector('textarea');
    if (textarea != null) {
        // Listen for the keydown event on the textarea
        textarea.addEventListener('keydown', (event) => {
            // Check if the enter key was pressed
            if (event.key === 'Enter') {
                // Make a Post
                makePost();
            }
        })
    }

    return (
        <div class="MakePost">
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "6vw", position: "absolute", top: "1vh", marginLeft: "1vw" }}>Skriv Inlägg</a>
            <button type='submit' onClick={makePost} style={{
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

            <div className="Post"
                style={{
                    margin: "1vh 20% 1vh 0",
                    width: "80%",
                    padding: "2%"
                }}>
                <div className="User" style={{ display: "inline-block", width: "20%" }}>
                    <div className="Profilepicture" style={{ display: "inline-block" }}>
                        <img src={profilePicture} alt='pfp'
                            style={{ height: "15vw", width: "15vw", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
                    <a>:</a>
                </div>
                <div className="Content" style={{ display: "inline-block", width: "80%", wordWrap: "break-word" }}>
                    <textarea rows='4' placeholder='Vad gör du just nu?' onChange={changeInput} maxLength="60" style={{
                        width: "90%",
                        backgroundColor: "#F9F3F3",
                        marginTop: "4vh",
                        marginLeft: "4vw",
                        fontSize: "6vw",
                        margin: "auto",
                        border: "none",
                        outline: "none"
                    }} />
                </div>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
                <a style={{ width: "100%" }}>{charactersLeft} characters left to write</a>
            </div>
        </div>
    )
}

export default PostText;