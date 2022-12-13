import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import { useState } from 'react'
import postImg2 from '..//images/test2.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// In Progress, Joel

function PostText({ profilePicture }) {
    const navigate = useNavigate();
    let userToken = localStorage.getItem('token');
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

    function makePost() {
        if (textStringHasContent) {
            // Insert kod för ett inlägg
            axios.post('https://flakdag.azurewebsites.net/api/data/addfeed', { token: userToken, text: textString })
                .then((response) => {
                    // Handle the successful response from the API
                    if (response.data.success) {
                        console.log("Upload successfull: " + response.data.success)
                        navigate("/feed")
                    }
                    else {
                        console.log("An error has occured on upload")
                    }
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    console.log("An error has occured on upload, error type:\n" + error)
                });
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
        <div class="MakePost" style={{height:'100vh'}}>
            <ReturnButton
                action='feed' />
            <a style={{ fontSize: "5vw", position: "absolute", top: "3vh", color: "white" }}>Skriv Inlägg</a>
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
                    margin: "7vh 20% 1vh 3vw",
                    width: "80%",
                    padding: "2%",
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                <div className="User" style={{ display: "inline-block", width: "20%",alignSelf:'center', marginRight:'4vw' }}>
                    <div className="Profilepicture" style={{ display: "inline-block" }}>
                        <img src={profilePicture} alt='pfp'
                            style={{ height: "15vw", width: "15vw", objectFit: "cover", borderRadius: "50%" }} />
                    </div>
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
                <a style={{ width: "100%" }}>{charactersLeft} karaktärer kvar att skriva</a>
            </div>
        </div>
    )
}

export default PostText;