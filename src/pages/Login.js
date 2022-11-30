import React from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';



function Login(){ 
return(
    <div>
       <ReturnButton action="Choose"></ReturnButton>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{justifyContent:'center', display:'flex'}}>
                <h1 className='startMainText' style={{fontSize: '9vw'}}>Reconnect to existing lobby</h1>
            </div>
            {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h2 style={{fontSize: '5vw', width: '40vw'}}>Lobby Id:</h2>
                <input className="playerNameInput" style={{
                    width: '40vw'
                }}>
                </input>
            </div> */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Password:</h2>
                <input classname="playerPasswordInput" style={{
                    width: '40vw'
                }}></input>
            </div>
       </div>
        <PinInput></PinInput>
    </div>
       ) 
    
    }
    
    export default Login