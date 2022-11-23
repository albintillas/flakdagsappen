// Laesker
// In progress
import React, {useState} from 'react';

function UnitsDisplay({count, setCount}) {

    

    return(
        <div style={{display: "inline-block"}}>
            <div style={{marginTop: "10vw", textAlign: "center", marginLeft: "2vw", fontSize: "25vw", color: "#17D930", width: "30vw", border: "0.5vw solid yellow"}}>
                {count}
            </div>           
        </div>
    )

}

export default UnitsDisplay