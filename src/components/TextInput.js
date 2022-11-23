// Albin

// OBS! Submit knappen finns ej då den ska vara i annan funktion

import React from "react";

function TextInput(){

    return (

        <div>

        <form>
            <input className="TextInputBox" type="text" placeholder="Enter Name..." name="name" 
            style={{
                backgroundColor: 'transparent', 
                width: '40vw', 
                height: '10vw', 
                margintop: '5vw', 
                bordercolor: '#00A300', 
                fontfamily: 'system-ui',
                marginBottom: '5vw'
            }}/>
           
         </form>

         </div>

    )

}

export default TextInput;
