import React from 'react'
import UploadImage from '../components/UploadImage.js';
import TextInput from '../components/TextInput.js';
import Button from '../components/Button.js';
import ReturnButton from '../components/ReturnButton.js';
import '../App.css';
import Swal from 'sweetalert2';
import {useState, Link} from 'react';
import StartPageButton from '../components/StartPageButton.js'


function CreateGamePage(){

  const [pin, setPin] = useState([]);

  const [name, setName] = useState([]);

  const [password, setPassword] = useState([]);

  function createLobby(){
    
    if (pin == "" ||
        name == "" ||
        password == "") {
          Swal.fire({
              icon: 'error',
              title: 'Saknas data',
              text: 'Alla fält måste fyllas i'
          });
          return;
      }
      else{
        
      }

      /* SendForm($('#createForm'), (resp) => {
          if (resp.success) {
              localStorage.setItem('token', resp.userToken);
              location.href = "lobby.html";
          }
          else {
              Swal.fire({
                  icon: 'error',
                  title: 'Kan inte skapa flakdag',
                  text: resp.message
              });
            }
        }) */
        //const formData = new FormData(thisForm[0]).entries();
        //console.log(formData);
    }
   
  
    

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

    <form className="createGameForm" id="createForm">
      <UploadImage class = "createGameImage" size = '60 %'/>

      <input type="hidden" name="flakdagname" value="asd" />
      <input type="hidden" name="fddate" value="2022-11-19T15:30:18.733Z" />

      <div class="row input-group-newsletter">
          <div class="formText">PIN</div>
          <div class="formInput"><input onChange={event => setPin(event.target.value)} value={pin} class="form-control" name="pin" type="text" placeholder="Flakdag pin......" /></div>
        
      </div>

      <div class="row input-group-newsletter">
          <div class="formText">Ditt namn</div>
          <div class="formInput"><input onChange={event => setName(event.target.value)} value={name} class="form-control" name="name" type="text" placeholder="Ditt flakdagsnamn..." /></div>
        
      </div>

      <div class="row input-group-newsletter">
          <div class="formText">Ditt lösenord</div>
          <div class="formInput"><input onChange={event => setPassword(event.target.value)} value={password} class="form-control" name="pw" type="password" placeholder="Lösenord..." /></div>
        
      </div>

      {/* <button class = "createGameInput" id="submitButton" text="Create Game" onclick={createLobby} value="Create game" type='submit' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Create Game</button> */}
            
      <button type="button" className = "createGameInput" id="submitButton" action='lobby' onClick={createLobby} buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Create Game</button>
        
  </form>


  </div>
  )
}

export default CreateGamePage;