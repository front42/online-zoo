'use strict';

const mainView = document.querySelector('.animal iframe');
const previews = document.querySelectorAll('.animal__small iframe');
const playBtns = document.querySelectorAll('.overlay__btn');
playBtns.forEach(btn => btn.addEventListener('click', event => {
  const preview = event.target.closest('.animal__small').querySelector('iframe');
  [preview.src, mainView.src] = [mainView.src, preview.src];
}));
