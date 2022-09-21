import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonLogueo=document.getElementById("botonLogueo")
botonLogueo.addEventListener("click",function(evento){

    evento.preventDefault()

    let logcorreo=document.getElementById("logcorreo").value
    let logpassword=document.getElementById("logpassword").value
    let logueo=document.getElementById("logueo")

    console.log("hola")


const auth = getAuth();
signInWithEmailAndPassword(auth, logcorreo, logpassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert("bienvenido")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("ups"+errorMessage)
  });

})
