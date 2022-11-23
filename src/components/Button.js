//Linus 
//in progress
import React from 'react'
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(

       <Link to={"/" + action}>
            <button type='submit' onclick = {action} style={{

                backgroundColor: buttonColor,
                color: textColor,
                textDecoration: textDecoration,
                fontSize: "200%",
                textTransform: "uppercase",
                fontWeight: "700",
                textDecoration: "none",
                padding: "5%",
                borderRadius: "15vw",
                border: "none",
                cursor: "pointer",
                height: "75%",
                width: "55%",
                boxShadow: "1vw 2vw 3vw #888888",
            }}>
                {text}
            </button>
        </Link>
    )
}
export default Button