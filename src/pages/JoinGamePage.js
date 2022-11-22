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

    <div  style = {{
          display: "flex",
          justifyContent: "center",
                  }}>
    <Button buttonColor= "#17D930" text="Knapp"></Button>
    </div>
</div>
   ) 
}

export default JoinGamePage