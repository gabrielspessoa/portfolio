let menuButton = document.querySelector('#menu');

let menuAnimation = bodymovin.loadAnimation({
  container: menuButton,
  path: 'assets/icons/menu.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
});

let darkToggler = document.querySelector('#dark-toggler');
let initialState = [14, 28];

if ($('html').hasClass('dark')) {
  initialState = [27, 14];
}

let sunMoonAnimation = bodymovin.loadAnimation({
  container: darkToggler,
  path: 'assets/icons/sun-moon.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  initialSegment: initialState,
});
