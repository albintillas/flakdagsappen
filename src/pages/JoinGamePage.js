import React from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button.js';

//Linus 

function JoinGamePage(){
   return(
<div>
   <ReturnButton action="Choose"></ReturnButton>
   <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Name:</h2>
      <input className="playerNameInput" style={{
         width: '40vw'
      }}>
      </input>
   </div>
   <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Password:</h2>
      <input classname="playerPasswordInput" style={{
         width: '40vw'
      }}></input>

   </div>
    <p>Enter Game Pin!</p>
    <PinInput></PinInput>
</div>
   ) 

}

export default JoinGamePage