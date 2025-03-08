// Inicialização do Swiper quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  // Verifica se Swiper está disponível
  if (typeof Swiper !== 'undefined') {
    // Inicializa o Swiper
    const projectsSwiper = new Swiper('.swiper-container', {
      // Configurações básicas
      slidesPerView: 3, // Mostra 3 slides por vez
      spaceBetween: 10, // Espaço entre slides (em px)
      grabCursor: true, // Muda o cursor para "mão" quando passa sobre o slider
      loop: true, // Permite que o carrossel faça um loop contínuo

      // Efeito de transição
      effect: 'slide',

      // Autoplay
      autoplay: {
        delay: 5000, // Tempo entre transições (em ms)
        disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
      },

      // Paginação
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite clicar nos pontos para navegar
      },

      // Botões de navegação
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Configurações responsivas
      breakpoints: {
        // Quando a largura da tela >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        // Quando a largura da tela >= 768px e < 1200px
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // Quando a largura da tela < 768px
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        }
      }
    });

    // Evento para reinicializar o Swiper quando a janela for redimensionada
    window.addEventListener('resize', function () {
      projectsSwiper.update();
    });

    // Pausa o autoplay quando o mouse está sobre o carrossel
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
      swiperContainer.addEventListener('mouseenter', function () {
        projectsSwiper.autoplay.stop();
      });

      swiperContainer.addEventListener('mouseleave', function () {
        projectsSwiper.autoplay.start();
      });
    }
  } else {
    console.warn('Swiper não está carregado. Verifique se a biblioteca foi incluída no documento.');
  }
});