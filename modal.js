const card1 = {
  title: 'OLC Re-opening Site',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/module-capstone-1',
    'https://github.com/rpire/module-capstone-1',
  ],
  image: './Media/Project Screenshots/module-capstone-1.png',
};

const card2 = {
  title: 'Awesome Books',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/awesome-books',
    'https://github.com/rpire/awesome-books',
  ],
  image: './Media/Project Screenshots/awesome-books.png',
};

const card3 = {
  title: 'Reinas Pepiadas',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/reinas-pepiadas',
    'https://github.com/rpire/reinas-pepiadas',
  ],
  image: './Media/Project Screenshots/reinas-pepiadas.png',
};

const card4 = {
  title: 'To-Do List',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/to-do-list/dist/index.html',
    'https://github.com/rpire/to-do-list',
  ],
  image: './Media/Project Screenshots/to-do-list.png',
};

const card5 = {
  title: '5 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal',
  ],
  image: './Media/work-img-5.svg',
};

const card6 = {
  title: '6 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal',
  ],
  image: './Media/work-img-6.svg',
};

const projects = [card1, card2, card3, card4, card5, card6];
function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = '';
  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title;

  for (let i = 0; i < projects[number].technologies.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projects[number].technologies[i];
    list.appendChild(li);
  }

  img.setAttribute('src', projects[number].image);
  buttonsrc.setAttribute('onclick', `window.open("${projects[number].link[1]}", "_blank");`);
  buttonlive.setAttribute('onclick', `window.open("${projects[number].link[0]}", "_blank");`);
  desc.innerHTML = projects[number].description;
}
function toggle() {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
}
toggle();
modal();
