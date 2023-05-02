
// const textName = document.querySelector('.Main-Left');
// const letras = textName.textContent.split('');


// for (let i = 0; i < letras.length; i++) {
//   textName.innerHTML += '<span>' + letras[i] + '</span>';
// }

// const spans = document.querySelectorAll('.textName span');

// document.addEventListener('scroll', function() {
//   const scrollPos = window.scrollY;
//   for (let i = 0; i < spans.length; i++) {
//     const delay = i * 50;
//     const opacity = Math.max(0, 1 - (scrollPos - delay) / (window.innerHeight / 2));
//     const translateY = Math.max(0, (scrollPos - delay) / 3);
//     spans[i].style.opacity = opacity;
//     spans[i].style.transform = `translateY(${translateY}px)`;
//   }
// });

let hr1 = document.querySelector('.hr1')
let hr2 = document.querySelector('.hr2')
hr1.style.right = '0px'

window.addEventListener("scroll", () =>{
   let value = window.scrollY

   hr1.style.right = value * 2 + 'px'
   hr2.style.left = value * 2 + 'px'

})






ScrollReveal().reveal('.Main-Left h1', { origin: 'left', delay: 150, distance: '140%', duration: 1500});
ScrollReveal().reveal('.Main-Left h4', { origin: 'bottom', delay: 130, distance: '180%', duration: 1800} );
ScrollReveal().reveal('Main-Right img', { origin: 'right', delay: 230, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card1', { origin: 'right', delay: 50, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card2', { origin: 'right', delay: 100, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card3', { origin: 'right', delay: 150, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card4', { origin: 'left', delay: 200, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card5', { origin: 'left', delay: 250, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#card6', { origin: 'left', delay: 300, distance: '180%', duration: 1200} );
ScrollReveal().reveal('#TecnologiasText', { origin: 'left', delay: 300, distance: '180%', duration: 1200} );