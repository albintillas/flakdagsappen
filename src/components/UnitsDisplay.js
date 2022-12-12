// Laesker
// In progress
import React from 'react';

function UnitsDisplay({count}) {

    return(
        <div style={{display: "inline-block"}}>
            <div id='unitsAmount'>
                {count}
            </div>           
        </div>
    )

}

export default UnitsDisplay