const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelectorAll('.nav');


console.log(nav)

navToggle.addEventListener('click', () => {
    nav[0].classList.toggle('nav--visible');
    nav[1].classList.toggle('nav--visible');
})

// Add event listener for if mobile nav menu is open and the screen size widens, then remove those nav--visible classes from those html elements 

//DOCS: https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

const widthOutput = document.getElementsByTagName("body")[0]; // find the width on this element


addEventListener("resize", (event) => {
    const bodyWidth = widthOutput.offsetWidth;
    console.log("Body width:", bodyWidth)
    if (bodyWidth >= 900){
        nav[0].classList.remove('toggle-row');
        nav[1].classList.remove('nav--visible');
    }
});