const cardImages = './Media/work-img-'

const card1 = {
    title: '1 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  };

  const card2 = {
    title: '2 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  };

  const card3 = {
    title: '3 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!'
  };

  const projects = [card1, card2, card3];

  function modal(number){
    let title = document.querySelector("#card-title");
    let list = document.querySelector("#card-list");
    let img = document.querySelector(".card-image");
    let desc = document.querySelector("#card-description");

    console.log(cardImages);
    title.innerHTML = projects[number].title;
    img.setAttribute("src", cardImages+(number+1)+".svg");
    desc.innerHTML = projects[number].description;
};
