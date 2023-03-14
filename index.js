const button = document.getElementById('my_button');
const page = document.getElementById('translucent_page');
const closeButton = document.getElementById('close_button');
const lis = document.querySelectorAll('#translucent_page li');

button.addEventListener('click', function handleTranslucentPage(event) {
  event.preventDefault();
  page.style.display = 'block';
});

closeButton.addEventListener('click', function handleButtonClick() {
  page.style.display = 'none';
});

lis.forEach(li => {
  li.addEventListener('click', function handleLiClick() {
    const sectionId = this.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    page.style.display = 'none';
  });
});