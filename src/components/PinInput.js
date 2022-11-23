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
                <input type="submit" name="submit" style={{
                    backgroundColor: "#17D930",
                    color: "black",
                    textDecoration: "bold",
                    fontSize: "200%",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    textDecoration: "none",
                    padding: "10%",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    height: "75%",
                    width: "55%"
                    }}/>
            </form>
          </center>
        </div>
        
      );
      
}



export default PinInput


