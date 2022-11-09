//Linus 
//in progress
import React from 'react'

const Button = ({ text, color,  }) =>{

    return(
        <div style={{
            backgroundColor: color,
            width: '50%',
            padding: '2% 2% 2% 2%',
            fontSize: '170%',
            fontWeight: 'bold',
            borderRadius: '4%',
            textAlign: 'center'
          }}>
            {text}
        </div>
    )
}
export default Button