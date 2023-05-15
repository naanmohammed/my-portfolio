const frameworks = ['React', '.Net', 'Rails', 'Svelte'];
const frameworksListContainer = document.querySelector('.frameworks-list');
const frameworksButton = document.getElementById('frameworksButton');

const frameworksElements = frameworks.map((framework) => {
  const frameworkElement = document.createElement('li');
  frameworkElement.textContent = framework;
  return frameworkElement;
});

const hideFrameworks = () => {
  frameworksListContainer.innerHTML = '';
};

// Add event listener to toggle visibility of frameworks
frameworksButton.addEventListener('click', () => {
  const isHidden = frameworksListContainer.innerHTML === '';

  if (isHidden) {
    frameworksElements.forEach((element) => {
      frameworksListContainer.appendChild(element);
    });
    frameworksButton.style.transform = 'rotate(90deg)';
  } else {
    hideFrameworks();
    frameworksButton.style.transform = 'rotate(0deg)';
  }
});
