//Linus 
//in progress
import React from 'react'
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(

       // <Link to={"/" + action}>
            <button type='submit' onclick = {action} style={{

                backgroundColor: buttonColor,
                color: textColor,
                textDecoration: textDecoration,
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
            }}>
                {text}
            </button>
       //<Link>
    )
}
export default Button