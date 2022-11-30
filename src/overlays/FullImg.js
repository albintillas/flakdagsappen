import React from 'react'
// In Progress, Joel
import image from '..//images/test2.png';
import ReturnButton from '../components/ReturnButton.js';
import downloadSymbol from '..//images/download.png';

function FullImg() {
    return (
        <div class="FullImg" style={{ height: "100vh", width: "100vw", backgroundColor: "black", color: "white" }}>
            <div style={{ position: "absolute", top: "1vh", left: "1vw", height: "12vw", width: "12vw", backgroundColor: "white", borderRadius: "50%" }}>
                <ReturnButton
                    action='feed' />
            </div>
            <div style={{ position: "absolute", top: "1vh", right: "1vw", height: "12vw", width: "12vw", backgroundColor: "white", borderRadius: "50%" }}>
                <img src={downloadSymbol} alt='Return' style={{
                    width: "10vw",
                    margin: "auto"
                }}>
                </img>
            </div>
            <img src='..//images/test2.png' alt='Failed to load' style={{
                position: "absolute",
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: "25vh"
            }} />
        </div>
    )
}

export default FullImg;