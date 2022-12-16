import React, { useState } from 'react'
// In Progress, Joel
import ReturnButton from '../components/ReturnButton.js';
// import downloadSymbol from '..//images/download.png';
// import { saveAs } from 'file-saver'
import SwipeFunction from '../components/SwipeFunction.js';
import {
    useParams
} from 'react-router-dom'

function FullImg() {
    /* ----- Code below implemented for swipe function ----- */
    const swipe = SwipeFunction(4);
    /* ----- Code above implemented for swipe function ----- */
    const [showReturn, setShowReturn] = useState(true);
    const { src } = useParams()
    let img = new Image();
    img.src = "https://flakdag.azurewebsites.net/api/data/image?id=" + src;
    let fixedHeight = (img.height / img.width) * 100;
    function setState() {
        if (showReturn) {
            setShowReturn(false)
        }
        else {
            setShowReturn(true)
        }
    }
    /*const downloadImage = () => {
        saveAs(downloadSymbol, src + '.jpg') // Put your image url here.
    }*/

    return (
        <div onTouchStart={swipe.onTouchStart} onTouchMove={swipe.onTouchMove} onTouchEnd={swipe.onTouchEnd} onClick={setState}>

            <div className="FullImg" style={{ position: "absolute", height: "100vh", width: "100vw", backgroundColor: "black", color: "white" }}>
                {showReturn
                    ? <div style={{ position: "absolute", left: "1vw", height: "12vw", width: "12vw", borderRadius: "50%", zIndex: "1" }}>
                        <ReturnButton
                            action='feed' />
                    </div>
                    : <></>
                }
                {/*<div style={{ position: "absolute", top: "2vh", right: "1vw", height: "12vw", width: "12vw", backgroundColor: "white", borderRadius: "50%", zIndex: "1", display: "flex" }}>
                    <img src={downloadSymbol} alt='Return' onClick={downloadImage} style={{
                        width: "8vw",
                        height: "8vw",
                        margin: "auto auto"
                    }}>
                </img>
                </div>*/}
                <img src={img.src} alt='Failed to load' style={{
                    position: "absolute",
                    top: "50%",
                    marginTop: "-" + fixedHeight / 2 + "vw",
                    height: fixedHeight + "vw"
                }} />
            </div>
        </div>
    )
}

export default FullImg;