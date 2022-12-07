// GK
// Klicka på den gråa cirkeln för att välja bild på enhet

import '../App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';


const UploadImage = ({ size, uploadNow }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {

  }, [selectedImage])

  console.log("Upload Bool: " + uploadNow)
  if (uploadNow) {
    console.log("test1")
    axios.post("https://flakdag.azurewebsites.net/api/data/uploadfilebytes", { selectedImage }).then(res => {
      console.log("test2")
      console.log("Upload Status: " + res.data.success)
    })
  }

  return (
    <div style={{
      height: '40vw',
      width: '40vw',
      backgroundColor: 'lightgray',
      borderRadius: '50%',
      display: 'inline-block'
    }}>

      <input
        type="file"
        name="myImage"
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: '0',
          right: '0',
          textAlign: 'center',
          opacity: '0.0',
          position: 'absolute',
          height: '40vw',
          width: '40vw'
        }}
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