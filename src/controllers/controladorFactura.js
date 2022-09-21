let carrito=JSON.parse(localStorage.getItem("carrito"))
let factura=document.getElementById("factura")
let totalCompra=document.getElementById("totalCompra")
totalCompra.classList.add("m-5")
let bandera=true
let totalCalculado=0 
let totaldolar=3000



//compruebo el estado del carrito de compras
if(carrito==null){

    //poner el total en 0
    totalCompra.textContent="Total: $0"

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12", "col-md-4")

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src="../../assets/img/cartEmpty.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent=("Tu carrito está vacio")

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)

}else{
    //recorro el carrito
   carrito.forEach(function(producto){
    console.log(producto)
    
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center", "mt-5")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-5")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-3","border-end","align-self-center")
    
    let columna3=document.createElement("div")
    columna3.textContent="Subtotal"
    columna3.classList.add("col-12","col-md-3","align-self-center", "fs-1","text-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=producto.foto

    let nombre=document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=producto.nombre

    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center","text-white")
    descripcion.textContent=producto.descripcion

    let cantidad=document.createElement("h4")
    cantidad.classList.add("text-center","mt-5")
    cantidad.textContent="Cantidad "+producto.cantidad

    let precio=document.createElement("h4")
    precio.classList.add("text-center","mt-5")
    precio.textContent=producto.precio
    
    let subtotal=document.createElement("h3")
    subtotal.classList.add("fw-bold","text-center")
    
    let subtotalCalculado=producto.precio.split("$")[1]*producto.cantidad
    console.log(subtotalCalculado)
    subtotal.textContent="$"+subtotalCalculado

     //para calcular el total debo sumar los subtotales

     totalCalculado = totalCalculado + subtotalCalculado

     


    let botonLimpiar=document.getElementById("botonLimpiar")
    botonLimpiar.classList.add("m-5")
    botonLimpiar.addEventListener("click",function(evento){

        //limpio carrito de la memoria
        localStorage.removeItem("carrito")

        //recargar la pagina
        window.location.href="./resumendeCompra.html"

        //poner el total en 0
        totalCompra.textContent="Total: $0"
    })


    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    columna2.appendChild(descripcion)
    columna2.appendChild(precio)
    columna2.appendChild(cantidad)
    columna3.appendChild(subtotal)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    fila.appendChild(columna3)
    factura.appendChild(fila)

   })



   totalCompra.textContent="TOTAL COMPRA: "+totalCalculado



   let dolar=document.getElementById("dolar")
   dolar.classList.add("m-5")
   dolar.addEventListener("click",function(){
    let pesos = 4500
    let conversion = 0
    conversion = "PESOS $ "+ totaldolar *(pesos/1)
    dolar.textContent="PRECIO EN USD $ "
    
    if (bandera==true) {
        dolar.addEventListener("click",function(evento){
            totalCompra.textContent="USD $"+totaldolar
            dolar.textContent = "PRECIO EN PESOS"
        })
            bandera=!bandera
    } else {
        dolar.addEventListener("click",function(evento){
            totalCompra.textContent=conversion
            dolar.textContent = "PRECIO EN USD $ "
        })
            bandera=!bandera
        
    }
   })



}

