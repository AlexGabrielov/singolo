const NAV = document.getElementById('nav');
const navLisA = NAV.querySelectorAll('li > a');
const PICTUREGRID = document.getElementById('pictures');
const pictures = PICTUREGRID.querySelectorAll('img');

NAV.addEventListener('click', event => {
  navLisA.forEach(a => a.classList.remove('active-menu'));
  event.target.classList.add('active-menu');
});

PICTUREGRID.addEventListener('click', event => {
  console.log(event);
  pictures.forEach(img => img.classList.remove('active-picture'));
  if (event.target.tagName === 'IMG')
    event.target.classList.add('active-picture');
});
