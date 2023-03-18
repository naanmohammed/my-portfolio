const button = document.getElementById('my_button');
const page = document.getElementById('translucent_page');
const closeButton = document.getElementById('close_button');
const lis = document.querySelectorAll('#translucent_page li');

button.addEventListener('click', (event) => {
  event.preventDefault();
  page.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  page.style.display = 'none';
});

lis.forEach((li) => {
  li.addEventListener('click', function handleLiClick() {
    const sectionId = this.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    page.style.display = 'none';
  });
});
const projects = [
  {
    id: 1,
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    imageClass: 'work_1',
    image: 'images/desktop_work_image1.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_2',
    image: 'images/desktop_work_image2.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
  {
    id: 3,
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_3',
    image: 'images/desktop_work_image3.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_4',
    image: 'images/desktop_work_image4.png',
    liveLink: 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink: 'https://github.com/naanmohammed/my-portfolio',
  },
];

const works = document.querySelectorAll('.works_list');

works.forEach((work) => {
  const button = work.querySelector('button');
  const id = button.parentNode.parentNode.querySelector('.work_image').classList[1];
  const project = projects.find((project) => project.imageClass === id);

  button.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class='popup_content'>
        <div class='popup_header'> 
          <h1>${project.name}</h1>
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        
        </p>
        <div class='popup_links'>
          <ul class='tags' id='popup_tags'>
            ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
            <li>Bootstrap</li>
          </ul>
          <div>
          <hr class='popup_hr'>
          <div>
          <div class='popup_btn_container'>
          <button onclick="window.open('${project.liveLink}', '_blank')" class='popup_btn'>See Live <img src='images/live.png'></button>
          <button onclick="window.open('${project.sourceLink}', '_blank')" class='popup_btn'>See Source <img src='images/source.png'></button>
          <div>
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

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
errorMessage.style.marginTop = '-16px';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (emailValue === emailValue.toLowerCase()) {
    form.submit();
  } else {
    errorMessage.textContent = 'Email must be in lowercase';
    emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
  }
});


const inputs = form.querySelectorAll('input, textarea');
const savedData = localStorage.getItem('formData');
if (savedData) {
  const formData = JSON.parse(savedData);
  for (const input of inputs) {
    const name = input.getAttribute('name');
    if (name && formData[name]) {
      input.value = formData[name];
    }
  }
}

for (const input of inputs) {
  input.addEventListener('change', () => {
    const formData = {};
    for (const input of inputs) {
      const name = input.getAttribute('name');
      if (name) {
        formData[name] = input.value;
      }
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  });
}
