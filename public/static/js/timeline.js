// Função para definir a miniatura ativa e trocar imagens
function setActiveThumb(element) {
    // Obtém referência à miniatura anteriormente ativa
    const previousActive = document.querySelector('.timeline-active');

    // Obtém o URL da imagem clicada
    const clickedImageUrl = element.style.backgroundImage;

    // Obtém o mainImage
    const mainImage = document.getElementById('mainImage');

    // Obtém o URL da imagem principal atual
    const currentMainImageUrl = mainImage.style.backgroundImage;

    // Remove a classe ativa de todas as miniaturas
    document.querySelectorAll('.timeline-thumbnail').forEach(thumb => {
        thumb.classList.remove('timeline-active');
    });

    // Adiciona a classe ativa ao elemento clicado
    element.classList.add('timeline-active');

    // Aplica efeito de fade na imagem principal
    mainImage.style.transition = 'opacity 0.3s ease';
    mainImage.style.opacity = '0.5';

    // Atualiza a imagem principal
    setTimeout(() => {
        // Define a imagem principal como a imagem clicada
        mainImage.style.backgroundImage = clickedImageUrl;

        // Troca a imagem da miniatura clicada com a imagem que estava no mainImage
        element.style.backgroundImage = currentMainImageUrl;

        // Restaura a opacidade
        mainImage.style.opacity = '1';
    }, 300);
}

// Adiciona estilos e inicializa a primeira miniatura quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona estilo para as miniaturas
    const style = document.createElement('style');
    style.textContent = `
      .timeline-thumbnail {
        transition: all 0.3s ease;
        border: 3px solid transparent;
      }
      
      .timeline-active {
        border: 3px solid #FAB515;
      }
      
      #mainImage {
        transition: opacity 0.3s ease;
      }
      
      /* Esconde a barra de rolagem enquanto mantém a funcionalidade */
      .overflow-x-auto {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer/Edge */
      }
      
      .overflow-x-auto::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `;
    document.head.appendChild(style);

    // Define a primeira miniatura como ativa inicialmente
    const firstThumb = document.querySelector('.timeline-thumbnail');
    if (firstThumb) {
        firstThumb.classList.add('timeline-active');
    }
});