import Header from '../components/Header.js';
import React, {useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'

//Laesker

// In progress

function LobbyPage() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <Header onpage={2} />
            <div class="main" style={{marginTop: "2vh", display: "flex", justifyContent: "center" }}>
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
            <div style={{display: "flex"}}>
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
                        paddingBottom: '20vw'
                    }}
                    className="increase" onClick={() => setCount(count + 1)}>+1
                </button>
                <div classname="Container" style={{display: "flex", position: "relative", width: '35vw'}}>
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
        </div>
    );
}
export default LobbyPage;