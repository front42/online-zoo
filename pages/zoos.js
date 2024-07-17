'use strict';

asideBtn.addEventListener('click', () => {
  burger.classList.remove('active');
  nav.classList.remove('active');
  asideBtn.style.opacity = 0;
  aside.classList.add('aside-visible');
});

aside.querySelectorAll('img').forEach(link =>
  link.addEventListener('click', () => {
    aside.classList.remove('aside-visible');
    asideBtn.style.opacity = 1;
  })
);

const mainView = document.querySelector('.animal iframe');
const previews = document.querySelectorAll('.animal__small iframe');
const playBtns = document.querySelectorAll('.overlay__btn');

playBtns.forEach(btn =>
  btn.addEventListener('click', event => {
    const preview = event.target
      .closest('.animal__small')
      .querySelector('iframe');
    [preview.src, mainView.src] = [mainView.src, preview.src];
  })
);
