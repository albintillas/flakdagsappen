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

      let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"  //Hårdkodad


    if (pin == "" ||
        name == "" ||
        pw == "") {
          Swal.fire({
              icon: 'error',
              title: 'Saknas data',
              text: 'Alla fält måste fyllas i'
          });
          return;
      }
      else{

        axios.post("https://flakdag.azurewebsites.net/api/lobby/signup", {pin:pin, name:name, pw:pw}).then(res => {
          if(res.data.success){
            localStorage.setItem('token', token);
            window.location.href= '/lobbyInfoPage';

           

          } else {

            Swal.fire({
               icon: 'error',
               title: 'Deltagare existerar redan',
               text: 'Använd logga in funktionen istället'
           });

          }


        })
      }

   }


   return(
<div>
   <ReturnButton action=""></ReturnButton>

<p>Join a lobby!</p>

   <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Name:</h2>
      <input onChange={event => setName(event.target.value)} value={name} className="playerNameInput" style={{
         width: '40vw'
      }}>
      </input>
   </div>
   <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Password:</h2>
      <input onChange={event => setPw(event.target.value)} value={pw} classname="playerPasswordInput" style={{
         width: '40vw'
      }}></input>

   </div>
    
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter lobby pin:</h2>
      <input onChange={event => setPin(event.target.value)} value={pin} classname="playerPinInput" style={{
         width: '40vw'
      }}></input>

   </div>

         <button type="button" className = "joinGameInput" id="submitButton" action='lobby' onClick={joinLobby} buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Join Game</button>


</div>
   ) 

}

export default JoinGamePage