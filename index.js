const NAV = document.getElementById('nav');
const navLisA = NAV.querySelectorAll('li > a');
const PICTUREGRID = document.getElementById('pictures');
const portfolioPictures = PICTUREGRID.querySelectorAll('img');
const SLIDER = document.getElementById('slider');
const sliderPictures = SLIDER.querySelectorAll('img');

NAV.addEventListener('click', event => {
  navLisA.forEach(a => a.classList.remove('active-menu'));
  event.target.classList.add('active-menu');
});

PICTUREGRID.addEventListener('click', event => {
  // console.dir(event.target);
  portfolioPictures.forEach(img => img.classList.remove('active-picture'));
  if (event.target.tagName === 'IMG')
    event.target.classList.add('active-picture');
});

SLIDER.addEventListener('click', ({ target }) => {
  if (target.classList.contains('vertical-display')) {
    target.classList.add('hidden');
  }
  if (target.classList.contains('vertical')) {
    const verticalPhone = SLIDER.querySelector('.vertical-display');
    verticalPhone.classList.toggle('hidden');
  }
  if (target.classList.contains('horizontal-display')) {
    target.classList.add('hidden');
  }
  if (target.classList.contains('horizontal')) {
    const horizontalPhone = SLIDER.querySelector('.horizontal-display');
    horizontalPhone.classList.toggle('hidden');
  }
});
