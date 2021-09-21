let formulario=document.getElementById("formulario");




let nombre:any = document.getElementById("nombre");
let apellido:any = document.getElementById("apellido");
let telefono:any = document.getElementById("telefono");
let cliente:any = document.getElementById("cliente");
let password:any=document.getElementById("password");
let correo:any=document.getElementById("correo");
let informacion:any = document.getElementById("informacion");

formulario.addEventListener("submit",function (evento){

    console.log(`${nombre.value} ${apellido.value} ${telefono.value} ${cliente.value} ${password.value} ${correo.value}`);
    formulario.style.display="none";
    informacion.style.display="block";
    informacion.innerHTML="GRACIAS POR PREFERIRNOS";
    informacion.style.color="green";


    evento.preventDefault(); 
    
});

