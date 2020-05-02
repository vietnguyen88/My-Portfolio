const selectElement = (element) => {
    return document.querySelector(element);
}

let menuToggle = selectElement('.menu-toggle');
let nav = selectElement('.nav');

window.addEventListener('load', () => {

    document.getElementsByTagName('body')[0].style.opacity = 1;
    if (document.body.clientWidth <= 900) {
        let navItems = document.querySelectorAll('.nav-item');
        for (item of navItems) {
            item.addEventListener('click', () => {
                nav.classList.toggle('open')
            })
        }
    }
    else {
        console.log('>900')
    }

})


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