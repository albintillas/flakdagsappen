import React from 'react'
import PinInput from '../components/PinInput';
import Button from '../components/Button';
import ReturnButton from '../components/ReturnButton';

//Linus 

function JoinGamePage(){
   return(
<div>
    <p style={{
        backgroundColor: 'white',
        fontSize:'300%',
        textDecoration: 'underline',
        textAlign: 'center'
    }}>Enter Game Pin!</p>
    <p>PinInput</p>
    <Button style={{
        marginRight:'300px' 
    }}  text='Join Game' buttonColor='#17D930' />


  
      <ReturnButton text='Return' 
      buttonColor='#17D930' 
      textColor='#FFFFFF'
      action=''></ReturnButton>
    

</div>
   ) 
}

export default JoinGamePage