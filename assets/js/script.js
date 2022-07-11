// Menu Toggler

const hamburgerBtn = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');

const handleHamburgerClick = (e) => {
  if (headerNav.classList.contains('active'))
    headerNav.classList.remove('active');
  else headerNav.classList.add('active');
};

hamburgerBtn.addEventListener('click', handleHamburgerClick);
window.addEventListener('click', (e) => {
  if (!headerNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    headerNav.classList.remove('active');
  }
});
