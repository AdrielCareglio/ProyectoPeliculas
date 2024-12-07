<template>
  <div class="login">
    <!-- Inicio de sesión -->
    <div v-if="currentView === 'login'">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="authenticate">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
        <p><a @click.prevent="switchToRegister" href="#">Regístrate aquí</a></p>
      </form>
    </div>

    <!-- Vista para mostrar información del usuario autenticado -->
    <div v-else-if="currentView === 'dashboard'">
      <h2>Bienvenido, {{ user?.email }}</h2>
      <button @click="logout">Cerrar sesión</button>
    </div>

    <!-- Cambio de vista a registro (RegisterForm) -->
    <div v-else-if="currentView === 'register'">
      <RegisterForm @switchToLogin="switchToLogin" />
    </div>

    <!-- Contemplacion de errores -->
    <div v-else>
      <p>Error inesperado. Intenta recargar la página.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue"; // importación de ref y emits para reactividad
import { useCurrentUser } from "vuefire"; // usuario actual
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; // métodos propios de Firebase
import RegisterForm from './RegisterForm.vue'; // unión con el componente de registro

// Emite eventos al componente padre
const emit = defineEmits(["authenticated", "loggedOut"]); // Se agrega "loggedOut" para manejar el cierre de sesión

/* Declaración de variables reactivas */
const email = ref(""); // email
const password = ref(""); // contraseña
const user = useCurrentUser(); // estado del usuario actual
const currentView = ref("login"); // control de la vista actual ('login', 'dashboard')

/* Autenticación del usuario en Firebase */
async function authenticate() {
  const auth = getAuth(); // inicializa la autenticación
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value); // verifica el usuario con Firebase
    alert("Inicio de sesión exitoso");
    emit("authenticated"); // emite el evento autenticado
    currentView.value = "dashboard"; // Cambia a la vista del dashboard
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    if (error.code === "auth/user-not-found") {
      alert("El usuario no existe. Por favor, verifica el email.");
    } else if (error.code === "auth/wrong-password") {
      alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    } else if (error.code === "auth/invalid-email") {
      alert("Email inválido. Por favor, introduce un email válido.");
    } else {
      alert("Ocurrió un error inesperado al iniciar sesión.");
    }
  }
}

/* Cierre de sesión del usuario actual */
async function logout() {
  const auth = getAuth(); // inicializa la autenticación
  try {
    await signOut(auth); // cierra la sesión
    alert("Has cerrado sesión");
    emit("loggedOut"); // Emite el evento para que el padre maneje el cierre de sesión
    currentView.value = "login"; // Cambia la vista al login
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    alert("Ocurrió un error inesperado al cerrar sesión.");
  }
}

/* Cambio a la vista de registro */
function switchToRegister() {
  currentView.value = "register"; // Cambia a la vista de registro
}

/* Cambiar a la vista de inicio de sesion (Login) */
function switchToLogin() {
  currentView.value = "login";
}
</script>

<style scoped>
/* Contenedor principal */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  color: white;
}

/* Formulario */
form {
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 10px;
}

/* Boton */
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
