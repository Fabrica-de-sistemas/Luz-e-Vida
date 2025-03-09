// Inicialização do Swiper para o carrossel de projetos
document.addEventListener('DOMContentLoaded', function () {
  // Verifica se Swiper está disponível
  if (typeof Swiper !== 'undefined') {
    // Inicializa o Swiper
    const projectsSwiper = new Swiper('.swiper-container', {
      // Configuração básica
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      loop: true,

      // Autoplay
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // Navegação
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Responsividade
      breakpoints: {
        // Quando a largura da tela é maior que 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // Quando a largura da tela é maior que 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

    // Pausa o autoplay quando o mouse está sobre o carrossel
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
      swiperContainer.addEventListener('mouseenter', function () {
        if (projectsSwiper.autoplay && projectsSwiper.autoplay.running) {
          projectsSwiper.autoplay.stop();
        }
      });

      swiperContainer.addEventListener('mouseleave', function () {
        if (projectsSwiper.autoplay && !projectsSwiper.autoplay.running) {
          projectsSwiper.autoplay.start();
        }
      });
    }
  } else {
    console.warn('Swiper não está carregado. Verifique se a biblioteca foi incluída no documento.');
  }
});