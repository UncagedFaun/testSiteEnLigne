const hamMenu = document.querySelector('.HAM_MENU');

const offScreenMenu = document.querySelector('.OFF_SCREEN_MENU');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})