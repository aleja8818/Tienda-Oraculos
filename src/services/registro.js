import {getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")

botonRegistro.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let formulario=document.getElementById("formulario")



    console.log(email,password)

    const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Exito en el registro',
      showConfirmButton: false,
      timer: 2000
    })

    formulario.reset()
   

  })

  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorCode+errorMessage,
     
    })
  })

})