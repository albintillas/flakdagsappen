import UploadImage from '../components/UploadImage.js';
import TextInput from '../components/TextInput.js';
import Button from '../components/Button.js';


const upload = <UploadImage/>

const enterName = <TextInput/>

const create =<Button/>

function CreateGamePage(){
return(

<div>
    {upload}
    {enterName}
    {create}
</div>
)
}

export default CreateGamePage;