const languages = [
    { name: 'Javascript', logo: 'images/javascript.jpg' },
    { name: 'HTML', logo: 'images/html.jpg' },
    { name: 'CSS', logo: 'images/css.jpg' },
  ];
  
  const languageList = document.createElement('ul');
  languageList.classList.add('language_list');
  
  languages.forEach(language => {
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

  const languageContainer = document.querySelector('.language_list');
  languageContainer.appendChild(languageList);