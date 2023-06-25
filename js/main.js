const a = document.querySelector('#about')
const b = document.querySelector('#pisht')
const buy = document.querySelector('#buy')
const hide = document.querySelector('.tools')
const s = document.querySelector('#container')
const Btn2 = document.querySelector('#d')
const body = document.querySelector('body')
const title2 = document.querySelector('#title')
const title = document.querySelector('title')


function pada() {
    body.style.backgroundRepeat = 'repeat-Y';
    a.classList.add('div')
    b.classList.add('div')
    buy.classList.add('div')
}

function bodyBack() {
    body.style.backgroundImage = 'url(../css/d.jpg)';
    body.style.backgroundBlendMode = 'difference';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
}

function padr() {
    a.classList.remove('div')
    b.classList.remove('div')
    buy.classList.remove('div')
}

function Hide() {
    body.style.backgroundRepeat = 'repeat-Y';
    body.style.background = '#6e6e6e8f';
    body.style.backgroundImage = 'url(../css/d.jpg)';
    body.style.backgroundBlendMode = 'difference';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    s.style.display = 'none'
    hide.style.display = 'flex'
}


a.addEventListener('click', () => {
    s.style.display = 'flex'
    s.style.marginTop = '500px';
    hide.style.display = 'none'
    title2.innerHTML = '<h5>:وایگارد<br>سرویس وایگارد از سرعت بالا وامنیت خوب برخوردار می باشد , همچنین با تمامی اپراتور ها در حال حاضر سازگاری دارد و موردی مبتنی بر ناسازگاری آن گزارش نشده است </h5>'
    bodyBack()
})
b.addEventListener('click', () => {
    s.style.display = 'flex'
    bodyBack()
    s.style.marginTop = '500px';
    hide.style.display = 'none'
    title2.innerHTML = '<h5> برای دیدن کانال<br><a href="#" style="text-decoration: none;float:left">@wiregurd_shop</a><br> همچنین برای پیام دادن به پیشتیبانی <a href="#" style="text-decoration: none;float:left">@WG_SHOP</a></h5>'
})
buy.addEventListener('click', () => {
    window.location = '#'
})
Btn2.addEventListener('click', () => {
    Hide()
})