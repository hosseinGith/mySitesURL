const nam = document.querySelector('#name')
const password = document.querySelector('#password')
const Btn = document.querySelector('#btn')
const s = document.querySelector('#container')
const body = document.querySelector('body')
const Btn2 = document.querySelector('#d')
const title = document.querySelector('#title')
const title2 = document.querySelector('.title')
const box = document.querySelector('form')
const day2 = document.querySelector('#day')
const adds = document.querySelector('#hidden')
const name2 = document.querySelector('#name2')
const pass2 = document.querySelector('#pass')

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
function win() {
    box.style.width = '80%'
    box.style.marginTop = '300px'
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
        window.location = 'html/main.html'
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

window.addEventListener('load', () => {
    if (window.innerWidth <= 900) {
        win()
    }
})
Btn2.addEventListener('click', () => {
    Hide()
})
Btn.addEventListener('click', () => {
        if (nam.value == hossein.name) {
            if (password.value == hossein.pass) {
                Login()
            }
        } else if (nam.value == mehee.name) {
            if (password.value == mehee.pass) {
                Login()
            }
        }
        if (nam.value == yusof.name) {
            if (password.value == yusof.pass) {
                Login()
            } else {
                fls()
            }
        } else {
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