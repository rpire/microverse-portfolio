function toggleMenu() {
  const burger = document.querySelector('#burger-container');
  const menu = document.querySelector('#menu');
  const cross = document.querySelector('#cross');
  burger.classList.toggle('invisible');
  menu.classList.toggle('js-nav');
  cross.classList.toggle('invisible');
}

toggleMenu();

// Cards --------------->

const cardImages = document.querySelectorAll('.works-img');

const card1 = {
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    cardImage: cardImages[0],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  };

  const card2 = {
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    cardImage: cardImages[1],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  }

  const card3 = {
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    cardImage: cardImages[1],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  }