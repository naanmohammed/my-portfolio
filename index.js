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
