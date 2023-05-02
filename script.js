let dubaiText = document.querySelector('#dubaitext')
let burjkhalifa = document.querySelector('#burjkhalifa')
let stars = document.querySelector('#stars')

window.addEventListener("scroll", () =>{
   let value = window.scrollY

   dubaiText.style.left = value * -2 + 'px'
   burjkhalifa.style.left = value * 1 + 'px'
   stars.style.left = value * 3 + 'px'
})