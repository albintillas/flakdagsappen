import React from 'react'
import PinInput from '../components/PinInput';
import Button from '../components/Button';

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
</div>
   ) 
}

export default JoinGamePage