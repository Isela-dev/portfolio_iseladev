// Función que crea los meteoros (círculos)
function lines() {
    let sizeW = Math.random() * 22;
    let duration = Math.random() * 3;
    let e = document.createElement("div");
    e.setAttribute("class", "circle");
    document.body.appendChild(e);
    e.style.width = 12 + sizeW + "px";
    e.style.left = Math.random() * innerWidth + "px";
    e.style.animationDuration = 2 + duration + "s";

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
