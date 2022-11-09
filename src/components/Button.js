//Linus 
//in progress
import React from 'react'

const Button = ({ text, buttoncolor, textcolor,textdecoration  }) =>{

    return(
        <div style={{
            backgroundColor: buttoncolor,
            textDecoration: textdecoration,
            color: textcolor,
            padding: '2% 2% 2% 2%',
            fontSize: '170%',
            fontWeight: 'bold',
            borderRadius: '36%',
            textAlign: 'center',
            boxShadow: '10px 10px 8px #888888'
          }}>
            {text}
        </div>
    )
}
export default Button