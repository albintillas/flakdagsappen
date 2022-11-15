// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Write your JavaScript code.

let baseurl = 'https://flakdag.azurewebsites.net/api/';
//let baseurl = 'https://localhost:7044/api/';


async function LoadStart() {
    $('body > div').css("display", "none");

    //Have we already signed up for flakdag?
    const t = localStorage.getItem('token');
    if (t) {
        console.log('t is NOT null');
        let flakdagmeta = await GetData('data/GetFlakDagMeta', { id: t });
        console.log(flakdagmeta);
        if (flakdagmeta && flakdagmeta.success === true) {
            if (flakdagmeta.started) {
                //GOTO main flakdag page
                Swal.fire({
                    icon: 'info',
                    title: 'Load',
                    text: 'Main page for flakdag here'
                });
            }
            else {
                LoadLobby();
            }
        }
        else {
            //No flakdag is found
            console.log('No flakdag is found');
            localStorage.removeItem('fd');
            localStorage.removeItem('token');
            $('#start-page').css("display", "block");
        }
    }
    else {
        console.log('t is null??');
        $('#start-page').css("display", "block");
    }
}

function SendForm(thisForm, callback) {
    let action = $(thisForm).data("action");
    const formData = new FormData(thisForm[0]).entries()
    fetch(baseurl + action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    }).then((response) => response.json())
        .then((data) => callback(data));

    //const result = await response.json();
    //return result;
}

async function GetData(action, body) {
    console.log(action, body);
    const response = await fetch(baseurl + action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    return result;
}

function NavTo(el) {
    $('body > div').css("display", "none");
    $('#' + el).css("display", "block");
}

function CreateFlakdag(thisForm) {
    /*
     Förklaring callback och arrow-function. SendForm tar 2 parametrar, 1: formuläret att skicka till API, 2: en function dit resultatet ska skickas.
     callback går att skriva på 2 sätt. Som en function eller med arrow-function. Arrow är mer modernt men också kanske mer förvirrande

    Om man använder funcktion:
    SendForm(thisForm, function(resultat) { gör något} ); Som ni ser är alltså hela andra parametern en hel function som kan användas av SendForm (se ovan)

    Om man använder arrow-funcktion:
    SendForm(thisForm, (resultat) => { gör något} ); Detta är alltså samma sak med skrivet på en annat (och för många mer clean sätt)
     */
    SendForm(thisForm, (jsonresult) => {
        console.log(jsonresult);
        if (jsonresult.success) {
            Swal.fire({
                icon: 'success',
                title: 'Flakdag skapad'                
            }).then(() => {
                localStorage.setItem('token', jsonresult.userToken);
                LoadLobby();
            });            
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Flakdag could not be created'
            }).then(() => LoadStart());            
        }
    });
    
}
async function ResetAllFlakData() {
    localStorage.removeItem('fd');
    localStorage.removeItem('token');
    await GetData('data/ResetAll');
    LoadStart();
}


function SignupFlakdag(thisForm) {

    SendForm(thisForm, (result) => {
        console.log(result);
        if (result.success) {
            localStorage.setItem('token', result.userToken);

            if (result.flakmeta.started === false) {
                LoadLobby();
            }
            else {
                //GOTO: Main page for active flakdag
                Swal.fire({
                    icon: 'info',
                    title: 'Load',
                    text: 'Main page for flakdag here'
                });
            }


        }
        else {
            console.log("Sign up not successful", result.message ?? "");
           
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message ?? ""
            }).then(() => {
                LoadStart();
            });
        }
    });  
}

async function LoginFlakdag() {
    let dataToSend = {
        pin: $('#login-flakdag input[name="pin"]').val(),
        pw: $('#login-flakdag input[name="pw"]').val()
    }
    console.log(dataToSend);
    let result = await GetData('lobby/LogIn', dataToSend);
    if (result.success) {
        localStorage.setItem('token', result.userToken);

        if (jsonresult.flakmeta.started === false) {
            LoadLobby();
        }
        else {
            //GOTO: Main page for active flakdag
            Swal.fire({
                icon: 'info',
                title: 'Load',
                text: 'Main page for flakdag here'
            });
        }
    }
    else {
        console.log("Log in not successful", result.message ?? "");

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result.message ?? ""
        }).then(() => {
            LoadStart();
        });
    }
}

async function LoadLobby() {
    NavTo('lobby-flakdag');
    //    $('#lobby-flakdag h5').text(jsonresult.f.name);
    const t = localStorage.getItem('token');

    let flakdagmeta = await GetData('data/GetFlakDagMeta', { id: t });
    console.log('LoadLobby flakdagmeta', flakdagmeta);
    $('#lobby-flakdag h5').text("Flakdag: " + flakdagmeta.flakmeta.name);
    $('#fid').text(flakdagmeta.flakmeta.id);

    let lobbydata = await GetData('Lobby/GetLobby', { token: t });
    console.log('LoadLobby lobbydata', lobbydata);
    $('#lobby-players').empty();
    lobbydata.players.forEach(p => {
        $('#lobby-players').append("<div>" + p.name + "</div>");
    });

    $('#btn-start-flakdag').hide();
    if (flakdagmeta.isOwner)
        $('#btn-start-flakdag').show();

}
