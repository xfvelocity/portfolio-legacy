const navButton = document.querySelector('.navbutton');
const navLinks = document.querySelector('.nav-links')
let navPressed;

navButton.addEventListener('click', () => {
    navPressed = !navPressed;
    navLinks.classList.remove('nav-links-open');

    if(navPressed) {
        navLinks.classList.toggle('nav-links-open');
    } 
})