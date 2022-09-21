//pasos para controlar etiquetas desde javascript
//1.controlando el contenido
let etiquetaTitulo = document.getElementById("titulo")

//1.1 manipulando el texto de la etiqueta(elemento) cambia el texto que esta en la etiqueta
etiquetaTitulo.textContent="bebecito emoxito"

//1.2 manipulando el src(la fuente)
let etiquetaImagen=document.getElementById("foto")
etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasuraamc.appspot.com/o/angeles.jpg?alt=media&token=57086443-85e5-4852-98f6-037d00409767"


//2. controlando el diseño
let parrafo=document.getElementById("parrafo")
parrafo.textContent="Cuando tenía seis años, vi una vez una imagen magnífica en un libro sobre la Selva Virgen que se llamaba Historias Vividas. Representaba una serpiente boa que tragaba una fiera. He aquí la copia del dibujo."

//2.1 agregando un estilo(class)
//text-danger
parrafo.classList.add("text-danger","fs-1","text-center")

etiquetaImagen.classList.add("d-block","mx-auto")

//2.2 quitando un estilo
parrafo.classList.remove("text-danger")



