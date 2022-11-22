//Laesker

import React, {useState} from "react"
import LobbyPage from "../pages/LobbyPage"
import Button from "./Button"
import {Route, Redirect} from "react-router-dom";
import {Navigate} from 'react-router-dom';

function PinInput() {
    const [data,setData] = useState({
      password:""
    })
    
    const {password: pin} = data;
    
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      var correctPin="1234";
        if (pin == correctPin){
            window.location = "../pages/LobbyPage"
        } else {
            alert("Invalid room code")
        }
    }
    
      return (
        <div>
          <center>
            <p style={{marginTop: '30vw', fontFamily: 'Brush Script MT', textDecoration: 'underline', fontSize: '13vw'}}>Enter Game Pin!</p>
            <form onSubmit={submitHandler}>
                <input style={{width: '60vw', height: '20vw', fontSize: '13vw', textAlign: 'center', letterSpacing: '2vw'}}
                type="text" name="password" value={pin} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
            </form>
          </center>
        </div>
        
      );
      
}



export default PinInput


