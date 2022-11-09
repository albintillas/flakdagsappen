//Laesker

import React from "react"

const nums = document.querySelectorAll('.num')
const form = document.querySelector('form')

nums.forEach((num, index) => {
    num.dataset.id = index
    
    num.addEventListener('keyup', () => {
        if (num.value.length == 1) {
            if (nums[nums.length - 1].value.length == 1) form.submit()
            nums[parseInt(num.dataset.id) + 1].focus()
        }
    })
})




function PinInput(){
    return(
        <body style = {{display: 'grid', placeItems: 'center', minHeight: "100vh", backgroundColor: 'rgb(0, 0, 15)'}}>
            <form action="">
                <div class="container" style ={{display: 'flex'}}>
                    <input type="text" class="num" style = {{ color: '#fff',  backgroundColor: 'transparent', width: '100px', textAlign: 'center',  outline: 'none', padding: '2rem 1rem',  margin: '0 1rem', fontSize: '3rem', border: '1px solid rgba(255, 255, 255, .3)', borderRadius: '.5rem', color: 'rgba(0, 255, 0, .5)'}} maxLength="1" required></input>
                    <input type="text" class="num" style = {{ color: '#fff',  backgroundColor: 'transparent', width: '100px', textAlign: 'center',  outline: 'none', padding: '2rem 1rem',  margin: '0 1rem', fontSize: '3rem', border: '1px solid rgba(255, 255, 255, .3)', borderRadius: '.5rem', color: 'rgba(0, 255, 0, .5)'}} maxLength="1" required></input>
                    <input type="text" class="num" style = {{ color: '#fff',  backgroundColor: 'transparent', width: '100px', textAlign: 'center',  outline: 'none', padding: '2rem 1rem',  margin: '0 1rem', fontSize: '3rem', border: '1px solid rgba(255, 255, 255, .3)', borderRadius: '.5rem', color: 'rgba(0, 255, 0, .5)'}} maxLength="1" required></input>
                    <input type="text" class="num" style = {{ color: '#fff',  backgroundColor: 'transparent', width: '100px', textAlign: 'center',  outline: 'none', padding: '2rem 1rem',  margin: '0 1rem', fontSize: '3rem', border: '1px solid rgba(255, 255, 255, .3)', borderRadius: '.5rem', color: 'rgba(0, 255, 0, .5)'}} maxLength="1" required></input>
                </div>
            </form>
        </body>
    )
}
export default PinInput
