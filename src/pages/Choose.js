import React from 'react';
import StartPageButton from '../components/StartPageButton';
import ReturnButton from '../components/ReturnButton';

function Choose(){
return(
<div style={{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        //marginLeft:'20vw',
        //marginRight:'20vw'
        }}>
    <ReturnButton action=""></ReturnButton>
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
        }}>

            <p id='headers'>Hur vill du gå med?</p>
        
        <StartPageButton 
        text='Ny Lobby' 
        action='joingame'
        />

        <StartPageButton 
        text='Återanslut' 
        action='Login' 
        />
        </div>
 </div>

)
}
export default Choose