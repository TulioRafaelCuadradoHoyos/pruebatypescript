var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var cliente = document.getElementById("cliente");
var password = document.getElementById("password");
var correo = document.getElementById("correo");
var informacion = document.getElementById("informacion");
formulario.addEventListener("submit", function (evento) {
    console.log(nombre.value + " " + apellido.value + " " + telefono.value + " " + cliente.value + " " + password.value + " " + correo.value);
    formulario.style.display = "none";
    informacion.style.display = "block";
    informacion.innerHTML = "GRACIAS POR PREFERIRNOS";
    informacion.style.color = "green";
    evento.preventDefault();
});
