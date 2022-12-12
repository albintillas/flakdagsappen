// Albin

// Work in progress

// En knapp som ska backa till tidigare sida

import React from 'react';
import { useNavigate } from "react-router-dom";
import returnArrow from '..//images/hej.png';

const Button = () => {
    const navigate = useNavigate();
    return (

        <img src={returnArrow} alt='Return' onClick={() => navigate(-1)} style={{
            width: "20vw"
        }}>
        </img>


    )
}
export default Button