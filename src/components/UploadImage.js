// GK
// Klicka på den gråa cirkeln för att välja bild på enhet

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UploadImage = ({ size, uploadNow, isPost }) => {

  const navigate = useNavigate();
  let userToken = localStorage.getItem('token');
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {

  }, [selectedImage])

  console.log("MakePost button has been hit: " + uploadNow)
  if (uploadNow === 1) {
    if (isPost) {
      // Add the file to the FormData object
      const formData = new FormData();
      formData.append('token', userToken);
      formData.append('image', selectedImage);
      console.log(formData)
      uploadNow++
      axios.post('https://flakdag.azurewebsites.net/api/data/addfeed', formData)
        .then((response) => {
          // Handle the successful response from the API
          if (response.data.success) {
            console.log("Upload successfull: " + response.data.success)
            navigate("/feed")
          }
          else {
            console.log("An error has occured on upload")
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.log("An error has occured on upload, error type:\n" + error)
        });
    }
    else {
      // Add the file to the FormData object
      const formData = new FormData();
      formData.append('token', userToken);
      formData.append('profileImage', selectedImage);
      console.log("testin")
      axios.post('https://flakdag.azurewebsites.net/api/data/changeprofileimage', formData)
        .then((response) => {
          console.log("test3")
          if (response.data.success) {
            window.location.href = '/lobbyInfoPage';
            console.log("Upload successfull: " + response.data.success)
          }
          else {
            console.log("An error has occured on upload")
          }
        }).catch((error) => {
          // Handle any errors that occurred during the request
          console.log("An error has occured on upload, error type:\n" + error)
        });
      console.log("test2")
    }
  }

  return (
    <div style={{
      height: '40vw',
      width: '40vw',
      backgroundColor: 'lightgray',
      borderRadius: '50%',
      display: 'inline-block',
      textAlign: 'center',

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