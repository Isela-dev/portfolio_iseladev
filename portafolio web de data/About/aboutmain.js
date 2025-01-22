// JavaScript para activar y desactivar el menú hamburguesa
document.getElementById("menuToggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});

// Obtener elementos
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Añadir el evento de clic para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en el menú
    menu.classList.toggle('active');
});
