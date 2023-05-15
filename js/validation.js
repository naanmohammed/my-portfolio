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