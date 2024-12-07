<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register"> <!--Formulario html que evita que la web se recargue al eviar el fomulario-->
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>

<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref(""); // variable para el email
const password = ref(""); // variable para la contraseña

async function register() {
  const auth = getAuth(); // instancia de autenticación
  try {
    // Registro del usuario en firebase 
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Usuario registrado con éxito");
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Error al registrar usuario: " + error.message);
  }
}
</script>

  