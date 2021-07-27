const cardImages = './Media/work-img-'

const card1 = {
  title: '1 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const card2 = {
  title: '2 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const card3 = {
  title: '3 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const card4 = {
  title: '4 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const card5 = {
  title: '5 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const card6 = {
  title: '6 Project',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br><br>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://rpire.github.io/microverse-portfolio',
    'https://github.com/rpire/microverse-portfolio/tree/modal'
  ]
};

const projects = [card1, card2, card3, card4, card5, card6];
const card = document.querySelector('#card');
function modal(number) {
  card.classList.toggle('invisible');
  let title = document.querySelector('#card-title');
  let list = document.querySelector('#card-list');
  list.innerHTML = '';
  let img = document.querySelector('.card-image');
  let desc = document.querySelector('#card-description');
  let buttonsrc = document.querySelector('#card-button-source');
  let buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projects[number].title;

  for (let i = 0; i < projects[number].technologies.length; i++) {
    let li = document.createElement('li');
    li.textContent = projects[number].technologies[i];
    list.appendChild(li);
  }

  img.setAttribute("src", cardImages + (number + 1) + ".svg");
  buttonsrc.setAttribute('onclick', 'window.open("' + projects[number].link[1] + '", '_blank');");
    buttonlive.setAttribute('onclick', 'window.open("' + projects[number].link[0] + '", '_blank');");
    desc.innerHTML = projects[number].description;
}
function toggle() {
  card.classList.toggle('invisible');
}
toggle();
