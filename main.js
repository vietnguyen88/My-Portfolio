const selectElement = (element) => {
    return document.querySelector(element);
}

let menuToggle = selectElement('.menu-toggle');
let nav = selectElement('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
})