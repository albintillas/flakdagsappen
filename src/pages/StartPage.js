// Albin

import React, {useEffect, useState} from 'react';
import logo from '../images/logo.png'
import logo1024 from '../images/logo1024.png'


import StartPageButton from '../components/StartPageButton.js'
import Swal from 'sweetalert2'



function StartPage(){
   
    useEffect(()=>{
            Swal.fire({  
                title: 'Är du över 20 år gammal?',  
                showCancelButton: true,  
                confirmButtonText: `Ja`,  
                cancelButtonText: 'Nej'
              }).then((result) => {  
                if (!result.isConfirmed) { 
                window.location = "white";
                
             };     
        })
    })
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

            <p className='startSubText'>"Bra härj" - Student</p>

            <p className='startSubText'>09/10-2022</p>

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
