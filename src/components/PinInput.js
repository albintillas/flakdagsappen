//Laesker

//Klar

import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function PinInput() {
    const [data,setData] = useState({
      password:""
    })

  // Navigate between views
    const navigate = useNavigate();
    
    const {password: pin} = data;
    
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      var correctPin="1234";
      
        if (pin == correctPin){
          navigate("/lobby")
        } else {
            alert("Invalid room code")
        }
    }
    
      return (
        <div>
          <center>
            <form onSubmit={submitHandler}>
                <input style={{width: '60vw', height: '20vw', fontSize: '13vw', textAlign: 'center', letterSpacing: '2vw'}}
                type="text" name="password" value={pin} onChange={changeHandler}/><br/>
                
                <input type="submit" name="submit" value="Join Game" style={{
                    fontFamily: 'Noto Serif JP serif',
                    backgroundColor: "#17D930",
                    color:'#F9F3F3',
                    fontSize: "200%",
                    textDecoration: "none",
                    padding: "5%",
                    borderRadius: "15vw",
                    border: "none",
                    cursor: "pointer",
                    height: "75%",
                    width: "65%",
                    marginTop: "1vw",
                    boxShadow: "1vw 2vw 3vw #888888"
    
                    }}/>
            </form>
          </center>
        </div>
        
      );
      
}



export default PinInput


