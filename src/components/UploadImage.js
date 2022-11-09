// GK
// Klicka på den gråa cirkeln för att välja bild på enhet

import '../App.css';
import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{
        height:'40vw', 
        width:'40vw', 
        backgroundColor:'lightgray',
        backgroundImage: 'url(".//photos/plus.png")',
        borderRadius: '50%', 
        display: 'inline-block'
        }}>
            
      <input
        type="file"
        name="myImage"
        style={{boxSizing: 'border-box', opacity: '0.0', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'}}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage && (
        <div>
        <img style={{
            height: "40vw",
            width: "40vw", 
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            objectFit: 'cover', 
            borderRadius: '50%'
            }} 
            alt="Image not found" 
            src={URL.createObjectURL(selectedImage)} />
        </div>
      )}
      <br />
     
      <br /> 
      
    </div>
  );
};

export default UploadImage;