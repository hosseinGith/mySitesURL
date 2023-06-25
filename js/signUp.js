const nam = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const Btn = document.querySelector('#Btn')
const s = document.querySelector('#container')
const body = document.querySelector('body')
const Btn2 = document.querySelector('#d')
const title = document.querySelector('#title')
const title2 = document.querySelector('.title')
const box = document.querySelector('form')

//----------------------------------functions---------------------------------
function win() {


    box.style.width = '80%'
    box.style.marginTop = '250px'
    s.style.width = '80%'
}

function Login() {
    box.style.display = 'none'
    s.style.display = 'flex'
    s.style.marginTop = '700px';
    Btn2.style.display = 'none'
    body.style.background = '#8c8d8d62'
    title.innerText = 'welcome' + ' ' + nam.value
    title.style.fontSize = '40px'
    title2.style.justifyContent = 'center'
    setTimeout(() => {
        window.location = 'main.html'
    }, 1000)
}

function fls() {
    s.style.display = 'flex'
    s.style.marginTop = '700px';
    box.style.display = 'none'
    body.style.background = '#8c8d8d62'
}


function Hide() {
    body.style.background = '#8c8d8d'
    s.style.display = 'none'
    box.style.display = 'block'
}


//----------------------------------keys---------------------------------

if (window.innerWidth <= 900) {
    win()
}
if (window.innerHeight <= 500) {

    box.style.marginTop = '100px'
}
const n = d.localStorage.getItem()
Btn2.addEventListener('click', () => {
    Hide()
})
localStorage.setItem("name", 'hossein')
localStorage.setItem('email', 'd')
Btn.addEventListener('click', () => {
    // if (nam.value && email.value && password.value) {
    if (nam.value == localStorage.getItem('name') && email.value == localStorage.getItem('email')) {
        Login()
    } else {
        fls()

    }
})