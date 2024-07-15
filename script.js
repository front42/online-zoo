const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const slogan = document.querySelector('.intro__slogan');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  slogan.classList.toggle('invisible');
});

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    slogan.classList.remove('invisible');
  })
);
