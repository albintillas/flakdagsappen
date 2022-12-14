import Header from '../components/Header.js';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'
import testimage2 from '../images/Test.png'
import axios from 'axios';
import Swal from 'sweetalert2'
import SwipeFunction from '../components/SwipeFunction.js';


//Laesker

// In progress

function LobbyPage() {

    /* ----- Code below implemented for swipe function ----- */
    const swipe = SwipeFunction(2);
    /* ----- Code above implemented for swipe function ----- */



    const [units, setUnits] = useState(0);

    const [pin, setPin] = useState(0);

    const [players, setPlayers] = useState([]);

    let token = localStorage.getItem('token');  


    let lon = 10;
    let lat = 30;
    let unitsTotal = 0;


    function removeUnit(){     
        Swal.fire({  
            title: 'Ta bort en enhet?',  
            showCancelButton: true,  
            confirmButtonText: `Ja`,  
            cancelButtonText: 'Nej'
          }).then((result) => {  
              if (result.isConfirmed) {    
                axios.post("https://flakdag.azurewebsites.net/api/data/undounit", { token }).then(res => {})
                
                axios.post("https://flakdag.azurewebsites.net/api/data/getunits", { token }).then(res => {
                    if(res.data.success){
                        setUnits(res.data.units.length);
                    }
                })  
               }
          });
    }

    function addUnit(){
        if(units < 23){
            if(token) {
        
                axios.post("https://flakdag.azurewebsites.net/api/data/addunit", { token }).then(res => {})
                
                axios.post("https://flakdag.azurewebsites.net/api/data/getunits", { token }).then(res => {
                    if(res.data.success){
                        setUnits(res.data.units.length);
                    }
                })
            }
        }
        else if (units == 23){
            if(token) {
        
                axios.post("https://flakdag.azurewebsites.net/api/data/addunit", { token }).then(res => {})
                
                axios.post("https://flakdag.azurewebsites.net/api/data/getunits", { token }).then(res => {
                    if(res.data.success){
                        setUnits(res.data.units.length);
                    }
                })
            }
            Swal.fire({
                icon: 'success',
                title: 'Grattis!',
                text: 'Bra jobbat, du har klarat flakdagen!'
            });
            return;  
        }
        else{
            Swal.fire({
                icon: 'success',
                title: 'Grattis!',
                text: 'Bra jobbat, du har klarat flakdagen!'
            });
            return;  
        }
        
    } 

    useEffect(()=>{
        if(token) {
        
            axios.post("https://flakdag.azurewebsites.net/api/data/getflakflow", { token }).then(res => {
                //console.log(res) 
                if(res.data.success){
                    setPlayers(res.data.players)
                }
            })
            axios.post("https://flakdag.azurewebsites.net/api/data/getunits", { token }).then(res => {
                if(res.data.success){
                    setUnits(res.data.units.length);
                }
            })
            axios.post("https://flakdag.azurewebsites.net/api/data/getflakdagmeta", { id: token }).then(res => {
                if(res.data.success){
                    setPin(res.data.flakmeta.pin);
                }
            })
        }
      }, [])
  
      const WAIT_TIME = 3000;

      useEffect(() => {
        const id = setInterval(() => {
            axios.post("https://flakdag.azurewebsites.net/api/data/getflakflow", { token }).then(res => {
                //console.log(res) 
                if(res.data.success){
                    setPlayers(res.data.players)
                }
            })
        }, WAIT_TIME);
        return () => clearInterval(id);
      }, [units]); 
       
      players.map(p => (
        unitsTotal += p.units.length
    ))

    

    return (
        <div class = 'main' style={{height:'88.4vh'}} onTouchStart={swipe.onTouchStart} onTouchMove={swipe.onTouchMove} onTouchEnd={swipe.onTouchEnd}>
            <Header onpage={2} />
            
            <div className="PFPandUnitsDisplay">
             
                    <img src={testimage2} id='lobbyImage'></img>
                    
                    <UnitsDisplay count={units}/>
                <div id='unitsText'>Enheter</div>
                
            </div>
            <div style={{display: "flex"}}>
                <button id="increase" onClick={addUnit}>+1 {/* onClick={() => setCount(count + 1)} */}
                </button>
                <div className="removeUnitButton" style={{display: "flex", position: "relative",  width: '35vw'}}>
                    <button id="decrease" onClick={(removeUnit)}>-1
                    </button>
                    
                </div>
            </div>

            <div className="tableHeader">
                Lobby: {players.length} Spelare, {unitsTotal} Enheter
            </div>
           
            <div id='divUsers'>
           
            <table className="table">
            <tr style={{position: '',
                backgroundColor:'transparent',
                zIndex: 1,
                top: -3}}>
                    <th style={{width: "40vw", borderBottom: "1vw solid #EEEEEE", borderRight: "1vw solid #EEEEEE"}}><h3>Spelare:</h3></th> 
                    <th style={{borderBottom: "1vw solid #EEEEEE"}}>Enheter:</th>
            </tr>
            

                {players.map(p => (
                    <tr>
                        <td style={{alignItems:"center", display: "flex", textAlign: "left", height: "18vw", width: "60vw", borderBottom: "1vw solid #EEEEEE", borderRight: "1vw solid #EEEEEE"}}>
                            <img src={"https://flakdag.azurewebsites.net/api/data/image?id=" + p.profileImage} className='lobbyInfoPageImage' style={{marginLeft: "0%", marginRight:"10%", borderRadius:'50%'}}/>{p.name}</td>
                        <td style={{textAlign:"center", borderBottom: "1vw solid #EEEEEE", fontSize: "5vw", fontFamily:'Merriweather Sans'}}>{p.units.length}</td>
                    </tr>
                            
                            
                        ))

                        }


                
            </table>
            <div id='inLobbyPin'>
                <p id='inLobbyPinText'>Pin: {pin}</p>
            </div>
            </div>
            
        </div>
    );
}
export default LobbyPage;