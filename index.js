import express from "express"
import path from "path"


const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/doacao', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'doacao.html'));
});

app.get('/historia', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'historia.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Função melhorada para gerenciar a troca de imagens com animação
function setActiveThumb(element) {
  // Obtém todas as miniaturas
  const thumbnails = document.querySelectorAll('.timeline-thumbnail');
  
  // Armazena a referência à miniatura anteriormente ativa
  const previousActive = document.querySelector('.timeline-active');
  
  // Se não houver miniatura ativa anterior, apenas ativa a atual
  if (!previousActive) {
    element.classList.add('timeline-active');
    return;
  }
  
  // Obtém os dados das imagens
  const previousImageUrl = previousActive.style.backgroundImage;
  const newImageUrl = element.style.backgroundImage;
  const mainImageElement = document.getElementById('mainImage');
  
  // Remove a classe ativa da miniatura anterior
  previousActive.classList.remove('timeline-active');
  
  // Adiciona a classe ativa à nova miniatura
  element.classList.add('timeline-active');
  
  // Aplica efeito de fade na imagem principal
  mainImageElement.style.transition = 'opacity 0.3s ease';
  mainImageElement.style.opacity = '0';
  
  // Após o fade out, troca a imagem principal e faz fade in
  setTimeout(() => {
    // Atualiza a imagem principal
    mainImageElement.style.backgroundImage = newImageUrl;
    
    // Troca as imagens das miniaturas
    previousActive.style.transition = 'transform 0.5s ease, opacity 0.3s ease';
    element.style.transition = 'transform 0.5s ease, opacity 0.3s ease';
    
    // Efeito visual nas miniaturas
    previousActive.style.transform = 'scale(0.95)';
    previousActive.style.opacity = '0.8';
    element.style.transform = 'scale(1.05)';
    element.style.opacity = '1';
    
    // Troca o background das miniaturas
    setTimeout(() => {
      previousActive.style.backgroundImage = newImageUrl;
      
      // Restaura as propriedades visuais após a troca
      setTimeout(() => {
        previousActive.style.transform = 'scale(1)';
        previousActive.style.opacity = '1';
        element.style.transform = 'scale(1)';
      }, 300);
    }, 300);
    
    // Fade in da imagem principal
    mainImageElement.style.opacity = '1';
  }, 300);
}

// Adiciona estilos CSS para as transições
document.addEventListener('DOMContentLoaded', function() {
  // Adiciona estilos CSS para as miniaturas
  const style = document.createElement('style');
  style.textContent = `
    .timeline-thumbnail {
      transition: all 0.3s ease;
      border: 3px solid transparent;
    }
    
    .timeline-active {
      border: 3px solid #FAB515;
      transform: scale(1.05);
    }
    
    #mainImage {
      transition: all 0.3s ease;
    }
  `;
  document.head.appendChild(style);
  
  // Define a primeira miniatura como ativa por padrão
  const firstThumb = document.querySelector('.timeline-thumbnail');
  if (firstThumb) {
    firstThumb.classList.add('timeline-active');
    document.getElementById('mainImage').style.backgroundImage = firstThumb.style.backgroundImage;
  }
});