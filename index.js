import express from "express"
import path from "path"


const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Inicialização do Swiper quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  // Verifica se Swiper está disponível
  if (typeof Swiper !== 'undefined') {
    // Inicializa o Swiper
    const projectsSwiper = new Swiper('.swiper-container', {
      // Configurações básicas
      slidesPerView: 3, // Mostra 3 slides por vez
      spaceBetween: 30, // Espaço entre slides (em px)
      centeredSlides: false,
      loop: true, // Permite que o carrossel faça um loop contínuo

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
        // Quando a largura da tela for <= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // Quando a largura da tela for <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

    // Pausa o autoplay quando o mouse está sobre o carrossel (opcional)
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