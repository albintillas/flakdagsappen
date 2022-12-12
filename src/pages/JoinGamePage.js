import React, {useState} from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button.js';
import axios from 'axios';
import Swal from 'sweetalert2'


//Linus 

function JoinGamePage(){

   const [name, setName] = useState([]);

   const [pw, setPw] = useState([]);

   const [pin, setPin] = useState([]);

   function joinLobby(){

      //let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"  //Hårdkodad


    if (pin == "" ||
        name == "" ||
        pw == "") {
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Please fill all fields!'
          });
          return;
      }
      else{

        axios.post("https://flakdag.azurewebsites.net/api/lobby/signup", {pin:pin, name:name, pw:pw}).then(res => {
          if(res.data.success){
            localStorage.setItem('token', res.data.userToken);
            window.location.href= '/lobbyInfoPage';

           

          } else {

            Swal.fire({
               icon: 'error',
               title: 'User already existing',
               text: 'Use Reconnect function instead'
           });

          }


        })
      }

   }


   return(
<div>
   <ReturnButton action=""></ReturnButton>

   <p id='headers'>Join a lobby!</p>

<form className="createGameForm" id="createForm">
   <div class="enterText">
      <div class='formText'>Enter Name:</div>
      <input onChange={event => setName(event.target.value)} value={name} className="form-control" placeholder="Name...">
      </input>
   </div>
   <div class='enterText'>
      <div class='formText'>Enter Password:</div>
      <input onChange={event => setPw(event.target.value)} value={pw} className="form-control" placeholder="Password..."></input>

   </div>
    
   <div class="enterText">
      <div class='formText'>Enter lobby pin:</div>
      <input onChange={event => setPin(event.target.value)} value={pin} className="form-control" placeholder="Lobby pin..."></input>

   </div>

         <button type="button" className = "joinGameInput" id="submitButton" action='lobby' onClick={joinLobby} textDecoration='none' fontSize='7vw'>Join Game</button>

</form>


</div>
   ) 

}

export default JoinGamePage