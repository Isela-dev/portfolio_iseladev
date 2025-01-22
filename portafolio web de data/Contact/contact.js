document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para hacer la validación o acción

    // Aquí puedes agregar la lógica para enviar los datos del formulario (usando AJAX, por ejemplo).
    alert('Formulario enviado correctamente');
});
