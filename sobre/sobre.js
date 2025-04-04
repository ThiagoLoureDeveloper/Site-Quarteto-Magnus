document.addEventListener("DOMContentLoaded", function () {
  var i = 1;
  var stop = 5; // Número de elementos

  setInterval(function () {
    if (i > stop) {
      return;
    }
    var element = document.getElementById("len" + i++);
    if (element) {
      element.classList.toggle("bounce");
    }
  }, 500);
});
// Seleciona os elementos
var drop = document.querySelectorAll(".drop");
var dropdown = document.querySelector(".dropdown");

// Adiciona o evento de mouseover
drop.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    dropdown.style.display = "block"; // Mostra o dropdown
    dropdown.style.transition = "all 0.3s"; // Suaviza a transição
  });
});

// Adiciona o evento de mouseleave
drop.forEach(function (element) {
  element.addEventListener("mouseleave", function () {
    dropdown.style.display = "none"; // Esconde o dropdown
    dropdown.style.transition = "all 0.3s"; // Suaviza a transição
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  footer.style.backgroundColor = "#222";
  footer.style.color = "#fff";
  footer.style.padding = "20px";
  footer.style.textAlign = "center";
  footer.style.fontFamily = "Arial, sans-serif";

  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon) => {
    icon.style.margin = "0 10px";
    icon.style.fontSize = "24px";
    icon.style.transition = "color 0.3s";
    icon.style.color = "#fff";
    icon.addEventListener("mouseover", function () {
      icon.style.color = icon.getAttribute("data-color");
    });
    icon.addEventListener("mouseout", function () {
      icon.style.color = "#fff";
    });
  });
});
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 30000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
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


