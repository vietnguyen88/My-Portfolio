window.addEventListener('load', () => {
    document.getElementsByTagName('body')[0].style.opacity = 1;
    console.log(this)
})

const selectElement = (element) => {
    return document.querySelector(element);
}

let menuToggle = selectElement('.menu-toggle');
let nav = selectElement('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

//scroll reveal
ScrollReveal().reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 600
});

ScrollReveal().reveal('.animate-left', {
    origin: 'left',
    duration: 1500,
    distance: '25rem',
    delay: 600
});