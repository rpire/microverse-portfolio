function toggleMenu() {
  const burger = document.querySelector("#burger-container");
  const menu = document.querySelector("#menu");
  burger.classList.toggle("invisible");
  menu.classList.toggle("js-nav");
}