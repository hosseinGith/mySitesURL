const nam = document.querySelector('#name')
const password = document.querySelector('#password')
const Btn = document.querySelector('#btn')
const container = document.querySelector('#container')
const body = document.querySelector('body')
const Btn2 = document.querySelector('#hide')
const title = document.querySelector('#title')
const title2 = document.querySelector('.title')
const box = document.querySelector('form')
const day2 = document.querySelector('#day')
const loading = document.querySelector('.loading')
function lod(){
    body.style.height = '80vh'
    loading.style.display = 'none'
}
document.cookie = ' '
const hossein = {
    name: 'hossein',
    pass: '123456789'
}
const mehee = {
    name: 'mehee',
    pass: '123456789'
}
const yusof = {
    name: 'yusof',
    pass: '123456789'
}


//----------------------------------functions---------------------------------
function Login() {
    password.style.border = '0'
    box.style.display = 'none'
    container.style.display = 'flex'
    Btn2.style.display = 'none'
    body.style.background = '#8c8d8d62'
    title.innerText = 'welcome' + ' ' + nam.value.toUpperCase()
    title.style.fontSize = '40px'
    title2.style.justifyContent = 'center'
    setTimeout(() => {
    body.style.background = '#8c8d8d'
    container.style.display = 'none'
    box.style.display = 'block'
    }, 900)
    setTimeout(() => {
        window.location = 'html/main.html'
    }, 1000)
}

function fls() {
    container.style.display = 'flex'
    box.style.display = 'none'
    body.style.background = '#8c8d8d62'
}


function Hide() {
    body.style.background = '#8c8d8d'
    container.style.display = 'none'
    box.style.display = 'block'
}


//----------------------------------keys---------------------------------


Btn2.addEventListener('click', () => {
    Hide()
})
Btn.addEventListener('click', () => {  
    if (nam.value == hossein.name && password.value == hossein.pass || nam.value == mehee.name && password.value == mehee.pass || nam.value == yusof.name && password.value == yusof.pass) 
        {
                Login()
        }
        else
        {
            fls()
        }
})


//----------------------------------day option---------------------------------
let day;

switch (new Date().getDay()) {
    case 0:
        day = 'sunday'
        break;
    case 1:
        day = 'monday'
        break;
    case 2:
        day = 'tuesday'
        break;
    case 3:
        day = 'wednesday'
        break;

    case 4:
        day = 'thursday'
        break;

    case 5:
        day = 'friday'
        break;

    case 6:
        day = 'saturday'

}
day2.innerHTML = day
day2.style.display = 'none'
