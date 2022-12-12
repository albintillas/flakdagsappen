// Albin

import React from 'react'
import testimage from '../images/pfpTest.png'
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
                <img src={testimage} style={{

                    marginLeft:'17vw',
                    
                    width:'35vw',
                    height:'35vw',
                    objectFit:'cover',
                    border:'1vw solid #000000',
                    zIndex:'2',
                    transform: 'rotate(-18deg)'
                }}
                
                ></img>

                <img src={testimage} style={{

                marginRight:'40vw',
                
                width:'30vw',
                height:'30vw',
                objectFit:'cover',
                border:'1vw solid #000000',
                zIndex:'1',
                transform: 'rotate(-5deg)',
                marginBottom:'5vw'
                }}

                ></img>
            </div>

            <h1 className='startMainText'>Flakdag</h1>

            <p className='startSubText'>"Världsberömt" - Filosof</p>

            <p className='startSubText'>09/11-2022</p>

            <div style={{
                display:'flex',
                flexDirection:'column',
                marginLeft:'20vw',
                marginRight:'20vw'
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
