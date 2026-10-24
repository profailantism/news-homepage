const hamIcon = document.querySelector('.ham-menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.menu');

hamIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  menu.classList.toggle('active');
})