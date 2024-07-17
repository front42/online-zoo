'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const slogan = document.querySelector('.intro__slogan');
const aside = document.querySelector('.aside');
const asideBtn = document.querySelector('.aside__btn');

document.addEventListener('scroll', () => {
  burger.classList.remove('active');
  nav.classList.remove('active');
  slogan ? slogan.classList.remove('invisible') : null;
  aside ? aside.classList.remove('aside-visible') : null;
  asideBtn ? asideBtn.style.opacity = 1 : null;
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  slogan ? slogan.classList.toggle('invisible') : null;
  aside ? aside.classList.remove('aside-visible') : null;
  asideBtn ? asideBtn.style.opacity = 1 : null;
});

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    slogan ? slogan.classList.remove('invisible') : null;
  })
);
