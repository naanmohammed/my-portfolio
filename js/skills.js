const skills = ['Pair-Programming', 'Leadership', 'Remote Programming', 'Project Management'];
const skillsListContainer = document.querySelector('.skills-list');
const skillsButton = document.getElementById('skillsButton');

const skillsElements = skills.map((skill) => {
  const skillElement = document.createElement('li');
  skillElement.textContent = skill;
  return skillElement;
});

const hideSkills = () => {
  skillsListContainer.innerHTML = '';
};

// Add event listener to toggle visibility of frameworks
skillsButton.addEventListener('click', () => {
  const isHidden = skillsListContainer.innerHTML === '';

  if (isHidden) {
    skillsElements.forEach((element) => {
      skillsListContainer.appendChild(element);
    });
    skillsButton.style.transform = 'rotate(90deg)';
  } else {
    hideSkills();
    skillsButton.style.transform = 'rotate(0deg)';
  }
});
