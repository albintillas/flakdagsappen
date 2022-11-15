//Laesker


import React, {useState} from "react"
import Button from "./Button"



function PinInput(){
    const [input, setInput] = useState(""); 

const nums = document.querySelectorAll('.num')
const form = document.querySelector('form')

nums.forEach((num, index) => {
    num.dataset.id = index
    
    num.addEventListener('keyup', () => {
        if (num.value.length == 1) {
            if (nums[nums.length - 1].value.length == 1)
            nums[parseInt(num.dataset.id) + 1].focus()
        }
    })
})

function verifyPassword(event) {  
   event.preventDefault(); 
    let pw1 = event.target.value; 

    if (pw1 != 1) {
        alert ("Password incorrect");
    }
    else if (pw1 == 1) {
        alert ("Password correct");
    }
    
}


function validate(){
    let password = document.getElementById("password").value;
    if (password == "1"){
        alert ("password CORRECT");
        window.location = "passwordCORRECT";
        return false;
    } 
    

}

    return(
        <body style = {{display: 'grid', height: "216vw", backgroundColor: '#F9F3F3'}}>
            <div style = {{marginTop: '40vw', height: '10vw', fontFamily: 'Brush Script MT', fontSize: '10vw', textDecoration: 'underline'}}>Enter Game Pin!</div>
            <form style ={{height: "216vw"}}>
                <div class="container" style ={{display: 'flex', marginTop: '10vw', marginLeft: '10vw', marginRight: '10vw'}}>
                    
                    <input type="text"  name="password" id="password" class="num" style = {{ color: '#17D930',  backgroundColor: 'white', height: '15vw', width: '15vw', textAlign: 'center',  outline: 'none', padding: '2vw 1vw',  margin: '0 1vw', fontSize: '10vw', border: '0.5vw solid black', borderRadius: '0.5vw'}} maxLength="1"></input>
                   
                </div>
                <Button text = 'Join Game' type="submit" buttonColor="#17D930" action={validate}></Button>
            </form>
            
        </body>
    )
}
//   onChange={(e) => setInput(e.target.value)}

export default PinInput


