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

    useEffect(()=>{
        //let token = localStorage.getItem('token');    Ej hårdkodad

        let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"
        localStorage.setItem('token', token);

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
                    fontFamily: 'Noto Serif JP, serif',
                    
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
                            justifyContent: 'center',
                            marginBottom:'5%'}}>
            {isOwner == true? 
            
            
            <Button action='lobby' text='Start Game' buttonColor='#17D930' textDecoration='none' textColor='#F9F3F3' fontSize='7vw'>

            </Button>: null }
            </div> 
        </div>      
    )

}

export default LobbyInfoPage;

