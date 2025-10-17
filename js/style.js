
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
}
