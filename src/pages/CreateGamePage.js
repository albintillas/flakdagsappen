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

        axios.post("https://flakdag.azurewebsites.net/api/lobby/createflakdag", {flakdagname: "flakdag", pin: pin, pw: password, fddate: date, name: name}).then(res => {
          if(res.data.success){
            localStorage.setItem('token', res.data.userToken);
            window.location.href= '/lobbyInfoPage';

          }
          else {
            Swal.fire({
                icon: 'error',
                title: 'Kan inte skapa flakdag',
                text: res.message
            });
          }
        })
      }      
    }
   
  
    

  return(
  <div className="createGameContainer">
    <div className="createGameReturn">
      <ReturnButton 
      text='Return' 
      buttonColor='#17D930' 
      textColor='#FFFFFF'
      action=''></ReturnButton>
    </div>
    <p>Create Flakdag!</p>

    <form className="createGameForm" id="createForm">
      <UploadImage id = "createGameImage" size = '60 %'/>

      

      <div>
          <div>PIN</div>
          <div><input onChange={event => setPin(event.target.value)} value={pin} name="pin" type="text" placeholder="Flakdag pin......" /></div>
        
      </div>

      <div >
          <div >Ditt namn</div>
          <div ><input onChange={event => setName(event.target.value)} value={name} name="name" type="text" placeholder="Ditt flakdagsnamn..." /></div>
        
      </div>

      <div>
          <div>Ditt lösenord</div>
          <div><input onChange={event => setPassword(event.target.value)} value={password} name="pw" type="password" placeholder="Lösenord..." /></div>
        
      </div>

      {/* <button class = "createGameInput" id="submitButton" text="Create Game" onclick={createLobby} value="Create game" type='submit' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Create Game</button> */}
            
      <button type="button" className = "createGameInput" id="submitButton" action='lobby' onClick={createLobby} 
      style={{
             fontFamily: 'Noto Serif JP serif',
             backgroundColor: "#17D930",
             color:'#F9F3F3',
             fontSize: "200%",
             textDecoration: "none",
             padding: "5%",
             borderRadius: "15vw",
             border: "none",
             cursor: "pointer",
             height: "75%",
             width: "65%",
             marginTop: "5vw",
             boxShadow: "1vw 2vw 3vw #888888"
      }}>Create Game</button>

        
  </form>


  </div>
  )
}

export default CreateGamePage;