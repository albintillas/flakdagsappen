import UploadImage from '../components/UploadImage.js';
import TextInput from '../components/TextInput.js';
import Button from '../components/Button.js';
import ReturnButton from '../components/ReturnButton.js';
import React from 'react'

const upload = <UploadImage/>

const enterName = <TextInput/>

const create =
<Button
text = 'Create'
buttonColor='#17D930'
action='onclick'
/>

function CreateGamePage(){
return(

<div>
    {upload}
    {enterName}
    {create}

    
      <ReturnButton text='Return' 
      buttonColor='#17D930' 
      textColor='#FFFFFF'
      action=''></ReturnButton>
    

</div>
)
}

export default CreateGamePage;