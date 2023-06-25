const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const eraser = document.querySelector('.eraser')
const brush = document.querySelector('.brush')
const brushColor = document.querySelector('.color')
const range = document.querySelector('.lineWidth')
const clear = document.querySelector('.clear')
const save = document.querySelector('.save')
const loading = document.querySelector('.loading')
const body = document.querySelector('body')
function lod(){
    body.style.height = '80vh'
    loading.style.display = 'none'
}
let drawing = false
let currenColor = ''
let brushWidth = 5

function win(){
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    navigator.platform != 'Win32' || navigator.platform == 'Win64'  ? alert('your device doesn`t suppurt this page') : '';

}
function draw(e){
    if(!drawing) return
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.strokeStyle = `${currenColor}`
    ctx.lineWidth = brushWidth
    ctx.stroke()
}

function startDraw(){
    drawing = true
}

function endDraw(){
    drawing = false
    ctx.beginPath()

}


window.addEventListener('load',win)
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',startDraw)
canvas.addEventListener('mouseup',endDraw)

brushColor.addEventListener('change',()=>{
    currenColor = brushColor.value
})
range.addEventListener('change',()=>{
    brushWidth = range.value
})
eraser.addEventListener('click',()=>{
    eraser.classList.add('active')
    brush.classList.remove('active')
    currenColor = 'white'
    canvas.style.cursor = 'grabbing'

})
brush.addEventListener('click',()=>{
    brush.classList.add('active')
    eraser.classList.remove('active')
    currenColor = brushColor.value
    canvas.style.cursor = 'auto'

})

clear.addEventListener('click',()=>{
    ctx.fillRect(0,0,canvas.width,canvas.height)
    clear.classList.add('active')
    setTimeout(()=>{ clear.classList.remove('active')},100)
})

save.addEventListener('click',()=>{
    save.classList.add('active')
    setTimeout(()=>{ save.classList.remove('active')},100)
    let link = document.createElement('a')
    link.download =  `${Date.now()}`
    link.href = canvas.toDataURL()
    link.click()

})



