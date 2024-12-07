<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="authenticate">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"; // importado de ref para mantener la reactividad
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // importado de metodos propios de firebase

const email = ref(""); // variable del email
const password = ref(""); // variable de la contraseña

async function authenticate() {
  const auth = getAuth(); // instancia de autenticacion
  try {
    // Intenta autenticar al usuario en Firebase
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Inicio de sesión exitoso");
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Credenciales incorrectas");
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  color: white;
}

form {
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 10px 20px;
  background-color: rgb(156, 0, 0);
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: rgb(120, 0, 0);
}
</style>
