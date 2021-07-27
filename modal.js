const cardImages = './Media/work-img-'

const card1 = {
    title: '1 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
    link: 'http://www.github.com'
  };

  const card2 = {
    title: '2 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
    link: 'http://www.google.com'
  };

  const card3 = {
    title: '3 Project',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam modi architecto reprehenderit officiis consequatur id molestias sint, maxime cumque ad excepturi atque voluptatem nihil delectus placeat recusandae natus exercitationem!',
    link: 'https://github.com/rpire/microverse-portfolio/tree/modal'
  };

  const projects = [card1, card2, card3];

  function modal(number){
    let title = document.querySelector("#card-title");
    let list = document.querySelector("#card-list");
    list.innerHTML = '';
    let img = document.querySelector(".card-image");
    let desc = document.querySelector("#card-description");
    let buttonsrc = document.querySelector("#card-button-source");
    let buttonlive = document.querySelector("#card-button-live");

    title.innerHTML = projects[number].title;

    for (let i=0;i<projects[number].technologies.length;i++) {
        let li = document.createElement('li');
	      li.textContent = projects[number].technologies[i];
	      list.appendChild(li);
      }

    img.setAttribute("src", cardImages+(number+1)+".svg");
    buttonsrc.setAttribute("onclick", "window.open('"+projects[number].link+"', '_blank');");
    buttonlive.setAttribute("onclick", "window.open('"+projects[number].link+"', '_blank');");
    desc.innerHTML = projects[number].description;
};
