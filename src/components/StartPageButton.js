//Albin
//in progress
import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(
        
        <Link to={"/" + action}>
            <button type='submit' onclick = {action} style={{
                backgroundColor: buttonColor,
                textDecoration: textDecoration,
                color: textColor,
                height: '18vw',
                fontSize: '170%',
                textAlign: 'center',
                marginTop: '5vw',
                border:'1vw solid #17D930',
                borderRadius: '15vw',
                fontFamily: 'Noto Serif JP serif',
                boxShadow: '1vw 2vw 3vw #888888'
            
            }}>
                {text}
            </button>
        </Link>
    )
}
export default Button