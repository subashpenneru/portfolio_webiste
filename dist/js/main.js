var menuBtn = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn__burger');
var nav = document.querySelector('.nav');
var menuNav = document.querySelector('.menu-nav');
var navItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  menuNav.classList.toggle('open');
  navItems.forEach((item) => item.classList.toggle('open'));
}
