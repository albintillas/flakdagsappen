import React from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button.js';

//Linus 

function JoinGamePage(){
   return(
<div>
   <ReturnButton action=""></ReturnButton>
    <p style={{marginLeft: '10vw', 
    marginTop: '30vw', 
    fontFamily: 'Brush Script MT', 
    textDecoration: 'underline', 
    fontSize: '13vw'}}>Enter Game Pin!</p>

    <PinInput></PinInput>
</div>
   ) 
}

export default JoinGamePage