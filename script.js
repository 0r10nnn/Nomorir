let fontSize = 18; // Tamaño de fuente inicial
let siText = "Sí"; // Texto inicial del botón "Sí"
let noText = "No"; // Texto inicial del botón "No"

document.getElementById('noBtn').addEventListener('click', function() {
  fontSize += 4; // Incremento del tamaño de fuente
  document.getElementById('siBtn').style.fontSize = fontSize + 'px';
  // Cambiar texto de los botones
  document.getElementById('siBtn').textContent = "Nuuuuu"; // Cambiar texto del botón "Sí"
  document.getElementById('noBtn').textContent = "Sigo queriendo";
  document.getElementById('siBtn').textContent = "Morir wakala :)"; // Cambiar texto del botón "Sí"
  document.getElementById('noBtn').textContent = "Vivir wakala x_x";
});

document.getElementById('siBtn').addEventListener('click', function() {
  window.location.href = "yupiii.html";
});
