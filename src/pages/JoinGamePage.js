import React, { useState } from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button.js';
import axios from 'axios';
import Swal from 'sweetalert2'
import UploadImage from '../components/UploadImage';


//Linus 

function JoinGamePage() {

   const [name, setName] = useState([]);

   const [pw, setPw] = useState([]);

   const [pin, setPin] = useState([]);

   const [uploadStatus, setUploadStatus] = useState(0);


   function joinLobby() {

      //let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"  //Hårdkodad


      if (pin == "" ||
         name == "" ||
         pw == "") {
         Swal.fire({
            icon: 'error',
            title: 'Saknas Data',
            text: 'Fyll i alla fält!'
         });
         return;
      }
      else {

         axios.post("https://flakdag.azurewebsites.net/api/lobby/signup", { pin: pin, name: name, pw: pw }).then(res => {
            if (res.data.success) {
               localStorage.setItem('token', res.data.userToken);
               setUploadStatus(uploadStatus + 1);
               //window.location.href= '/lobbyInfoPage';



            } else {

               Swal.fire({
                  icon: 'error',
                  title: 'Användare Finns Redan',
                  text: 'Använd "Återanslut" istället'
               });

            }


         })
      }

   }


   return (
      <div style={{ height: '100vh' }}>
         <ReturnButton action=""></ReturnButton>

         <p id='headers'>Gå med i lobby!</p>

         <form className="createGameForm" id="createForm">
            <UploadImage uploadNow={uploadStatus} isPost={false} />
            <div class="enterText">
               <div class='formText'>Ditt namn:</div>
               <input onChange={event => setName(event.target.value)} value={name} className="form-control" placeholder="Namn...">
               </input>
            </div>
            <div class='enterText'>
               <div class='formText'>Personligt Lösenord:</div>
               <input onChange={event => setPw(event.target.value)} value={pw} className="form-control" placeholder="Lösen..."></input>

            </div>

            <div class="enterText">
               <div class='formText'>Lobby Pin:</div>
               <input onChange={event => setPin(event.target.value)} value={pin} className="form-control" placeholder="Lobby pin..."></input>

            </div>

            <button type="button" className="joinGameInput" id="submitButton" input='number' action='lobby' onClick={joinLobby} textDecoration='none' fontSize='7vw'>Gå Med!</button>

         </form>


      </div>
   )

}

export default JoinGamePage