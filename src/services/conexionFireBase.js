
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAoq9n7aFK05IR5HdWur1qL3nUAmC2kj9U",
    authDomain: "tiendasuraamc.firebaseapp.com",
    projectId: "tiendasuraamc",
    storageBucket: "tiendasuraamc.appspot.com",
    messagingSenderId: "997189766397",
    appId: "1:997189766397:web:781107dc633661969c8294",
    measurementId: "G-TE4QP39E8B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
