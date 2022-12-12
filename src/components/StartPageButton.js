//Albin
//in progress
import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(
        <div style={{
            height: '18vw',
            width: '70vw',
            borderRadius: '15vw',
            marginTop: '5vw'
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