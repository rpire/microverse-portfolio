function toggleMenu() {
  const burger = document.querySelector('#burger-container');
  const menu = document.querySelector('#menu');
  const cross = document.querySelector('#cross');
  burger.classList.toggle('invisible');
  menu.classList.toggle('js-nav');
  cross.classList.toggle('invisible');
}

toggleMenu();
