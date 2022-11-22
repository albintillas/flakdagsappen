//Joel
//in progress
import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textDecoration, textColor ,action }) =>{

    return(
        <div style={{
            height: '10vw',
            width: '35vw',
            display: "inline-block",
            margin: "1vw 1vh 1vw 1vh"
            }}>
        <Link to={"/" + action} style={{

            
            
        }}>
            <button type='submit' onclick = {action} className='startPageButton' style={{
                height: "10vw",
                width: "35vw",
                fontSize: "5vw",
                backgroundColor: buttonColor,
                textDecoration: textDecoration,
                color: textColor,
                border: "2px solid " + textColor,
                boxShadow: "none"

            }}>
                {text}
            </button>
        </Link>
        </div>
    )
}
export default Button