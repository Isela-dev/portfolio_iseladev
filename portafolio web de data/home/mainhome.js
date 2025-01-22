// Función que crea los meteoros (círculos)
function lines() {
    let sizeW = Math.random() * 22; // Tamaño aleatorio del meteorito
    let duration = Math.random() * 3; // Duración aleatoria de la animación
    let e = document.createElement("div");
    e.setAttribute("class", "circle"); // Clase que aplica la animación
    document.body.appendChild(e); // Añadir el meteorito al body
    e.style.width = 12 + sizeW + "px"; // Tamaño final del meteorito
    e.style.left = Math.random() * innerWidth + "px"; // Posición aleatoria
    e.style.animationDuration = 2 + duration + "s"; // Duración de la animación

    // Eliminar el meteorito después de que termina su animación
    setTimeout(function() {
        document.body.removeChild(e);
    }, 5000);
}

// Inicia la animación de meteoros de inmediato al cargar la página
setInterval(function() {
    lines();
}, 200);

// Agregar redirección al botón de Portafolio
document.getElementById('portfolioButton').addEventListener('click', function() {
    // Reemplaza la URL de abajo con la URL real de tu portafolio
    window.location.href = "https://tuportafolio.com"; // Cambia esto por la URL correcta
});
