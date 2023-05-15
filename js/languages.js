const languages = [
  { name: 'Javascript', logo: 'images/language-images/javascript.jpg' },
  { name: 'HTML', logo: 'images/language-images/html.jpg' },
  { name: 'CSS', logo: 'images/language-images/css.jpg' },
  { name: 'Python', logo: 'images/language-images/python.svg' },
  { name: 'C Sharp', logo: 'images/language-images/csharp.png' },
  { name: 'Ruby', logo: 'images/language-images/ruby.png' },
];
const languageList = document.createElement('ul');
languageList.classList.add('language_list');

languages.slice(0, 3).forEach((language) => {
  const listItem = document.createElement('li');
  const logoImage = document.createElement('img');
  const languageName = document.createElement('p');

  logoImage.src = language.logo;
  logoImage.alt = `${language.name} logo`;
  languageName.textContent = language.name;

  listItem.appendChild(logoImage);
  listItem.appendChild(languageName);
  languageList.appendChild(listItem);
});

const languageContainer = document.querySelector('.language_list_container');
languageContainer.appendChild(languageList);

if (languages.length > 3) {
  const languagesBtn = document.getElementById('languagesButton');
  let isExpanded = false;

  languagesBtn.addEventListener('click', () => {
    if (isExpanded) {
      languageList.innerHTML = '';

      languages.slice(0, 3).forEach((language) => {
        const listItem = document.createElement('li');
        const logoImage = document.createElement('img');
        const languageName = document.createElement('p');

        logoImage.src = language.logo;
        logoImage.alt = `${language.name} logo`;
        languageName.textContent = language.name;

        listItem.appendChild(logoImage);
        listItem.appendChild(languageName);
        languageList.appendChild(listItem);
      });
      languagesBtn.style.transform = 'rotate(0deg)';
      isExpanded = false;
    } else {
      languageList.innerHTML = '';

      languages.forEach((language) => {
        const listItem = document.createElement('li');
        const logoImage = document.createElement('img');
        const languageName = document.createElement('p');

        logoImage.src = language.logo;
        logoImage.alt = `${language.name} logo`;
        languageName.textContent = language.name;

        listItem.appendChild(logoImage);
        listItem.appendChild(languageName);
        languageList.appendChild(listItem);
      });
      languagesBtn.style.transform = 'rotate(180deg)';
      isExpanded = true;
    }
  });
}