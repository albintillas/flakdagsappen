// Albin

import React from 'react'
import logo from '../images/logo.png'
import logo1024 from '../images/logo1024.png'


import StartPageButton from '../components/StartPageButton.js'



function StartPage(){

    return (

        <body>
        <div id='body' style={{height:'95vh'}}>
           
                <img src={logo1024} style={{

                    display:'block',
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'55%',
                    marginTop:'5vh'

                    }}

                ></img>


                
            

            <h1 className='startMainText'>Flakdag</h1>

            <p className='startSubText'>"Världsberömt" - Filosof</p>

            <p className='startSubText'>09/11-2022</p>

            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
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
