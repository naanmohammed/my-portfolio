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
    name: 'GDG-Addis',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      "The GDG Addis website is your gateway to the GDG Addis Conference, an exciting tech event in Addis Ababa. This site offers a seamless experience for attendees and enthusiasts, allowing them to explore details about the event, its speakers, and sponsors. With a user-friendly interface and interactive features, the website makes it easy to navigate through conference-related content. Whether you're looking for information about the speakers or interested in the event's sponsors, this website provides all the details you need.",
    tags: ['html', 'css', 'javaScript'],
    imageClass: 'work_1',
    image: 'images/desktop_work_image1.png',
    liveLink: 'https://naanmohammed.github.io/gdg-addis/',
    sourceLink: 'https://github.com/naanmohammed/gdg-addis',
  },
  {
    id: 2,
    name: 'Space Travelers Hub',
    client: 'Microverse',
    role: 'Front End Dev',
    year: 2023,
    description:
    "Space Travelers' Hub is your portal to embark on cosmic adventures. This web application allows you to book your very own rockets and dragons for exhilarating journeys into the vast unknown. You can also sign up to join thrilling space missions. Built with cutting-edge web technologies, including React, Space Travelers' Hub offers a seamless and user-friendly interface for space enthusiasts. With just a few clicks, you can reserve your seat on a rocket or dragon, preparing for an out-of-this-world experience. ",
    tags: ['html', 'css', 'Javascript', 'reactjs'],
    imageClass: 'work_2',
    image: "images/desktop_work_image2\ \(2\).png",
    liveLink: 'https://space-travelers-hub-954a.onrender.com/',
    sourceLink: 'https://github.com/naanmohammed/Space-Travelers--Hub',
  },
  {
    id: 3,
    name: 'Central Cinema Trends',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      "Central Cinema Trends is your go-to platform for discovering the hottest movies in the world of entertainment. Crafted by talented developers as part of their Full-Stack Web Development journey, this web application brings the magic of cinema to your fingertips. With an intuitive and dynamic interface built using HTML, CSS, and JavaScript, users can explore a wide range of movies, post comments, and express their love for their favorite films by giving them likes",
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_3',
    image: 'images/desktop_work_image3.png',
    liveLink: 'https://movieapp-l0mn.onrender.com/',
    sourceLink: 'https://github.com/naanmohammed/Movie-app',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    description:
      "Crypto Metrics is a a user-friendly website designed to keep you informed about the latest cryptocurrency data. With Crypto Metrics Mobile, you can effortlessly access real-time information about various cryptocurrencies, including their name, rank, current price, and 24-hour price change. Powered by a reliable API, CryptoTracker Mobile ensures that you stay up to date with the dynamic nature of the crypto market. Whether you're an avid investor, a trader, or simply curious about cryptocurrencies, this mobile website provides you with accurate and timely data that you can rely on. ",
    tags: ['html', 'css', 'Ruby on rails', 'javaScript'],
    imageClass: 'work_4',
    image: 'images/Capstone.jpg',
    liveLink: 'https://crypto-metrics-mobile.onrender.com/',
    sourceLink: 'https://github.com/naanmohammed/Crypto-Markets',
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

// Load data from local storage if available
const savedData = localStorage.getItem('formData');
if (savedData) {
  const formData = JSON.parse(savedData);
  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    const name = input.getAttribute('name');
    if (name && formData[name]) {
      input.value = formData[name];
    }
  }
}

// Save data to local storage on change
for (let i = 0; i < inputs.length; i += 1) {
  const input = inputs[i];
  input.addEventListener('change', () => {
    const formData = {};
    for (let j = 0; j < inputs.length; j += 1) {
      const input = inputs[j];
      const name = input.getAttribute('name');
      if (name) {
        formData[name] = input.value;
      }
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  });
}
