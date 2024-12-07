<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register"> <!--Formulario html que evita que la web se recargue al eviar el fomulario-->
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <a @click.prevent="emit('switchToLogin')" href="#">Inicia sesión</a></p>
    </div>
  </template>

<script setup>
import { ref, defineEmits } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const emit = defineEmits(["switchToLogin"]); //evento a emitir para conectarse con LoginForm

const email = ref(""); // variable para el email
const password = ref(""); // variable para la contraseña

async function register() {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Usuario registrado con éxito");
    emit("switchToLogin"); // vista a login
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    alert("Error: " + error.message);
  }
}



</script>
  