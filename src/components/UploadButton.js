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
                border: "2px solid " + textColor,
                boxShadow: "none",
                textAlign: "center",
                fontFamily: 'Merriweather Sans',
                color: '#EEEEEE',
                background: 'rgba(26, 40, 73, 0.3)',
                borderRadius: '10vw',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                webkitBackdropFilter: 'blur(10px)',
                border: '3px solid rgba(238, 238, 238, 0.5)'
            }}>
                {text}
            </button>
        </Link>
        </div>
    )
}
export default Button