import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import { useState } from 'react'
// In Progress, Joel

function PostText() {
    const [searchString, setSearchString] = useState('')
    var charactersLeft = 60 - searchString.length;

    function changeInput(event) {
        setSearchString(event.target.value)
    }
    return (
        <div class="MakePost">
            <ReturnButton
                text='Return'
                buttonColor='#17D930'
                textColor='#FFFFFF'
                action='feed' />
            <div className='contentOfPage' style={{ textAlign: "center" }}>
                <textarea rows='5' placeholder='Vad gör du just nu?' onChange={changeInput} maxLength="60" style={{
                    width: "90%",
                    marginTop: "3vh",
                    fontSize: "6vw",
                    margin: "auto",
                    border: "none",
                    outline: "none"
                }}/>
                <a style={{ width: "100%" }}>{charactersLeft} characters left to write</a>
            </div>
        </div>
    )
}

export default PostText;