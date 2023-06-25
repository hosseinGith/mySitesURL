const about = document.querySelector('#about')
const pisht = document.querySelector('#pisht')
const buy = document.querySelector('#buy')
const hide = document.querySelector('.tools')
const container = document.querySelector('#container')
const Btn2 = document.querySelector('#hide')
const body = document.querySelector('body')
const html = document.querySelector('html')
const title2 = document.querySelector('#title')
const title = document.querySelector('title')
const drawBtn = document.querySelector('#draw')
const img = document.querySelector('img')
const loading = document.querySelector('.loading')
function lod(){
    body.style.height = '80vh'
    loading.style.display = 'none'
}
//-------------------^varable^^---------------
let abu ='<h5>:وایگارد<br>سرویس وایگارد از سرعت بالا وامنیت خوب برخوردار می باشد , همچنین با تمامی اپراتور ها در حال حاضر سازگاری دارد و موردی مبتنی بر ناسازگاری آن گزارش نشده است </h5>' 
let psh = '<h5> :برای دیدن کانال<br><a href="#" style="text-decoration: none;float:left">@wiregurd_shop</a><br> :همچنین برای پیام دادن به پیشتیبانی <br><a href="#" style="text-decoration: none;float:left">@WG_SHOP</a></h5>'

//--------------------------------------function--------------------------------------
function Hide() {//---------------=for hide the box -----------------
    body.classList.add('body')
    container.style.display = 'none'
    hide.style.display = 'flex'
}

function content(){//--------------for show the box-------------------
    container.style.display = 'flex'
    hide.style.display = 'none'
}
//--------------------------------------keys--------------------------------------
Btn2.addEventListener('click', () => { Hide() })
drawBtn.addEventListener('click',()=>{window.location = 'animation.html'})
buy.addEventListener('click', () => { window.location = 'https://web.telegram.org/k/' })//-------------------for go to telegram websit---------------

about.addEventListener('click', () => {//-------------------abut vpn---------------
    content()
    title2.innerHTML = abu
})
pisht.addEventListener('click', () => {
    content()
    title2.innerHTML = psh
})
window.addEventListener('click',(e)=>{
    if(e.target == html |e.target == body){
        container.style.display = 'none'
        hide.style.display = 'flex'
    }
})


img.addEventListener('click',()=>{
    window.location = 'https://web.telegram.org/k/'
})
