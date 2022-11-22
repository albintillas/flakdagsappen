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
            <form onSubmit={submitHandler}>
                <input type="text" name="password" value={pin} onChange={changeHandler}/><br/>
                <input type="submit" name="submit"/>
            </form>
          </center>
        </div>
      );
}

export default PinInput


