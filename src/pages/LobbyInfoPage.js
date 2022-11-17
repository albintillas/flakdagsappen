// Albin - In progress

import React from 'react';
import testimage from '../images/pfpTest.png'

function LobbyInfoPage(){

    return (

        <div>

            <div>
                <h1 style={{

                    textAlign: 'center'

                }}>Lobby</h1>
            </div>

            <div>
                <h2 style={{

                    textAlign: 'center'

                }}>Game Pin: 1234</h2>
            </div>

            <div style={{display:"flex"}}>

                <div style={{width:"25%", backgroundColor:"red"}}>

                <img src={testimage} className='lobbyInfoPageImage'
                ></img>

                    <p className='lobbyInfoPageText'>Namn Namnsson</p>

                </div>

                <div style={{width:"25%", backgroundColor:"green"}}>

                <img src={testimage} className='lobbyInfoPageImage'
                ></img>

                    <p className='lobbyInfoPageText'>Namn Namnsson</p>

                </div>

                <div style={{width:"25%", backgroundColor:"blue"}}>

                <img src={testimage} className='lobbyInfoPageImage'
                ></img>

                    <p className='lobbyInfoPageText'>Namn Namnsson</p>

                </div>

                <div style={{width:"25%", backgroundColor:"yellow"}}>

                <img src={testimage} className='lobbyInfoPageImage'
                ></img>

                    <p className='lobbyInfoPageText'>Namn Namnsson</p>

                </div>

            </div>


        </div>      

    )

}

export default LobbyInfoPage;

