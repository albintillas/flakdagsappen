//Linus 
//in progress
import React from 'react'

const Button = ({ text, buttonColor, textColor,textDecoration ,action }) =>{

    return(
        <button type='submit' onclick = {action} style={{
            backgroundColor: buttonColor,
            textDecoration: textDecoration,
            color: textColor,
            padding: '5% 10% 5% 10%',
            fontSize: '170%',
            fontWeight: 'bold',
            borderRadius: '45%',
            textAlign: 'center',
            boxShadow: '2px 2px 8px #888888'
          }}>
            {text}
        </button>
    )
}
export default Button