
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7AQ5FFe4h5CFdo6CyB2IDFDkzMj5l47A",
  authDomain: "adrielpeliculas.firebaseapp.com",
  projectId: "adrielpeliculas",
  storageBucket: "adrielpeliculas.firebasestorage.app",
  messagingSenderId: "247923763712",
  appId: "1:247923763712:web:d5e98a4fdc8e340bcc86e5"
};

//Iniciado de app y exportado de la instancia firebaseApp para hacerlo accesible desde otros archivos
export const firebaseApp = initializeApp(firebaseConfig);