const showimg = document.querySelector('#smalImg')
const hideimg = document.querySelector('#X')
const bigimg = document.querySelector('.bigimage')
const next =document.querySelector('.next')
const body =document.querySelector('.body')
const back =document.querySelector('.back')

showimg.addEventListener('click',()=>{
    showimg.style.display = 'none'
    body.style.display = 'none'
    bigimg.style.display = 'flex'
})
hideimg.addEventListener('click',()=>{
    bigimg.style.display = 'none'
    showimg.style.display = 'flex'
})
window.addEventListener('click',(e)=>{
    if(e.target == document.body || e.target == bigimg){
        bigimg.style.display = 'none'
        showimg.style.display = 'flex'
    }
})