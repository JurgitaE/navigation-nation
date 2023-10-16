const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('ul li a');

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');

    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}
menuBars.addEventListener('click', toggleNav);
navItems.forEach(el => el.addEventListener('click', () => toggleNav()));
