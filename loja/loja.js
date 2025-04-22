document.addEventListener("DOMContentLoaded", function () {
    var i = 1;
    var stop = 5; // Número de elementos
  
    setInterval(function () {
      if (i > stop) {
        return;
      }
      var element = document.getElementById('len' + i++);
      if (element) {
        element.classList.toggle('bounce');
      }
    }, 500);
  });
  // Seleciona os elementos
var drop = document.querySelectorAll('.drop');
var dropdown = document.querySelector('.dropdown');

// Adiciona o evento de mouseover
drop.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    dropdown.style.display = 'block'; // Mostra o dropdown
    dropdown.style.transition = 'all 0.3s'; // Suaviza a transição
  });
});

// Adiciona o evento de mouseleave
drop.forEach(function(element) {
  element.addEventListener('mouseleave', function() {
    dropdown.style.display = 'none'; // Esconde o dropdown
    dropdown.style.transition = 'all 0.3s'; // Suaviza a transição
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const footer = document.getElementById("footer");
  footer.style.backgroundColor = "#222";
  footer.style.color = "#fff";
  footer.style.padding = "20px";
  footer.style.textAlign = "center";
  footer.style.fontFamily = "Arial, sans-serif";

  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach(icon => {
      icon.style.margin = "0 10px";
      icon.style.fontSize = "24px";
      icon.style.transition = "color 0.3s";
      icon.style.color = "#fff";
      icon.addEventListener("mouseover", function() {
          icon.style.color = icon.getAttribute("data-color");
      });
      icon.addEventListener("mouseout", function() {
          icon.style.color = "#fff";
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const links = document.querySelectorAll("a.link-navegacao");

  // Oculta o loader depois que a página carregar
  setTimeout(() => {
    loader.classList.remove("active");
  }, 1000);

  // Exibe o loader antes de sair da página
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = link.getAttribute("href");

      loader.classList.add("active");

      // Aguarda o loader aparecer antes de redirecionar
      setTimeout(() => {
        window.location.href = destino;
      }, 500);
    });
  });
});

// Carrosseis
const carrosseis = [
  {
    container: document.querySelectorAll('.carousel')[0],
    nextBtn: document.getElementById('next-vestuario'),
    prevBtn: document.getElementById('prev-vestuario'),
    active: 1,
    interval: null
  },
  {
    container: document.querySelectorAll('.carousel')[1],
    nextBtn: document.getElementById('next-acessorios'),
    prevBtn: document.getElementById('prev-acessorios'),
    active: 1,
    interval: null
  },
  {
    container: document.querySelectorAll('.carousel')[2],
    nextBtn: document.getElementById('next-kits'),
    prevBtn: document.getElementById('prev-kits'),
    active: 1,
    interval: null
  },
  {
    container: document.querySelectorAll('.carousel')[3],
    nextBtn: document.getElementById('next-partituras'),
    prevBtn: document.getElementById('prev-partituras'),
    active: 1,
    interval: null
  },
];

// Função para mudar os slides
const changeSlider = (carouselObj) => {
  const carousel = carouselObj.container;
  const items = carousel.querySelectorAll('.item');
  const countItem = items.length;

  // Cálculo de índices
  let active = carouselObj.active;
  let other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  let other_2 = active + 1 >= countItem ? 0 : active + 1;

  // Remover classes antigas
  const itemOldActive = carousel.querySelector('.item.active');
  if (itemOldActive) itemOldActive.classList.remove('active');

  const itemOldOther1 = carousel.querySelector('.item.other_1');
  if (itemOldOther1) itemOldOther1.classList.remove('other_1');

  const itemOldOther2 = carousel.querySelector('.item.other_2');
  if (itemOldOther2) itemOldOther2.classList.remove('other_2');

  // Aplicar novas classes
  items[active].classList.add('active');
  items[other_1].classList.add('other_1');
  items[other_2].classList.add('other_2');

  // Resetar animações
  items.forEach(e => {
    const img = e.querySelector('.image img');
    const caption = e.querySelector('.image figcaption');
    img.style.animation = 'none';
    caption.style.animation = 'none';
    void e.offsetWidth;
    img.style.animation = '';
    caption.style.animation = '';
  });

  // Reiniciar autoplay
  clearInterval(carouselObj.interval);
  carouselObj.interval = setInterval(() => {
    carouselObj.nextBtn.click();
  }, 5000);
};

// Iniciar carrosseis
carrosseis.forEach(carouselObj => {
  const carousel = carouselObj.container;
  const items = carousel.querySelectorAll('.item');
  const countItem = items.length;
  const type = carousel.getAttribute('data-type'); // <-- dinâmica com data-type

  // Botão "Next"
  carouselObj.nextBtn.onclick = () => {
    // Remove qualquer classe de transição anterior
    carousel.classList.remove(`prev-${type}`, `next-${type}`);
    carousel.classList.add(`next-${type}`);

    // Atualiza o índice do item ativo
    carouselObj.active = (carouselObj.active + 1 >= countItem) ? 0 : carouselObj.active + 1;

    changeSlider(carouselObj);
  };

  // Botão "Previous"
  carouselObj.prevBtn.onclick = () => {
    carousel.classList.remove(`next-${type}`, `prev-${type}`);
    carousel.classList.add(`prev-${type}`);

    carouselObj.active = (carouselObj.active - 1 < 0) ? countItem - 1 : carouselObj.active - 1;

    changeSlider(carouselObj);
  };

  // Iniciar autoplay
  carouselObj.interval = setInterval(() => {
    carouselObj.nextBtn.click();
  }, 5000);

  // Configuração inicial
  changeSlider(carouselObj);
});



  