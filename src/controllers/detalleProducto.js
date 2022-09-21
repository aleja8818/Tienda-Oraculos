console.log("hola compra")

//llamar a la memoria
let producto=JSON.parse(localStorage.getItem("producto"))
console.log(producto)
let carrito
if (JSON.parse(localStorage.getItem("carrito"))!=null) {
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
    }else{
        carrito=[]
    }
    
//creando carrrito
let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria)

//referenciar la imagen del producto
let foto=document.getElementById("imagenInfo")
foto.src=producto.foto

//nombre producto
let nombre =document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

//precio producto
let precio=document.getElementById("precioInfo")
precio.textContent=producto.precio

//descripcion
let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

//popularidad
let popularidad=document.getElementById("popularidadInfo")
popularidad.textContent=producto.popularidad

//pildora
let pildora =document.getElementById("pildora")

console.log(pildora.textContent)

//escucho el clic en el boton añadir al carrito
let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click",function(evento){
    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    
   

    //agregamos la cantidad al objeto producto
    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de productos
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito
})




