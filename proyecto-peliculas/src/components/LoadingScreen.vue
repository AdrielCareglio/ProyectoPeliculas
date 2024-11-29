<template>
  <div class="loading-screen">
    <img src="https://i.pinimg.com/originals/82/20/4e/82204e9633c7a58a095b8dc07eb7d02b.gif" alt="Cargando..." />
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
