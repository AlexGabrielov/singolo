const NAV = document.getElementById('nav');
const navLisA = NAV.querySelectorAll('li > a');
const PICTUREGRID = document.getElementById('pictures');
const portfolioPictures = PICTUREGRID.querySelectorAll('img');
const SLIDER = document.getElementById('slider');
const sliderPictures = SLIDER.querySelectorAll('img');
const FILTER = document.getElementById('filter');
const filterButtons = FILTER.querySelectorAll('li > button');
const filterSpans = FILTER.querySelectorAll('li > button > span');
const MESSAGEBLOCK = document.getElementById('message-block');
const SUBMITBUTTON = document.getElementById('submit-button');
const CLOSEBUTTON = document.getElementById('close-button');
const FORM = document.getElementById('form');

NAV.addEventListener('click', event => {
  navLisA.forEach(a => a.classList.remove('active-menu'));
  event.target.classList.add('active-menu');
});

PICTUREGRID.addEventListener('click', event => {
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
FILTER.addEventListener('click', ({ target, currentTarget }) => {
  if (target === currentTarget) {
    return;
  }
  console.log(target.closest('button'));
  filterButtons.forEach(({ classList }) => classList.remove('active-filter'));
  target.closest('button').classList.add('active-filter');
});

FORM.addEventListener('submit', event => {
  const subject = document.getElementById('subject').value;
  const details = document.getElementById('textarea').value;

  const subjectSpan = document.getElementById('subject-span');
  const descriptionSpan = document.getElementById('description-span');
  subjectSpan.innerText = subject ? `Тема: ${subject}` : 'Без темы';

  descriptionSpan.innerText = details ? `Описание: ${details}` : 'Без описания';
  MESSAGEBLOCK.classList.remove('hidden');

  event.preventDefault();
});

CLOSEBUTTON.addEventListener('click', () => {
  MESSAGEBLOCK.classList.add('hidden');
  FORM.reset();
});
