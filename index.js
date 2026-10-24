const hamMenu = document.querySelector('.ham-menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenu = document.querySelector('.menu.mobile-only');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})