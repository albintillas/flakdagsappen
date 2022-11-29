import React from 'react'
import UploadImage from '../components/UploadImage.js';
import TextInput from '../components/TextInput.js';
import Button from '../components/Button.js';
import ReturnButton from '../components/ReturnButton.js';
import '../App.css';


function CreateGamePage(){
return(
<div class="createGameContainer">
  <div class="createGameReturn">
    <ReturnButton 
    text='Return' 
    buttonColor='#17D930' 
    textColor='#FFFFFF'
    action=''></ReturnButton>
  </div>
  <p>Create Flakdag!</p>

  <div class = "createGamePage">
      <UploadImage class = "createGameImage"
      size = '60 %'/>
      <TextInput class = "createGameInput"/>
      <Button action='LobbyInfoPage' text='Create Game' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'/>
  </div>
</div>
)
}

export default CreateGamePage;