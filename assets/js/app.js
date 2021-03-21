const burgerButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

burgerButton.onclick = function() {
    nav.classList.toggle('active');
    burgerButton.classList.toggle('active');
}

const questions = document.querySelectorAll('.questions-header');

for (let item of questions) {
  
    item.onclick = function () {
        item.parentNode.classList.toggle('active');
    }
}

const header = document.querySelector('.header');
let introHeight = document.querySelector('.intro').clientHeight;

document.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    
    if (scroll >= introHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})