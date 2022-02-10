const card1 = {
  title: 'Covid Metrics',
  technologies: [
    'React',
    'Redux',
  ],
  description: 'Covid-19 Metrics is an API based web app that fetches information about covid-19 cases in the United Kingdom and renders this information in a UI. It\'s Home page displays confirmed cases for the United Kingdom and its regions. Each region has a Details page to which you can navigate by clicking on the region cards displayed in the Home page. When you navigate to one of the region details pages, the app will render more specific details for that particular region. Region details include information like confirmed cases, deaths, and recovered patients.',
  link: [
    'https://rpire.github.io/module-capstone-1',
    'https://github.com/rpire/module-capstone-1',
  ],
  image: 'https://raw.githubusercontent.com/rpire/covid-metrics/dev/desktop_screenshot.png',
};

const card2 = {
  title: 'Math Magicians',
  technologies: [
    'React',
  ],
  description: 'Math magicians is a single-page web application built with React, conformed by three different pages. The home page contains information about the app and how to navigate to the other two pages. The calculator page has the calculator app functionality that can solve basic mathematic operations. Finally, the quote page displays a quote related to mathematics.',
  link: [
    'https://rpire.github.io/math-magicians',
    'https://github.com/rpire/math-magicians',
  ],
  image: './Media/Project Screenshots/preview.png',
};

const card3 = {
  title: 'Paytracker',
  technologies: [
    'Ruby on Rails',
    'SASS',
  ],
  description: 'Paytracker is a mobile web app built using Ruby on Rails. It lets you create categories and add you expenses on each category to keep track of them. It implements logic mechanics with an authentication and authorization system.',
  link: [
    'https://rpire-paytracker.herokuapp.com/',
    'https://github.com/rpire/budget-app',
  ],
  image: './Media/Project Screenshots/paytracker_screenshot.png',
};

const card4 = {
  title: 'Poke-Dex',
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  description: 'Poke-Dex is an API based webapp that displays cards containing information (like their image, type and location) about different pokemon. This is a single-page application(SPA) which contains the home page and comments modal pop-ups. Users can click on the heart icon to give a like to their favorite and post comments by clicking on the comment button in the modal.',
  link: [
    'https://rpire.github.io/Poke-dex/dist/',
    'https://github.com/rpire/Poke-dex',
  ],
  image: 'https://raw.githubusercontent.com/DammyShittu/Poke-dex/main/src/img/desktop-screenshot.png',
};

const card5 = {
  title: 'OLC Re-opening Site',
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  description: 'This is a website buit for the re-opening event of Obelisk Language Center. Obelisk Language Center is a language school located in Barquisimeto, Venezuela, more precisely at the 20th Av / 9th and 10th on the second floor of the DaVinci\'s Commercial Center. This school is currently closed because of the pandemics and it really doesn\'t have a re-opening date, but lets hope things get better soon and Obelisk can restart operations!',
  link: [
    'https://rpire.github.io/module-capstone-1',
    'https://github.com/rpire/module-capstone-1',
  ],
  image: './Media/Project Screenshots/module-capstone-1.png',
};

const card6 = {
  title: 'Awesome Books',
  technologies: [
    'HTML',
    'Bootstrap',
    'JavaScript',
  ],
  description: 'Awsome Books useful reading list application. Store your awesome books into the local storage so you can keep track of the books you want to read or enjoyed reading.',
  link: [
    'https://rpire.github.io/awesome-books',
    'https://github.com/rpire/awesome-books',
  ],
  image: './Media/Project Screenshots/awesome-books.png',
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
