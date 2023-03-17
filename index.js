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
    image: 'images/desktop_work_image1.png',
    description1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    description2: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tag1 : 'html',
    tag2 : 'css',
    tag3 : 'javascript',
    tag4 : 'ruby',
    tag5 : 'bootsrap',
  },
  {
    title: 'Multi-Post Stories',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/desktop_work_image2.png',
    description1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    description2: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tag1 : 'html',
    tag2 : 'css',
    tag3 : 'javascript',
    tag4 : 'ruby',
    tag5 : 'bootsrap',
  },
  {
    title: 'Tonic',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/desktop_work_image3.png',
    deskImage: 'img/popDesk.jpg',
    description1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    description2: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    tag1 : 'html',
    tag2 : 'css',
    tag3 : 'javascript',
    tag4 : 'ruby',
    tag5 : 'bootsrap',
  },
  {
    title: 'Multi-Post Stories',
    closeIcon: './img/closePop.png',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    image: 'images/desktop_work_image4.png',
    description1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    description2: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    technologies: 'tagList',
    tag1 : 'html',
    tag2 : 'css',
    tag3 : 'javascript',
    tag4 : 'ruby',
    tag5 : 'bootsrap',
    liveLink : 'https://naanmohammed.github.io/my-portfolio/',
    sourceLink : 'https://github.com/naanmohammed/my-portfolio'
  },
];

function showPopup(index) {
  const project = projects[index];
  if(window.innerWidth >=768){
    document.getElementById("popup-title").textContent = project.title;
    document.getElementById("popup-summary").textContent = project.summary.join("          \u2022            ")
    document.getElementById("popup-image").src = project.image;
    document.getElementById("popup-image").style.width = "100%";
    document.getElementById("popup-image").style.height = "55%";
    document.getElementById("popup-tag1").textContent = project.tag1;
    document.getElementById("popup-tag2").textContent = project.tag2;
    document.getElementById("popup-tag3").textContent = project.tag3;
    document.getElementById("popup-tag4").textContent = project.tag4;
    document.getElementById("popup-tag5").textContent = project.tag5;
    document.getElementById("popup-description1").textContent = project.description1;
    document.getElementById("popup-description2").textContent = project.description2;
    document.getElementById("popup").style.display = "block";
  }
  else if(window.innerWidth <=375)  {
    document.getElementById("popup-mobile-title").textContent = project.title;
    document.getElementById("popup-mobile-summary").textContent = project.summary.join("          \u2022            ")
    document.getElementById("popup-mobile-image").src = project.image;
    document.getElementById("popup-mobile-image").style.width = "100%";
    document.getElementById("popup-mobile-image").style.height = "55%";
    document.getElementById("popup-mobile-tag1").textContent = project.tag1;
    document.getElementById("popup-mobile-tag2").textContent = project.tag2;
    document.getElementById("popup-mobile-tag3").textContent = project.tag3;
    document.getElementById("popup-mobile-tag4").textContent = project.tag4;
    document.getElementById("popup-mobile-tag5").textContent = project.tag5;
    document.getElementById("popup-mobile-description1").textContent = project.description1;
    document.getElementById("popup-mobile-description2").textContent = project.description2;
    document.getElementById("popup-mobile").style.display = "block";
  }
}

function liveLink() {
  var url = 'https://naanmohammed.github.io/my-portfolio/';
  window.open(url);
}
function sourceLink() {
  var url = 'https://github.com/naanmohammed/my-portfolio'
  window.open(url);
}
function hidePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup-mobile").style.display = "none";
}
