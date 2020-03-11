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
  if ([...target.classList].includes('vertical-display')) {
    target.classList.add('hidden');
  }
  if ([...target.classList].includes('vertical')) {
    const verticalPhone = SLIDER.querySelector('.vertical-display');
    if ([...verticalPhone.classList].includes('hidden')) {
      verticalPhone.classList.remove('hidden');
    } else {
      verticalPhone.classList.add('hidden');
    }
  }
  if ([...target.classList].includes('horizontal-display')) {
    target.classList.add('hidden');
  }
  if ([...target.classList].includes('horizontal')) {
    const horizontalPhone = SLIDER.querySelector('.horizontal-display');
    if ([...horizontalPhone.classList].includes('hidden')) {
      horizontalPhone.classList.remove('hidden');
    } else {
      horizontalPhone.classList.add('hidden');
    }
  }
});
