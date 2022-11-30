// Albin - In progress

import React,{useState, useEffect, Profiler} from 'react';
import testimage from '../images/pfpTest.png'
import ReturnButton from '../components/ReturnButton';
import Button from '../components/Button';
import axios from 'axios';




function LobbyInfoPage({}){ // Vet ej om {} behövs

    const [players, setPlayers] = useState([]);

    const [isOwner, setIsOwner] = useState([]);

    const [pin, setPin] = useState([]);

    function goToLobby(){

        window.location.href= '/lobby';
   
    }


    useEffect(()=>{
        let token = localStorage.getItem('token');

        //Hämta lobby pin från ett visst id
        axios.post("https://flakdag.azurewebsites.net/api/data/GetFlakDagMeta", {id: token}).then(res => {
            setPin(res.data.flakmeta.pin)
            setIsOwner(res.data.isOwner || true)
        })
        
        if(token) {

            axios.post("https://flakdag.azurewebsites.net/api/lobby/getlobby", {token}).then(res => {

                console.log(res)     
                
                if(res.data.success){
                    setPlayers(res.data.players)
                }
            })
    
        }
      }, [])
    

    



    return (
        <div>
            <div>
                <ReturnButton action="creategame"></ReturnButton>
                <h1 style={{

                    textAlign: 'center',
                    fontFamily: 'Noto Serif JP, serif'
                    
                }}>Lobby</h1>
            </div>

            <div>
                <h2 style={{
                    textAlign: 'center',
                    fontFamily: 'Kaushan Script'
                }}>Game Pin: {pin}</h2>
                <div style={{backgroundColor: 'black', marginLeft: '10vw', width: '80vw', border: '0.1vw solid black', height: '0.1vw', marginBottom: '4vw'}}>
                </div>
            </div>

            <div style={{display:"flex", flexWrap:"wrap"}}>
                {players.map(p => (
                    
                    <div style={{width:"25%"}} key={p.name}>

                        <img src={p.profileImage} className='lobbyInfoPageImage' style={{ borderRadius:'50%'}}/>
                        <p className='lobbyInfoPageText' style={{
                            fontSize: '4vw',
                            fontFamily: 'Noto Serif JP, serif',
                            marginTop: '4vw',
                            textDecoration:'none'
                        }}>{p.name}</p>

                    </div>
                ))

                }
               
            </div>

               <div style={{display: 'flex',
                            justifyContent: 'center'}}>
            {isOwner == true? 
            
            <button type="button" className = "createGameInput" id="submitButton" action='lobby' onClick={goToLobby} buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>Starta</button>


            // <Button action='lobby' text='Start Game' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw' ></Button>
            : null }
            </div> 
        </div>      
    )

}

export default LobbyInfoPage;

