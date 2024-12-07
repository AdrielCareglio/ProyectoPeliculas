<template>
  <div class="login">
    <h2 v-if="!user">Iniciar Sesión</h2>
    <form v-if="!user" @submit.prevent="authenticate">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>

    <div v-else>
      <p>Bienvenido, {{ user.email }}</p>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"; // importación de ref para reactividad
import { useCurrentUser } from "vuefire"; // usuario actual
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; // metodos propios de Firebase

const email = ref(""); // variable del email
const password = ref(""); // variable para la contraseña
const user = useCurrentUser(); // ssuario actual

async function authenticate() {
  const auth = getAuth(); //autenticacion
  try {
    // verifica usuario con firebase
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Inicio de sesión exitoso");
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Credenciales incorrectas");
  }
}

//Incoporación de LogOut para cerrar la sesion del usuario actual
async function logout() {
  const auth = getAuth(); 
  try {
    await signOut(auth); 
    alert("Has cerrado sesión");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
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
