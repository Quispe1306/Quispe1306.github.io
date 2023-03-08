

function openSection(evt, sectionName) {
    // Oculta todas las secciones
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }

    // Muestra la sección correspondiente
    document.getElementById(sectionName).classList.add("active");

    // Cambia la clase "active" del botón correspondiente
    var buttons = document.getElementsByClassName("navbar")[0].getElementsByTagName("a");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
}

// función para enviar un mensaje de confirmación de envío
function enviarConfirmacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    alert("Gracias por contactarme, " + nombre + " " + apellido + "! Me pondré en contacto contigo lo antes posible.");
}

// agregar un evento de escucha al formulario
document.querySelector("form").addEventListener("submit", function(event) {
  // evitar que el formulario se envíe automáticamente
  event.preventDefault();
  // llamar a la función de confirmación de envío
  enviarConfirmacion();
  // enviar el formulario
  this.submit();
});