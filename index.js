const NAV = document.getElementById('nav');

const navLis = NAV.querySelectorAll('li');
const navLisA = NAV.querySelectorAll('li > a');

NAV.addEventListener('click', event => {
  navLisA.forEach(a => a.classList.remove('active-menu'));
  event.target.classList.add('active-menu');
});
