// Albin

// Work in progress

// En knapp som ska backa till tidigare sida

import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(

        <Link to={"/" + action}>
            <button type='submit' onclick = {action} style={{
                backgroundColor: buttonColor,
                textDecoration: textDecoration,
                color: textColor,
            
                fontSize: '150%',
                textAlign: 'center',
                height: '10vw',
                width: '25vw',
                border: '1vw solid #17D930',
                borderRadius: '15vw',
                fontFamily: 'Noto Serif JP serif',
            
                
            }}>
                {text}
            </button>
        </Link>

    
    )
}
export default Button