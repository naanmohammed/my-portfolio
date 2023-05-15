// Data for each project
const portfolios = [
  {
    id: 1,
    title: 'GDG-Addis',
    client: 'Google Developers',
    role: 'Front End Dev',
    year: 2023,
    description: 'An informational website displaying updates about the GDG-Addis conference.',
    tags: ['html', 'css', 'javaScript'],
    liveLink: 'https://naanmohammed.github.io/gdg-addis/',
    sourceLink: 'https://github.com/naanmohammed/gdg-addis',
    imageClass: 'work_1',
    image: 'images/desktop_work_image1.png',
  },
  {
    id: 2,
    title: 'Central Cinema Trends',
    client: 'Microverse',
    role: 'Front End Dev',
    year: 2015,
    description: 'Central Cinema Trends is a webapp that shows you the most popular movies. To build this web application we used an external API provided by TMDB and Involvement API provided by Microverse.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_2',
    image: 'images/desktop_work_image2.png',
    liveLink: 'https://github.com/naanmohammed/Movie-app',
    sourceLink: 'https://github.com/naanmohammed/Movie-app',
  },
  {
    title: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_3',
    image: 'images/desktop_work_image3.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
  {
    title: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_4',
    image: 'images/desktop_work_image4.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
];

const portfolioSection = document.getElementById('Portfolio');

portfolios.forEach((project, index) => {
  const worksList = document.createElement('div');
  worksList.classList.add('work');

  worksList.innerHTML = `
        <div class="work_image">
          <img src="${project.image}" alt="work_image">
        </div>
        <div class="work_summary">
        <h1>${project.title}</h1>
        <ul class="subheader">
            <li class="work_client">${project.client}</li>
            <li class="work_bullet"></li>
            <li>${project.role}</li>
            <li class="work_bullet"></li>
            <li>${project.year}</li>
        </ul>
        <p>${project.description}</p>
        <ul class="tags">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
        </ul>
        <button data-project="${index + 1}">See Project</button>
        </div>`;

  portfolioSection.appendChild(worksList);
});

const projectButtons = document.querySelectorAll('[data-project]');
projectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const projectIndex = parseInt(e.target.getAttribute('data-project'), 10) - 1;
    const project = portfolios[projectIndex];

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class='popup_content'>
        <div class='popup_header'> 
          <h1>${project.title}</h1>
          <span class='close'>&times;</span>
        </div>
        <ul class='popup_subheader'>
          <li class='work_client'>${project.client}</li>
          <li class='work_bullet'></li>
          <li>${project.role}</li>
          <li class='work_bullet'></li>
          <li>${project.year}</li>
        </ul>
        <img class='popup_image' src='${project.image}'></img>
        <div class='popup_details'>
          <p class='popup_description'>
            ${project.description}
          </p>
          <ul class='tags' id='popup_tags'>
            ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
          <div>
            <hr class='popup_hr'>
            <div>
              <div class='popup_btn_container'>
                <button onclick="window.open('${project.liveLink}', '_blank')" class='popup_btn'>See Live <img src='images/live.png'></button>
                <button onclick="window.open('${project.sourceLink}', '_blank')" class='popup_btn'>See Source <img src='images/source.png'></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const close = popup.querySelector('.close');
    close.addEventListener('click', () => {
      popup.remove();
    });

    document.body.appendChild(popup);
  });
});
