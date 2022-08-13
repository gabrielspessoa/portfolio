const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  centeredSlides: true,
  centeredSlidesBounds: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
});

let swiperWrapper = document.querySelector('.swiper-wrapper');

axios
  .get('https://api.npoint.io/09327e78188ece5a4341')
  .then((res) => {
    let projects = res.data;
    projects.map((project) => {
      swiper.appendSlide(`
    <div class="swiper-slide">
      <a href="${project.projectUrl}" target="_blank">
        <div class="card">
          <img src="${project.imgUrl}" alt="" />
          <div class="title">${project.title}</div>
          <div class="description">${project.description}</div>
        </div>
      </a>
    </div>
    `);
    });
  })
  .catch((e) => {
    swiper.appendSlide(`
  <div class="swiper-slide">  
    <div class="card">
      <div class="error">Erro ao obter lista de projetos.</div>
    </div>
  </div>
  `);
  });
