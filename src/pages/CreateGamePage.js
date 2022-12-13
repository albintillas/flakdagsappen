import React from 'react'
import UploadImage from '../components/UploadImage.js';
import TextInput from '../components/TextInput.js';
import Button from '../components/Button.js';
import ReturnButton from '../components/ReturnButton.js';
import '../App.css';
import Swal from 'sweetalert2';
import {useState, Link, useNavigate} from 'react';
import axios from 'axios';


function CreateGamePage(){

  const [pin, setPin] = useState([]);

  const [name, setName] = useState([]);

  const [password, setPassword] = useState([]);

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  {console.log(date)}


  function createLobby(){

    

    if (name == "" ||
        password == "") {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill all fields!'
          });
          return;
      }
      else{

        axios.post("https://flakdag.azurewebsites.net/api/lobby/createflakdag", {flakdagname: "flakdag", pin: pin, pw: password, fddate: date, name: name}).then(res => {
          if(res.data.success){
            localStorage.setItem('token', res.data.userToken);
            window.location.href= '/lobbyInfoPage';

          }
          else {
            Swal.fire({
                icon: 'error',
                title: 'Can not create Flakdag',
                text: res.message
            });
          }
        })
      }      
    }
   
  
    

  return(
  <div className="createGameContainer" style={{height:'99vh'}}>
    <div className="createGameReturn">
      <ReturnButton 
      text='Return' 
      buttonColor='#17D930' 
      textColor='#EEEEEE'
      action=''></ReturnButton>
    </div>
    <p id='headers' style={{
      fontSize:'10vw'
    }}>Skapa Flakdag!</p>

    <form className="createGameForm" id="createForm">
      <UploadImage class = "createGameImage" size = '60 %'/>

      

      {/* <div>
          <div>PIN</div>
          <div><input onChange={event => setPin(event.target.value)} value={pin} name="pin" type="text" placeholder="Flakdag pin......" /></div>
        
      </div> */}

      <div class='enterText'>
          <div class='formText'>Ditt namn</div>
          <div class='formInput'><input onChange={event => setName(event.target.value)} value={name} class="form-control" name="name" type="text" placeholder="Ditt flakdagsnamn..." /></div>
        
      </div>

      <div class='enterText'>
          <div class='formText'>Ditt lösenord</div>
          <div class='formInput'><input onChange={event => setPassword(event.target.value)} value={password} class="form-control" name="pw" type="password" placeholder="Lösenord..." /></div>
        
      </div>

      {/* <button class = "createGameInput" id="submitButton" text="Create Game" onclick={createLobby} value="Create game" type='submit' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Create Game</button> */}
            
      <button type="button" className = "createGameInput" id="submitButton" action='lobby' onClick={createLobby}>Create Game</button>

        
  </form>


  </div>
  )
}

export default CreateGamePage;