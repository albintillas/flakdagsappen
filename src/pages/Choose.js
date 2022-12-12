import React from 'react';
import StartPageButton from '../components/StartPageButton';
import ReturnButton from '../components/ReturnButton';

function Choose(){
return(
<div style={{
        display:'flex',
        flexDirection:'column',
        //marginLeft:'20vw',
        //marginRight:'20vw'
        }}>
    <ReturnButton action=""></ReturnButton>
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
        }}>

            <p id='headers'>How do you want to join?</p>
        
        <StartPageButton 
        text='New Lobby' 
        action='joingame'
        />

        <StartPageButton 
        text='Reconnect' 
        action='Login' 
        />
        </div>
 </div>

)
}
export default Choose