// Albin

// Work in progress

// En knapp som ska backa till tidigare sida

import React from 'react';
import {Link} from "react-router-dom";
import returnArrow from '..//images/backArrow.jpg';

const Button = ({action }) =>{

    return(

        <Link to={"/" + action}>
            <img src={returnArrow} alt='Return' onclick = {action} style={{
                width: "12vw"
            }}>
            </img>
        </Link>

    
    )
}
export default Button