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
            </div>

            <div style={{display:"flex", flexWrap:"wrap"}}>
                {players.map(p => (
                    
                    <div style={{width:"25%"}} key={p.name}>

                        <img src={p.profileImage} className='lobbyInfoPageImage'/>
                        <p className='lobbyInfoPageText'>{p.name}</p>

                    </div>
                ))

                }
               
            </div>
                
            {isOwner == true? <p>Start Game!</p>: null }
        </div>      
    )

}

export default LobbyInfoPage;

