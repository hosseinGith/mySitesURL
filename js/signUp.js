const nam = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const Btn = document.querySelector('#Btn')
const Btn21 = document.querySelector('#Btn21')
const inner = document.querySelector('#inner')
const container = document.querySelector('#container')
const body = document.querySelector('body')
const Btn2 = document.querySelector('#d')
const title = document.querySelector('#title')
const title2 = document.querySelector('.title')
const box = document.querySelector('form')
const text = document.querySelector('#text')
const loading = document.querySelector('.loading')
function lod(){
    body.style.height = '80vh'
    loading.style.display = 'none'
}
//----------------------------------functions---------------------------------


function Login() {
    box.style.display = 'none';
    container.style.display = 'flex';
    Btn2.style.display = 'none';
    body.style.background = '#8c8d8d62';
    if(!nam.value){
    title.innerText = 'why you doesn`t enter the name' ;
    }else{
        let Uper = nam.value.toUpperCase()
        title.innerText = 'welcome' + ' ' + Uper;
    }
    title.style.fontSize = '40px';
    title2.style.justifyContent = 'center';
    setTimeout(() => {;
    body.style.background = '#8c8d8d';
    container.style.display = 'none';
    box.style.display = 'block';
    localStorage.clear()
    }, 900)
    setTimeout(() => {;
        window.location = 'main.html';
    }, 1000)
}
function fls() {
    container.style.display = 'flex';
    box.style.display = 'none';
    body.style.background = '#8c8d8d62';
}


function Hide() {
    body.style.background = '#8c8d8d';
    container.style.display = 'none';
    box.style.display = 'block';
}
function enter(){
    if(!localStorage.setItem('name',`${nam.value}`)){
        localStorage.setItem('name',`${nam.value}`);
        localStorage.setItem('email',`${email.value}`);
        localStorage.setItem('password',`${password.value}`);
        if(nam.value && email.value && password.value){
            Btn.style.display = 'none';
            Btn.style.background = 'red';
            Btn21.style.display = 'inline';
            fls()
            title.innerText = 'click again to sign up'
        }
       else{
        fls()
        title.innerText = 'fill out the form'   
    }
    }

}
function signUp(){
    if(nam.value == localStorage.getItem('name') && email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')){
        Login();
}
else if(nam.value != localStorage.getItem('name') && email.value != localStorage.getItem('email') && password.value != localStorage.getItem('password')){
    fls()
    title.innerText = 'check your account'
}
else if(nam.value != localStorage.getItem('name')){
    fls()
    title.innerText = 'check your name'
} else if(email.value !=  localStorage.getItem('email')){
    fls()
    title.innerText = 'check your email'
}else {
    fls()
    title.innerText = 'check your password'
}
}



//----------------------------------keys---------------------------------



Btn2.addEventListener('click',Hide)
Btn.addEventListener('click', enter)
Btn21.addEventListener('click',signUp)

//---------------------------------Cookie--------------------

