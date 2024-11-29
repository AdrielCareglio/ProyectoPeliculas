<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="authenticate">
      <input v-model="username" placeholder="Usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    authenticate() {
      if (this.username === "123" && this.password === "123") {
        this.$emit("authenticated");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },
  },
};
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
  background-color:  rgb(156, 0, 0);
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color:  rgb(120, 0, 0);
}
</style>
