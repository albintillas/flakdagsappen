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
        
        <StartPageButton 
        text='Join Game' 
        buttonColor='#17D930' 
        textColor='#F9F3F3'
        action='joingame'
        />

        <StartPageButton 
        text='Reconnect' 
        buttonColor='#F9F3F3' 
        textColor='#17D930'
        action='Login' 
        />
        </div>
 </div>

)
}
export default Choose