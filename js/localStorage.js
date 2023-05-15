const form = document.querySelector('form');
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
