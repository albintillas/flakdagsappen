//Laesker

//Klar

import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

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

    const Swal = require('sweetalert2')
      
        if (pin == correctPin){
          navigate("/lobby")
        } else {
          Swal.fire({
            title: 'Wrong Game Pin!',
            //text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }
    }
    
      return (
        <div>
          <center>
            <form onSubmit={submitHandler}>
                <input style={{width: '60vw',fontSize:'13vw',marginBottom:'2vw', height: '20vw', textAlign: 'center', letterSpacing: '2vw'}}
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


