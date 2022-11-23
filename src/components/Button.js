//Linus 
//in progress
import React from 'react'
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,fontSize,action }) =>{

    return(

       <Link to={"/" + action}>
            <button type='submit' Text={text} onclick = {action} style={{

                backgroundColor: buttonColor,
                color: textColor,
                textDecoration: textDecoration,
                fontSize: fontSize,
                fontFamily: 'Noto Serif JP serif',
                fontWeight: "500",
                padding: "5%",
                borderRadius: "15vw",
                border: "none",
                cursor: "pointer",
                height: "15vw",
                width: "55vw",
                boxShadow: "1vw 2vw 3vw #888888",
            }}>

        {text}
        </button>
        </Link>
    )
}
export default Button