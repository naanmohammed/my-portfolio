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

//

const projects = [
  {
    title: 'Tonic',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'img/counter.png',
    image: 'images/mobile_work_image1.jpg',
    deskImage: 'img/popDesk.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
    technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    buttonText: 'See Project',
    liveLink: 'https://uuukiiiyooo.github.io/',
    liveIcon: 'img/liveIcon.svg',
    sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
    sourceIcon: 'img/githubIcon.svg',
  },
  {
    title: 'Multi-Post Stories',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'img/counter.png',
    image: 'images/mobile_work_image2.png',
    deskImage: 'img/popDesk.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
    technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    buttonText: 'See Project',
    liveLink: 'https://uuukiiiyooo.github.io/',
    liveIcon: 'img/liveIcon.svg',
    sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
    sourceIcon: 'img/githubIcon.svg',
  },
  {
    title: 'Tonic',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'img/counter.png',
    image: 'images/mobile_work_image3.png',
    deskImage: 'img/popDesk.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    popDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    deskDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
    technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    buttonText: 'See Project',
    liveLink: 'https://uuukiiiyooo.github.io/',
    liveIcon: 'img/liveIcon.svg',
    sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
    sourceIcon: 'img/githubIcon.svg',
  },
  {
    title: 'Multi-Post Stories',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'img/counter.png',
    image: 'images/mobile_work_image4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a',
    technologies: ['html', 'css', 'javaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    buttonText: 'See Project',
    liveLink: 'https://uuukiiiyooo.github.io/',
    liveIcon: 'img/liveIcon.svg',
    sourceLink: 'https://github.com/uuukiiiyooo/uuukiiiyooo.github.io',
    sourceIcon: 'img/githubIcon.svg',
  },
];

function showPopup(index) {
  const project = projects[index];
  document.getElementById("popup-title").textContent = project.title;
  document.getElementById("popup-technologies").textContent = project.technologies.join(", ");
  document.getElementById("popup-image").src = project.image;
  document.getElementById("popup-description").textContent = project.description;
  document.getElementById("popup-link").textContent = project.link;
  document.getElementById("popup-link").href = project.link;
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}