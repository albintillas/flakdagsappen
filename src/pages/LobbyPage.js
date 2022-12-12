import Header from '../components/Header.js';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'
import axios from 'axios';
import Swal from 'sweetalert2'


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

    const [units, setUnits] = useState(0);

    const [pin, setPin] = useState(0);

    const [players, setPlayers] = useState([]);

    let token = localStorage.getItem('token');  


    let lon = 10;
    let lat = 30;
    let unitsTotal = 0;


    function removeUnit(){
        /*         
        Swal.fire({  
            title: 'Ta bort en enhet?',  
            showCancelButton: true,  
            confirmButtonText: `Ja`,  
            cancelButtonText: 'Nej'
          }).then((result) => {  
              if (result.isConfirmed) {    
                setCount(count - 1)  
               }
          });
         */  
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

                    axios.post("https://flakdag.azurewebsites.net/api/data/getunits", { token }).then(res => {
                        if(res.data.success){
                            setUnits(res.data.units.length);

                        }
                })
                }
            })
            axios.post("https://flakdag.azurewebsites.net/api/data/getflakdagmeta", { id: token }).then(res => {
                        if(res.data.success){
                            setPin(res.data.flakmeta.pin);

                        }
                })
        }
      }, [])
      
      players.map(p => (
        unitsTotal += p.units.length
    ))
    

    return (
        <div class = 'main' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Header onpage={2} />
            <div style={{marginTop: "22vh", fontSize: "10vw", color: "#17D930", height: "40vh", width: "100vw", display: "flex", justifyContent: "center" }}>
                <p style={{}}>Pin: {pin}</p>
            </div>
            <div className="PFPandUnitsDisplay" style={{display: "flex", justifyContent: "center" }}>
                <div style={{
                    width: "30vw", 
                    height: "30vw"
                    }}>
                    <img src={testimage} style={{
                        marginTop:'0vh', 
                        marginLeft: '5vw',    
                        width:'20vw',
                        height:'20vw',
                        objectFit:'cover',
                        border:'0.5vw solid #000000',
                        borderRadius: '50%'
                        }}>
                    </img>
                </div>
                    <UnitsDisplay count={units}/>
                <div style={{fontSize: "8vw", marginTop: "4vh", marginLeft: "3vw", width: "30vw", fontFamily: "Noto Serif JP serif", fontStyle: "bold"}}>
                    Enheter druckna
                </div>
                
            </div>
            <div class="plusAndMinus" style={{display: "flex"}}>
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
                    className="increase" onClick={addUnit}>+1 {/* onClick={() => setCount(count + 1)} */}
                </button>
                <div className="removeUnitButton" style={{display: "flex", position: "relative",  width: '35vw'}}>
                    <button style={{
                        fontSize: "12vw", 
                        marginLeft: "8vw", 
                        marginTop: "2vh", 
                        height: "15vw",
                        width: "25vw",
                        backgroundColor: "red",
                        borderTopLeftRadius: '20vw',
                        borderBottomLeftRadius: '20vw',
                        borderTopRightRadius: '20vw',
                        borderBottomRightRadius: '20vw',
                    }}
                    className="decrease" onClick={(removeUnit)}>-1
                    </button>
                    
                </div>
            </div>

            <div className="tableHeader" style={{textAlign: "center", marginTop: "5vw",}}>
                {players.length} Personer, {unitsTotal} Enheter
            </div>
            <div style={{
                marginTop: "3vw", height:"60vh", overflowY:"scroll",
            }}>
            <table className="table" style={{width: "90vw", marginLeft: "5vw"}}>
            <tr style={{position: 'sticky',
                backgroundColor:'#F9F3F3',
                zIndex: 1,
                top: -3}}>
                    <th style={{width: "50vw", borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}><h3>Deltagare:</h3></th> 
                    <th style={{borderBottom: "0.5vw solid black"}}><h3>Enheter:</h3></th>
            </tr>
            

                {players.map(p => (
                    <tr>
                        <td style={{alignItems:"center", display: "flex", textAlign: "left", height: "17vw", width: "60vw", borderBottom: "0.5vw solid black", borderRight: "0.5vw solid black"}}>
                            <img src={p.profileImage} className='lobbyInfoPageImage' style={{marginLeft: "0%", marginRight:"10%", borderRadius:'50%'}}/>
                            <h4 style={{marginRight: "10%"}}>{p.name}</h4>
                            </td>
                        <td style={{textAlign:"center", borderBottom: "0.5vw solid black", fontSize: "5vw", fontWeight: "bold"}}>{p.units.length}</td>
                    </tr>
                            
                            
                        ))

                        }
            

                
            </table>
            </div>
        </div>
    );
}
export default LobbyPage;