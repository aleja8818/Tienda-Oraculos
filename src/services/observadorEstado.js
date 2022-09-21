import {getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonSalir=document.getElementById("botonSalir")
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //..
    let usuario=document.getElementById("usuario")
    usuario.textContent=user.email
    botonSalir.classList.remove("d-none")

  } else {
    // User is signed out
    // ...
    botonSalir.classList.add("d-none")
  }
});