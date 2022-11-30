import React from 'react'
// In Progress, Joel
import image from '..//images/test2.png';
import ReturnButton from '../components/ReturnButton.js';
import downloadSymbol from '..//images/download.png';
import {
    useParams
} from 'react-router-dom'
import { saveAs } from 'file-saver'

function FullImg() {
    const { cca3 } = useParams()
    let img = new Image();
    img.src = image;
    let fixedHeight = (img.height / img.width) * 100;
    const { innerWidth, innerHeight } = window;
    let standingDisplay = innerHeight > innerWidth;
    if (!standingDisplay) {
        fixedHeight = (img.width / img.height) * 100;
    }
    const downloadImage = () => {
        saveAs(image, 'image.jpg') // Put your image url here.
    }

    return (
        <div class="FullImg" style={{ position: "absolute", height: "100vh", width: "100vw", backgroundColor: "black", color: "white" }}>
            <div style={{ position: "absolute", top: "1vh", left: "1vw", height: "12vw", width: "12vw", backgroundColor: "white", borderRadius: "50%", zIndex: "1" }}>
                <ReturnButton
                    action='feed' />
                <a>{innerWidth}</a>
            </div>
            <div style={{ position: "absolute", top: "1vh", right: "1vw", height: "12vw", width: "12vw", backgroundColor: "white", borderRadius: "50%", zIndex: "1" }}>
                <img src={downloadSymbol} alt='Return' onClick={downloadImage} style={{
                    width: "10vw",
                    margin: "auto"
                }}>
                </img>
            </div>
            <img src={image} alt='Failed to load' style={{
                position: "absolute",
                ...standingDisplay
                    ? {
                        top: "50%",
                        marginTop: "-" + fixedHeight / 2 + "vw",
                        height: fixedHeight + "vw"
                    }
                    : {
                        left: "50%",
                        marginLeft: "-" + fixedHeight / 2 + "vh",
                        width: fixedHeight + "vh"
                    }
            }} />
        </div>
    )
}

export default FullImg;