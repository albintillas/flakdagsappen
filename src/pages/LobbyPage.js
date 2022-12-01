import Header from '../components/Header.js';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'
import axios from 'axios';


//Laesker

// In progress

function LobbyPage() {

    /* ----- Code below implemented for swipe function ----- */
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 100
    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        // add your conditional logic here
        if (isRightSwipe) navigate("/statistics")
        else if (isLeftSwipe) navigate("/feed")
    }
    /* ----- Code above implemented for swipe function ----- */



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
        <div class = 'main' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
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
            <div className="tableHeader" style={{textAlign: "center", marginTop: "5vw",}}>
                {players.length} Personer, {units} Enheter
            </div>
            <table className="table" style={{marginTop: "3vw", width: "90vw", marginLeft: "5vw"}}>
            <tr>
                    <th style={{width: "50vw", borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}><h3>Deltagare:</h3></th> 
                    <th style={{borderBottom: "0.5vw solid black"}}><h3>Enheter:</h3></th>
            </tr>
                {players.map(p => (
                    <tr>
                        <td style={{alignItems:"center", display: "flex", textAlign: "left", padding: "1vw", height: "17vw", width: "60vw", borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}>
                            <img src={p.profileImage} className='lobbyInfoPageImage' style={{marginLeft: "0%", marginRight:"10%", borderRadius:'50%'}}/>
                            <h4 style={{marginRight: "10%"}}>{p.name}</h4>
                            </td>
                        <td style={{borderBottom: "0.5vw solid black", fontSize: "5vw", fontWeight: "bold"}}>{p.units}</td>
                    </tr>
                            
                            
                        ))

                        }
                
                
            </table>
        </div>
    );
}
export default LobbyPage;