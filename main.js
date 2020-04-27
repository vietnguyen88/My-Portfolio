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
    duration: 2000,
    distance: '25rem',
    delay: 600
});

ScrollReveal().reveal('.animate-left', {
    origin: 'left',
    duration: 2000,
    distance: '25rem',
    delay: 600
});