// Menu Toggler

const hamburgerBtn = $('.hamburger');
const headerNav = $('.header-nav');

const handleHamburgerClick = (e) => {
  if (headerNav.hasClass('active')) {
    headerNav.removeClass('active');
    menuAnimation.playSegments([15, 3], true);
  } else {
    headerNav.addClass('active');
    menuAnimation.playSegments([3, 15], true);
  }
};

hamburgerBtn.on('click', handleHamburgerClick);
$(window).on('click', (e) => {
  if (
    !headerNav.has(e.target).length != 0 &&
    !hamburgerBtn.has(e.target).length != 0
  ) {
    if (headerNav.hasClass('active')) {
      menuAnimation.playSegments([15, 3], true);
    }
    headerNav.removeClass('active');
  }
});

// Scroll Top

let btnScrollTop = $('.btn-scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    btnScrollTop.addClass('active');
  } else {
    btnScrollTop.removeClass('active');
  }
});

btnScrollTop.click(() => {
  $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutQuad');
});

// Smooth Anchor Scroll

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');

  var $id = $(id);

  if ($id.length === 0) {
    return;
  }

  e.preventDefault();

  var pos = $id.offset().top;

  headerNav.removeClass('active');
  $('body, html').animate({ scrollTop: pos }, 400, 'easeOutQuad');
});

// WhatsApp Form

function submitWhatsAppMessage() {
  let nome = $('#nome').val(),
    email = $('#email').val(),
    nomeProjeto = $('#nomeProjeto').val(),
    descProjeto = $('#descProjeto').val(),
    btnEnviar = $('.btn-whatsapp');

  let msgFinal =
    window.encodeURIComponent(`Olá, me chamo *${nome}*, estou a procura de um desenvolvedor.

  *• E-mail:* ${email}
  *• Projeto:* ${nomeProjeto}
  *• Descrição do Projeto:* ${descProjeto}`);

  let url = `https://wa.me/5544998182849?text=${msgFinal}`;
  console.log();
  btnEnviar.attr('href', url);
}

$('.btn-whatsapp').on('click', submitWhatsAppMessage);

// Dark Mode Toggler

function toggleDarkMode() {
  let htmlElement = $('html');
  if (htmlElement.hasClass('dark')) {
    htmlElement.removeClass('dark');
    localStorage.removeItem('dark');
    sunMoonAnimation.playSegments([28, 14], true);
  } else {
    htmlElement.addClass('dark');
    localStorage.setItem('dark', 'enabled');
    sunMoonAnimation.playSegments([14, 28], true);
  }
}

$('#dark-toggler').on('click', toggleDarkMode);
