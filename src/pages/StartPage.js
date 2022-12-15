// Albin

import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import Cookies from 'js-cookie';
import logo1024 from '../images/logo1024.png'


import StartPageButton from '../components/StartPageButton.js'
import Swal from 'sweetalert2'



function StartPage() {
    let pin = Cookies.get('lobbyPincode');
    let password = Cookies.get('userPassword');
    if (password !== undefined &&
        pin !== undefined) {
        console.log("test1")
        useEffect(() => {
            console.log("test2")
            Swal.fire({
                title: 'Du är redan inne i en lobby',
                text: 'Vill du Återkoppla?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: `Ja`,
                cancelButtonText: 'Nej'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/login';
                }
                else {
                    Cookies.remove('lobbyPincode');
                    Cookies.remove('userPassword');
                }
            })
            console.log("test3")
        })
    }
    else {
        useEffect(() => {
            Swal.fire({
                title: 'Har du fyllt 20 år?',
                text: 'För att bruka denna app måste du vara 20 år eller äldre',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: `Ja`,
                cancelButtonText: 'Nej'
            }).then((result) => {
                if (!result.isConfirmed) {
                    window.location = "https://www.youtube.com/channel/UChGJGhZ9SOOHvBB0Y4DOO_w";

                }
            })
        })
    }
    return (

        <body>
            <div id='body' style={{ height: '95vh' }}>

                <img src={logo1024} style={{

                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '55%',
                    marginTop: '5vh'

                }}

                ></img>

                <h1 className='startMainText'>Flakdag</h1>

                <p className='startSubText'>"Bra härj" - Student</p>

                <p className='startSubText'>09/10-2022</p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: '19vw',
                    marginRight: '19vw'
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
