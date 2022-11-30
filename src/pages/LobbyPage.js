import Header from '../components/Header.js';
import React, {useEffect, useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'
import axios from 'axios';


//Laesker

// In progress

function LobbyPage() {

    const [count, setCount] = useState(0);

    const [players, setPlayers] = useState([]);

    let units = 0;

    useEffect(()=>{
        let token = localStorage.getItem('token');    //Ej hårdkodad

        //let token = "3a1b3206-0f04-448e-b480-eca9054f141d46185bb3-405e-4dea-92c6-fef5bf6b9ebf"

        if(token) {
        
            axios.post("https://flakdag.azurewebsites.net/api/lobby/getlobby", { token }).then(res => {
                console.log(res) 
                if(res.data.success){
                    setPlayers(res.data.players)
                }
            })
        }
      }, [])

      units = players.reduce((u,p) =>  u = u + p.units , 0 )

    return (
        <div class="main">
            <Header onpage={2} />
            <div class="PFPandUnitsDisplay" style={{marginTop: "2vh", display: "flex", justifyContent: "center" }}>
                <div style={{
                    width: "30vw", 
                    height: "30vw"
                    }}>
                    <img src={testimage} style={{
                        marginTop:'15vw', 
                        marginLeft: '5vw',    
                        width:'20vw',
                        height:'20vw',
                        objectFit:'cover',
                        border:'0.5vw solid #000000',
                        borderRadius: '50%'
                        }}>
                    </img>
                </div>
                    <UnitsDisplay count={count} setCount={setCount} />
                <div style={{fontSize: "8vw", marginTop: "15vw", marginLeft: "3vw", width: "30vw", fontFamily: "Noto Serif JP serif", fontStyle: "bold"}}>
                    Enheter druckna
                </div>
                
            </div>
            <div class="plusOneAndTiltedImages" style={{display: "flex"}}>
                <button style={{
                        width: '60vw',
                        height: '20vw',
                        border: '1vw solid #17D930',
                        backgroundColor: '#17D930',
                        color: 'white',
                        borderTopLeftRadius: '20vw',
                        borderBottomLeftRadius: '20vw',
                        borderTopRightRadius: '20vw',
                        borderBottomRightRadius: '20vw',
                        fontSize: '18vw',
                        justifyContent: 'center',
                        paddingBottom: '20vw',
                    }}
                    className="increase" onClick={() => setCount(count + 1)}>+1
                </button>
                <div className="imgContainer" style={{display: "flex", position: "relative", width: '35vw'}}>
                    <img src={testimage} style={{
                            marginLeft:'5vw',
                            marginTop: '5vw',
                            width:'15vw',
                            height:'15vw',
                            objectFit:'cover',
                            border:'0.5vw solid #000000',
                            zIndex:'2',
                            transform: 'rotate(-20deg)',
                            position: 'absolute'
                        }}>
                    </img>
                    <img src={testimage} style={{
                            marginLeft:'13vw',
                            marginTop: '1vw',
                            width:'15vw',
                            height:'15vw',
                            objectFit:'cover',
                            border:'0.5vw solid #000000',
                            zIndex:'1',
                            transform: 'rotate(-10deg)',
                            position: 'absolute'
                        }}>
                    </img>
                    <img src={testimage} style={{
                            marginLeft:'21vw',
                            width:'15vw',
                            height:'15vw',
                            objectFit:'cover',
                            border:'0.5vw solid #000000',
                            zIndex:'0',
                        }}>
                    </img>
                </div>
            </div>
            <div className="tableHeader" style={{textAlign: "center", marginTop: "5vw"}}>
                {players.length} Personer, {units} Enheter
            </div>
            <table className="table" style={{marginTop: "3vw", width: "80vw", marginLeft: "10vw", textAlign: "center"}}>
            <tr>
                    <th style={{borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}>Namn:</th> 
                    <th style={{borderBottom: "0.5vw solid black"}}>Antal enheter:</th>
            </tr>
                {players.map(p => (
                    <tr>
                        <td style={{borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}>{p.name}</td>
                        <td style={{borderBottom: "0.5vw solid black"}}>{p.units}</td>
                    </tr>
                            
                            
                        ))

                        }
                
                
            </table>
        </div>
    );
}
export default LobbyPage;