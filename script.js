const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('ul li');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function navAnimation(direction1, direction2) {
    navItems.forEach((el, i) => el.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`));
}
function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');

    if (overlay.classList.contains('overlay-active')) {
        // Animate in - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}
menuBars.addEventListener('click', toggleNav);
navItems.forEach(el => el.addEventListener('click', () => toggleNav()));
