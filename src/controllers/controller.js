//comentario de linea
/*comentario d
e bloque*/


//CREANDO VARIABLES

/*var es variable global
let es variable local

let nombreUsuario="james rodriguez"

if(5>2){
    let nombreUsuario="lucho diaz"
}

console.log(nombreUsuario)*/

//las constantes se declaran con mayuscucla sostenida y los let empiezan con minuscula y camelcase
//una cons solo se le puede poner el igual una vez de resto solo se llama


/*let nombreUsuario="james rodriguez"
const EDAD_USUARIO=33
let estaturaUsuario=1.62
let hinchaDelVerde=true

//una variable se declara una sola vez de resto se llama
nombreUsuario="simon"
console.log(nombreUsuario)


//

EDAD_USUARIO=20
console.log(EDAD_USUARIO)



//MERCANDO CON EL PROFE*/

let producto1 = "arroz"
let producto2 = "leche"
let producto3 = "huevo"
let producto4 = "carne de cerdo"
let producto5 = "pollo"
let producto6 = "galletas"
let producto7 = "panela"
let producto8 = "cafe"
let producto9 = "tapa roja"
let producto10 = "cerveza"
let producto11 = "tomate"
let producto12 = "papas"
let producto13 = "lechuga"
let producto14 = "frijoles"
let producto15 = "aceite"

//ARREGLOS DE DATOS
 //todos los arreglos se nombran en plural productos, estudiantes, cosas etc
//1. ARREGLO TRADICIONAL
let numeros = [1,2,8,9,45]
let nombres = ["juan", "catalina", "mario", "carlos"]
let contagios = [true,false,false,false, true]

//1.1 accediendo a todos los datos o elementos de un arreglo
console.log(numeros)

//1.2 accediendo a un solo elemento del arreglo
console.log(numeros[3])

//2.ARREGLOS ORIENTADOS A OBJETOS

let notas = Array(5,3.5,2.8,3.9,5)
console.log(notas)
console.log(notas[1])

//3. OBJETOS: VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS DE TIPOS DIFERENTES

let persona ={
    nombre:"juan jose",
    apellidos:["gallego","mesa"],
    edad:33,
    hinchaDelMejor: true,
}
//3.1 accediendo a todos los datos de un objeto
console.log(persona)

//3.2 accediendo a un atributo del objeto
console.log(persona.nombre)

//accediendo a un array dentro del objeto
console.log(persona.apellidos[0])

//la tienda es un arreglo de objetos, cada producto tiene dos fotos, cada producto es un objeto