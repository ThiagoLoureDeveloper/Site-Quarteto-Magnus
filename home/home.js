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

  