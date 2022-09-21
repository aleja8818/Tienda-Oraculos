//
let etiquetaBoton=document.getElementById("boton")

//pasos para detectar eventos
etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo click")
    let titulo=document.getElementById("titulo")
    titulo.textContent="hola saludos cordiales"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="mentiras van a ganar"
    mensaje.classList.add("text-danger")
    let foto=document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendasuraamc.appspot.com/o/dario.jpeg?alt=media&token=bbb8c36a-5ce5-4589-9ebe-4d8c0e131c80"
    
})
