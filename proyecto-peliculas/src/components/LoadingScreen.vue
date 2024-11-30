<template>
  <div class="loading-screen">
    <img src="https://cdn.dribbble.com/users/4011649/screenshots/10677615/media/948d65ef147246f25e31d44b9a59e660.gif" alt="Cargando..."/>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
};
</script>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}
.loading-screen img {
  width: 600px;
  height: auto;
}
</style>
