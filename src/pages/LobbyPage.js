import Header from '../components/Header.js';
import React, {useState} from 'react';
import UnitsDisplay from '../components/UnitsDisplay'
import testimage from '../images/pfpTest.png'
import Button from '../components/Button'

//Laesker

// In progress

// Ha allt av sidans innehåll i main diven


// <Button buttonColor="#17D930" textColor="white" text="+1" action={unitsDisplayed = +1}></Button>
function LobbyPage() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <Header onpage={2} />
            <div class="main" style={{marginTop: "2vh", display: "flex", justifyContent: "center" }}>
                <div style={{
                    width: "30vw", 
                    height: "30vw",
                    border: "0.5vw solid yellow"}}>
                    <img src={testimage} style={{
                        marginTop:'15vw',     
                        width:'20vw',
                        height:'20vw',
                        objectFit:'cover',
                        border:'1vw solid #000000'
                        }}>
                    </img>
                </div>
                    <UnitsDisplay count={count} setCount={setCount} />
                <div style={{border: "0.5vw solid yellow", fontSize: "8vw", marginTop: "15vw", marginLeft: "3vw", width: "30vw", fontFamily: "Noto Serif JP serif"}}>
                    Enheter druckna
                </div>
                
            </div>
            <button className="increase" onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
export default LobbyPage;