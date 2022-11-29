import React from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button.js';

//Linus 

function JoinGamePage(){
   return(
<div>
   <ReturnButton action=""></ReturnButton>
    <p>Enter Game Pin!</p>

    <PinInput></PinInput>
</div>
   ) 

}

export default JoinGamePage