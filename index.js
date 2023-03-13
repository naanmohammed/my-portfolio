const button = document.getElementById("my_button");
const page = document.getElementById("translucent_page");
const close_button = document.getElementById("close_button");
const lis = document.querySelectorAll('#translucent_page li');

button.addEventListener("click", function() {
  event.preventDefault();  
  page.style.display = "block";
});

lis.forEach(li => {
  li.addEventListener('click', function() {
    const sectionId = this.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    page.style.display = 'none';
  });
});

