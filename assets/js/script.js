// Menu Toggler

const hamburgerBtn = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');

const handleHamburgerClick = () => {
  if (headerNav.classList.contains('active'))
    headerNav.classList.remove('active');
  else headerNav.classList.add('active');
};

hamburgerBtn.addEventListener('click', handleHamburgerClick);
