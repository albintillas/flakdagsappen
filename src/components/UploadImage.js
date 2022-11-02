//GK

import '../App.css';
import React, { useState } from "react";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{
        height:'40vw', 
        width:'40vw', 
        backgroundColor:'lightgray', 
        borderRadius: '50%', 
        display: 'inline-block'
        }}>
            
      <input
        type="file"
        name="myImage"
        style={{opacity: '0.0', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%,'}}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage && (
        <div>
        <img style={{
            height: "50vw",
            width: "50vw", 
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