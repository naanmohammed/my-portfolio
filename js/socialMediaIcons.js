const socialMediaLinks = [
  { url: 'https://www.twitter.com/_naanahmed', logo: 'images/twitter.jpg', alt: 'twitter logo' },
  { url: 'https://www.linkedin.com/in/naanahmed', logo: 'images/linkedin.png', alt: 'linkedin logo' },
  { url: 'https://www.medium.com/@naanahmed', logo: 'images/medium.jpg', alt: 'medium logo' },
  { url: 'https://www.github.com/naanmohammed', logo: 'images/github.jpg', alt: 'github logo' },
  { url: 'https://www.reddit.com/user/NaanAMD', logo: 'images/reddit.jpg', alt: 'reddit logo' },
];

const socialMediaLinksContainer = document.querySelector('.social-media-links');
const socialMediaLinksContainer2 = document.querySelector('.social-media-lists');

socialMediaLinks.forEach((link) => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  const image = document.createElement('img');

  anchor.href = link.url;
  anchor.target = '_blank';
  image.src = link.logo;
  image.alt = link.alt;

  anchor.appendChild(image);
  listItem.appendChild(anchor);

  socialMediaLinksContainer.appendChild(listItem);

  const listItem2 = document.createElement('li');
  const anchor2 = document.createElement('a');
  const image2 = document.createElement('img');

  anchor2.href = link.url;
  anchor2.target = '_blank';
  image2.src = link.logo;
  image2.alt = link.alt;

  anchor2.appendChild(image2);
  listItem2.appendChild(anchor2);

  socialMediaLinksContainer2.appendChild(listItem2);
});