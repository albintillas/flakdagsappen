// Albin

// Work in progress

// En knapp som ska backa till tidigare sida

import React from 'react';
import { useNavigate } from "react-router-dom";
import returnArrow from '..//images/backArrow.jpg';

const Button = ({ action }) => {
    const navigate = useNavigate();
    return (

        <img src={returnArrow} alt='Return' onClick={() => navigate(-1)} style={{
            width: "12vw"
        }}>
        </img>


    )
}
export default Button