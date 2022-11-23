// Laesker
// In progress
import React from 'react';

function UnitsDisplay({count}) {

    return(
        <div style={{display: "inline-block"}}>
            <div style={{marginTop: "7vw", textAlign: "center", marginLeft: "2vw", fontSize: "25vw", color: "#17D930", width: "30vw"}}>
                {count}
            </div>           
        </div>
    )

}

export default UnitsDisplay