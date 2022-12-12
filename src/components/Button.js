//Linus 
//in progress
import React from 'react'
import {Link} from "react-router-dom";
import { Background } from 'victory';

const Button = ({ text, buttonColor, textColor,textDecoration ,fontSize,action }) =>{

    return(

       <Link to={"/" + action}>
            <button type='submit' Text={text} onclick = {action} style={{

                backgroundColor: buttonColor,
                color: textColor,
                textDecoration: textDecoration,
                fontSize: fontSize,
                fontFamily: 'Merriweather Sans, sans-serif',
                fontWeight: "500",
                padding: "5%",
                borderRadius: "15vw",
                border: "none",
                cursor: "pointer",
                height: "15vw",
                width: "55vw",

                marginTop: '5vw',
                height: '18vw',
                width: '60vw',
                textAlign: 'center',
                border: 'none',



                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '10vw',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '3px solid rgba(255, 253, 208, 0.5)'

            }}>

        {text}
        </button>
        </Link>
    )
}
export default Button