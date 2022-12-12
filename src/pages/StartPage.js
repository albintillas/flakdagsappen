// Albin

import React from 'react'
import logo from '../images/logo.png'
import StartPageButton from '../components/StartPageButton.js'



function StartPage(){

    return (

        <body>
        <div id='body'>
            <div style={{ 
            
                marginTop:'15vw',
                height:'50vw',
                display:'flex'

            }} >
                <img src={logo} style={{

                    marginLeft:'18vw',
                    
                    width:'63vw',
                    height:'40vw',
                    objectFit:'cover'
                   
                }}
                
                ></img>

                
            </div>

            <h1 className='startMainText'>Flakdag</h1>

            <p className='startSubText'>"Världsberömt" - Filosof</p>

            <p className='startSubText'>09/11-2022</p>

            <div style={{
                display:'flex',
                flexDirection:'column',
                marginLeft:'19vw',
                marginRight:'19vw'
            }}>
            <StartPageButton 
            text='Gå Med' 
            action='choose'
            >
            </StartPageButton>

            <StartPageButton 
            text='Skapa Flakdag' 
            action='creategame' >   
            </StartPageButton>
            </div>
        </div>

        </body>
    )

}

export default StartPage;
