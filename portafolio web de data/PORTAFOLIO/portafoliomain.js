
// Obtener elementos
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Añadir el evento de clic para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en el menú
    menu.classList.toggle('active');
});

// Opcional: Añadir carrusel automático (si deseas un movimiento de imágenes)
let currentIndex = 0;
const images = document.querySelectorAll('.portfolio-item .portfolio-img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.portfolio-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Iniciar el carrusel
setInterval(changeImage, 3000); // Cambia de imagen cada 3 segundos
