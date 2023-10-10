const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelectorAll('.nav');


console.log(nav)

navToggle.addEventListener('click', () => {
    nav[0].classList.toggle('nav--visible');
    nav[1].classList.toggle('nav--visible');
})