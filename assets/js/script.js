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
  $('html, body').animate({ scrollTop: 0 }, 400);
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

  $('body, html').animate({ scrollTop: pos });
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
