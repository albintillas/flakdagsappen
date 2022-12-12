// GK
// Klicka på den gråa cirkeln för att välja bild på enhet

import '../App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';


const UploadImage = ({ size, uploadNow, isPost }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {

  }, [selectedImage])

  console.log("MakePost button has been hit: " + uploadNow)
  if (uploadNow) {
    // API, based on whether image is to be profile picture or post
    let ApiLink;
    if (isPost) {
      ApiLink = 'https://flakdag.azurewebsites.net/api/Data/UploadFileFormFile'
    } else {
      ApiLink = ''
    }
    // Create a FormData object to store the file
    const formData = new FormData();
    // Add the file to the FormData object
    formData.append('file', selectedImage);
    // Upload the image to server
    axios.post(ApiLink, formData)
      .then((response) => {
        // Handle the successful response from the API
        console.log("Upload successfull: " + response.data.success)
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log("An error has occured on upload, error type:\n" + error)
      });
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