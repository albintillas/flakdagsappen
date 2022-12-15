import React from 'react'
import PinInput from '../components/PinInput';
import ReturnButton from '../components/ReturnButton';
import '../App.css';
import Swal from 'sweetalert2';
import { useState, Link, useNavigate } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


function Login() {

    const [pin, setPin] = useState(Cookies.get('lobbyPincode'));
    const [password, setPassword] = useState(Cookies.get('userPassword'));

    function Reconnect() {
        if (pin == "" ||
            password == "") {
            Swal.fire({
                icon: 'error',
                title: 'Saknas Data',
                text: 'Fyll i alla fält!'
            });
            return;
        }
        else {
            const expirationDate = new Date();
            expirationDate.setHours(expirationDate.getHours() + 24);
            Cookies.set('userPassword', password, { expires: expirationDate });
            Cookies.set('lobbyPincode', pin, { expires: expirationDate });
            onPageLoad();
        }
    }
    function onPageLoad() {
        if (password !== undefined &&
            pin !== undefined) {

            axios.post("https://flakdag.azurewebsites.net/api/lobby/login", { pin: pin, pw: password }).then(res => {
                if (res.data.success) {
                    localStorage.setItem('token', res.data.userToken);
                    window.location.href = '/lobby';
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Flakdag finns ej',
                        text: res.message
                    });
                }
            })
        }
    }
    window.addEventListener('load', onPageLoad);

    return (
        <div class='createGameContainer' style={{ height: '100vh' }}>
            <ReturnButton action="Choose"></ReturnButton>
            <p id='headers'>Återanslut till Flakdag</p>

            <form className="createGameForm" id="createForm">

                <div class="enterText">
                    <div class="formText">Lobby Pin</div>
                    <div class="formInput"><input onChange={event => setPin(event.target.value)} value={pin} class="form-control" name="pin" type="text" placeholder="Flakdag pin..." /></div>

                </div>

                <div class="enterText">
                    <div class="formText">Personligt lösenord</div>
                    <div class="formInput"><input onChange={event => setPassword(event.target.value)} value={password} class="form-control" name="pw" type="password" placeholder="Lösenord..." /></div>
                </div>
                <button type="button" className="createGameInput" id="submitButton" action='lobby' onClick={Reconnect} textDecoration='none' textColor='#EEEEEE' fontSize='7vw'>Återanslut</button>
            </form>
        </div>
    )


    {/*
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{justifyContent:'center', display:'flex'}}>
                <h1 className='startMainText' style={{fontSize: '9vw'}}>Reconnect to existing lobby</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Password:</h2>
                <input classname="playerPasswordInput" style={{
                    width: '40vw'
                }}></input>
            </div>
       </div>
       <div style = {{    
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'nowrap',
        alignContent: 'stretch'}}>
            <h2 style={{fontSize: '5vw', width: '40vw'}}>Enter Lobby Id:</h2>
            <PinInput></PinInput>
        </div>
    </div>
       ) 
       */}
}

export default Login