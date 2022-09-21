import {getAuth, signOut  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonSalir = document.getElementById("botonSalir")
botonSalir.addEventListener("click",function(evento){
   
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Adios.',
    showConfirmButton: false,
    timer: 2500
  })
  window.location.href="./tienda.html"
}).catch((error) => {
  // An error happened.
});

})