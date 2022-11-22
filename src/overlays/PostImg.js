import React from 'react'
import '../App.css';
import ReturnButton from '../components/ReturnButton.js';
import UploadImage from '../components/UploadImage';
// In Progress, Joel

function PostImg() {
    return (
        <div class="MakePost">
            <ReturnButton
                text='Return'
                buttonColor='#17D930'
                textColor='#FFFFFF'
                action='feed' />
                <UploadImage/>
        </div>
    )
}

export default PostImg;