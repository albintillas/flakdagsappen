//Albin
//in progress
import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(
        <div style={{
            height: '18vw',
            width: '75vw',
            borderRadius: '15vw',
            marginTop: '5vw',
            display:'flex',
            flexDirection:'column',
            alignItems: 'center'
            }}>
        <Link to={"/" + action} style={{

            
            
        }}>
            <button type='submit' onclick = {action} className='startPageButton' style={{

                backgroundColor: buttonColor,
                textDecoration: textDecoration,
                color: textColor,

            }}>
                {text}
            </button>
        </Link>
        </div>
    )
}
export default Button